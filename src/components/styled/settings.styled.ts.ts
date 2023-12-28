import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SettingsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 1.4rem;
  background-color: var(--background);
  padding: 1.4rem;
  height: 100%;
`;

export const TextLink = styled(NavLink)`
  width: fit-content;
  padding: 0.2rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--color-info);
  transition: all 0.2s;
  animation-duration: 2s;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-info);
    color: white;
    border-radius: 3px;
  }
`;

interface TextModalProps {
  color?: string;
}

export const TextModal = styled.button<TextModalProps>`
  width: fit-content;
  padding: 0.2rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${(props) => props.color || "var(--color-info)"};
  transition: all 0.2s;
  animation-duration: 2s;
  line-height: 20px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.color || "var(--color-info)"};
    color: white;
    border-radius: 3px;
  }
  &:disabled {
    color: var(--color-aux);
    cursor: default;
  }
`;
