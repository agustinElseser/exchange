import styled from "styled-components";

interface InputProps {
  color?: string;
  bgcolor?: string;
  error?: boolean;
}

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => (props.error ? "red" : props.color || "var(--color-aux)")};
  border-radius: 3px;
  transition: all 0.2s;
  animation-duration: 2s;
`;
export const InputMarket = styled.input<InputProps>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => props.color || "var(--color-aux)"};
  border-radius: 3px;
  transition: all 0.2s;
  animation-duration: 2s;
  text-align: start;
  padding-right: 60px;
  text-align: end;
`;

export const InputWithIcon = styled.input<InputProps>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => (props.error ? "red" : props.color || "var(--color-aux)")};
  border-radius: 3px;
  transition: all 0.2s;
  animation-duration: 2s;
  text-align: start;
  padding-right: 50px;
`;

export const IconInput = styled.svg`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
export const TextInput = styled.h2`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`;
