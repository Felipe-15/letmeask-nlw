import {
  Container,
  Header,
  HeaderContent,
  Logo,
  CodeRoom,
  Main,
  MainHeader,
  Title,
  Questions,
  Form,
  TextArea,
  FormFooter,
  RedirectText,
  LoginButton,
} from "./styles";

import logoImg from "../../images/logo.svg";
import Button from "../../components/Button";

const Room = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo src={logoImg} alt="Let me Ask" />
          <CodeRoom>Código</CodeRoom>
        </HeaderContent>
      </Header>
      <Main>
        <MainHeader>
          <Title>Sala React</Title>
          <Questions>4 perguntas</Questions>
        </MainHeader>
        <Form>
          <TextArea placeholder="O que você quer perguntar?" />
          <FormFooter>
            <RedirectText>
              Para enviar uma pergunta,{" "}
              <LoginButton>faça seu login</LoginButton>.
            </RedirectText>
            <Button type="submit">Enviar pergunta</Button>
          </FormFooter>
        </Form>
      </Main>
    </Container>
  );
};

export default Room;
