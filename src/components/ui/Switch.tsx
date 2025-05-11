import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * Componente de alternância de tema (claro/escuro).
 * @returns {JSX.Element} Componente de alternância de tema.
 */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (mounted) {
      setIsDark(resolvedTheme === "dark");
    }
  }, [mounted, resolvedTheme]);

  const toggleTheme = () => {
    setIsDark(!isDark);

    setTimeout(() => {
      setTheme(!isDark ? "dark" : "light");
    }, 200);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="toggle theme"
      title={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
      type="button"
      className={`
        relative h-8 w-16 rounded-full p-1 
        transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900
        ${
          isDark
            ? "bg-indigo-900 focus:ring-indigo-500"
            : "bg-amber-100 focus:ring-amber-500"
        }
      `}
    >
      {/* Fundo de gradiente para efeito visual */}
      <div
        className={`
          absolute inset-0 rounded-full opacity-40
          ${
            isDark
              ? "bg-gradient-to-r from-indigo-800 to-indigo-900"
              : "bg-gradient-to-r from-amber-200 to-amber-100"
          }
        `}
      />

      {/* Container para os ícones */}
      <div className="relative flex h-full w-full items-center justify-between px-1.5">
        {/* Ícone do Sol */}
        <Sun
          size={14}
          className={`
            transition-all duration-300
            ${
              isDark
                ? "opacity-40 text-amber-300"
                : "opacity-100 text-amber-500"
            }
          `}
        />

        {/* Ícone da Lua */}
        <Moon
          size={14}
          className={`
            transition-all duration-300
            ${
              isDark
                ? "opacity-100 text-indigo-200"
                : "opacity-40 text-indigo-400"
            }
          `}
        />
      </div>

      {/* Indicador deslizante */}
      <div
        className={`
          absolute top-1 size-6 rounded-full shadow-md
          transform transition-all duration-500 ease-in-out
          ${
            isDark
              ? "translate-x-8 bg-indigo-200 shadow-indigo-900/20"
              : "translate-x-0 bg-amber-400 shadow-amber-900/20"
          }
        `}
      />
    </button>
  );
}
