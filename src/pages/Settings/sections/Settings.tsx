import { useContext, useState } from "react";
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
import { DBContext } from "../context/DBContext.tsx";
import EnableWhitedraw from "../components/modals/EnableWhitedraw.tsx";
import ToggleInputWithout from "../../../components/ToggleInputWithout.tsx";

export default function Settings() {
  const { options } = useContext(DBContext);
  const [open, setOpen] = useState(false);
  const [typeDialog, setTypeDialog] = useState("");

  const handleDialog = (type: string) => {
    if (type.length > 0) {
      setTypeDialog(type);
      setOpen(!open);
    }
  };

  const modals = {
    email: <ChangeEmail onClose={handleDialog} />,
    FA: <TwoFactorAuth onClose={handleDialog} />,
    changePw: <ChangePassword onClose={handleDialog} />,
    enableGoogleAuth: <EnableGoogleAuth onClose={handleDialog} />,
    desactiveGoogle: <DesactiveGoogleAuth onClose={handleDialog} />,
    enableSMS: <EnableSMSAuth onClose={handleDialog} />,
    desactiveSMS: <DesactiveSMSAuth onClose={handleDialog} />,
    cancelProcess: <DisableWhitedraw onClose={handleDialog} />,
    enableProcess: <EnableWhitedraw onClose={handleDialog} />,
    disableAccount: <DisableAccount onClose={handleDialog} />,
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
                {!options.google_auth ? (
                  <Tooltip text="To enable Security key, first you have to turn on Google authentication">
                    <ToggleInput
                      check={options.google_auth}
                      handleDialog={handleDialog}
                      disable="desactiveGoogle"
                      activate="enableGoogleAuth"
                    />
                  </Tooltip>
                ) : (
                  <ToggleInput
                    check={options.google_auth}
                    handleDialog={handleDialog}
                    disable="desactiveGoogle"
                    activate="enableGoogleAuth"
                  />
                )}
              </BoxRow>
              <TextModal disabled={!options.google_auth}>Change</TextModal>
              <Card bgcolor="var(--color-enable)">
                <BoxRow justify="space-between">
                  <h3>Withdraw & API</h3>
                  <ToggleInput check={options.withdraw} handleDialog={handleDialog} disable="cancelProcess" activate="enableProcess" />
                </BoxRow>
              </Card>
              <DividerH />
              <BoxRow justify="space-between">
                <h3>SMS Authentication</h3>
                <ToggleInput check={options.sms_auth} handleDialog={handleDialog} disable="desactiveSMS" activate="enableSMS" />
              </BoxRow>
              <TextModal disabled={!options.sms_auth}>Change</TextModal>
              <DividerH />
              <BoxRow justify="space-between">
                <h3>Email Verification</h3>
                <ToggleInputWithout check={options.email_verify} type="email_verify" />
              </BoxRow>
              <TextModal disabled={!options.email_verify} onClick={() => handleDialog("email")}>
                Change
              </TextModal>
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
                <ToggleInputWithout check={options.interface_clean} type="interface_clean" />
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
                <ToggleInputWithout check={options.whitelist} type="whitelist" />
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
