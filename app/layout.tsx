import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://www.otavionutri.com.br";
const description =
  "Comece sua pré-consulta gratuita com o nutricionista Otávio por um chat rápido e sem compromisso.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pré-consulta gratuita · Otávio Nutrição",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Otávio Nutrição",
    title: "Pré-consulta gratuita · Otávio Nutrição",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070706",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
