import { useId, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Frontend Web Development",
    description:
      "Responsive, accessible and user-friendly interfaces built with React, TypeScript and modern web tools. Designed to feel intuitive across devices.",
    tags: ["React", "TypeScript", "Responsive UI"],
  },
  {
    title: "Backend API Development",
    description:
      "Well-structured REST APIs and backend services that connect applications, organize data and support the features your product needs.",
    tags: ["REST APIs", "Node.js", "TypeScript"],
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "End-to-end web solutions that connect thoughtful frontend experiences with maintainable backend logic and database integrations.",
    tags: ["React", "Backend", "Integration"],
  },
  {
    title: "Bug Fixing & Maintenance",
    description:
      "Troubleshoot issues, improve existing features, and make targeted fixes so your application remains dependable and easier to maintain.",
    tags: ["Debugging", "Refactoring", "Maintenance"],
  },
  {
    title: "Portfolio & Business Websites",
    description:
      "Clean, professional web presences for individuals and small businesses, with a focus on clarity, responsive layouts and easy navigation.",
    tags: ["Portfolios", "Business sites", "UI"],
  },
];

const whyHireMePoints = [
  {
    icon: CheckCircle2,
    title: "Clean, Maintainable Code",
    description:
      "I build practical software solutions with a focus on clean, maintainable code.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication & Collaboration",
    description:
      "I value clear communication and reliable collaboration throughout a project.",
  },
  {
    icon: Sparkles,
    title: "Usability, Performance & Detail",
    description:
      "I pay attention to usability, performance, and detail in every user interaction.",
  },
  {
    icon: Zap,
    title: "Practical & Adaptable",
    description:
      "I adapt to project needs and aim to deliver work that is both useful and professional.",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const accordionId = useId();

  const toggleService = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="services" className="section-container services-section">
      {/* Editorial Index */}
      <div className="editorial-shell">
        {/* Left: Introduction */}
        <div className="ed-left">
          <p className="ed-kicker">
            <span className="ed-kicker-mark" aria-hidden="true" />
            WHAT I OFFER / 01
          </p>

          <h2 className="ed-heading">
            Good ideas deserve{" "}
            <span className="shine">great execution.</span>
          </h2>

          <p className="ed-intro">
            From polished interfaces to dependable APIs, I build practical
            software that works for people and businesses.
          </p>

          <a href="#contact" className="pill-button ed-cta">
            <span>Let's work together</span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>

          <div className="ed-side-note">
            <strong>A practical approach.</strong> Clear communication,
            realistic project scope, and maintainable solutions from planning
            through delivery.
          </div>
        </div>

        {/* Right: Interactive services */}
        <div className="ed-right" aria-label="Services offered">
          {services.map(({ title, description, tags }, index) => {
            const isOpen = openIndex === index;
            const triggerId = `${accordionId}-trigger-${index}`;
            const panelId = `${accordionId}-panel-${index}`;

            const enquiryLink = `mailto:tlhomphosuper@gmail.com?subject=${encodeURIComponent(
              `Enquiry: ${title}`
            )}`;

            return (
              <article
                key={title}
                className={`ed-item${isOpen ? " open" : ""}`}
              >
                <h3 className="ed-item-heading">
                  <button
                    type="button"
                    id={triggerId}
                    className="ed-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleService(index)}
                  >
                    <span className="ed-count">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="ed-name">{title}</span>

                    <span className="ed-plus" aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  className="ed-description"
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                >
                  <p>{description}</p>

                  <div className="ed-chips">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a className="ed-link" href={enquiryLink}>
                    Enquire about this service
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Why Hire Me — Existing Content Preserved */}
      <div className="why-hire-section">
        <p className="section-topper">Work ethic &amp; approach</p>

        <h2 className="section-title">Why Hire Me</h2>

        <p className="section-desc">
          A dedicated developer focused on delivering real-world value,
          reliable communication, and clean architecture.
        </p>

        <div className="title-underline" />

        <div className="why-grid">
          {whyHireMePoints.map(
            ({ icon: Icon, title, description }) => (
              <article key={title} className="why-card">
                <div className="why-card-icon">
                  <Icon size={18} aria-hidden="true" />
                </div>

                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;