import Link from "next/link";

export default function Home() {
  return (
    <nav className="flex items-center justify-between w-full h-16 px-10 bg-[var(--nav-background)] text-[var(--nav-foreground)]">
      <div className="flex space-x-4">
        <Link href="/" className="text-white text-2xl font-bold">
          Logo
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="text-white hover:text-gray-200">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-gray-200">
              Sobre mi
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-200">
              Contacto
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-200">
              CV
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <li>Español</li>
        <li>Send message</li>
        <li>Cuenta login</li>
      </div>
    </nav>
  );
}
