import { BoxColumn, BoxRow } from "../../../../components/styled/box.styled";
import { Button } from "../../../../components/styled/button.styled.ts";
import { Input } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";
import { TextModal } from "../../../../components/styled/settings.styled.ts";

const DisableAccount = () => {
  return (
    <>
      <h3>Disable my account</h3>
      <BoxColumn align="start">
        <BoxColumn gap="0px" align="start">
          <h6>WARNING</h6>
          <p>
            You can only disable account, for legalreasons we ca not delete your account. After you click disable button, you will receive
            email with next steps. You will be able to cancel during the process.
          </p>
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <BoxRow justify="space-between">
            <label>Email Verification code</label>
            <TextModal>Get code</TextModal>
          </BoxRow>
          <Input />
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <label>Insert old password</label>

          <Input />
        </BoxColumn>

        <BoxColumn gap="0px" align="start">
          <label>Google 2-FA Verification code</label>
          <Input />
        </BoxColumn>
      </BoxColumn>
      <ModalActions>
        <Button variant="outlined">Cancel</Button>
        <Button variant="full" color="var(--color-sell)">
          Disable
        </Button>
      </ModalActions>
    </>
  );
};
export default DisableAccount;
