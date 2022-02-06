import styled, { css } from "styled-components";

interface SwitchProps {
  enabled: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SwitchContainer = styled.div<SwitchProps>`
  ${({ theme, enabled }) => {
    return css`
      position: relative;

      width: ${theme.sizes.huge};
      height: ${theme.sizes.medium};

      border-radius: 9999px;

      cursor: pointer;

      margin-right: ${theme.sizes.xsmall};

      ${enabled
        ? () => css`
            background: ${theme.colors.secondary};

            div {
              border: 2px solid ${theme.colors.secondary};

              box-shadow: -4px 1px 4px rgba(0, 0, 0, 0.1);
              transform: translateX(40px);
            }

            span {
              color: ${theme.colors.content};
            }
          `
        : () => css`
            background: #f1f1f1;

            div {
              border: 2px solid #f1f1f1;
              box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.1);
            }

            span {
              color: #f1f1f1;
            }
          `};
    `;
  }}
`;

export const Switcher = styled.div`
  ${({ theme }) => {
    return css`
      position: absolute;
      left: 0;

      height: 100%;
      width: 24px;

      border-radius: 50%;

      background: #f8f8f8;

      transition: transform 0.2s ease-in-out;
    `;
  }}
`;

export const Title = styled.span<SwitchProps>`
  ${({ theme, enabled }) => {
    return css`
      font-size: ${theme.sizes.small};
      font-weight: 700;

      color: ${enabled ? "#f1f1f1" : `${theme.colors.content}`};
    `;
  }}
`;
