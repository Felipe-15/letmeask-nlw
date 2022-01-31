import { Link } from "react-router-dom";

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
  SubmitText,
} from "../Home/styles";

import { Subtitle, ChangeScreen, RoomLink } from "./styles";

import illustrationImg from "../../images/illustration.svg";
import logoImg from "../../images/logo.svg";
import Button from "../../components/Button";

const NewRoom = () => {
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
          <Subtitle>Criar uma nova sala</Subtitle>
          <Form>
            <InputCodeRoom placeholder="Nome da sala" />
            <Button type="submit">
              <SubmitText>Criar sala</SubmitText>
            </Button>
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
