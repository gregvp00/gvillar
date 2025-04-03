import { IconBrandAstro } from "@tabler/icons-react";
import { IconBrandTailwind } from "@tabler/icons-react";
import { IconBrandDocker } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconBrandNextcloud } from "@tabler/icons-react";
import { IconFileTypeHtml } from "@tabler/icons-react";
import { IconFileTypeCss } from "@tabler/icons-react";
import { IconFileTypeJs } from "@tabler/icons-react";
import { IconBrandPython } from "@tabler/icons-react";
import { IconBrandCpp } from "@tabler/icons-react";

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
        componentName: IconBrandAstro,
        color: "text-red-700",
        name: "Astro",
      },
      {
        componentName: IconBrandTailwind,
        color: "text-green-700",
        name: "Tailwind",
      },
      {
        componentName: IconBrandDocker,
        color: "text-blue-700",
        name: "Docker",
      },
      {
        componentName: IconBrandNextcloud,
        color: "text-blue-500",
        name: "Nextcloud",
      },
    ],
    socials: [
      {
        componentName: IconBrandGithub,
        href: "https://github.com/gregvp00/fincasBarahona24",
      },
      {
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
        componentName: IconFileTypeHtml,
        color: "text-orange-600",
        name: "HTML",
      },
      {
        componentName: IconFileTypeCss,
        color: "text-blue-500",
        name: "CSS",
      },
      {
        componentName: IconFileTypeJs,
        color: "text-yellow-600",
        name: "Javascript",
      },
    ],
    socials: [
      {
        componentName: IconBrandGithub,
        href: "https://github.com/gregvp00/DeviceOrientation-MouseHoverParallax",
      },
      {
        componentName: IconWorld,
        href: "https://poetic-rabanadas-aafbac.netlify.app/",
      },
    ],
  },
  {
    id: 2,
    src: "/DeviceOrientation.jpg",
    alt: "App",
    href: "https://poetic-rabanadas-aafbac.netlify.app/",
    category: "App",
    title: "Workspaces App",
    description:
      "Is a work in progress app that allows you to create and manage workspaces.",
    badges: [
      {
        componentName: IconFileTypeJs,
        color: "text-yellow-600",
        name: "Javascript",
      },
      {
        componentName: IconBrandCpp,
        color: "text-orange-600",
        name: "CPP",
      },
      {
        componentName: IconBrandPython,
        color: "text-blue-500",
        name: "Python",
      },
      {
        componentName: IconFileTypeHtml,
        color: "text-orange-600",
        name: "HTML",
      },
      {
        componentName: IconFileTypeCss,
        color: "text-blue-500",
        name: "CSS",
      },
    ],
    socials: [
      {
        componentName: IconFileTypeJs,
        href: "#",
      },
      {
        componentName: IconFileTypeJs,
        href: "#",
      },
    ],
  },
];
