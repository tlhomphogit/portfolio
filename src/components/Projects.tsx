import { useState } from "react";
import { Code, Database, Shield, ArrowRight, ExternalLink } from "lucide-react";

type ProjectKey = "portfolio" | "college" | "digiguard";

interface ProjectData {
  key: ProjectKey;
  number: string;
  stepTitle: string;
  stepSub: string;
  tag: string;
  title: string;
  description: string;
  tech: string[];
  codeContent: React.ReactNode;
  link: string;
  linkLabel: string;
}

const projectsData: Record<ProjectKey, ProjectData> = {
  portfolio: {
    key: "portfolio",
    number: "01",
    stepTitle: "Portfolio website",
    stepSub: "React · TypeScript · Vite",
    tag: "Portfolio website",
    title: "Personal Developer Portfolio",
    description:
      "A responsive portfolio built with React, TypeScript, Tailwind CSS, and Vite to present projects and technical skills.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    codeContent: (
      <>
        <span className="a">const</span> portfolio = {"{\n"}
        {"  "}focus: <span className="b">&quot;Software Engineering&quot;</span>,{"\n"}
        {"  "}stack: [<span className="c">&quot;React&quot;</span>, <span className="c">&quot;TypeScript&quot;</span>],{"\n"}
        {"  "}status: <span className="b">&quot;Built&quot;</span>{"\n"}
        {"}"};
      </>
    ),
    link: "https://github.com/tlhomphogit/portfolio",
    linkLabel: "Explore GitHub",
  },
  college: {
    key: "college",
    number: "02",
    stepTitle: "College Management API",
    stepSub: "Node.js · Express · MongoDB",
    tag: "Backend / REST API",
    title: "College Management API",
    description:
      "An API-centered college management project using Node.js, Express, and MongoDB, with authentication and structured routes.",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    codeContent: (
      <>
        <span className="a">GET</span> /api/students{"\n"}
        <span className="a">POST</span> /api/auth/login{"\n"}
        <span className="a">GET</span> /api/courses{"\n"}
        <span className="b">200</span> {"{"} <span className="c">&quot;message&quot;</span>: &quot;OK&quot; {"}"}
      </>
    ),
    link: "https://github.com/tlhomphogit",
    linkLabel: "Explore GitHub",
  },
  digiguard: {
    key: "digiguard",
    number: "03",
    stepTitle: "DigiGuard",
    stepSub: "FastAPI · Spring Boot · React",
    tag: "Security / Full stack",
    title: "DigiGuard — Threat Interceptor",
    description:
      "A hackathon software engineering project integrating Python/FastAPI, Java/Spring Boot, React, and real-time notifications for security-event visibility.",
    tech: ["FastAPI", "Spring Boot", "React", "WebSockets"],
    codeContent: (
      <>
        <span className="a">event</span>: suspicious_request{"\n"}
        <span className="c">source</span>: API gateway{"\n"}
        <span className="a">publish</span>(realtimeAlert){"\n"}
        <span className="b">status</span>: monitoring
      </>
    ),
    link: "https://github.com/tlhomphogit",
    linkLabel: "Explore GitHub",
  },
};

const Projects = () => {
  const [selectedKey, setSelectedKey] = useState<ProjectKey>("portfolio");
  const currentProject = projectsData[selectedKey];

  return (
    <section className="section-container projects-section" id="projects">
      <p className="section-topper">Selected work</p>
      <h2 className="section-title">Three projects, one journey.</h2>
      <p className="section-desc">
        Explore selected projects showcasing my experience in frontend development, backend systems, and software security.
      </p>
      <div className="title-underline"></div>

      {/* 3-Step Journey Navigation */}
      <div className="project-journey" role="group" aria-label="Choose a featured project">
        {/* Step 1: Portfolio */}
        <button
          className="project-node"
          type="button"
          aria-pressed={selectedKey === "portfolio"}
          onClick={() => setSelectedKey("portfolio")}
        >
          <span className="project-icon">
            <Code size={27} />
            <span className="project-counter">01</span>
          </span>
          <strong>Portfolio website</strong>
          <small>React · TypeScript · Vite</small>
        </button>

        {/* Arrow 1 */}
        <span className="project-arrow" aria-hidden="true">
          <ArrowRight size={20} />
        </span>

        {/* Step 2: College Management */}
        <button
          className="project-node"
          type="button"
          aria-pressed={selectedKey === "college"}
          onClick={() => setSelectedKey("college")}
        >
          <span className="project-icon">
            <Database size={27} />
            <span className="project-counter">02</span>
          </span>
          <strong>College Management API</strong>
          <small>Node.js · Express · MongoDB</small>
        </button>

        {/* Arrow 2 */}
        <span className="project-arrow" aria-hidden="true">
          <ArrowRight size={20} />
        </span>

        {/* Step 3: DigiGuard */}
        <button
          className="project-node"
          type="button"
          aria-pressed={selectedKey === "digiguard"}
          onClick={() => setSelectedKey("digiguard")}
        >
          <span className="project-icon">
            <Shield size={27} />
            <span className="project-counter">03</span>
          </span>
          <strong>DigiGuard</strong>
          <small>FastAPI · Spring Boot · React</small>
        </button>
      </div>

      {/* Featured Project Focus Panel */}
      <article className="project-focus" id="projectDetail" aria-live="polite">
        <div className="focus-visual">
          <div className="focus-browser">
            <div className="window-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="focus-code">{currentProject.codeContent}</div>
          </div>
        </div>

        <div className="focus-content">
          <p className="focus-tag">
            Featured project / {currentProject.number} · {currentProject.tag}
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
              <ExternalLink size={14} />
            </a>
            <span className="focus-note">Design preview</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
