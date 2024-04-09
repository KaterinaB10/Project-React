import { useState } from "react";

function useToggle(initialState) {
  const [toggleValue, setToggleValue] = useState(initialState);

  const toggler = () => {
    setToggleValue(!toggleValue);
  };
  return [toggleValue, toggler];
}

export { useToggle };
