import { useState } from "react";
import { BoxColumn, BoxRow } from "../../../../components/styled/box.styled";
import { Button } from "../../../../components/styled/button.styled.ts";
import { IconInput, Input, InputWithIcon, InputWrapper } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";
import { EyeIcon } from "../../../../components/svg/EyeIcon.tsx";
import { EyeOffIcon } from "../../../../components/svg/EyeOffIcon.tsx";
import { HelpIcon } from "../../../../components/svg/HelpIcon";

const ChangePassword = () => {
  const [showActPassword, setShowActPassword] = useState(false);
  return (
    <>
      <h3>Change sign-in password</h3>
      <BoxColumn align="start">
        <BoxColumn align="start" gap="0px">
          <label>Insert old password</label>
          <InputWrapper>
            <InputWithIcon type={showActPassword ? "text" : "password"} />
            <IconInput onClick={() => setShowActPassword(!showActPassword)}>{showActPassword ? <EyeIcon /> : <EyeOffIcon />}</IconInput>
          </InputWrapper>
        </BoxColumn>
        <BoxColumn align="start" gap="0px">
          <label>Insert new password</label>
          <Input />
        </BoxColumn>
        <BoxRow justify="start" align="start">
          <BoxColumn align="start" gap="0px">
            <BoxRow justify="start" gap="8px">
              <HelpIcon />
              <p>+8 characters</p>
            </BoxRow>
            <BoxRow justify="start" gap="8px">
              <HelpIcon />
              <p>Number(s)</p>
            </BoxRow>
          </BoxColumn>
          <BoxColumn align="start" gap="0px">
            <BoxRow justify="start" gap="8px">
              <HelpIcon />
              <p>Lowercase letter(s)</p>
            </BoxRow>
            <BoxRow justify="start" gap="8px">
              <HelpIcon />
              <p>Upercase letter(s)</p>
            </BoxRow>
          </BoxColumn>
        </BoxRow>
        <BoxColumn align="start" gap="0px">
          <label>Repeat new password</label>
          <Input />
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <label>Google 2-FA Verification code</label>
          <Input />
        </BoxColumn>
      </BoxColumn>
      <ModalActions>
        <Button variant="outlined">Cancel</Button>
        <Button variant="full">Submit</Button>
      </ModalActions>
    </>
  );
};
export default ChangePassword;
