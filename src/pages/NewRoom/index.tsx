import { FormEvent, useContext, useState } from "react";
import { database } from "../../services/firebase";
import { push, ref } from "firebase/database";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import {
  Container,
  Aside,
  Illustration,
  Title,
  Text,
  Main,
  AuthContainer,
  Logo,
  Form,
  InputCodeRoom,
  TogglerContainer,
} from "../Home/styles";

import { Subtitle, ChangeScreen } from "./styles";

import illustrationImg from "../../images/illustration.svg";
import logoImg from "../../images/logo.svg";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { DarkThemeContext } from "../../contexts/DarkThemeContext";
import DarkThemeToggler from "../../components/DarkThemeToggler";

const NewRoom = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isDark } = useContext(DarkThemeContext);

  const [roomName, setRoomName] = useState("");

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (!roomName.trim()) {
      return;
    }

    const refResult = await push(ref(database, "rooms"), {
      title: roomName,
      authorId: user?.id,
    });

    navigate(`/admin/rooms/${refResult.key}`);
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
          <Logo src={logoImg} alt="Let Me Ask" />
          <Subtitle>Criar uma nova sala</Subtitle>
          <Form onSubmit={handleCreateRoom}>
            <InputCodeRoom
              placeholder="Nome da sala"
              value={roomName}
              onChange={(event) => setRoomName(event.target.value)}
            />
            <Button type="submit">Criar sala</Button>
          </Form>
          <ChangeScreen>
            Quer entrar em uma sala já existente?{" "}
            <Link to="/">Clique aqui</Link>!
          </ChangeScreen>
        </AuthContainer>
      </Main>
    </Container>
  );
};

export default NewRoom;
