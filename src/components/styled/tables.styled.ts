import styled, { keyframes } from "styled-components";

export const Table = styled.table`
  width: 100%;
  font-size: 0.7rem;
  border-collapse: separate;
  border-spacing: 0px 5px;
`;

export const TableChildren = styled.table`
  width: 100%;
  font-size: 0.7rem;
  border-collapse: collapse;
`;
export const TableHeader = styled.th`
  text-align: left;
  border: none;
`;
export const TableHeaderDevices = styled.thead`
  background-color: var(--color-hover);

  & th {
    padding: 10px;
  }
`;

interface TableCell {
  color?: string;
  width?: string;
}

export const TableCell = styled.td<TableCell>`
  padding: 2px;
  text-align: left;
  border: none;
  color: ${(props) => props.color || "var(--color-text)"};
  width: ${(props) => props.width || ""};
  vertical-align: middle;
  border-top: 1px solid var(--color-aux);
  border-bottom: 1px solid var(--color-aux);
`;

export const TableRow = styled.tr`
  cursor: pointer;
  & svg {
    width: 20px;
  }

  & td {
    padding-left: 10px;
  }
  & td:first-child {
    border-left: 1px solid var(--color-aux);
  }
  & td:last-child {
    border-right: 1px solid var(--color-aux);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TableRowChildren = styled.tr`
  margin-bottom: 15px;
  animation: ${fadeIn} 0.2s ease-in-out;
  & svg {
    width: 20px;
  }

  & td {
    border: none;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

export const TableBodyChildren = styled.tbody`
  background-color: var(--color-hover);

  & td:first-child {
    text-align: center;
  }
  & td {
    text-align: left;
  }
`;

export const TableRowTrades = styled.tr`
  & td {
    border: none;
  }
`;
