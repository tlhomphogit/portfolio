import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="eyebrow">
          <span>Software Engineer · Open to opportunities</span>
        </div>

        <h1>
          Turning Complex Problems into Practical <span className="shine">Software Solutions.</span>
        </h1>

        <p className="hero-sub">
          Hi, I&apos;m Tlhompho Ratlhogo. I build responsive web experiences,
          dependable APIs, and practical software solutions — with care for the
          details that matter.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="main-action">
            <span>Explore my projects</span>
            <ArrowRight size={15} />
          </a>
          <a href="#overview" className="text-action">
            <span>Get to know me</span>
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="hero-bottom">
          <span>React</span>
          <span className="dot-sep"></span>
          <span>TypeScript</span>
          <span className="dot-sep"></span>
          <span>Backend engineering</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
