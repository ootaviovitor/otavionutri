"use client";

import { useEffect, useState } from "react";
import { themeStorageKey } from "@/lib/theme";

type ThemePreference = "light" | "dark" | "system";

const themeOptions = [
  {
    value: "system",
    label: "Sistema",
    icon: (
      <>
        <rect x="3" y="4.5" width="18" height="12" rx="2.5" />
        <path d="M8 20h8" />
      </>
    ),
  },
  {
    value: "light",
    label: "Claro",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" />
      </>
    ),
  },
  {
    value: "dark",
    label: "Escuro",
    icon: <path d="M20.8 15.1A9 9 0 0 1 8.9 3.2 9 9 0 1 0 20.8 15.1Z" />,
  },
] as const;

export function ThemePicker() {
  const [preference, setPreference] = useState<ThemePreference>();

  useEffect(() => {
    const theme = document.documentElement.dataset.theme;
    setPreference(theme === "light" || theme === "dark" ? theme : "system");
  }, []);

  function changeTheme(theme: ThemePreference) {
    const root = document.documentElement;

    if (theme === "system") {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = theme;
    }

    setPreference(theme);

    try {
      if (theme === "system") {
        localStorage.removeItem(themeStorageKey);
      } else {
        localStorage.setItem(themeStorageKey, theme);
      }
    } catch {
      // The active theme still works for the current page.
    }
  }

  return (
    <div
      className="theme-picker"
      role="radiogroup"
      aria-label="Tema da página"
      hidden={preference === undefined}
    >
      {themeOptions.map(({ value, label, icon }) => (
        <label className="theme-picker__option" key={value} title={label}>
          <input
            type="radio"
            name="theme"
            value={value}
            aria-label={label}
            checked={preference === value}
            onChange={() => changeTheme(value)}
          />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {icon}
          </svg>
        </label>
      ))}
    </div>
  );
}
