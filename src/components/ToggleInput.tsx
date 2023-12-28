import { ToggleSwitch, ToggleSwitchBackground, ToggleSwitchHandle, ToggleSwitchInput } from "./styled/toggleInput.styled";

export default function ToggleInput() {
  return (
    <ToggleSwitch>
      <ToggleSwitchInput defaultChecked={true} />
      <ToggleSwitchBackground>
        <ToggleSwitchHandle />
      </ToggleSwitchBackground>
    </ToggleSwitch>
  );
}
