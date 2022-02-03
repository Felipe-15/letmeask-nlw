import styled, { css } from "styled-components";

interface ContainerProps {
  hiddenModal: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, hiddenModal }) => {
    return css`
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;

      ${hiddenModal
        ? () =>
            css`
              display: hidden;
            `
        : ""}

      background: rgba(0, 0, 0, 0.7);

      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      overflow: hidden;
    `;
  }}
`;

export const ModalContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 54rem;
      height: 36rem;

      border-radius: 2rem;

      background: #fff;

      & svg {
        height: ${theme.sizes.xlarge};
        width: ${theme.sizes.xlarge};
      }

      & svg path {
        stroke: ${theme.colors.red};
      }
    `;
  }}
`;

export const DeleteIcon = styled.img`
  ${({ theme }) => {
    return css``;
  }}
`;

export const Title = styled.h2`
  ${({ theme }) => {
    return css`
      font-family: "Poppins", sans-serif;
      font-weight: bold;

      margin: ${theme.sizes.medium} 0 ${theme.sizes.small};
    `;
  }}
`;

export const Text = styled.span`
  ${({ theme }) => {
    return css`
      font-weight: 500;
      font-size: ${theme.sizes.small};
      color: ${theme.colors.lightGray};

      margin-bottom: ${theme.sizes.medium};
    `;
  }}
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => {
    return css``;
  }}
`;

export const CancelButton = styled.button`
  ${({ theme }) => {
    return css`
      padding: ${theme.sizes.xsmall} ${theme.sizes.small};
      background: #e3e3e3;

      border: none;

      min-width: 14rem;

      font-size: ${theme.sizes.small};
      font-weight: 500;
      color: #777;

      border-radius: ${theme.sizes.tiny};

      margin-right: ${theme.sizes.small};

      cursor: pointer;

      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.95);
      }
    `;
  }}
`;

export const DeleteButton = styled.button`
  ${({ theme }) => {
    return css`
      padding: ${theme.sizes.xsmall} ${theme.sizes.small};
      background: ${theme.colors.red};

      border: none;
      min-width: 14rem;

      font-size: ${theme.sizes.small};
      font-weight: 500;
      color: #fff;

      border-radius: ${theme.sizes.tiny};

      margin-right: ${theme.sizes.small};

      cursor: pointer;

      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.95);
      }
    `;
  }}
`;
