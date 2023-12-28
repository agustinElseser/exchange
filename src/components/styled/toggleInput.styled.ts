import styled from "styled-components";

export const ToggleSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  cursor: pointer;
`;

export const ToggleSwitchInput = styled.input.attrs((props) => ({
  type: "checkbox",
  defaultChecked: props.defaultChecked,
}))`
  display: none;
`;

export const ToggleSwitchBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ddd;
  border-radius: 20px;

  transition: background-color 0.3s ease-in-out;
`;

export const ToggleSwitchHandle = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 50%;

  transition: transform 0.3s ease-in-out;
`;

export const ToggleSwitchLabel = styled.div`
  content: "";
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 12px;
  font-weight: bold;
  text-shadow: 1px 1px #fff;
  transition: color 0.3s ease-in-out;
`;

export const ToggleSwitch = styled(ToggleSwitchWrapper)`
  &:before {
    ${ToggleSwitchLabel}
  }

  ${ToggleSwitchInput}:checked + ${ToggleSwitchHandle} {
    transform: translateX(40px);
  }

  ${ToggleSwitchInput}:checked + ${ToggleSwitchBackground} {
    background-color: var(--color-buy);
  }

  ${ToggleSwitchInput}:checked + ${ToggleSwitchLabel} {
    content: "On";
    color: #05c46b;
    right: -15px;
  }

  ${ToggleSwitchInput}:checked + ${ToggleSwitchBackground} ${ToggleSwitchHandle} {
    transform: translateX(20px);
  }
`;
