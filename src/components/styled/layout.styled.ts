import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.4rem;
  background-color: var(--paper);
  height: 100svh;

  & h1 {
    font-size: 1.2rem;
    font-weight: 600;
  }
  & h2 {
    font-size: 0.8rem;
    font-weight: 400;
  }

  & h3 {
    font-size: 0.9rem;
    font-weight: 600;
  }
  & p {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--color-text-secoundary);
  }

  & span {
    margin-left: 1rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--color-text-secoundary);
  }
`;
