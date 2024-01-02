import styled from "styled-components";

export const TradeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  width: 100%;
  background-color: var(--background);
  padding: 1.4rem;
  height: 100%;

  gap: 1rem;
`;

export const Grid1 = styled.div`
  width: 60dvw;
  flex: 1;
`;

export const Grid2 = styled.div`
  width: 20dvw;
`;

export const Grid3 = styled.div`
  width: 60dvw;

  flex: 1;
`;

export const Grid4 = styled.div`
  width: 20dvw;
  min-height: 250px;
`;
