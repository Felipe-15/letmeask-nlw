import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;

      background: rgba(0, 0, 0, 0.7);

      animation: rise 0.2s linear;

      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      overflow: hidden;

      @keyframes rise {
        from {
          opacity: 0;
          top: 100%;
        }

        to {
          opacity: 1;
          top: 0;
        }
      }
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
    return css`
      display: flex;
      padding-top: ${theme.sizes.medium};
    `;
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
      display: flex;
      align-items: center;
      justify-content: center;

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

export const Loading = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: ${theme.sizes.medium};
      width: ${theme.sizes.medium};

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
