import { ArrowRight, Code, Github, Linkedin, Mail } from "lucide-react";

const PortfolioOverview = () => {
  return (
    <section id="overview" className="section-container preview-section" aria-label="Professional overview">
      <div className="portfolio-shell">
        <div className="identity-row">
          <div className="identity-left">
            <div>
              <h2 className="person-name">Tlhompho Ratlhogo</h2>
              <p className="person-role">Software Engineer · South Africa</p>
            </div>
          </div>
          <span className="state-pill">
            Open to projects
          </span>
        </div>

        <div className="bento">
          {/* Card 1: My Journey / Education */}
          <article className="bento-card">
            <span className="micro-title">My journey</span>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-logo" style={{ fontSize: "12px" }}>
                  TUT
                </span>
                <span>IT studies</span>
              </div>
              <span className="timeline-line"></span>
              <div className="timeline-item">
                <span className="timeline-logo" style={{ fontSize: "11px" }}>
                  WTC
                </span>
                <span>Learnership</span>
              </div>
              <span className="timeline-line"></span>
              <div className="timeline-item">
                <span className="timeline-logo">⌘</span>
                <span>Building</span>
              </div>
            </div>
            <div className="card-footer">
              <h3>Education &amp; learning</h3>
              <a href="#contact" className="pill-button">
                <span>Connect</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </article>

          {/* Card 2: Development Toolkit */}
          <article className="bento-card">
            <span className="micro-title">What I work with</span>
            <div className="stack-logos">
              <span className="stack-logo">React</span>
              <span className="stack-logo">TypeScript</span>
              <span className="stack-logo accent">NestJS</span>
              <span className="stack-logo">Java</span>
              <span className="stack-logo">Python</span>
              <span className="stack-logo">PostgreSQL*</span>
            </div>
            <div className="card-footer">
              <h3>Development toolkit</h3>
              <span style={{ fontSize: "10px", color: "var(--muted)" }}>*Learning</span>
            </div>
          </article>

          {/* Card 3: Find Me Online */}
          <article className="bento-card">
            <span className="micro-title">Find me online</span>
            <div className="social-links">
              <a
                href="https://github.com/tlhomphogit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a href="mailto:tlhomphosuper@gmail.com" aria-label="Contact by email">
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com/in/tlhompho-ratlhogo-/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <div className="card-footer">
              <h3>Let&apos;s connect</h3>
              <a
                href="https://github.com/tlhomphogit"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button"
              >
                <span>GitHub</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </article>

          {/* Card 4: Freelance & Availability */}
          <article className="bento-card">
            <div className="card-rate-top">
              <span className="micro-title">Freelance &amp; availability</span>
              <span className="rate-icon">
                <Code size={19} />
              </span>
            </div>
            <div>
              <div className="rate-number">
                R330 <small>/ hour · starting</small>
              </div>
              <p className="soft-copy">
                Starting at R330/hour. Flexible scheduling (remote, hybrid, or on-site) depending on project scope.
              </p>
            </div>
            <div className="card-footer">
              <h3>Work together</h3>
              <a href="#contact" className="pill-button">
                <span>Enquire</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PortfolioOverview;
