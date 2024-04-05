import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gestion de stock",
  description: "Gestion de stock",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <NavBar />
        <div className="max-w-4xl m-auto p-4">{children}</div>
      </body>
    </html>
  );
}
