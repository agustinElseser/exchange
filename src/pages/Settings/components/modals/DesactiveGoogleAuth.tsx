import { BoxColumn, BoxRow } from "../../../../components/styled/box.styled";
import { Button } from "../../../../components/styled/button.styled.ts";
import { Input } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";
import { TextModal } from "../../../../components/styled/settings.styled.ts";
import { HelpIcon } from "../../../../components/svg/HelpIcon";

const DesactiveGoogleAuth = () => {
  return (
    <>
      <h3>Desactive Google Authenticator</h3>
      <BoxColumn align="start">
        <BoxColumn gap="0px" align="start">
          <h6>WARNING</h6>
          <p>We strongly recommend to keep Google Authenticator activated in order to prevent malicious attacks.</p>
        </BoxColumn>
        <BoxColumn gap="0px">
          <BoxRow justify="space-between">
            <label>SMS Verification code</label>
            <TextModal>Get code</TextModal>
          </BoxRow>
          <Input />
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <BoxRow justify="space-between">
            <label>Email Verification code</label>
            <TextModal>Get code</TextModal>
          </BoxRow>
          <Input />
          <BoxRow justify="start" gap="3px">
            <HelpIcon />
            <p>Enter the 6 digit code received by exam***@gmail.com</p>
          </BoxRow>
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <label>Google 2-FA Verification code</label>
          <Input />
        </BoxColumn>
      </BoxColumn>
      <ModalActions>
        <Button variant="outlined">Cancel</Button>
        <Button variant="full" color="var(--color-sell)">
          Desactivate
        </Button>
      </ModalActions>
    </>
  );
};
export default DesactiveGoogleAuth;
