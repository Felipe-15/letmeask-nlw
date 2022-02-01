import { Container, IconContainer, CopyIcon, Code } from "./styles";

import copyImg from "../../images/copy.svg";

type RoomCodeProps = {
  code: string;
};

const RoomCode = (props: RoomCodeProps) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(props.code);
  };

  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <IconContainer>
        <CopyIcon src={copyImg} alt="Copiar código da sala" />
      </IconContainer>
      <Code>Sala #{props.code}</Code>
    </Container>
  );
};

export default RoomCode;
