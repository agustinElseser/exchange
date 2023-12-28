import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 0.7rem;
  background-color: var(--background);
`;

export const NavItems = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  font-weight: 400;
  font-family: var(--text-primary);
  color: var(--color-text-primary);
  transition: all 0.2s;
  animation-duration: 2s;
  line-height: 20px;
  padding: 3px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-hover);
  }
`;
export const NavTitle = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 1rem;
  font-weight: 900;
  font-family: var(--text-primary);
  color: var(--color-text-primary);
  transition: all 0.3s;
  animation-duration: 2s;

  &:hover {
  }
`;

export const VerticalDivision = styled.div`
  border: 1px solid var(--color-aux);
  height: 1.5rem;
`;

export const MsgNotification = styled.div`
  background-color: var(--color-pink);
  border-radius: 5px;
  padding-inline: 6px;
  padding-block: 3px;
  font-weight: 700;
`;
