import styled, { css } from "styled-components";

export const Container = styled.button`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      height: ${theme.sizes.large};
      overflow: hidden;

      border-radius: ${theme.sizes.tiny};
      background: #fff;
      border: 1px solid ${theme.colors.secondary};

      cursor: pointer;

      transition: filter, background-color 0.2s ease-in-out;

      &:hover {
        filter: brightness(1);
        background-color: #fafafa;
      }

      &:hover > div {
        filter: brightness(1.1);
      }
    `;
  }}
`;

export const IconContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      background: ${theme.colors.secondary};
      padding: 0 ${theme.sizes.xsmall};

      transition: filter 0.2s ease-in-out;
    `;
  }}
`;

export const CopyIcon = styled.img`
  ${({ theme }) => {
    return css``;
  }}
`;
export const Code = styled.span`
  ${({ theme }) => {
    return css`
      display: block;
      align-self: center;
      flex: 1;

      width: 23rem;

      padding: 0 ${theme.sizes.small} 0 ${theme.sizes.xsmall};

      font-size: 1.4rem;
      font-weight: 500;

      overflow: hidden;

      word-wrap: nowrap;
      white-space: nowrap;
    `;
  }}
`;
