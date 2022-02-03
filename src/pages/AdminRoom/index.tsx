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
  QuestionsList,
} from "./styles";

import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";

import logoImg from "../../images/logo.svg";
import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";
import Question from "../../components/Question";

type RoomParams = {
  id: string;
};

const AdminRoom = () => {
  const navigate = useNavigate();
  const { id: roomId } = useParams<RoomParams>();
  const { user } = useAuth();

  const { title, questions } = useRoom(roomId ? roomId : "");

  const [newQuestion, setNewQuestion] = useState("");

  return (
    <Container>
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
            return <Question key={question.id} {...question} />;
          })}
        </QuestionsList>
      </Main>
    </Container>
  );
};

export default AdminRoom;
