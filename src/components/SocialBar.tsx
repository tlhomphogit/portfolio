// src/components/SocialBar.tsx
import { Tooltip } from 'react-tooltip';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const SocialBar = () => {
  const socials = [
    {
      href: "https://github.com/tlhomphogit",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/tlhompho-ratlhogo-/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://facebook.com/tlhompho.success",
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: "https://instagram.com/superdareallest",
      icon: Instagram,
      label: "Instagram",
    },
  ];

  return (
    <aside
      aria-label="Social media profiles"
      className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-3 p-2.5 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-md z-40 transition-colors duration-200"
    >
      {socials.map(({ href, icon: Icon, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          data-tooltip-id={`tooltip-social-${index}`}
          data-tooltip-content={label}
          className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        >
          <Icon className="w-5 h-5 transition-transform hover:scale-110" />
          <Tooltip id={`tooltip-social-${index}`} place="right" className="text-xs px-2 py-1 z-50" />
        </a>
      ))}
    </aside>
  );
};

export default SocialBar;
