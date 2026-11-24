import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && window.matchMedia("(max-width: 900px)").matches) {
        setMenuOpen(false);
      }
    };
    const closeOnOutsideTap = (event) => {
      if (
        window.matchMedia("(max-width: 900px)").matches &&
        !menuRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    const closeOnDesktopResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideTap);
    window.addEventListener("resize", closeOnDesktopResize);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideTap);
      window.removeEventListener("resize", closeOnDesktopResize);
    };
  }, []);

  return (
    <nav>
      <a href="#hero" className="nav-logo">
        Fatima Asif
      </a>

      <ul id="primary-navigation" ref={menuRef} className={`nav-links${menuOpen ? " nav-links-open" : ""}`}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        </li>
        <li>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        </li>
        <li>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>
      <button ref={toggleRef} className={`nav-menu-toggle${menuOpen ? " nav-menu-toggle-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
        <span></span><span></span><span></span>
      </button>

    </nav>
  );
}
