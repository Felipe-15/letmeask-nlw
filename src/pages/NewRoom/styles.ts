import styled, { css } from "styled-components";

export const Subtitle = styled.h2`
  ${({ theme }) => {
    return css`
      font-size: ${theme.sizes.medium};

      margin: ${theme.sizes.medium} 0 ${theme.sizes.medium};
      font-family: "Poppins", sans-serif;
    `;
  }}
`;

export const ChangeScreen = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.sizes.xsmall};
      color: ${theme.colors.lightGray};

      margin-top: ${theme.sizes.small};
    `;
  }}
`;

export const RoomLink = styled.a`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.secondary};
    `;
  }}
`;
