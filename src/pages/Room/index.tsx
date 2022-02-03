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
  DeleteButton,
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
import { ref, push, remove } from "firebase/database";

import logoImg from "../../images/logo.svg";
import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";
import Question from "../../components/Question";
import DeleteQuestionModal from "../../components/DeleteQuestionModal";

type RoomParams = {
  id: string;
};

type ModalStates = [boolean, string];

const Room = () => {
  const navigate = useNavigate();
  const { id: roomId } = useParams<RoomParams>();
  const { user } = useAuth();

  const { title, questions } = useRoom(roomId ? roomId : "");

  const [modal, setModal] = useState<ModalStates>([false, ""]);
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
    <Container noScroll={true}>
      <DeleteQuestionModal hiddenModal={true} />
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
            return (
              <Question key={question.id} {...question}>
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
                <DeleteButton>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5.99988H5H21"
                      stroke="#737380"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
                      stroke="#737380"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </DeleteButton>
              </Question>
            );
          })}
        </QuestionsList>
      </Main>
    </Container>
  );
};

export default Room;
