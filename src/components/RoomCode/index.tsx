import {
  Container,
  IconContainer,
  CopyIcon,
  CopiedContainer,
  Copied,
  Code,
} from "./styles";

import copyImg from "../../images/copy.svg";
import { useState } from "react";

type RoomCodeProps = {
  code: string;
  isAdmin?: boolean;
};

const RoomCode = (props: RoomCodeProps) => {
  const [copyAnimation, setCopyAnimation] = useState(false);

  const copyRoomCodeToClipboard = () => {
    setCopyAnimation(true);
    setTimeout(() => setCopyAnimation(false), 1000);

    navigator.clipboard.writeText(props.code);
  };

  return (
    <Container
      animation={copyAnimation && window.innerHeight > 480}
      admin={props.isAdmin}
      onClick={copyRoomCodeToClipboard}
    >
      <IconContainer>
        <CopyIcon src={copyImg} alt="Copiar código da sala" />
      </IconContainer>
      <CopiedContainer animation={copyAnimation}>
        <Copied animation={copyAnimation}>Código copiado!</Copied>
      </CopiedContainer>
      <Code animation={copyAnimation}>Sala #{props.code}</Code>
    </Container>
  );
};

export default RoomCode;
