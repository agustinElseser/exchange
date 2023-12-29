import styled from "styled-components";

interface ButtonProps {
  color?: string;
  variant?: "outlined" | "full";
  width?: string;
}
export const Button = styled.button<ButtonProps>`
  min-width: fit-content;
  width: ${(props) => props.width || "100px"};
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: Arial, sans-serif;
  letter-spacing: 0.03rem;
  color: var(--color-text-primary);
  background-color: ${(props) => (props.variant === "full" ? props.color ?? "var(--color-buy)" : "transparent")};
  border: 2px solid ${(props) => props.color || "var(--color-buy)"};
  border-radius: 4px;
  transition: all 0.2s;
  animation-duration: 2s;
  cursor: pointer;

  &:hover:not(:disabled) {
    color: ${(props) => (props.variant === "full" ? "white" : "var(--color-sell)")};
    border: 2px solid ${(props) => (props.variant === "outlined" ? "var(--color-sell)" : "transparent")};
    border-radius: 3px;
  }
  &:disabled {
    cursor: default;
  }
`;

export const ButtonClose = styled.button<ButtonProps>`
  position: absolute;
  align-self: end;
  min-width: fit-content;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: Helvetica, sans-serif;
  color: var(--color-text-primary);
  transition: all 0.2s;
  animation-duration: 2s;
  cursor: pointer;

  &:hover:not(:disabled) {
    color: var(--color-sell);
  }
  &:disabled {
    color: var(--color-aux);
    cursor: default;
  }
`;
