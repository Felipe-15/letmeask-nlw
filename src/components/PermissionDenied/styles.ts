import styled, { css } from "styled-components";

interface DarkThemeProps {
  darkTheme: boolean;
}

export const Container = styled.div<DarkThemeProps>`
  ${({ theme, darkTheme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding-top: 16rem;

      ${darkTheme
        ? () => css`
            & h1 {
              color: #fff;
            }

            & span {
              color: #ddd;
            }
          `
        : ""}

      a {
        color: ${theme.colors.secondary};
        font-family: "Roboto", sans-serif;
        font-size: ${theme.sizes.medium};
      }

      ${theme.media.tablet} {
        span {
          padding: 0 ${theme.sizes.big};
          text-align: center;
        }
      }

      ${theme.media.mobile} {
        padding: ${theme.sizes.big};
        padding-top: 12rem;

        h1 {
          font-size: ${theme.sizes.big};
        }

        span {
          text-align: center;
          font-size: 2rem;
        }

        a {
          font-size: 2rem;
        }
      }
    `;
  }}
`;

export const Title = styled.h1`
  ${({ theme }) => {
    return css`
      font-family: "Poppins", sans-serif;
      font-size: ${theme.sizes.large};
      color: ${theme.colors.content};
      text-align: center;

      max-width: 70rem;
      margin-bottom: ${theme.sizes.medium};
    `;
  }}
`;
export const Text = styled.span`
  ${({ theme }) => {
    return css`
      font-family: "Roboto", sans-serif;
      color: #888;
      font-size: ${theme.sizes.medium};
    `;
  }}
`;
