import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.7rem;
`;

export const TableHeader = styled.th`
  text-align: left;
  border: none;
`;

interface TableCell {
  color?: string;
}

export const TableCell = styled.td<TableCell>`
  padding: 2px;
  text-align: left;
  border: none;
  color: ${(props) => props.color || "var(--color-text)"};
`;

export const TableRow = styled.tr``;
