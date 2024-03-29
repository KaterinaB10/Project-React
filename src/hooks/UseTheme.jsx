import { useLayoutEffect, useState } from "react";

export function UseTheme() {
  const [theme, setTheme] = useState("light");
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
