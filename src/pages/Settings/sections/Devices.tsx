import { BoxColumn, BoxRow } from "../../../components/styled/box.styled";
import { useNavigate } from "react-router-dom";

import { TextModal } from "../../../components/styled/settings.styled.ts";

import TableDevice from "../components/Table.tsx";
import { loginData } from "../components/loginData.ts";
export default function Devices() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <BoxColumn align="start">
      <h1>Devices Management</h1>
      <TextModal onClick={goBack}>🡨 Back to settings</TextModal>
      <BoxRow justify="start">
        <p>Suspicious account activity?</p>
        <TextModal color="var(--color-sell)">Disable account</TextModal>
      </BoxRow>
      <TableDevice data={loginData} />
    </BoxColumn>
  );
}
