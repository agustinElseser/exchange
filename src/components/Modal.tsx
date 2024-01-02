import { ButtonClose } from "./styled/button.styled";
import { ModalContent, ModalWrapper } from "./styled/modal.styled";

interface Props {
  open: boolean;
  onClose: (type: string) => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: Props) {
  return (
    <ModalWrapper open={open}>
      <ModalContent>
        <ButtonClose onClick={() => onClose("close")}>X</ButtonClose>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
}
