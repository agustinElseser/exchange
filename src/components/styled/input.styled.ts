import styled from "styled-components";

interface InputProps {
  color?: string;
  bgcolor?: string;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => props.color || "var(--color-aux)"};
  border-radius: 3px;
  transition: all 0.2s;
  animation-duration: 2s;
  text-align: end;
`;
