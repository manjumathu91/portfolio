import { useState } from 'react';
import { Menu, X, Home, User, GraduationCap, Wrench, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import infinityLogo from '../assets/logo.jpg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Education', href: '#education', icon: <GraduationCap size={18} /> },
    { name: 'Tools', href: '#tools', icon: <Wrench size={18} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={18} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={18} /> }
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/60 backdrop-blur-lg border-b border-white/10"
    >
      <div className="flex items-center gap-2">
        <img src={infinityLogo} alt="Logo" className="w-8 h-8 object-contain" />
        <span className="text-white font-bold text-lg hidden sm:block">PORTFOLIO</span>
      </div>

      <ul className="hidden lg:flex gap-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="flex items-center gap-2 text-[12px] font-bold uppercase text-gray-400 hover:text-pink-500 transition-colors">
              <span className="text-pink-500">{link.icon}</span> {link.name}
            </a>
          </li>
        ))}
      </ul>

      <button className="lg:hidden text-pink-500" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 p-6 flex flex-col gap-4 lg:hidden border-b border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-sm font-bold uppercase text-white hover:text-pink-500">
              <span className="text-pink-500">{link.icon}</span> {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;