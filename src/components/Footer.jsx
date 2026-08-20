import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0f19] border-t border-slate-800/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand Logo with Profile Avatar */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group"
          >
            <img 
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-[#26D868] shadow-md shadow-[#26D868]/20 group-hover:scale-105 transition-transform"
            />
            <div>
              <div className="flex items-center gap-1 font-mono font-bold text-lg tracking-tight text-white group-hover:text-[#26D868] transition-colors">
                <span className="text-[#26D868]">&lt;/</span>
                <span>saurabh</span>
                <span className="text-[#26D868]">&gt;</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono block -mt-1">
                Software Engineer & Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 font-medium">
            <a href="#hero" className="hover:text-[#26D868] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#26D868] transition-colors">About</a>
            <a href="#stack" className="hover:text-[#26D868] transition-colors">Stack</a>
            <a href="#projects" className="hover:text-[#26D868] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#26D868] transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-slate-400">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-[#26D868] hover:border-[#26D868]/50 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-[#26D868] hover:border-[#26D868]/50 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.social.email}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-[#26D868] hover:border-[#26D868]/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Saurabh Yadav. Built with React & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#26D868] hover:border-[#26D868]/50 transition-colors font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
