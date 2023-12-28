import styled from "styled-components";

interface BoxProps {
  p?: string;
  justify?: string;
  align?: string;
}

export const BoxColumn = styled.div<BoxProps>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: column;
  padding: ${(props) => props.p || 0};
  gap: 1rem;
`;

export const BoxRow = styled.div<BoxProps>`
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  padding: ${(props) => props.p || 0};
  gap: 1rem;
  align-items: ${(props) => props.align || "center"};
`;
export const DividerH = styled.div`
  border-bottom: 1px solid var(--color-aux);
  margin-bottom: 10px;
  margin-top: 10px;
`;

interface DividerVProps {
  height?: string;
}
export const DividerV = styled.div<DividerVProps>`
  border-left: 1px solid var(--color-aux);
  height: ${(props) => props.height || "40px"};
`;
