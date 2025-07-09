import type { Metadata } from "next";
import i18next from "i18next";
import "./globals.css";

i18next.init({
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  lng: "en", // Default language
  resources: {
    
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
