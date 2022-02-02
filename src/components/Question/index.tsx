import {
  Container,
  Content,
  Footer,
  AuthorContainer,
  AuthorAvatar,
  AuthorName,
} from "./styles";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

const Question = (props: QuestionProps) => {
  return (
    <Container>
      {console.log("Questão carregou")}
      <Content>{props.content}</Content>
      <Footer>
        <AuthorContainer>
          <AuthorAvatar src={props.author.avatar} alt={props.author.name} />
          <AuthorName>{props.author.name}</AuthorName>
        </AuthorContainer>
      </Footer>
    </Container>
  );
};

export default Question;
