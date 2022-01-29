import {
  Container,
  Aside,
  Illustration,
  Title,
  Text,
  Main,
  AuthContainer,
  Logo,
  CreateRoomGoogle,
  GoogleIcon,
  ButtonText,
  Separator,
  SepText,
  Form,
  InputCodeRoom,
  SubmitText,
} from "./styles";

import illustrationImg from "../../images/illustration.svg";
import logoImg from "../../images/logo.svg";
import googleImg from "../../images/google-icon.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();

  const handleCreateRoom = async () => {
    if (!user) {
      await signIn();
    }

    navigate("rooms/new");
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
      <Main>
        <AuthContainer>
          <Logo src={logoImg} alt="Let Me Ask" />
          <CreateRoomGoogle onClick={handleCreateRoom}>
            <GoogleIcon src={googleImg} alt="Logo do Google" />
            <ButtonText>Crie sua sala com o Google.</ButtonText>
          </CreateRoomGoogle>
          <Separator>
            <SepText>ou entre em uma sala</SepText>
          </Separator>
          <Form>
            <InputCodeRoom placeholder="Digite o código da sala" />
            <Button type="submit">
              <SubmitText>Entrar na sala</SubmitText>
            </Button>
          </Form>
        </AuthContainer>
      </Main>
    </Container>
  );
};

export default Home;
