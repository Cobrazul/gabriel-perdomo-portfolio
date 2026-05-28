import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Perdomo — Desarrollador Web / Full Stack",
  description: "Portfolio profesional de Gabriel Perdomo, desarrollador web con experiencia en Laravel, PHP, JavaScript, MySQL y sistemas internos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
