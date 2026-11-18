import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { themeBootstrap } from "@/lib/theme";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://www.otavionutri.com.br";
const title = "Otávio Costa Garcia · Nutricionista Esportivo";
const description =
  "O site está em manutenção. Enquanto isso, fale sobre seus objetivos com o nutricionista Otávio Costa Garcia e faça sua pré-consulta gratuita.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Otávio Costa Garcia",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
