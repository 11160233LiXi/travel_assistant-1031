import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const LS_KEY = "app-theme";

function getInitialTheme(): Theme {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw === "light" || raw === "dark") return raw;
  } catch {}
  if (typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

/**
 * 簡易 useTheme hook（不用 Context 也可使用）
 * 回傳：{ theme, setTheme, toggleTheme }
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, theme);
    } catch {}
    const el = document.documentElement;
    if (theme === "dark") el.classList.add("dark");
    else el.classList.remove("dark");
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggleTheme = () => setThemeState((s) => (s === "dark" ? "light" : "dark"));

  return { theme, setTheme, toggleTheme };
}

export default useTheme;