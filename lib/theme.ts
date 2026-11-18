export const themeStorageKey = "otavio-nutri-theme";

export const themeBootstrap = `
  try {
    const preference = localStorage.getItem(${JSON.stringify(themeStorageKey)});
    if (preference === "light" || preference === "dark") {
      document.documentElement.dataset.theme = preference;
    }
  } catch {
    // Use the system appearance when storage is unavailable.
  }
`;
