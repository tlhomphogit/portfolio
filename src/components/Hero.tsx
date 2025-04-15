import { Mail, FileText } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/icons/profile.png';

const Hero = () => {
  return (
    <section id='portfolio' className="text-center text-neutral-100 py-0 px-0">
      <img
        src={profilePic}
        alt="Profile"
        className="w-40 h-40 rounded-full mx-auto object-cover border-2 border-blue-200"
      />
      <h1 className="text-4xl mb-4 font-bold">Tlhompho Ratlhogo</h1>
      <h2 className="text-2xl mb-4 font-bold bg-gradient-to-r from-blue-500 to-orange-200 bg-clip-text text-transparent">
        <TypeAnimation
          sequence={[
            "FULL STACK DEVELOPER",
            2000,
            "SYSTEM ANALYST",
            2000,
            "UI/UX DESIGNER",
            2000,
            "ARCHITECTURAL DESIGN",
            2000,
            "GRAPHICAL DESIGNER",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h2>
      <p className="max-w-3xl mx-auto px-4 text-sm leading-relaxed">
        I'm a passionate and versatile developer with a strong foundation in both design and development. I specialize in building modern web applications 
        using TypeScript, JavaScript, React + Vite, and bring a deep understanding of system analysis and data modeling using C++ and Oracle PL/SQL. 
        My expertise extends beyond code—I also have a creative edge in architectural design and graphical design, enabling me to craft visually 
        engaging user-centered digital experiences from concept to execution.
      </p>
      
      <div className="mt-6 space-x-4">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <FileText size={18} /> Resume
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          <Mail size={18} /> Email Me
        </a>
        
      </div>
      
    </section>
  );
};

export default Hero;
