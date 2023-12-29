import { BoxColumn } from "../../../../components/styled/box.styled.ts";
import { Button } from "../../../../components/styled/button.styled.ts";
import { Input } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";

export default function DisableWhitedraw() {
  return (
    <>
      <h3>Cancel disabling process</h3>
      <BoxColumn align="start">
        <BoxColumn align="start" gap="0px">
          <label>Password</label>
          <Input />
        </BoxColumn>

        <BoxColumn gap="0px" align="start">
          <label>Google 2-FA Verification code</label>
          <Input />
        </BoxColumn>
      </BoxColumn>
      <ModalActions>
        <Button variant="outlined">Exit</Button>
        <Button variant="full" color="var(--color-sell)">
          Cancel
        </Button>
      </ModalActions>
    </>
  );
}
