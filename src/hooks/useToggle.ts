import { useState } from "react";

const useToggle = (initialState = false) => {
  const [on, setOn] = useState<boolean>(initialState);

  const toggle = (): void => {
    setOn(!on);
  };

  return { on, toggle };
};

export default useToggle;
