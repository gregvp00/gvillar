import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { baseKeywords } from "@/data/keywords";

export const metadata: Metadata = {
  title: {
    default: "Gregory Villar P. — Web Developer & Designer",
    template: "%s | Gregory Villar",
  },
  description:
    "Gregory Villar — creative web developer & designer based in Valencia, Spain. I build practical interfaces and web tools using Next.js, Astro, Tailwind, Docker, and Nextcloud. Available for web development, troubleshooting, and consulting.",
  keywords: [...baseKeywords],
  authors: [{ name: "Gregory Villar P.", url: "https://www.gregvillar.com" }],
  openGraph: {
    title: "Gregory Villar P. — Web Developer & Designer",
    description:
      "Creative web developer & designer building practical interfaces and web tools. Based in Valencia, Spain. Projects: Fincas Barahona, Device Orientation demo, Pau Portfolio, EcommerceAstro.",
    url: "https://www.gregvillar.com",
    siteName: "Gregory Villar",
    images: [
      {
        url: "https://www.gregvillar.com/flyingNoBG.webp",
        width: 1200,
        height: 630,
        alt: "Gregory Villar — web developer portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gregory Villar P. — Web Developer & Designer",
    description:
      "Creative web developer & designer building practical interfaces and web tools. Based in Valencia, Spain.",
    images: ["https://www.gregvillar.com/web-app-manifest-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.gregvillar.com",
    languages: {
      "es-ES": "https://www.gregvillar.com",
      "de-DE": "https://www.gregvillar.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Gregory Villar P.",
        url: "https://www.gregvillar.com",
        jobTitle: "Web Developer & Designer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valencia",
          addressCountry: "ES",
        },
        sameAs: [
          "https://github.com/yourhandle",
          "https://linkedin.com/in/yourhandle",
          "https://twitter.com/yourhandle",
        ],
      },
      {
        "@type": "WebSite",
        url: "https://www.gregvillar.com",
        name: "Gregory Villar — Portfolio",
        description:
          "Portfolio of Gregory Villar — web developer and designer. Projects include tourism rental site, device-orientation demo, personal portfolios, and an ecommerce prototype using Astro + Shopify.",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Oooh+Baby&display=swap"
          rel="stylesheet"
        ></link>

        {/* Icons and manifest (you already had these) */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Greg Villar" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
