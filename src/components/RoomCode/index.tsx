import { Container, CopyIcon, Code } from "./styles";

import copyImg from "../../images/copy.svg";

const RoomCode = () => {
  return (
    <Container>
      <CopyIcon src={copyImg} alt="Copiar código da sala" />
      <Code>Sala #123123442</Code>
    </Container>
  );
};

export default RoomCode;
