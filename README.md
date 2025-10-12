![status](https://img.shields.io/badge/status-in%20progress-yellow) [![Netlify Status](https://api.netlify.com/api/v1/badges/e73aaac2-25db-48ce-a955-18d616d07658/deploy-status)](https://app.netlify.com/projects/gregvillar/deploys)

# Greg Villar IT & Consulting — Portfolio (gregvillar.com)

> **A personal portfolio and small projects showcase built with Next.js (App Router).**

The site includes project pages, contact form, resume download and multi-language support (English, Spanish, German).

---

## Key features

* Next.js (App Router) powered site
* Global and per-page metadata (`metadata` / `generateMetadata`) for SEO
* Multi-language support: `en` (default), `es-ES` and `de-DE` alternates
* Projects showcased: `Fincas Barahona`, `Device Orientation`, `Pau Portfolio`, `EcommerceAstro`
* Umami analytics (deferred — consent recommended)
* JSON-LD structured data (Person + WebSite)
* PWA manifest, favicons and web app icons

## Tech stack

* Framework: **Next.js (App Router)**
* UI: **Tailwind CSS**
* Containerization: **Docker**
* Analytics: **Umami** (third-party)
* Deployment: **Netlify**

## Repository structure

```
/src
  /app
    /api
      /contact
        page.tsx          # Sendgrid API with Turnstile
    layout.tsx            # RootLayout + global metadata
    page.tsx              # Home page
    globals.css           # Custom styles
  /components             # Components by use
    ...
  /data
    navData.ts            # Titles and href on nav
    pageData.ts           # Projects content, include icons and images
  /i18n                   # Work in progress
  /lib                    # Supabase connection
/public
  ...
package.json
next.config.js
README.md
...
```

## Analytics & GDPR / SEO, metadata & internationalization


This app includes Umami analytics by default.

* Global metadata lives in `app/layout.tsx` via the exported `metadata` object.
* Per-page or per-project dynamic values must use `generateMetadata()` inside the corresponding page file (see `app/projects/[slug]/page.tsx`).
* `alternates.languages` in `metadata` should point to real localized pages (e.g. `/es`, `/de`). Make sure localized pages have `html lang` set correctly.

**Example `generateMetadata` snippet (simplified):**

```ts
export async function generateMetadata({ params }): Promise<Metadata> {
  const project = await getProject(params.slug);
  if (!project) return { title: 'Not found' };
  return {
    title: `${project.title} — Gregory Villar`,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      url: project.url,
      images: project.image ? [{ url: project.image, width: 1200, height: 630 }] : [],
    },
  };
}
```
## Projects and dynamic metadata

Each project should expose the following fields to build metadata automatically:

```ts
type Project = {
  slug: string;
  title: string;
  excerpt: string;
  image?: string; // OG image
  url?: string;
  tags?: string[];
};
```

## Contributing

Contributions are welcome — open an issue or pull request.

## License

This project is provided under the **MIT License**. See `LICENSE` for details.
