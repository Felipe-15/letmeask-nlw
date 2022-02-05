import { Link } from "react-router-dom";
import { Container, Title, Text } from "./styles";

const PermissionDenied = () => {
  return (
    <Container>
      <Title>Ops, parece que essa sala foi criada por outra pessoa!</Title>
      <Text>
        Você não tem acesso de administrador nessa sala.{" "}
        <Link to="/">Voltar a Página Inicial?</Link>
      </Text>
    </Container>
  );
};

export default PermissionDenied;
