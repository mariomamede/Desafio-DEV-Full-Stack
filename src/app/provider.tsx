"use client";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { store } from "../store/store";

/**
 * Componente Provider
 */
export default function Provider(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ReduxProvider store={store}>{props.children}</ReduxProvider>
    </ThemeProvider>
  );
}
