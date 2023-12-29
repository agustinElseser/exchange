import Sidebar from "./components/Sidebar";
import { SettingsContainer } from "../../components/styled/settings.styled.ts";
import { Outlet } from "react-router-dom";
import { DividerV } from "../../components/styled/box.styled.ts";

export default function Settings() {
  return (
    <>
      <SettingsContainer>
        <Sidebar />
        <DividerV height="100%" />
        <Outlet />
      </SettingsContainer>
    </>
  );
}
