import styled from "styled-components";

interface CardProps {
  bgcolor?: string;
}

export const Card = styled.div<CardProps>`
  width: 100%;
  padding: 10px;
  border: 1px solid ${(props) => props.bgcolor || "var(--color-aux)"};
  background-color: ${(props) => props.bgcolor || "transparent"};
  border-radius: 3px;
  height: 100%;
`;
