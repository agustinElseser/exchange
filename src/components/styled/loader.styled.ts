import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
  0% {
    height: 15px;
  }

  40% {
    height: 30px;
  }

  100% {
    height: 15px;
  }
`;

export const LoaderRectangle = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 3px;
`;

export const Rectangle = styled.div`
  width: 10px;
  height: 16px;
  animation: 0.9s ease-in-out infinite;
  background: var(--color-info);

  &:nth-child(1) {
    animation-name: ${loaderAnimation};
    animation-delay: 1s;
  }

  &:nth-child(2) {
    animation-name: ${loaderAnimation};
    animation-delay: 1.1s;
  }

  &:nth-child(3) {
    animation-name: ${loaderAnimation};
    animation-delay: 1.2s;
  }

  &:nth-child(4) {
    animation-name: ${loaderAnimation};
    animation-delay: 1.3s;
  }

  &:nth-child(5) {
    animation-name: ${loaderAnimation};
    animation-delay: 1.4s;
  }
`;
