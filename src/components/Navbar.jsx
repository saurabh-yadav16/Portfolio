import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onDownloadResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'education', 'principles', 'projects', 'stack', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Stack', href: '#stack', id: 'stack' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Profile Avatar */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img 
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-[#26D868] shadow-md shadow-[#26D868]/20 group-hover:scale-105 transition-transform"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#26D868] rounded-full border-2 border-[#0b0f19]" />
            </div>
            <div className="flex items-center gap-1 font-mono font-bold text-lg tracking-tight text-slate-100 group-hover:text-[#26D868] transition-colors">
              <span className="text-[#26D868]">&lt;/</span>
              <span className="text-white">saurabh</span>
              <span className="text-[#26D868]">&gt;</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-[#26D868] font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={onDownloadResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 border border-slate-700 hover:border-[#26D868] hover:text-[#26D868] rounded-lg transition-all shadow-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0f19]/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-4 pb-6 transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#26D868]/10 text-[#26D868] border border-[#26D868]/30'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownloadResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-950 bg-[#26D868] rounded-lg shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
