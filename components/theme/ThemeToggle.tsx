"use client";

import { useEffect, useState, CSSProperties } from "react";
import { useTheme } from "next-themes";

import styles from "./ThemeToggle.module.css";
import { STARS } from "./constants";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          width: 36,
          height: 36,
        }}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <label
      className={styles.toggle}
      aria-label="Toggle Theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
        className={styles.input}
      />

      {/* Planet */}

      <div className={styles.planet}>
        <span className={styles.shadow}></span>

        <span className={styles.crater1}></span>
        <span className={styles.crater2}></span>
        <span className={styles.crater3}></span>
      </div>

      {/* Orbiting Stars */}

      <div className={styles.stars}>
        {STARS.map((star) => (
          <span
            key={star.id}
            className={styles.star}
            style={
              {
                "--angle": `${star.angle}deg`,
                "--size": `${star.size}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </label>
  );
}