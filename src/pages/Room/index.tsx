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

import { useParams } from "react-router";
import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { database } from "../../services/firebase";
import { ref, push } from "firebase/database";

import logoImg from "../../images/logo.svg";
import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";

type RoomParams = {
  id: string;
};

const Room = () => {
  const params = useParams<RoomParams>();
  const { user } = useAuth();

  const [newQuestion, setNewQuestion] = useState("");

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (!user) {
      throw new Error("Você deve estar logado para enviar uma pergunta.");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    push(ref(database, `rooms/${params.id}/questions`), question);
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo src={logoImg} alt="Let me Ask" />
          <RoomCode code={params.id ? params.id : ""} />
        </HeaderContent>
      </Header>
      <Main>
        <MainHeader>
          <Title>Sala React</Title>
          <Questions>4 perguntas</Questions>
        </MainHeader>
        <Form onSubmit={handleSendQuestion}>
          <TextArea
            value={newQuestion}
            onChange={(event) => setNewQuestion(event.target.value)}
            placeholder="O que você quer perguntar?"
          />
          <FormFooter>
            <RedirectText>
              Para enviar uma pergunta,{" "}
              <LoginButton>faça seu login</LoginButton>.
            </RedirectText>
            <Button disabled={!user} type="submit">
              Enviar pergunta
            </Button>
          </FormFooter>
        </Form>
      </Main>
    </Container>
  );
};

export default Room;
