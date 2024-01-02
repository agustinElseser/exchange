import useToggle from "../hooks/useToggle";
import { ToggleSwitch, ToggleSwitchBackground, ToggleSwitchHandle, ToggleSwitchInput } from "./styled/toggleInput.styled";

interface ToggleInputProps {
  handleDialog: (type: string) => void;
  check: boolean;
  disable: string;
  activate: string;
  disabled?: boolean;
}

export default function ToggleInput({ handleDialog, disabled, check, disable, activate }: ToggleInputProps) {
  const { toggle } = useToggle();

  const handleAction = () => {
    if (check) {
      handleDialog(disable);
      toggle();
    } else {
      handleDialog(activate);
      toggle();
    }
  };

  return (
    <ToggleSwitch>
      <ToggleSwitchInput checked={check} onChange={handleAction} disabled={disabled} />
      <ToggleSwitchBackground>
        <ToggleSwitchHandle />
      </ToggleSwitchBackground>
    </ToggleSwitch>
  );
}
