import { NavLink } from "react-router";

import "./Nav.css";

interface NavProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Nav({ isMenuOpen, toggleMenu }: NavProps) {
  return (
    <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
      <NavLink to="/" className="nav__item" onClick={toggleMenu}>
        Inicio
      </NavLink>
      <NavLink to="/movies" className="nav__item" onClick={toggleMenu}>
        Películas
      </NavLink>
      <NavLink to="/tv-shows" className="nav__item" onClick={toggleMenu}>
        Series
      </NavLink>
    </nav>
  );
}
