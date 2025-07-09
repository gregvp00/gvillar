import type { Metadata } from "next";
import i18next from "i18next";
import "./globals.css";

i18next.init({
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  lng: "en", // Default language
  resources: {
    en: {
      translation: {
        welcome: "Welcome to my site",
        description: "This is a sample description in English",
      },
    },
    es: {
      translation: {
        welcome: "Bienvenido a mi sitio",
        description: "Esta es una descripción de muestra en español",
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue sur mon site",
        description: "Ceci est une description d'exemple en français",
      },
    },
  },
});
export const metadata: Metadata = {
  title: "Gregory Villar",
  description: "Created with react next and love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Oooh+Baby&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
