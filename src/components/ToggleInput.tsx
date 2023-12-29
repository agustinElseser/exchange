import { ToggleSwitch, ToggleSwitchBackground, ToggleSwitchHandle, ToggleSwitchInput } from "./styled/toggleInput.styled";

export default function ToggleInput(props) {
  return (
    <ToggleSwitch>
      <ToggleSwitchInput {...props} defaultChecked={true} />
      <ToggleSwitchBackground>
        <ToggleSwitchHandle />
      </ToggleSwitchBackground>
    </ToggleSwitch>
  );
}
