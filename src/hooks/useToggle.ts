import { useState } from "react";

type ToggleHook = () => [boolean, () => void];

const useToggle: ToggleHook = (initialState = false) => {
  const [on, setOn] = useState<boolean>(initialState);

  const toggle = (): void => {
    setOn(!on);
  };

  return [on, toggle];
};

export default useToggle;
