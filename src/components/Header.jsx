import { useState } from 'react';

const links = [
  ['#nosotros', 'Nosotros'], ['#horarios', 'Horarios'],
  ['#ubicacion', 'Ubicación'], ['#donaciones', 'Donaciones'], ['#contacto', 'Contacto'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav aria-label="Navegación principal">
        <a href="#inicio" className="brand" onClick={() => setMenuOpen(false)}>KABOD</a>
        <button className="menu-toggle" type="button" aria-label="Abrir o cerrar menú" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>☰ Menú</button>
        <div id="nav-links" className={`links ${menuOpen ? 'open' : ''}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}
