import { useEffect, useRef, useState } from "react";
import { ChevronDown, Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

type SectionId = "home" | "overview" | "services" | "projects" | "contact";
type SubmenuId = Exclude<SectionId, "home">;

type MenuLink = {
  label: string;
  href: string;
  external?: boolean;
};

type MenuItem = {
  title: string;
  detail: string;
  href?: string;
};

type Submenu = {
  eyebrow: string;
  introduction?: string;
  items: MenuItem[];
  footer: MenuLink[];
};

const navItems: { label: string; id: SectionId; href: string }[] = [
  { label: "Home", id: "home", href: "#home" },
  { label: "About", id: "overview", href: "#overview" },
  { label: "Services", id: "services", href: "#services" },
  { label: "Projects", id: "projects", href: "#projects" },
  { label: "Contact", id: "contact", href: "#contact" },
];

const submenus: Record<SubmenuId, Submenu> = {
  overview: {
    eyebrow: "A little about me",
    introduction:
      "Software Engineer based in South Africa, focused on useful web applications and dependable APIs.",
    items: [],
    footer: [{ label: "Explore my background", href: "#overview" }],
  },
  services: {
    eyebrow: "What I can build",
    items: [
      { title: "Frontend interfaces", detail: "React, TypeScript and responsive design" },
      { title: "Backend APIs", detail: "REST APIs and application integration" },
      { title: "Full-stack development", detail: "Connected frontend and backend systems" },
      { title: "Maintenance & websites", detail: "Fixes, portfolios and business sites" },
    ],
    footer: [{ label: "View all five services", href: "#services" }],
  },
  projects: {
    eyebrow: "Featured work",
    items: [
      { title: "Personal Developer Portfolio", detail: "Frontend · React and TypeScript" },
      { title: "College Management API", detail: "Backend · Node.js and MongoDB" },
      { title: "DigiGuard", detail: "Security · Full-stack engineering" },
    ],
    footer: [
      { label: "View featured projects", href: "#projects" },
      { label: "Explore more on GitHub", href: "https://github.com/tlhomphogit", external: true },
    ],
  },
  contact: {
    eyebrow: "Let's connect",
    items: [
      {
        title: "Send an email",
        detail: "tlhomphosuper@gmail.com",
        href: "mailto:tlhomphosuper@gmail.com",
      },
      {
        title: "Use the contact form",
        detail: "Tell me a little about your project",
        href: "#contact",
      },
    ],
    footer: [{ label: "Go to contact section", href: "#contact" }],
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<SubmenuId | null>(null);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  const closeNavigation = () => {
    setMenuOpen(false);
    setExpandedMenu(null);
  };

  const navigateTo = (section?: SectionId) => {
    if (section) setActiveSection(section);
    closeNavigation();
  };

  const desktopHover = () =>
    window.matchMedia("(min-width: 1081px) and (hover: hover)").matches;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 145;
      let current: SectionId = "home";
      for (const { id } of navItems) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onOutsidePointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!navRef.current?.contains(target) && !mobileButtonRef.current?.contains(target)) {
        setExpandedMenu(null);
        setMenuOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedMenu(null);
        setMenuOpen(false);
      }
    };
    const onResize = () => {
      setExpandedMenu(null);
      setMenuOpen(false);
    };

    document.addEventListener("pointerdown", onOutsidePointer);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("pointerdown", onOutsidePointer);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label="Tlhompho portfolio home" onClick={() => navigateTo("home")}>
          <span>
            Tlhompho<span style={{ fontWeight: 300 }}> Ratlhogo</span>
          </span>
        </a>

        <nav
          ref={navRef}
          className={`nav-links nav-rail ${menuOpen ? "open" : ""}`}
          id="navLinks"
          aria-label="Main navigation"
        >
          {navItems.map(({ label, id, href }) => {
            const submenu = id === "home" ? null : submenus[id];
            const isExpanded = expandedMenu === id;

            return (
              <div
                key={id}
                className={`nav-entry ${submenu ? "has-submenu" : ""} ${isExpanded ? "is-expanded" : ""}`}
                onMouseEnter={() => {
                  if (submenu && desktopHover()) setExpandedMenu(id as SubmenuId);
                }}
                onMouseLeave={() => {
                  if (desktopHover()) setExpandedMenu(null);
                }}
                onFocus={(event) => {
                  // The main link opens the menu for keyboard users.
                  // Do not also open on caret focus: its click controls toggling.
                  if (
                    submenu &&
                    window.matchMedia("(min-width: 1081px)").matches &&
                    event.target instanceof HTMLAnchorElement &&
                    event.target.classList.contains("nav-link")
                  ) {
                    setExpandedMenu(id as SubmenuId);
                  }
                }}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setExpandedMenu(null);
                  }
                }}
              >
                <a
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                  href={href}
                  aria-current={activeSection === id ? "location" : undefined}
                  onClick={() => navigateTo(id)}
                >
                  {label}
                </a>

                {submenu && (
                  <>
                    <button
                      type="button"
                      className="nav-menu-toggle"
                      aria-label={`Explore ${label.toLowerCase()}`}
                      aria-expanded={isExpanded}
                      aria-controls={`nav-flyout-${id}`}
                      onClick={() => setExpandedMenu(isExpanded ? null : (id as SubmenuId))}
                    >
                      <ChevronDown size={13} aria-hidden="true" />
                    </button>
                    <div className="nav-flyout" id={`nav-flyout-${id}`}>
                      <p className="nav-flyout-label">{submenu.eyebrow}</p>
                      {submenu.introduction && <p className="nav-flyout-intro">{submenu.introduction}</p>}

                      {submenu.items.map((item) => {
                        const inner = (
                          <>
                            <span className="nav-flyout-dot" aria-hidden="true" />
                            <span>
                              <strong>{item.title}</strong>
                              <small>{item.detail}</small>
                            </span>
                          </>
                        );
                        return item.href ? (
                          <a
                            key={item.title}
                            href={item.href}
                            className="nav-flyout-item"
                            onClick={() => navigateTo(item.href?.startsWith("#") ? id : undefined)}
                          >
                            {inner}
                          </a>
                        ) : (
                          <div key={item.title} className="nav-flyout-item nav-flyout-static">
                            {inner}
                          </div>
                        );
                      })}

                      <div className="nav-flyout-footer">
                        {submenu.footer.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            onClick={() => navigateTo(link.href.startsWith("#") ? id : undefined)}
                          >
                            {link.label}
                            <ArrowUpRight size={13} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
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
              <><Sun size={15} /><span id="themeText">Light mode</span></>
            ) : (
              <><Moon size={15} /><span id="themeText">Dark mode</span></>
            )}
          </button>
          <a href="#contact" className="nav-cta" onClick={() => navigateTo("contact")}>
            Let's talk
          </a>
          <button
            ref={mobileButtonRef}
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            id="menuToggle"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setExpandedMenu(null);
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;