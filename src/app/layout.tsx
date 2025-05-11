import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desafio Dev Fullstack",
  description: "Criado por Mário Mamede",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <main className="min-h-screen">
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
