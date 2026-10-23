import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import nodeIcon from '../assets/icons/nodejsC.svg';
import jsIcon from '../assets/icons/javascript.svg';
import tsIcon from '../assets/icons/typescript.svg';
import reactIcon from '../assets/icons/react.svg';
import vscodeIcon from '../assets/icons/vscode.svg';
import cBuilder from '../assets/icons/cbuilderweb.webp';
import delphi from '../assets/icons/delphi.png';
import viteIcon from '../assets/icons/vite.svg';
import oracleIcon from '../assets/icons/oracle.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import mongoIcon from '../assets/icons/mongodb.svg';
import cssIcon from '../assets/icons/css.svg';
import htmlIcon from '../assets/icons/html.svg';

import canva from '../assets/icons/canva.svg';
import psIcon from '../assets/icons/ps.svg';
import xdIcon from '../assets/icons/adobe-xd.svg';
import aiIcon from '../assets/icons/ai.svg';
import archicadIcon from '../assets/icons/archicad.png';
import blenderIcon from '../assets/icons/blender.svg';
import tMotionIcon from '../assets/icons/twinmotion.svg';

const Technologies = () => {
  const devIcons = [
    { src: nodeIcon, alt: "Node.js" },
    { src: jsIcon, alt: "JavaScript" },
    { src: tsIcon, alt: "TypeScript" },
    { src: vscodeIcon, alt: "Visual Studio Code" },
    { src: cBuilder, alt: "C++ Builder" },
    { src: delphi, alt: "Delphi" },
    { src: reactIcon, alt: "React" },
    { src: viteIcon, alt: "Vite" },
    { src: oracleIcon, alt: "Oracle" },
    { src: mysqlIcon, alt: "MySQL" },
    { src: mongoIcon, alt: "MongoDB" },
    { src: cssIcon, alt: "CSS" },
    { src: htmlIcon, alt: "HTML" },
  ];

  const designIcons = [
    { src: canva, alt: "Canva" },
    { src: psIcon, alt: "Adobe Photoshop" },
    { src: xdIcon, alt: "Adobe XD" },
    { src: aiIcon, alt: "Adobe Illustrator" },
    { src: archicadIcon, alt: "ArchiCAD" },
    { src: tMotionIcon, alt: "Twinmotion" },
    { src: blenderIcon, alt: "Blender" },
  ];

  return (
    <section className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm transition-colors duration-200">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-center mb-8">
        Tech Stack & Tools
      </h2>

      {/* Development Category */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 text-center mb-5">
          Development & Systems
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {devIcons.map((icon, index) => (
            <div
              key={index}
              data-tooltip-id={`tooltip-dev-${index}`}
              data-tooltip-content={icon.alt}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:scale-105 transition-all duration-200 flex items-center justify-center cursor-pointer shadow-xs"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="h-8 w-8 object-contain"
              />
              <Tooltip id={`tooltip-dev-${index}`} place="top" className="text-xs px-2 py-1 z-30" />
            </div>
          ))}
        </div>
      </div>

      {/* Design & Creative Category */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 text-center mb-5">
          Design & Creative
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {designIcons.map((icon, index) => (
            <div
              key={index}
              data-tooltip-id={`tooltip-design-${index}`}
              data-tooltip-content={icon.alt}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:scale-105 transition-all duration-200 flex items-center justify-center cursor-pointer shadow-xs"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="h-8 w-8 object-contain"
              />
              <Tooltip id={`tooltip-design-${index}`} place="top" className="text-xs px-2 py-1 z-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
