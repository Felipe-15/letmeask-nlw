import {
  Container,
  Header,
  HeaderContent,
  Logo,
  Main,
  MainHeader,
  Title,
  Questions,
  Form,
  TextArea,
  Loading,
  UserContainer,
  UserAvatar,
  Username,
  FormFooter,
  RedirectText,
  LoginButton,
  QuestionsList,
} from "./styles";

import { useNavigate, useParams } from "react-router";
import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";

import { database } from "../../services/firebase";
import { ref, push } from "firebase/database";

import logoImg from "../../images/logo.svg";
import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";
import Question from "../../components/Question";

type RoomParams = {
  id: string;
};

const Room = () => {
  const navigate = useNavigate();
  const { id: roomId } = useParams<RoomParams>();
  const { user } = useAuth();

  const { title, questions } = useRoom(roomId ? roomId : "");

  const [newQuestion, setNewQuestion] = useState("");

  const [isSending, setIsSending] = useState(false);

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();

    setIsSending(true);

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

    await push(ref(database, `rooms/${roomId}/questions`), question);

    setIsSending(false);

    setNewQuestion("");
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo onClick={() => navigate("/")} src={logoImg} alt="Let me Ask" />
          <RoomCode code={roomId ? roomId : ""} />
        </HeaderContent>
      </Header>
      <Main>
        <MainHeader>
          <Title>Sala {title}</Title>
          {questions.length > 0 && (
            <Questions>{questions.length} perguntas</Questions>
          )}
        </MainHeader>
        <Form onSubmit={handleSendQuestion}>
          <TextArea
            value={newQuestion}
            onChange={(event) => setNewQuestion(event.target.value)}
            placeholder="O que você quer perguntar?"
          />
          <FormFooter>
            {user ? (
              <UserContainer>
                <UserAvatar src={user.avatar} alt={user.name} />
                <Username>{user.name}</Username>
              </UserContainer>
            ) : (
              <RedirectText>
                Para enviar uma pergunta,{" "}
                <LoginButton>faça seu login</LoginButton>.
              </RedirectText>
            )}
            <Button disabled={!user} type="submit">
              {!isSending ? "Enviar pergunta" : <Loading />}
            </Button>
          </FormFooter>
        </Form>
        <QuestionsList>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </QuestionsList>
      </Main>
    </Container>
  );
};

export default Room;
