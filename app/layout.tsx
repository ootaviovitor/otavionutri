import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://www.otavionutri.com.br";
const description =
  "Acompanhamento nutricional individual, com plano alimentar ajustado à sua rotina e a cada consulta.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Otávio Nutrição — Constância vence a dieta",
    template: "%s · Otávio Nutrição",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Otávio Nutrição",
    title: "Otávio Nutrição — Constância vence a dieta",
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
    <html lang="pt-BR" className={`${instrument.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
