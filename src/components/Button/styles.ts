import styled, { css } from "styled-components";

interface ButtonProps {
  isOutlined: boolean;
}

export const Container = styled.button<ButtonProps>`
  ${({ theme, isOutlined }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      height: ${isOutlined ? theme.sizes.large : theme.sizes.xlarge};

      padding: 0 ${theme.sizes.big};

      border: ${isOutlined ? `1px solid ${theme.colors.secondary}` : "0"};
      border-radius: ${theme.sizes.tiny};
      background: ${isOutlined ? "#fff" : theme.colors.secondary};
      color: ${isOutlined ? theme.colors.secondary : "#fff"};

      font-weight: 500;

      cursor: pointer;

      transition: filter 0.2s ease-in-out;

      &:not(:disabled):hover,
      &:not(:disabled)&:active {
        ${isOutlined
          ? () =>
              css`
                filter: brightness(0.95);
              `
          : () =>
              css`
                filter: brightness(0.9);
              `};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `;
  }}
`;
