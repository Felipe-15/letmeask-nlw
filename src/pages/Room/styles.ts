import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      height: 100vh;
      width: 100vw;
    `;
  }}
`;

export const Header = styled.header`
  ${({ theme }) => {
    return css`
      padding: ${theme.sizes.medium};
      border-bottom: 1px solid #e2e2e2;
    `;
  }}
`;

export const HeaderContent = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;

      max-width: 112rem;
      margin: 0 auto;
    `;
  }}
`;

export const Logo = styled.img`
  ${({ theme }) => {
    return css`
      max-height: ${theme.sizes.large};
    `;
  }}
`;

export const CodeRoom = styled.div`
  ${({ theme }) => {
    return css``;
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
      border-radius: 50%;

      padding: ${theme.sizes.tiny} ${theme.sizes.small};
      color: #fff;
      font-weight: 500;
    `;
  }}
`;

export const Form = styled.form`
  ${({ theme }) => {
    return css``;
  }}
`;

export const TextArea = styled.textarea`
  ${({ theme }) => {
    return css`
      min-height: 13rem;
      width: 100%;

      padding: ${theme.sizes.small};

      border: none;
      border-radius: ${theme.sizes.tiny};

      background: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

      resize: vertical;
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
      text-decoration: underline;
      font-size: ${theme.sizes.xsmall};
    `;
  }}
`;
