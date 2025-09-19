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
    href: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:ad63d264-d78b-432d-ac1f-ebe272684569",
  },
];
