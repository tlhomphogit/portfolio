import { useState } from "react";
//import { UserRound } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Portfolio", link: "#portfolio" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    {
      name: "Github",
      link: "https://github.com/tlhomphogit",
      external: true,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/tlhompho-ratlhogo-/",
      external: true,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-opacity-80 backdrop-blur-md shadow-md z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left - User Name */}
        <div className="flex items-center gap-2">
          <img src="/profile.png" alt="profile" className="h-10 w-10 border-1 border-blue-200 rounded-full"/>
          <h1 className="text-white font-semibold text-lg">Tlhompho-Dev</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-2">
          {navItems.map(({ name, link, external }) => (
            <li
              key={name}
              className="text-neutral-300 hover:text-blue-900 cursor-pointer border-b border-r rounded-md py-1 px-1 mx-1 transition"
            >
              {external ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              ) : (
                <a href={link}>{name}</a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-black bg-opacity-90 rounded mt-2 px-4 py-2">
          {navItems.map(({ name, link, external }) => (
            <li
              key={name}
              className="text-white py-1 border-b border-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              {external ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              ) : (
                <a href={link}>{name}</a>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

//<UserRound className="w-8 h-8" />