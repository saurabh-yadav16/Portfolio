import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, heroContent } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 mb-6 shadow-xl backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#26D868] animate-pulse" />
            <span className="text-slate-300 font-semibold">
              Full-Stack & Backend Engineer <span className="text-[#26D868] font-bold">(Graduating 2027)</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6">
            Building secure, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#26D868] via-emerald-400 to-teal-300 bg-clip-text text-transparent">
              scalable web applications
            </span> <br />
            with real-time experiences.
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-3xl">
            Hi, I'm <strong className="text-white font-bold">{personalInfo.name}</strong> — a Computer Science undergraduate and aspiring Software Engineer with hands-on experience building full-stack applications using React.js, Node.js, Express.js, MongoDB, MySQL, and REST APIs.
          </p>

          {/* Action Buttons & Monospace Comment */}
          <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            
            <div className="flex items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-8 py-4 text-lg font-black text-slate-950 bg-[#26D868] hover:bg-[#22c35e] rounded-xl shadow-xl shadow-[#26D868]/25 transition-all flex items-center justify-center gap-2.5 group transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Code Comment string */}
            <div className="font-mono text-xs sm:text-sm text-slate-400 font-bold tracking-wide select-none">
              // developer // problem-solver // backend-engineer
            </div>

          </div>

          {/* Social Profile Links */}
          <div className="flex items-center gap-4 pt-8 text-slate-300">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#26D868] hover:text-[#26D868] transition-all flex items-center gap-2 text-xs font-semibold shadow-md"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#26D868] hover:text-[#26D868] transition-all flex items-center gap-2 text-xs font-semibold shadow-md"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.social.email}
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#26D868] hover:text-[#26D868] transition-all flex items-center gap-2 text-xs font-semibold shadow-md"
              aria-label="Email"
            >
              <Terminal className="w-5 h-5 text-[#26D868]" />
              <span>Contact</span>
            </a>
          </div>

          {/* Tech Badges Pills */}
          <div className="pt-10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#26D868]"></span> Stack:
            </span>
            {heroContent.badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs font-mono text-slate-300 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
