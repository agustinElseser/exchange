import { useState } from "react";

import ChangeEmail from "../components/modals/ChangeEmail";
import TwoFactorAuth from "../components/modals/TwoFactorAuth";
import EnableSMSAuth from "../components/modals/EnableSMSAuth";
import ChangePassword from "../components/modals/ChangePassword";
import DisableAccount from "../components/modals/DisableAccount";
import DesactiveGoogleAuth from "../components/modals/DesactiveGoogleAuth";
import DesactiveSMSAuth from "../components/modals/DesactiveSMSAuth";
import DisableWhitedraw from "../components/modals/DisableWhitedraw";
import EnableGoogleAuth from "../components/modals/EnableGoogleAuth";
import { BoxColumn, BoxRow, DividerH } from "../../../components/styled/box.styled";
import { Card } from "../../../components/styled/card.styled";
import { TextLink, TextModal } from "../../../components/styled/settings.styled.ts";
import ToggleInput from "../../../components/ToggleInput.tsx";
import { VerifyIcon } from "../../../components/svg/VerifyIcon.tsx";
import Modal from "../../../components/Modal.tsx";
import Tooltip from "../../../components/Tooltip.tsx";

const modals = {
  emailVerification: <h2>Email Verification</h2>,
  email: <ChangeEmail />,
  FA: <TwoFactorAuth />,
  changePw: <ChangePassword />,
  enableGoogleAuth: <EnableGoogleAuth />,
  desactiveGoogle: <DesactiveGoogleAuth />,
  enableSMS: <EnableSMSAuth />,
  desactiveSMS: <DesactiveSMSAuth />,
  cancelProcess: <DisableWhitedraw />,
  disableAccount: <DisableAccount />,
  whitelist: <h2>Whitelist management</h2>,
};

export default function Settings() {
  const [open, setOpen] = useState(false);
  const [typeDialog, setTypeDialog] = useState("");

  const handleDialog = (type: string) => {
    if (type.length > 0) {
      setTypeDialog(type);
      setOpen(!open);
    }
  };

  return (
    <>
      <BoxColumn align="start">
        <h1>Settings</h1>
        <BoxRow align="start">
          <BoxColumn>
            <Card>
              <BoxRow justify="space-between">
                <h2>2FACTOR-AUTHENTICATION</h2>
                <TextModal>Set up</TextModal>
              </BoxRow>
              <DividerH />
              <BoxRow justify="space-between">
                <h3>
                  Goole Authentication
                  <span>(Settings & sign in)</span>
                </h3>
                <Tooltip text="To enable Security key, first you have to turn on Google authentication">
                  <ToggleInput handleDialog={handleDialog} disable="desactiveGoogle" activate="enableGoogleAuth" />
                </Tooltip>
              </BoxRow>
              <TextModal onClick={() => handleDialog("enableGoogleAuth")}>Change</TextModal>
              <Card bgcolor="var(--color-enable)">
                <BoxRow justify="space-between">
                  <h3>Withdraw & API</h3>
                  <ToggleInput handleDialog={handleDialog} disable="cancelProcess" activate="" />
                </BoxRow>
              </Card>
              <DividerH />
              <BoxRow justify="space-between">
                <h3>SMS Authentication</h3>
                <ToggleInput handleDialog={handleDialog} disable="desactiveSMS" activate="enableSMS" />
              </BoxRow>
              <TextModal onClick={() => handleDialog("enableSMS")}>Change</TextModal>
              <DividerH />
              <BoxRow justify="space-between">
                <h3>Email Verification</h3>
                <ToggleInput handleDialog={handleDialog} disable="" activate="" />
              </BoxRow>
              <TextModal onClick={() => handleDialog("email")}>Change</TextModal>
            </Card>

            <Card>
              <BoxRow justify="space-between">
                Device Management
                <TextLink to="devices">Manage</TextLink>
              </BoxRow>
            </Card>
            <Card>
              <BoxRow justify="space-between">
                Sign in Password<TextModal onClick={() => handleDialog("changePw")}>Change</TextModal>
              </BoxRow>
            </Card>
            <Card>
              <h2>TRADING SCREEN</h2>
              <DividerH />
              <BoxRow justify="space-between">
                Simplified interface
                <ToggleInput handleDialog={handleDialog} disable="" activate="" />
              </BoxRow>
            </Card>
          </BoxColumn>
          <BoxColumn>
            <Card bgcolor="var(--color-pink)">
              <BoxRow justify="space-between">
                <BoxRow justify="start">
                  <h3>KYC verification</h3>
                </BoxRow>
                <BoxRow justify="end">
                  <h2>VERIFIED</h2>
                  <VerifyIcon />
                </BoxRow>
              </BoxRow>
            </Card>
            <Card>
              <BoxRow justify="space-between">
                <h3>Whitelist management</h3>
                <ToggleInput handleDialog={handleDialog} disable="" activate="" />
              </BoxRow>
              <DividerH />
              <p>
                Address Management allows you to save and write memos for each of your withdrawal addresses The optional Whitelist function
                heips protect your funds by only allowing withdrawals to whitelisted addresses.
              </p>
              <TextModal>Manage</TextModal>
            </Card>
            <Card>
              <BoxRow justify="space-between">
                <h3>ACCOUNT ACTIVITY</h3>
                <TextModal>Manage</TextModal>
              </BoxRow>
              <DividerH />
              <p>LAST LOGIN: 22/07/2020 19:44</p>
              <BoxRow justify="space-between">
                Suspicious account activity?
                <TextModal color="var(--color-sell)" onClick={() => handleDialog("disableAccount")}>
                  Disable account
                </TextModal>
              </BoxRow>
            </Card>
          </BoxColumn>
        </BoxRow>
      </BoxColumn>
      {open && (
        <Modal open={open} onClose={handleDialog}>
          {modals[typeDialog]}
        </Modal>
      )}
    </>
  );
}
