import { useContext, useState } from "react";
import { DarkThemeContext } from "../../contexts/DarkThemeContext";
import { Container, SwitchContainer, Switcher, Title } from "./styles";

const DarkThemeToggler = () => {
  const { isDark, setIsDark } = useContext(DarkThemeContext);

  return (
    <Container>
      <SwitchContainer onClick={() => setIsDark(!isDark)} enabled={isDark}>
        <Switcher />
      </SwitchContainer>
      <Title enabled={isDark}>Tema escuro</Title>
    </Container>
  );
};

export default DarkThemeToggler;
