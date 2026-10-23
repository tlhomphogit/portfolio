// src/components/About.tsx
const About = () => {
  return (
    <section
      id="about"
      className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm transition-colors duration-200 text-center max-w-3xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
        About Me
      </h2>
      <p className="text-base sm:text-lg font-light leading-relaxed text-slate-600 dark:text-slate-300 italic max-w-2xl mx-auto">
        &ldquo;I&apos;m a passionate developer with experience in modern web technologies and creative tools,
        dedicated to crafting seamless, user-centric digital experiences with both aesthetic appeal
        and functional excellence.&rdquo;
      </p>
    </section>
  );
};

export default About;