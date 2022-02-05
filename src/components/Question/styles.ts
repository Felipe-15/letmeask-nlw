import styled, { css } from "styled-components";

interface QuestionProps {
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export const Container = styled.div<QuestionProps>`
  ${({ theme, isAnswered, isHighlighted }) => {
    return css`
      padding: ${theme.sizes.medium};

      background: #fefefe;
      border-radius: ${theme.sizes.tiny};
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

      ${isHighlighted && !isAnswered
        ? () => css`
            background: #f4f0ff;
            border: 1px solid ${theme.colors.secondary};

            span {
              color: ${theme.colors.content};
            }
          `
        : ""}

      ${isAnswered
        ? () => css`
            background: #dbdcdd;
          `
        : ""}

      & + & {
        margin-top: ${theme.sizes.tiny};
      }
    `;
  }}
`;

export const Content = styled.p`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.content};
    `;
  }}
`;

export const Footer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: ${theme.sizes.medium};
    `;
  }}
`;

export const AuthorContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
    `;
  }}
`;

export const AuthorAvatar = styled.img`
  ${({ theme }) => {
    return css`
      height: ${theme.sizes.big};
      width: ${theme.sizes.big};

      border-radius: 50%;
    `;
  }}
`;

export const AuthorName = styled.span`
  ${({ theme }) => {
    return css`
      margin-left: ${theme.sizes.tiny};
      color: ${theme.colors.lightGray};
      font-size: 1.4rem;
    `;
  }}
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }}
`;
