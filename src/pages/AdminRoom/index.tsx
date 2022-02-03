import {
  Container,
  Header,
  HeaderContent,
  HeaderButtonsContainer,
  Logo,
  Main,
  MainHeader,
  Title,
  Questions,
  DeleteButton,
  QuestionsList,
} from "./styles";

import { database } from "../../services/firebase";
import { ref, remove } from "firebase/database";

import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";

import logoImg from "../../images/logo.svg";
import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";
import Question from "../../components/Question";
import DeleteQuestionModal from "../../components/DeleteQuestionModal";

type RoomParams = {
  id: string;
};

type ModalStates = [showModal: boolean, questionId: string];

const AdminRoom = () => {
  const navigate = useNavigate();
  const { id: roomId } = useParams<RoomParams>();
  const { user } = useAuth();

  const { title, questions } = useRoom(roomId ? roomId : "");

  const [newQuestion, setNewQuestion] = useState("");

  const [modal, setModal] = useState<ModalStates>([false, ""]);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteQuestion = async () => {
    setIsDeleting(true);
    const questionRef = ref(database, `rooms/${roomId}/questions/${modal[1]}`);
    await remove(questionRef);

    setIsDeleting(false);
    setModal([false, ""]);
  };

  return (
    <Container>
      {modal[0] && (
        <DeleteQuestionModal
          isDeleting={isDeleting}
          onKeyEscape={() => setModal([false, ""])}
          onCancel={() => setModal([false, ""])}
          onDelete={handleDeleteQuestion}
        />
      )}
      <Header>
        <HeaderContent>
          <Logo onClick={() => navigate("/")} src={logoImg} alt="Let me Ask" />
          <HeaderButtonsContainer>
            <RoomCode code={roomId ? roomId : ""} />
            <Button isOutlined>Encerrar sala</Button>
          </HeaderButtonsContainer>
        </HeaderContent>
      </Header>
      <Main>
        <MainHeader>
          <Title>Sala {title}</Title>
          {questions.length > 0 && (
            <Questions>{questions.length} perguntas</Questions>
          )}
        </MainHeader>
        <QuestionsList>
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}>
                <DeleteButton onClick={() => setModal([true, question.id])}>
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
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
                      stroke="#737380"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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

export default AdminRoom;
