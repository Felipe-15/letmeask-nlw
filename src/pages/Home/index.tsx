import { FormEvent, useContext, useState } from "react";
import { ref, get, child } from "firebase/database";
import { database } from "../../services/firebase";

import {
  Container,
  Aside,
  Illustration,
  Title,
  Text,
  Main,
  TogglerContainer,
  AuthContainer,
  Logo,
  CreateRoomGoogle,
  GoogleIcon,
  ButtonText,
  Separator,
  SepText,
  Form,
  InputCodeRoom,
  WarnAlreadyClosed,
} from "./styles";

import illustrationImg from "../../images/illustration.svg";
import logoImg from "../../images/logo.svg";
import logoDarkImg from "../../images/logo-darkTheme.svg";
import googleImg from "../../images/google-icon.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import DarkThemeToggler from "../../components/DarkThemeToggler";
import { DarkThemeContext } from "../../contexts/DarkThemeContext";

type RoomData = {
  authorId: string;
  title: string;
  questions?: Object[];
  closedAt?: Date;
};

const Home = () => {
  const { user, signIn } = useAuth();
  const { isDark } = useContext(DarkThemeContext);
  const navigate = useNavigate();

  const [roomCode, setRoomCode] = useState("");
  const [closedRoom, setClosedRoom] = useState(false);

  const handleCreateRoom = async () => {
    if (!user) {
      await signIn();
    }

    navigate("rooms/new");
  };

  const handleJoinRoom = (event: FormEvent) => {
    event.preventDefault();

    if (!roomCode.trim()) {
      return;
    }
    const dbRef = ref(database);

    get(child(dbRef, `rooms/${roomCode}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data: RoomData = snapshot.val();

          if (data.closedAt) {
            setClosedRoom(true);

            setTimeout(() => setClosedRoom(false), 1500);

            return;
          }
          navigate(`rooms/${roomCode}`);
        } else {
          console.log("Nenhuma sala correspondente.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Aside>
        <Illustration
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <Title>Crie salas Q&amp;A ao-vivo</Title>
        <Text>Tire dúvidas da sua audiência em tempo real.</Text>
      </Aside>
      <Main darkTheme={isDark}>
        <TogglerContainer>
          <DarkThemeToggler />
        </TogglerContainer>
        <AuthContainer>
          <Logo src={isDark ? logoDarkImg : logoImg} alt="Let Me Ask" />
          <CreateRoomGoogle onClick={handleCreateRoom}>
            <GoogleIcon src={googleImg} alt="Logo do Google" />
            <ButtonText>Crie sua sala com o Google</ButtonText>
          </CreateRoomGoogle>
          <Separator>
            <SepText>ou entre em uma sala</SepText>
          </Separator>
          <Form onSubmit={handleJoinRoom}>
            <InputCodeRoom
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={(event) => setRoomCode(event.target.value)}
            />
            {closedRoom && (
              <WarnAlreadyClosed>Essa sala já foi fechada!</WarnAlreadyClosed>
            )}
            <Button type="submit">Entrar na sala</Button>
          </Form>
        </AuthContainer>
      </Main>
    </Container>
  );
};

export default Home;
