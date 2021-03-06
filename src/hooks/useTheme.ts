import { useState, useLayoutEffect } from "react";

function useTheme() {
  const preferDarkSchema =
    typeof window !== "undefined"
      ? window?.matchMedia("(prefers-color-scheme: dark)").matches ?? false
      : false;

  const defaultTheme = preferDarkSchema ? "dark" : "light";

  const [theme, setTheme] = useState(
    (typeof localStorage !== "undefined"
      ? localStorage.getItem("theme") ?? defaultTheme
      : defaultTheme) as "dark" | "light"
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}

export default useTheme;
