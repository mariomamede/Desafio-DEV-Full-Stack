import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

// Hook para gerenciar o tema
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // Função para resolver o tema do sistema
  const resolveSystemTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // Efeito para inicializar o tema
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }

    // Configura o tema inicial
    updateTheme(storedTheme || "system");

    // Adiciona listener para mudanças no tema do sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        setResolvedTheme(resolveSystemTheme());
        document.documentElement.classList.toggle(
          "dark",
          resolveSystemTheme() === "dark"
        );
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Função para atualizar o tema
  const updateTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const isDark =
      newTheme === "dark" ||
      (newTheme === "system" && resolveSystemTheme() === "dark");

    root.classList.toggle("dark", isDark);
    setResolvedTheme(isDark ? "dark" : "light");

    if (newTheme !== "system") {
      localStorage.setItem("theme", newTheme);
    } else {
      localStorage.setItem("theme", "system");
    }
  };

  // Função para alternar o tema
  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    updateTheme(newTheme);
  };

  // Função para definir um tema específico
  const setThemeValue = (newTheme: Theme) => {
    setTheme(newTheme);
    updateTheme(newTheme);
  };

  return { theme, resolvedTheme, setTheme: setThemeValue, toggleTheme };
}
