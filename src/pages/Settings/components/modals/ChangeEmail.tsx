import { BoxColumn } from "../../../../components/styled/box.styled";
import { Button } from "../../../../components/styled/button.styled.ts";
import { Input } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";

const ChangeEmail = () => {
  return (
    <>
      <h3>Change Email</h3>
      <BoxColumn align="start">
        <BoxColumn align="start" gap="0px">
          <label>Old email</label>
          <Input />
        </BoxColumn>
        <BoxColumn align="start" gap="0px">
          <label>New email</label>
          <Input />
        </BoxColumn>
      </BoxColumn>
      <ModalActions>
        <Button variant="outlined">Cancel</Button>
        <Button variant="full">Change email</Button>
      </ModalActions>
    </>
  );
};
export default ChangeEmail;
