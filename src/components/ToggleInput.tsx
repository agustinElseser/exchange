import useToggle from "../hooks/useToggle";
import { ToggleSwitch, ToggleSwitchBackground, ToggleSwitchHandle, ToggleSwitchInput } from "./styled/toggleInput.styled";

interface ToggleInputProps {
  handleDialog: (type: string) => void;
  disable: string;
  activate: string;
}

export default function ToggleInput({ handleDialog, disable, activate }: ToggleInputProps) {
  const [on, toggle] = useToggle();

  const handleAction = () => {
    if (on) {
      handleDialog(disable);
      toggle();
    } else {
      handleDialog(activate);
      toggle();
    }
  };

  return (
    <ToggleSwitch>
      <ToggleSwitchInput defaultChecked={on} onChange={handleAction} />
      <ToggleSwitchBackground>
        <ToggleSwitchHandle />
      </ToggleSwitchBackground>
    </ToggleSwitch>
  );
}
