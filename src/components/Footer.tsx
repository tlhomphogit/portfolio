// src/components/Footer.tsx
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (


    <section id='footer'>
        <footer className="text-center py-4 text-neutral-400 text-sm border-t border-gray-700 mt-10">
        <p>&copy; {new Date().getFullYear()} Tlhompho Ratlhogo. All rights reserved.</p>

        <ul className="flex justify-center space-x-2 px-5 py-5 border-b">
            <li className='hover:text-blue-600'>
                <a href="https://github.com/tlhomphogit" className="flex items-center gap-2">
                <Github size={18} />
                Github
                 </a>
            </li>
            <li>
                <a href="">|</a>
            </li>
            <li className='hover:text-blue-600'>
                <a href="https://linkedin.com/in/tlhompho-ratlhogo-/" className="flex items-center gap-2">
                <Linkedin size={18} />
                LinkedIn
                </a>
            </li>
        </ul>

        </footer>
    </section>


    );
  };
  
  export default Footer;