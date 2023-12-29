import { BoxColumn } from "../../../../components/styled/box.styled.ts";
import { Button } from "../../../../components/styled/button.styled.ts";
import { Input } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";
import QRCodeGenerator from "../CodeQR.tsx";

export default function EnableGoogleAuth() {
  return (
    <>
      <h3>Google Authentication</h3>
      <BoxColumn align="start">
        <p>
          Please download Google Authentication on your mobile phone and scan the QR. Then provide code to enable authentication in your
          account.
        </p>

        <BoxColumn gap="0px" align="start">
          <label>QR</label>
          <QRCodeGenerator />
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <label>Code</label>
          <Input />
        </BoxColumn>
      </BoxColumn>
      <ModalActions>
        <Button variant="outlined">Cancel</Button>
        <Button variant="full">Submit</Button>
      </ModalActions>
    </>
  );
}
