import { useContext, useState } from "react";
import { DarkThemeContext } from "../../contexts/DarkThemeContext";
import { Container, SwitchContainer, Icon, Switcher, Title } from "./styles";

import lightImg from "../../images/light.svg";
import darkImg from "../../images/dark.svg";

const DarkThemeToggler = () => {
  const { isDark, setIsDark } = useContext(DarkThemeContext);

  return (
    <Container>
      <SwitchContainer onClick={() => setIsDark(!isDark)} enabled={isDark}>
        <Icon src={darkImg} />
        <Icon src={lightImg} />
        <Switcher />
      </SwitchContainer>
    </Container>
  );
};

export default DarkThemeToggler;
