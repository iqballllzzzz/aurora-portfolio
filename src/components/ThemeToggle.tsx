import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <label className="toggle-switch" aria-label="Toggle theme">
      <input
        type="checkbox"
        checked={!isDark}
        onChange={() => setIsDark((v) => !v)}
      />
      <span className="toggle-slider" />
    </label>
  );
}
