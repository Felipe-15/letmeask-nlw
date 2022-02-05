import { ReactNode } from "react";
import {
  Container,
  Content,
  Footer,
  AuthorContainer,
  AuthorAvatar,
  AuthorName,
  ButtonsContainer,
} from "./styles";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered?: boolean;
  isHighlighted?: boolean;
  children?: ReactNode;
};

const Question = (props: QuestionProps) => {
  return (
    <Container
      isAnswered={props.isAnswered}
      isHighlighted={props.isHighlighted}
    >
      <Content>{props.content}</Content>
      <Footer>
        <AuthorContainer>
          <AuthorAvatar src={props.author.avatar} alt={props.author.name} />
          <AuthorName>{props.author.name}</AuthorName>
        </AuthorContainer>
        <ButtonsContainer>{props.children}</ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default Question;
