import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import MarginLayout from "@/components/layouts/margin-layout/MarginLayout";
import SearchModal from "@/components/ui/search-modal/SearchModal";
import logo from "@/assets/img/whiteIsotype.webp";
import Nav from "@/components/ui/nav/Nav";

import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <MarginLayout>
      <header className="header">
        <div className="header__top">
          <button
            className="header__hamburger"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
          <img
            src={logo}
            alt="Logo"
            width={35}
            className="header__logo"
            onClick={handleLogoClick}
          />
          <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <SearchModal />
      </header>
    </MarginLayout>
  );
}
