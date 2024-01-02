import { BoxColumn, BoxRow } from "../../../components/styled/box.styled";
import { useNavigate } from "react-router-dom";

import { TextModal } from "../../../components/styled/settings.styled.ts";

import TableDevice from "../components/Table.tsx";
import { loginData } from "../components/loginData.ts";
import Modal from "../../../components/Modal.tsx";
import { useState } from "react";
import DisableAccount from "../components/modals/DisableAccount.tsx";
import Pagination from "../../../components/Pagination.tsx";
export default function Devices() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [open, setOpen] = useState(false);

  const handleDialog = (type: string) => {
    if (type.length > 0) {
      setOpen(!open);
    }
  };
  return (
    <>
      <BoxColumn align="start">
        <h1>Devices Management</h1>
        <TextModal onClick={goBack}>🡨 Back to settings</TextModal>
        <BoxRow justify="start">
          <p>Suspicious account activity?</p>
          <TextModal color="var(--color-sell)" onClick={() => handleDialog("disableAccount")}>
            Disable account
          </TextModal>
        </BoxRow>
        <TableDevice data={loginData} />
      </BoxColumn>
      {open && (
        <Modal open={open} onClose={handleDialog}>
          <DisableAccount onClose={handleDialog} />
        </Modal>
      )}
    </>
  );
}
