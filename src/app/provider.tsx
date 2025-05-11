"use client";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { store } from "../store/store";

export default function Provider(props: { children: React.ReactNode }) {
  //disableTransitionOnChange
  return (
    <ThemeProvider attribute="class">
      <ReduxProvider store={store}>{props.children}</ReduxProvider>
    </ThemeProvider>
  );
}
