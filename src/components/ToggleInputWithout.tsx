import { useContext } from "react";

import { DBContext, SettingsOptions } from "../pages/Settings/context/DBContext";
import { ToggleSwitch, ToggleSwitchBackground, ToggleSwitchHandle, ToggleSwitchInput } from "./styled/toggleInput.styled";

interface ToggleInputProps {
  check: boolean;
  type: keyof SettingsOptions;
}

export default function ToggleInputWithout({ check, type }: ToggleInputProps) {
  const { handleOptions } = useContext(DBContext);

  const handleAction = () => {
    if (check) {
      handleOptions(type, false);
    } else {
      handleOptions(type, true);
    }
  };

  return (
    <ToggleSwitch>
      <ToggleSwitchInput checked={check} onChange={handleAction} />
      <ToggleSwitchBackground>
        <ToggleSwitchHandle />
      </ToggleSwitchBackground>
    </ToggleSwitch>
  );
}
