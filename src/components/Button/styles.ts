import styled, { css } from "styled-components";

export const Container = styled.button`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      height: ${theme.sizes.xlarge};

      padding: 0 ${theme.sizes.big};

      border: 0;
      border-radius: ${theme.sizes.tiny};
      background: ${theme.colors.secondary};
      color: #fff;

      font-weight: 500;

      cursor: pointer;

      transition: filter 0.2s ease-in-out;

      &:not(:disabled):hover {
        filter: brightness(0.9);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `;
  }}
`;
