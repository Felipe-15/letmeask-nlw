import styled, { css } from "styled-components";

interface OptionButtonProps {
  optionType: "answer" | "check" | "delete";
}

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      height: 100vh;
      width: 100vw;

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

export const HeaderButtonsContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      & button {
        margin-left: ${theme.sizes.small};
      }

      ${theme.media.tablet} {
        button:first-child {
          max-width: 18rem;
        }
      }
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

export const OptionButton = styled.button<OptionButtonProps>`
  ${({ theme, optionType }) => {
    return css`
      display: flex;
      align-items: flex-end;
      justify-content: center;

      background: transparent;
      border: none;

      color: ${theme.colors.lightGray};

      margin-left: ${theme.sizes.xsmall};

      cursor: pointer;

      svg path,
      svg circle {
        transition: stroke 0.2s ease-in-out;
      }

      &:hover svg path,
      &:hover svg circle {
        stroke: ${optionType === "answer"
          ? "#23CE6B"
          : optionType === "check"
          ? "#EFCB68"
          : theme.colors.red};
      }
    `;
  }}
`;

export const HighlightIcon = styled.img`
  ${({ theme }) => {
    return css``;
  }}
`;

export const AnswerIcon = styled.img`
  ${({ theme }) => {
    return css``;
  }}
`;

export const QuestionsList = styled.div`
  ${({ theme }) => {
    return css``;
  }}
`;

export const NoQuestions = styled.h2`
  ${({ theme }) => {
    return css`
      font-family: "Poppins", sans-serif;
      font-size: ${theme.sizes.big};

      color: ${theme.colors.content};
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

export const Loading = styled.h1`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.content};
      margin-top: ${theme.sizes.huge};
    `;
  }}
`;
