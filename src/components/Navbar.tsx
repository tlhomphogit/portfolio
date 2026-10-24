import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Moon, Sun } from "lucide-react";
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

const navItems: { label: string; id: SubmenuId; href: string }[] = [
  { label: "Profile", id: "overview", href: "#overview" },
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
  const [expandedMenu, setExpandedMenu] = useState<SubmenuId | null>(null);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);

  const navigateTo = (section?: SectionId) => {
    if (section) setActiveSection(section);
    setExpandedMenu(null);
  };

  const desktopHover = () =>
    window.matchMedia("(min-width: 1081px) and (hover: hover)").matches;

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + (headerRef.current?.offsetHeight ?? 145) + 16;
      let current: SectionId = "home";

      for (const { id } of navItems) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const onOutsidePointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setExpandedMenu(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedMenu(null);
    };
    const onResize = () => setExpandedMenu(null);

    document.addEventListener("pointerdown", onOutsidePointer);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("pointerdown", onOutsidePointer);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const renderPanel = (menu: Submenu, section: SubmenuId) => (
    <div className="space-y-2.5 text-left">
      <p className="px-1 text-[10px] font-medium tracking-[0.14em] [color:var(--highlight)] uppercase">
        {menu.eyebrow}
      </p>
      {menu.introduction && (
        <p className="px-1 text-xs leading-6 font-light [color:var(--secondary)]">
          {menu.introduction}
        </p>
      )}

      {menu.items.map((item) => {
        const inner = (
          <>
            <span
              aria-hidden="true"
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--highlight)]"
            />
            <span className="min-w-0">
              <strong className="block text-[10px] font-medium [color:var(--text)]">
                {item.title}
              </strong>
              <small className="mt-1 block text-[10px] leading-4 font-light [color:var(--secondary)]">
                {item.detail}
              </small>
            </span>
          </>
        );
        const sharedClass =
          "flex items-start gap-3 rounded-xl px-3 py-2.5 text-left";
        return item.href ? (
          <a
            key={item.title}
            href={item.href}
            className={`${sharedClass} transition-colors hover:bg-[var(--surface-alt)] focus-visible:outline-2 focus-visible:outline-[var(--highlight)]`}
            onClick={() => navigateTo(item.href?.startsWith("#") ? section : undefined)}
          >
            {inner}
          </a>
        ) : (
          <div key={item.title} className={sharedClass}>
            {inner}
          </div>
        );
      })}

      <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--line)] px-1 pt-3">
        {menu.footer.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            onClick={() => navigateTo(link.href.startsWith("#") ? section : undefined)}
            className="inline-flex items-center gap-1 text-[10px] font-medium [color:var(--highlight)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--highlight)]"
          >
            {link.label}
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );

  // Keep the Hero as an unselected state: the brand takes visitors home.
  const activePill =
    "bg-slate-900/10 [color:var(--text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] dark:bg-white/15";
  const idlePill =
    "[color:var(--secondary)] hover:bg-slate-900/5 hover:[color:var(--text)] dark:hover:bg-white/[0.08]";

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--nav)] [color:var(--text)] backdrop-blur-[18px] transition-colors duration-200"
    >
      <div className="mx-auto max-w-[1170px] px-2.5 py-3 min-[360px]:px-4 sm:px-5 min-[1081px]:px-[30px]">
        <div className="flex items-center justify-between gap-2 min-[1081px]:grid min-[1081px]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] min-[1081px]:gap-5">
          {/* The brand replaces the redundant Home navigation item. */}
          <a
            href="#home"
            aria-label="Tlhompho portfolio home"
            onClick={() => navigateTo("home")}
            className="min-w-0 shrink whitespace-nowrap text-[12px] font-semibold tracking-[-0.5px] [color:var(--text)] min-[360px]:text-[13px] sm:text-base min-[1081px]:justify-self-start"
          >
            Tlhompho<span className="font-light"> Ratlhogo</span>
          </a>

          {/* Desktop: compact Meta-style capsule with the original hover menus. */}
          <nav
            aria-label="Main navigation"
            className="relative hidden items-center gap-0.5 rounded-full border border-[var(--line)] bg-white/[0.09] p-1 backdrop-blur-2xl dark:bg-white/[0.05] min-[1081px]:flex"
          >
            {navItems.map(({ label, id, href }) => {
              const submenu = submenus[id];
              const isExpanded = expandedMenu === id;
              const isActive = activeSection === id;

              return (
                <div
                  key={id}
                  className={`relative flex items-center rounded-full transition-colors after:absolute after:top-full after:left-0 after:h-3 after:w-full after:content-[''] ${isActive ? activePill : idlePill}`}
                  onMouseEnter={() => {
                    if (desktopHover()) setExpandedMenu(id);
                  }}
                  onMouseLeave={() => {
                    if (desktopHover()) setExpandedMenu(null);
                  }}
                  onFocus={(event) => {
                    if (event.target instanceof HTMLAnchorElement) {
                      setExpandedMenu(id);
                    }
                  }}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      setExpandedMenu(null);
                    }
                  }}
                >
                  <a
                    href={href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => navigateTo(id)}
                    className={`flex h-9 items-center pl-3 pr-0.5 text-[7px] leading-none whitespace-nowrap [color:inherit] transition-colors focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--highlight)] ${isActive ? "font-light" : "font-extralight"}`}
                  >
                    {label}
                  </a>
                  <button
                    type="button"
                    aria-label={`Explore ${label.toLowerCase()}`}
                    aria-expanded={isExpanded}
                    aria-controls={isExpanded ? `desktop-menu-${id}` : undefined}
                    onClick={() => setExpandedMenu(isExpanded ? null : id)}
                    className="mr-1 flex h-9 w-4 shrink-0 items-center justify-center rounded-full [color:var(--secondary)] hover:[color:var(--text)] focus-visible:outline-2 focus-visible:outline-[var(--highlight)]"
                  >
                    <ChevronDown
                      size={11}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className={`transition-transform motion-reduce:transition-none ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isExpanded && (
                    <div
                      id={`desktop-menu-${id}`}
                      className={`absolute top-[calc(100%+12px)] z-60 w-[310px] rounded-[20px] border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] ${id === "contact" ? "right-0" : "left-1/2 -translate-x-1/2"}`}
                    >
                      {renderPanel(submenu, id)}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* The name, theme switcher and CTA share the first mobile row. */}
          <div className="flex shrink-0 items-center justify-end gap-1.5 min-[1081px]:justify-self-end min-[1081px]:gap-3">
            <button
              type="button"
              id="themeToggle"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="inline-flex size-8 shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] [color:var(--text)] transition-colors hover:border-[var(--ring)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--highlight)] min-[1081px]:h-9 min-[1081px]:w-auto min-[1081px]:px-4"
            >
              {theme === "dark" ? (
                <Sun size={15} strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <Moon size={15} strokeWidth={1.25} aria-hidden="true" />
              )}
              <span className="hidden text-xs font-medium min-[1081px]:inline">
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </span>
            </button>
            <a
              href="#contact"
              onClick={() => navigateTo("contact")}
              className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap border-0 bg-transparent px-1 text-[10px] font-medium [color:var(--text)] transition-colors hover:[color:var(--highlight)] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--highlight)] min-[360px]:px-2 min-[1081px]:px-3 min-[1081px]:text-xs"
            >
              <span>Let&apos;s talk</span>
              <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Mobile: all four links fit in ONE shared capsule; no hamburger or clipping. */}
        <div className="relative mt-3 min-[1081px]:hidden">
          <nav
            aria-label="Mobile navigation"
            className="grid min-h-11 w-full grid-cols-4 items-center gap-0.5 rounded-full border border-[var(--line)] bg-white/[0.09] p-[3px] backdrop-blur-2xl dark:bg-white/[0.05]"
          >
            {navItems.map(({ label, id, href }) => {
              const isActive = activeSection === id;
              const isExpanded = expandedMenu === id;

              return (
                <div
                  key={id}
                  className={`flex min-w-0 items-center justify-center rounded-full transition-colors ${isActive ? activePill : idlePill}`}
                >
                  <a
                    href={href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => navigateTo(id)}
                    className={`flex h-9 min-w-0 items-center pl-1 text-[10px] leading-none whitespace-nowrap [color:inherit] focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-[var(--highlight)] min-[390px]:text-[10px] ${isActive ? "font-medium" : "font-normal"}`}
                  >
                    {label}
                  </a>
                  <button
                    type="button"
                    aria-label={`Explore ${label.toLowerCase()}`}
                    aria-expanded={isExpanded}
                    aria-controls={isExpanded ? "mobile-explore-panel" : undefined}
                    onClick={() => setExpandedMenu(isExpanded ? null : id)}
                    className="flex h-9 w-3.5 shrink-0 items-center justify-center rounded-full [color:var(--secondary)] focus-visible:outline-2 focus-visible:outline-[var(--highlight)] min-[390px]:w-4"
                  >
                    <ChevronDown
                      size={10}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className={`transition-transform motion-reduce:transition-none ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Render outside the capsule so the submenu is not clipped. */}
          {expandedMenu && (
            <div
              id="mobile-explore-panel"
              className="absolute top-[calc(100%+9px)] right-0 left-0 z-60 max-h-[min(65dvh,420px)] overflow-y-auto rounded-[20px] border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]"
            >
              {renderPanel(submenus[expandedMenu], expandedMenu)}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
