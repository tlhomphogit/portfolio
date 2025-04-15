// src/components/SocialBar.tsx
import { Tooltip } from 'react-tooltip';
import { Star } from 'lucide-react';
import githubIcon from '../assets/icons/github-dark.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import facebookIcon from '../assets/icons/facebookC.svg';
import instagramIcon from '../assets/icons/instagramC.svg';

const SocialBar = () => {

  const socials = [
    {
      href: "https://github.com/tlhomphogit",icon: githubIcon,label: "GitHub",},
    {
      href: "https://linkedin.com/in/tlhompho-ratlhogo-/",icon: linkedinIcon,label: "LinkedIn",},
    {
      href: "https://facebook.com/tlhompho.success",icon: facebookIcon,label: "Facebook",},
    {
      href: "https://instagram.com/superdareallest",icon: instagramIcon,label: "Instagram",},
    ];

  return (
    <div className="hidden md:flex fixed top-15 left-0 h-screen w-12 rounded-md bg-gray-700 flex-col items-center justify-between py-6 z-50">
      {/* Top icons */}
      <div className="flex flex-col items-center space-y-4 mt-">
        {socials.map(({ href, icon, label }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-id={`tooltip-${index}`}
            data-tooltip-content={label}
          >
            <img
              src={icon}
              alt={label}
              className="w-6 invert transition-transform hover:scale-120"
            />
            <Tooltip id={`tooltip-${index}`} place="right" className="text-sm px-2 py-1" />
          </a>
        ))}
      </div>

      {/* Bottom Star icon */}
      <div className="flex mb-12" data-tooltip-id="tooltip-rate" data-tooltip-content="Rate Me">
        <a href="#rate">
            <Star className=" flex w-5 h-5 text-white transition-transform hover:scale-120" />
        </a>
        <Tooltip id="tooltip-rate" place="right" className="text-sm px-2 py-1" />
      </div>
    </div>
  );
};

export default SocialBar;