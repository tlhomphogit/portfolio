import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

type ProjectKey = "portfolio" | "college" | "digiguard";

interface CodeToken {
  text: string;
  className?: string;
}

interface ProjectData {
  key: ProjectKey;
  category: string;
  stepTitle: string;
  stepSub: string;
  tag: string;
  title: string;
  description: string;
  tech: string[];
  tokens: CodeToken[];
  link: string;
  linkLabel: string;
}

const projectsData: Record<ProjectKey, ProjectData> = {
  portfolio: {
    key: "portfolio",
    category: "FRONTEND",
    stepTitle: "Portfolio website",
    stepSub: "React · TypeScript · Vite",
    tag: "Portfolio website",
    title: "Personal Developer Portfolio",
    description:
      "A responsive portfolio built with React, TypeScript, Tailwind CSS, and Vite to present projects and technical skills.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    tokens: [
      { text: "const", className: "a" },
      { text: " portfolio = {\n  focus: " },
      { text: '"Software Engineering"', className: "b" },
      { text: ",\n  stack: [" },
      { text: '"React"', className: "c" },
      { text: ", " },
      { text: '"TypeScript"', className: "c" },
      { text: "],\n  status: " },
      { text: '"Built"', className: "b" },
      { text: "\n};" },
    ],
    link: "https://github.com/tlhomphogit/portfolio",
    linkLabel: "Explore GitHub",
  },
  college: {
    key: "college",
    category: "BACKEND",
    stepTitle: "College Management API",
    stepSub: "Node.js · Express · MongoDB",
    tag: "Backend / REST API",
    title: "College Management API",
    description:
      "An API-centered college management project using Node.js, Express, and MongoDB, with authentication and structured routes.",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    tokens: [
      { text: "GET", className: "a" },
      { text: " /api/students\n" },
      { text: "POST", className: "a" },
      { text: " /api/auth/login\n" },
      { text: "GET", className: "a" },
      { text: " /api/courses\n" },
      { text: "200", className: "b" },
      { text: ' { "message": ' },
      { text: '"OK"', className: "c" },
      { text: " }" },
    ],
    link: "https://github.com/tlhomphogit",
    linkLabel: "Explore GitHub",
  },
  digiguard: {
    key: "digiguard",
    category: "SECURITY",
    stepTitle: "DigiGuard",
    stepSub: "FastAPI · Spring Boot · React",
    tag: "Security / Full stack",
    title: "DigiGuard — Threat Interceptor",
    description:
      "A hackathon software engineering project integrating Python/FastAPI, Java/Spring Boot, React, and real-time notifications for security-event visibility.",
    tech: ["FastAPI", "Spring Boot", "React", "WebSockets"],
    tokens: [
      { text: "event", className: "a" },
      { text: ": suspicious_request\n" },
      { text: "source", className: "c" },
      { text: ": API gateway\n" },
      { text: "publish", className: "a" },
      { text: "(realtimeAlert)\n" },
      { text: "status", className: "b" },
      { text: ": monitoring" },
    ],
    link: "https://github.com/tlhomphogit",
    linkLabel: "Explore GitHub",
  },
};

const TypingCodeDisplay = ({ tokens }: { tokens: CodeToken[] }) => {
  const totalLength = tokens.reduce((acc, t) => acc + t.text.length, 0);
  const [charIndex, setCharIndex] = useState(totalLength);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCharIndex(totalLength);
      return;
    }

    let timeoutId: number;
    let cancelled = false;
    let currentChar = 0;
    let completedLoops = 0;

    const typingSpeed = 100;
    const pauseBetweenLoops = 4500;
    const maxLoops = 2;

    setCharIndex(0);

    const typeNextCharacter = () => {
      if (cancelled) return;

      currentChar += 1;
      setCharIndex(currentChar);

      if (currentChar < totalLength) {
        timeoutId = window.setTimeout(typeNextCharacter, typingSpeed);
        return;
      }

      completedLoops += 1;

      if (completedLoops < maxLoops) {
        timeoutId = window.setTimeout(() => {
          if (cancelled) return;
          currentChar = 0;
          setCharIndex(0);
          timeoutId = window.setTimeout(typeNextCharacter, typingSpeed);
        }, pauseBetweenLoops);
      }
    };

    timeoutId = window.setTimeout(typeNextCharacter, typingSpeed);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [tokens, totalLength]);

  // Render tokens up to charIndex
  let remaining = charIndex;
  const renderedElements: React.ReactNode[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (remaining <= 0) break;

    const visiblePart = token.text.slice(0, remaining);
    remaining -= token.text.length;

    if (token.className) {
      renderedElements.push(
        <span key={i} className={token.className}>
          {visiblePart}
        </span>
      );
    } else {
      renderedElements.push(<span key={i}>{visiblePart}</span>);
    }
  }

  return (
    <div className="focus-code" aria-hidden="true">
      {renderedElements}
      <span className="typing-cursor" aria-hidden="true">
        |
      </span>
    </div>
  );
};

const Projects = () => {
  const [selectedKey, setSelectedKey] = useState<ProjectKey>("portfolio");
  const currentProject = projectsData[selectedKey];

  return (
    <section className="section-container projects-section" id="projects">
      <p className="section-topper">Selected work</p>
      <h2 className="section-title">Projects built with purpose.</h2>
      <p className="section-desc">
        Explore selected projects showcasing my experience in frontend development, backend systems, and software security.
      </p>
      <div className="title-underline"></div>

      {/* Minimal editorial gallery — no icons or numbers */}
      <div
        className="project-gallery"
        role="group"
        aria-label="Choose a featured project"
      >
        {(["portfolio", "college", "digiguard"] as const).map((key) => {
          const project = projectsData[key];
          const selected = selectedKey === key;

          return (
            <button
              key={key}
              type="button"
              className="project-gallery-card"
              aria-pressed={selected}
              onClick={() => setSelectedKey(key)}
            >
              <span className="project-gallery-top">
                <span className="project-gallery-category">
                  {project.category}
                </span>
                <span className="project-gallery-selection">
                  {selected ? "SELECTED" : "VIEW PROJECT"}
                </span>
              </span>
              <span className="project-gallery-bottom">
                <span className="project-gallery-title">
                  {project.stepTitle}
                </span>
                <span className="project-gallery-stack">
                  {project.stepSub}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Featured Project Focus Panel (Straight IDE Card + Typing Animation) */}
      <article className="project-focus" id="projectDetail">
        <div className="focus-visual">
          <div className="focus-browser">
            <div className="window-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <TypingCodeDisplay tokens={currentProject.tokens} />
          </div>
        </div>

        <div className="focus-content">
          <p className="focus-tag">
            Featured project · {currentProject.tag}
          </p>
          <h3>{currentProject.title}</h3>
          <p>{currentProject.description}</p>

          <div className="tech-pills">
            {currentProject.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <div className="focus-bottom">
            <a
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${currentProject.linkLabel} for ${currentProject.title}`}
            >
              <span>{currentProject.linkLabel}</span>
              <ExternalLink size={13} />
            </a>
            <span className="focus-note">Design preview</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
