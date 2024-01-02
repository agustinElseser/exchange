import styled, { keyframes } from "styled-components";

const moving = keyframes`
  0% {
    transform: translateX(-20%);
  }
  100% {
    transform: translateX(-1000000%);
  }
`;

export const MarketContainer = styled.div`
  display: flex;
  overflow: hidden;
  gap: 20px;
  white-space: nowrap;
  padding: 10px;
  height: 35px;
`;

export const DataCoin = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  min-width: 200px;
  color: var(--color-text-secoundary);
  & svg {
    width: 0.75rem;
  }
  animation: ${moving} 200000s linear infinite;
`;

interface VariationProp {
  color?: string;
}
export const Variation = styled.p<VariationProp>`
  font-size: 0.6rem;
  color: ${(props) => `${props.color} !important ` || "var(--color-buy)"};
`;
