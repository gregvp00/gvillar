// --- Definición de Tipos (Interfaces) ---

// Interfaz para los elementos de navegación
interface NavItem {
  id: number;
  title: string;
  href: string;
}

// --- Datos de Navegación ---

export const navLeft: NavItem[] = [
  {
    id: 0,
    title: "PROJECTS",
    href: "#projects",
  },
  {
    id: 1,
    title: "ABOUT ME",
    href: "#about",
  },
  {
    id: 2,
    title: "CONTACT",
    href: "#contact",
  },
  {
    id: 3,
    title: "CV",
    href: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:59ccfb55-715b-4697-8301-4ed8591ea154",
  },
];
