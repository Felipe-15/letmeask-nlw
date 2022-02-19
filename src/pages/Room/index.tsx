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
  LikeButton,
  Likes,
  FormFooter,
  RedirectText,
  LoginButton,
  Closed,
  Emphasis,
  QuestionsList,
  RightHeaderContainer,
} from "./styles";

import { useNavigate, useParams } from "react-router";
import { FormEvent, useContext, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";

import { database } from "../../services/firebase";
import { ref, push, remove } from "firebase/database";

import logoImg from "../../images/logo.svg";
import logoDarkImg from "../../images/logo-darkTheme.svg";

import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";
import Question from "../../components/Question";
import DarkThemeToggler from "../../components/DarkThemeToggler";
import { DarkThemeContext } from "../../contexts/DarkThemeContext";

type RoomParams = {
  id: string;
};

const Room = () => {
  const navigate = useNavigate();
  const { id: roomId } = useParams<RoomParams>();
  const { user } = useAuth();

  const { title, closed, questions, exist } = useRoom(roomId ? roomId : "");
  const { isDark } = useContext(DarkThemeContext);

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

  const handleLikeQuestion = async (questionId: string, likeId: string) => {
    if (likeId) {
      const likeRef = ref(
        database,
        `rooms/${roomId}/questions/${questionId}/likes/${likeId}`
      );

      remove(likeRef);
    } else {
      const likeRef = ref(
        database,
        `rooms/${roomId}/questions/${questionId}/likes`
      );

      push(likeRef, {
        authorId: user?.id,
      });
    }
  };

  return (
    <Container darkTheme={isDark}>
      <Header>
        <HeaderContent>
          <Logo
            onClick={() => navigate("/")}
            src={isDark ? logoDarkImg : logoImg}
            alt="Let me Ask"
          />
          <RightHeaderContainer>
            {!closed && <RoomCode code={roomId ? roomId : ""} />}
            <DarkThemeToggler />
          </RightHeaderContainer>
        </HeaderContent>
      </Header>
      <Main>
        <MainHeader>
          <Title>Sala {title}</Title>
          {questions.length > 0 && (
            <Questions>
              {questions.length < 10000 ? questions.length : "+9999"} perguntas
            </Questions>
          )}
        </MainHeader>
        {!closed && (
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
        )}
        {closed && (
          <Closed>
            Essa sala já foi <Emphasis>fechada!</Emphasis>
          </Closed>
        )}
        <QuestionsList>
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}>
                {!question.isAnswered && !closed && (
                  <LikeButton
                    onClick={() =>
                      handleLikeQuestion(
                        question.id,
                        question.likeId ? question.likeId : ""
                      )
                    }
                    aria-label="Marcar como gostei"
                    liked={question.likeId ? true : false}
                  >
                    {!!question.likes && <Likes>{question.likes}</Likes>}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                        stroke="#737380"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </LikeButton>
                )}
              </Question>
            );
          })}
        </QuestionsList>
      </Main>
    </Container>
  );
};

export default Room;
