import styled from "styled-components";

export const TradeContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: repeat(3, 0.5fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 100%;
  background-color: var(--background);
  padding: 1.4rem;
  height: 100%;
`;

export const Grid1 = styled.div`
  grid-area: 1 / 1 / 3 / 2;
`;

export const Grid2 = styled.div`
  grid-area: 1 / 2 / 3 / 3;
`;

export const Grid3 = styled.div`
  grid-area: 3 / 1 / 4 / 2;
`;

export const Grid4 = styled.div`
  grid-area: 3 / 2 / 4 / 3;
`;
