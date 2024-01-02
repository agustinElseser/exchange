import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 20px;
  gap: 5px;
`;

interface PaginationProps {
  active?: boolean;
  disabled?: boolean;
}
export const PaginationButton = styled.button<PaginationProps>`
  color: ${({ active }) => (active ? "white" : "black")};
  background-color: ${({ active }) => (active ? "var(--color-info)" : "transparent")};
  border: 1px solid ${({ active }) => (active ? "var(--color-info)" : "#ddd")};
  padding: 3px 8px;
  text-decoration: none;
  transition: background-color 0.3s;
  font-size: 0.7rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ active }) => (active ? "var(--color-info)" : "#ddd")};
  }
`;

export const ItemsPerPageButton = styled.button`
  margin-left: 10px;
  padding: 3px;
  cursor: pointer;
`;
