import React from "react"; // Importamos React para usar sus tipos
import {
  IconBrandAstro,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandDocker,
  IconBrandGithub,
  IconWorld,
  IconBrandNextcloud,
  IconFileTypeHtml,
  IconFileTypeCss,
  IconFileTypeJs,
  IconApi,
} from "@tabler/icons-react";

// --- Definición de Tipos (Interfaces) ---

// Un tipo genérico para los componentes de íconos de React
type IconType = React.ElementType;

// Interfaz para los badges de tecnología
interface Badge {
  id: number;
  componentName: IconType;
  color: string;
  name: string;
}

// Interfaz para los enlaces a redes sociales o sitios web
interface Social {
  id: number;
  componentName: IconType;
  href: string;
}

// Interfaz principal para cada proyecto
interface Project {
  id: number;
  src: string;
  alt: string;
  href: string;
  category: string;
  title: string;
  description: string;
  badges: Badge[];
  socials: Social[];
}

// --- Datos de los Proyectos ---

export const projects: Project[] = [
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
    src: "/PauChinchilla.jpg",
    alt: "PauPortfolio",
    href: "https://pauchinchilla.com/",
    category: "Webpage",
    title: "Pau Portfolio",
    description:
      "A personal portfolio webpage, showcasing her work and skills.",
    badges: [
      {
        id: 0,
        componentName: IconBrandNextjs,
        color: "text-gray-700",
        name: "Next.js",
      },
      {
        id: 1,
        componentName: IconBrandTailwind,
        color: "text-green-700",
        name: "Tailwind",
      },
    ],
    socials: [
      {
        id: 0,
        componentName: IconBrandGithub,
        href: "https://github.com/gregvp00/pauchinchilla",
      },
      {
        id: 1,
        componentName: IconWorld,
        href: "https://pauchinchilla.com/",
      },
    ],
  },
  {
    id: 3,
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
    ],
    socials: [
      {
        id: 0,
        componentName: IconBrandGithub,
        href: "https://github.com/gregvp00/pauchinchilla",
      },
    ],
  },
];
