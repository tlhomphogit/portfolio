import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "overview", "projects", "contact"];
      const scrollY = window.scrollY;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#overview", id: "overview" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label="Tlhompho portfolio home">
          <span>
            Tlhompho<span style={{ fontWeight: 300 }}> Ratlhogo</span>
          </span>
        </a>

        <nav
          className={`nav-links ${menuOpen ? "open" : ""}`}
          id="navLinks"
          aria-label="Main navigation"
        >
          {navItems.map(({ name, href, id }) => (
            <a
              key={name}
              href={href}
              className={activeSection === id ? "active" : ""}
              onClick={() => {
                setActiveSection(id);
                setMenuOpen(false);
              }}
            >
              {name}
            </a>
          ))}
        </nav>

        <div className="right-tools">
          <button
            className="theme-toggle"
            type="button"
            id="themeToggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <>
                <Sun size={16} />
                <span id="themeText">Light mode</span>
              </>
            ) : (
              <>
                <Moon size={16} />
                <span id="themeText">Dark mode</span>
              </>
            )}
          </button>

          <a href="#contact" className="nav-cta">
            Let's talk
          </a>

          <button
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            id="menuToggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
