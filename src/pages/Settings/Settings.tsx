import Sidebar from "./componentes/Sidebar";

import { SettingsContainer, TextLink, TextModal } from "../../components/styled/settings.styled.ts";
import { Outlet } from "react-router-dom";
import { BoxColumn, BoxRow, DividerH, DividerV } from "../../components/styled/box.styled.ts";
import ToggleInput from "../../components/ToggleInput.tsx";
import { VerifyIcon } from "../../components/svg/VerifyIcon.tsx";
import { Card } from "../../components/styled/card.styled.ts";

export default function Settings() {
  return (
    <>
      <SettingsContainer>
        <Sidebar />
        <DividerV height="100%" />
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
                  <ToggleInput />
                </BoxRow>
                <TextModal disabled>Change</TextModal>
                <Card bgcolor="var(--color-enable)">
                  <BoxRow justify="space-between">
                    <h3>Withdraw & API</h3>
                    <ToggleInput />
                  </BoxRow>
                </Card>
                <DividerH />
                <BoxRow justify="space-between">
                  <h3>SMS Authentication</h3>
                  <ToggleInput />
                </BoxRow>
                <TextModal>Change</TextModal>
                <DividerH />
                <BoxRow justify="space-between">
                  <h3>Email Verification</h3>
                  <ToggleInput />
                </BoxRow>
                <TextModal>Change</TextModal>
              </Card>

              <Card>
                <BoxRow justify="space-between">
                  Device Management
                  <TextLink to="">Manage</TextLink>
                </BoxRow>
              </Card>
              <Card>
                <BoxRow justify="space-between">
                  Sign in Password<TextModal>Change</TextModal>
                </BoxRow>
              </Card>
              <Card>
                <h2>TRADING SCREEN</h2>
                <DividerH />
                <BoxRow justify="space-between">
                  Simplified interface
                  <ToggleInput />
                </BoxRow>
              </Card>
            </BoxColumn>
            <BoxColumn>
              <Card bgcolor="var(--color-pink)">
                <BoxRow justify="space-between">
                  <h3>KYC verification</h3>
                  <BoxRow justify="space-between">
                    <h2>VERIFIED</h2>
                    <VerifyIcon />
                  </BoxRow>
                </BoxRow>
              </Card>
              <Card>
                <BoxRow justify="space-between">
                  <h3>Whitelist management</h3>
                  <ToggleInput />
                </BoxRow>
                <DividerH />
                <p>
                  Address Management allows you to save and write memos for each of your withdrawal addresses The optional Whitelist
                  function heips protect your funds by only allowing withdrawals to whitelisted addresses.
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
                  <TextModal color="var(--color-sell)">Disable account</TextModal>
                </BoxRow>
              </Card>
            </BoxColumn>
          </BoxRow>
        </BoxColumn>
        <Outlet />
      </SettingsContainer>
    </>
  );
}
