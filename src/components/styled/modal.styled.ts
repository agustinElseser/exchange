import styled from "styled-components";

interface ModalProps {
  open: boolean;
}

export const ModalWrapper = styled.div<ModalProps>`
  display: ${(props) => (props.open ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  background: var(--background);
  padding: 1.4rem;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  & label {
    font-size: 0.7rem;
    color: var(--color-text-primary);
    margin-bottom: 2px;
  }

  & button {
    font-size: 0.7rem;
    margin-bottom: 2px;
  }

  & h3 {
    margin-bottom: 20px;
  }
  & h6 {
    font-size: 0.75rem;
    color: var(--color-sell);
  }
  & p {
    margin-top: 2px;
    font-size: 0.65rem;
  }
`;

export const ModalActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
