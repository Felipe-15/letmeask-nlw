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
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { database } from "../../services/firebase";
import { ref, push, onValue } from "firebase/database";

import logoImg from "../../images/logo.svg";
import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";
import Question from "../../components/Question";

type RoomParams = {
  id: string;
};

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

const Room = () => {
  const navigate = useNavigate();
  const params = useParams<RoomParams>();
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
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

    await push(ref(database, `rooms/${params.id}/questions`), question);

    setIsSending(false);

    setNewQuestion("");
  };

  useEffect(() => {
    const unsubscribe = onValue(
      ref(database, `rooms/${params.id}`),
      (snapshot) => {
        const data: Question[] = [];
        const firebaseRawData = snapshot.val();
        if (firebaseRawData.questions) {
          const { questions: rawQuestions } = firebaseRawData;
          const firebaseQuestions = Object.entries(rawQuestions);

          firebaseQuestions.forEach(([key, value]: [string, any]) => {
            const question: Question = value;
            data.push({
              id: key,
              author: {
                name: question.author.name,
                avatar: question.author.avatar,
              },
              content: question.content,
              isHighlighted: question.isHighlighted,
              isAnswered: question.isAnswered,
            });
          });
          setQuestions(data);
        }
        const { title } = firebaseRawData;
        setTitle(title);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [params.id]);

  return (
    <Container>
      {console.log("Página carregou")}
      <Header>
        <HeaderContent>
          <Logo onClick={() => navigate("/")} src={logoImg} alt="Let me Ask" />
          <RoomCode code={params.id ? params.id : ""} />
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
          {questions.map((question, index) => {
            return <Question key={index} {...question} />;
          })}
        </QuestionsList>
      </Main>
    </Container>
  );
};

export default Room;
