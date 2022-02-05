import styled, { css } from "styled-components";

interface RoomCodeProps {
  admin?: boolean;
  animation: boolean;
}

interface CopiedProps {
  animation: boolean;
}

export const Container = styled.button<RoomCodeProps>`
  ${({ theme, admin, animation }) => {
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

      ${!admin
        ? () => css`
            ${theme.media.mobile} {
              span {
                width: 14rem;
              }
            }
          `
        : ""}

      ${animation
        ? () => css`
            span::after {
              right: 0;
            }
          `
        : ""}

      ${admin
        ? () => css`
        ${theme.media.mobile} {
          position: absolute;
          bottom: ${theme.sizes.small};
          right: ${theme.sizes.small};

          span {
            width: 0;
            padding: 0;

            transition: width 0.3s ease-in-out;
          }

          div::after {
            content: "Copiar código";
            font-family: "Roboto", sans-serif;
            color: #fff;
            font-weight: 700;
            font-size: ${theme.sizes.xsmall};

            margin-left: ${theme.sizes.tiny};
          }
      `
        : ""}
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

      width: auto;

      background: ${theme.colors.secondary};
      padding: 0 ${theme.sizes.xsmall};

      transition: filter 0.2s ease-in-out;
      transition: width 0.3s ease-in-out;
    `;
  }}
`;

export const CopyIcon = styled.img`
  ${({ theme }) => {
    return css``;
  }}
`;
export const Code = styled.span<CopiedProps>`
  ${({ theme, animation }) => {
    return css`
      position: relative;
      display: block;
      align-self: center;
      flex: 1;

      z-index: 5;

      width: 23rem;

      padding: 0 ${theme.sizes.small} 0 ${theme.sizes.xsmall};

      font-size: 1.4rem;
      font-weight: 500;

      overflow: hidden;

      word-wrap: nowrap;
      white-space: nowrap;

      transition: width 0.3s ease-in-out;

      ${animation
        ? () => css`
            width: 0;
            padding: 0;
          `
        : ""}
    `;
  }}
`;

export const CopiedContainer = styled.div<CopiedProps>`
  ${({ theme, animation }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      overflow: hidden;

      height: 100%;

      width: 0;

      opacity: 0;

      background: ${theme.colors.secondary};

      ${animation
        ? () => css`
            transition: width 0.2s ease-in-out;
            opacity: 1;
            width: 12rem;

            padding-right: ${theme.sizes.tiny};
          `
        : ""}
    `;
  }}
`;
export const Copied = styled.span<CopiedProps>`
  ${({ theme }) => {
    return css`
      color: #fff;
      white-space: nowrap;

      font-size: ${theme.sizes.small};
    `;
  }}
`;
