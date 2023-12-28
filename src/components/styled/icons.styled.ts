import styled from "styled-components";

interface StyledSvgProps {
  color?: string;
}

export const StyledSvg = styled.svg<StyledSvgProps>`
  fill: ${(props) => props.color || "var(--color-text)"};
  width: 1.1rem;
`;
