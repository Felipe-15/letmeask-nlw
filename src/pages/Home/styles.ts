import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: stretch;
      min-height: 100vh;

      ${theme.media.mobile} {
        flex-direction: column-reverse;
      }
    `;
  }}
`;

export const Aside = styled.aside`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 7;

      min-height: 100vh;

      background: ${theme.colors.secondary};
      color: #fff;

      padding: ${theme.sizes.giant} ${theme.sizes.xhuge};
    `;
  }}
`;

export const Illustration = styled.img`
  ${({ theme }) => {
    return css`
      max-width: 32rem;
    `;
  }}
`;

export const Title = styled.strong`
  ${({ theme }) => {
    return css`
      font: 700 ${theme.sizes.xbig} "Poppins", sans-serif;
      line-height: ${theme.sizes.large};

      margin-top: ${theme.sizes.small};
    `;
  }}
`;
export const Text = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.sizes.medium};
      line-height: ${theme.sizes.big};

      margin-top: ${theme.sizes.small};

      color: ${theme.colors.standard};
    `;
  }}
`;
export const Main = styled.main`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 8;
      min-height: 100vh;

      padding: ${theme.sizes.big};
    `;
  }}
`;
export const AuthContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: stretch;

      width: 100%;
      max-width: 32rem;

      text-align: center;
    `;
  }}
`;

export const Logo = styled.img`
  ${({ theme }) => {
    return css`
      align-self: center;
    `;
  }}
`;

export const CreateRoomGoogle = styled.button`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      height: ${theme.sizes.xlarge};

      border-radius: ${theme.sizes.tiny};
      border: 0;

      margin-top: ${theme.sizes.huge};

      font-weight: 500;

      background: ${theme.colors.red};
      color: #fff;

      cursor: pointer;

      transition: filter 0.2s ease-in-out;

      &:hover,
      &:active {
        filter: brightness(0.9);
      }
    `;
  }}
`;
export const GoogleIcon = styled.img`
  ${({ theme }) => {
    return css`
      margin-right: ${theme.sizes.tiny};
    `;
  }}
`;
export const ButtonText = styled.p`
  ${({ theme }) => {
    return css``;
  }}
`;

export const Separator = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      font-size: ${theme.sizes.small};
      color: ${theme.colors.gray};

      margin: ${theme.sizes.big} 0;

      &::before {
        content: "";
        flex: 1;
        height: 1px;
        background: ${theme.colors.gray};

        margin-right: ${theme.sizes.small};
      }

      &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: ${theme.colors.gray};
        margin-left: ${theme.sizes.small};
      }
    `;
  }}
`;

export const SepText = styled.p`
  ${({ theme }) => {
    return css``;
  }}
`;

export const Form = styled.form`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
    `;
  }}
`;

export const InputCodeRoom = styled.input`
  ${({ theme }) => {
    return css`
      height: ${theme.sizes.huge};
      border-radius: ${theme.sizes.tiny};

      padding: 0 ${theme.sizes.small};
      background: #fff;
      border: 1px solid ${theme.colors.gray};

      margin-bottom: ${theme.sizes.small};
    `;
  }}
`;

export const SubmitButton = styled.button`
  ${({ theme }) => {
    return css``;
  }}
`;

export const SubmitText = styled.p`
  ${({ theme }) => {
    return css``;
  }}
`;
