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
    { src: vscodeIcon, alt: "Visual Studion Code"},
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
    <div className="flex flex-col items-center mt-10 mb-20 bg-[rgba(240,235,235,0.21)] m-6 rounded-2xl p-6">
      <h2 className="text-neutral-300 text-lg mb-6 mt-2 border-b border-r rounded-md px-2 py-2">TECH STACK & TOOLS</h2>

      <h5 className="text-neutral-300 text-lg mb-6">Development:</h5>
      <div className="flex flex-wrap justify-center gap-6">
        {devIcons.map((icon, index) => (
          <div key={index}>
            <img
              src={icon.src}
              alt={icon.alt}
              data-tooltip-id={`tooltip-dev-${index}`}
              data-tooltip-content={icon.alt}
              className="h-8 w-8 cursor-pointer"
            />
            <Tooltip id={`tooltip-dev-${index}`} place="top" className="text-sm px-2 py-1" />
          </div>
        ))}
      </div>

      <h5 className="text-neutral-300 text-lg mt-10 mb-6">Design & Creative</h5>
      <div className="flex flex-wrap justify-center gap-6 mb-2">
        {designIcons.map((icon, index) => (
          <div key={index}>
            <img
              src={icon.src}
              alt={icon.alt}
              data-tooltip-id={`tooltip-design-${index}`}
              data-tooltip-content={icon.alt}
              className="h-8 w-8 cursor-pointer"
            />
            <Tooltip id={`tooltip-design-${index}`} place="top" className="text-sm px-2 py-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
