"use client";

import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi2";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
    >
      {resolvedTheme === "dark" ? (
        <HiSun className="text-xl text-yellow-400" />
      ) : (
        <HiMoon className="text-xl text-slate-700 dark:text-slate-200" />
      )}
    </button>
  );
};

export default ThemeToggle;
