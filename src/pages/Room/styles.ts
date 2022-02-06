import styled, { css } from "styled-components";

interface LikeButtonProps {
  liked?: boolean;
}

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      height: 100vh;
      width: 100vw;

      overflow-x: hidden;

      ${theme.media.tablet} {
        header {
          padding: ${theme.sizes.small} ${theme.sizes.medium};
        }

        main {
          padding: 0 ${theme.sizes.medium};
        }
      }
    `;
  }}
`;

export const Header = styled.header`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      padding: ${theme.sizes.small};
      border-bottom: 1px solid #e2e2e2;
    `;
  }}
`;

export const HeaderContent = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;

      max-width: 112rem;
      margin: 0 auto;
    `;
  }}
`;

export const Logo = styled.img`
  ${({ theme }) => {
    return css`
      max-height: ${theme.sizes.xlarge};

      cursor: pointer;
    `;
  }}
`;

export const Main = styled.main`
  ${({ theme }) => {
    return css`
      max-width: 80rem;
      margin: 0 auto;
    `;
  }}
`;

export const MainHeader = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      margin: ${theme.sizes.big} 0 ${theme.sizes.medium};
    `;
  }}
`;

export const Title = styled.h1`
  ${({ theme }) => {
    return css`
      font-family: "Poppins", sans-serif;
      font-size: ${theme.sizes.medium};
      color: ${theme.colors.content};
    `;
  }}
`;

export const Questions = styled.span`
  ${({ theme }) => {
    return css`
      margin-left: ${theme.sizes.small};
      background: #e559f9;
      border-radius: 9999px;

      padding: ${theme.sizes.tiny} ${theme.sizes.small};
      color: #fff;
      font-weight: 500;
    `;
  }}
`;

export const Form = styled.form`
  ${({ theme }) => {
    return css`
      margin-bottom: ${theme.sizes.large};
    `;
  }}
`;

export const TextArea = styled.textarea`
  ${({ theme }) => {
    return css`
      min-height: 13rem;
      width: 100%;
      font-family: "Roboto", sans-serif;
      font-size: ${theme.sizes.small};

      padding: ${theme.sizes.small};

      border: none;
      border-radius: ${theme.sizes.tiny};

      background: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

      resize: vertical;
    `;
  }}
`;

export const Loading = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: ${theme.sizes.big};
      width: ${theme.sizes.big};

      border-radius: 9999px;
      border: 4px solid rgba(255, 255, 255, 0.4);
      border-top-color: #f2f2f2;

      animation: loading 1s linear infinite;

      @keyframes loading {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }
    `;
  }}
`;

export const FormFooter = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: ${theme.sizes.small};
    `;
  }}
`;

export const UserContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
    `;
  }}
`;

export const UserAvatar = styled.img`
  ${({ theme }) => {
    return css`
      height: ${theme.sizes.big};
      width: ${theme.sizes.big};

      border-radius: 50%;
    `;
  }}
`;

export const Username = styled.span`
  ${({ theme }) => {
    return css`
      margin-left: ${theme.sizes.tiny};
      color: ${theme.colors.content};
      font-weight: 500;
      font-size: 1.4rem;
    `;
  }}
`;

export const Closed = styled.h2`
  ${({ theme }) => {
    return css`
      font-size: ${theme.sizes.xbig};
      color: ${theme.colors.content};

      margin-bottom: ${theme.sizes.big};

      ${theme.media.mobile} {
        font-size: ${theme.sizes.big};
      }
    `;
  }}
`;

export const Emphasis = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.red};
    `;
  }}
`;

export const LikeButton = styled.button<LikeButtonProps>`
  ${({ theme, liked }) => {
    return css`
      display: flex;
      align-items: flex-end;
      justify-content: center;

      background: transparent;
      border: none;

      color: ${theme.colors.lightGray};

      cursor: pointer;

      & svg {
        margin-left: ${theme.sizes.tiny};
      }

      ${liked
        ? () => css`
            color: ${theme.colors.secondary};

            & svg path {
              stroke: ${theme.colors.secondary};
            }
          `
        : ""}

      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.7);
      }
    `;
  }}
`;

export const Likes = styled.span`
  ${({ theme }) => {
    return css``;
  }}
`;

export const RedirectText = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.sizes.xsmall};
      color: ${theme.colors.lightGray};
      font-weight: 500;
    `;
  }}
`;

export const LoginButton = styled.button`
  ${({ theme }) => {
    return css`
      background: transparent;
      border: none;

      color: ${theme.colors.secondary};
      font-size: ${theme.sizes.xsmall};
      text-decoration: underline;

      cursor: pointer;
    `;
  }}
`;

export const QuestionsList = styled.div`
  ${({ theme }) => {
    return css``;
  }}
`;
