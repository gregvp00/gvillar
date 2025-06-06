import { IconBrandAstro } from "@tabler/icons-react";
import { IconBrandTailwind } from "@tabler/icons-react";
import { IconBrandDocker } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconBrandNextcloud } from "@tabler/icons-react";
import { IconFileTypeHtml } from "@tabler/icons-react";
import { IconFileTypeCss } from "@tabler/icons-react";
import { IconFileTypeJs } from "@tabler/icons-react";
import { IconApi } from "@tabler/icons-react";

export const projects = [
  {
    id: 0,
    src: "/FincasBarahona.jpg",
    alt: "Fincas Barahona",
    href: "https://fincasbarahona.com/",
    category: "Webpage",
    title: "Fincas Barahona",
    description:
      "Rental of tourist accommodations in the seaside city of Altea with file and receipt management using Nextcloud.",
    badges: [
      {
        id: 0,
        componentName: IconBrandAstro,
        color: "text-red-700",
        name: "Astro",
      },
      {
        id: 1,
        componentName: IconBrandTailwind,
        color: "text-green-700",
        name: "Tailwind",
      },
      {
        id: 2,
        componentName: IconBrandDocker,
        color: "text-blue-700",
        name: "Docker",
      },
      {
        id: 3,
        componentName: IconBrandNextcloud,
        color: "text-blue-500",
        name: "Nextcloud",
      },
    ],
    socials: [
      {
        id: 0,
        componentName: IconBrandGithub,
        href: "https://github.com/gregvp00/fincasBarahona24",
      },
      {
        id: 1,
        componentName: IconWorld,
        href: "https://fincasbarahona.com/",
      },
    ],
  },
  {
    id: 1,
    src: "/DeviceOrientation.jpg",
    alt: "Device Orientation",
    href: "https://poetic-rabanadas-aafbac.netlify.app/",
    category: "Webpage",
    title: "Device Orientation",
    description:
      "A webpage without framework demonstrating parallax effects using Device Orientation and mouse hover interactions.",
    badges: [
      {
        id: 0,
        componentName: IconFileTypeHtml,
        color: "text-orange-600",
        name: "HTML",
      },
      {
        id: 1,
        componentName: IconFileTypeCss,
        color: "text-blue-500",
        name: "CSS",
      },
      {
        id: 2,
        componentName: IconFileTypeJs,
        color: "text-yellow-600",
        name: "Javascript",
      },
    ],
    socials: [
      {
        id: 0,
        componentName: IconBrandGithub,
        href: "https://github.com/gregvp00/DeviceOrientation-MouseHoverParallax",
      },
      {
        id: 1,
        componentName: IconWorld,
        href: "https://poetic-rabanadas-aafbac.netlify.app/",
      },
    ],
  },
  {
    id: 2,
    src: "/UnknownIcon.png",
    alt: "EcommerceAstro",
    href: "#",
    category: "Webpage",
    title: "Ecommerce on Astro",
    description:
      "Is a work in progress ecommerce webpage using Astro and Shopify API.",
    badges: [
      {
        id: 0,
        componentName: IconBrandAstro,
        color: "text-red-700",
        name: "Astro",
      },
      {
        id: 1,
        componentName: IconBrandTailwind,
        color: "text-green-700",
        name: "Tailwind",
      },
      {
        id: 2,
        componentName: IconApi,
        color: "text-orange-600",
        name: "Shopify",
      },
      {
        id: 3,
        componentName: IconFileTypeCss,
        color: "text-blue-500",
        name: "CSS",
      },
    ],
    socials: [
      {
        id: 0,
        componentName: IconFileTypeJs,
        href: "#",
      },
      {
        id: 1,
        componentName: IconFileTypeJs,
        href: "#",
      },
    ],
  },
];
