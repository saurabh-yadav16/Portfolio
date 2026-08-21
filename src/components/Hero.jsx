import React from 'react';
import { ArrowRight, Terminal, Sparkles, CheckCircle2, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, heroContent } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 shadow-xl backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#26D868] animate-pulse" />
              <span className="text-slate-300 font-semibold">
                Full-Stack & Backend Engineer <span className="text-[#26D868] font-bold">(Graduating 2027)</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Building secure, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#26D868] via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                scalable web applications
              </span> <br />
              with real-time experiences.
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Hi, I'm <strong className="text-white font-bold">{personalInfo.name}</strong> — a Computer Science undergraduate and aspiring Software Engineer with hands-on experience building full-stack applications using React.js, Node.js, Express.js, MongoDB, MySQL, and REST APIs.
            </p>

            {/* Action Buttons & Monospace Comment */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <a
                href="#projects"
                className="px-8 py-4 text-base sm:text-lg font-black text-slate-950 bg-[#26D868] hover:bg-[#22c35e] rounded-xl shadow-xl shadow-[#26D868]/25 transition-all flex items-center justify-center gap-2.5 group transform hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="font-mono text-xs sm:text-sm text-slate-400 font-bold tracking-wide select-none">
                // developer // problem-solver // backend-engineer
              </div>
            </div>

            {/* Social Profile Links */}
            <div className="flex items-center gap-3 pt-4 text-slate-300">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#26D868] hover:text-[#26D868] transition-all flex items-center gap-2 text-xs font-semibold shadow-md"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#26D868] hover:text-[#26D868] transition-all flex items-center gap-2 text-xs font-semibold shadow-md"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="#contact"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#26D868] hover:text-[#26D868] transition-all flex items-center gap-2 text-xs font-semibold shadow-md"
              >
                <Terminal className="w-4 h-4 text-[#26D868]" />
                <span>Contact</span>
              </a>
            </div>

            {/* Tech Badges Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#26D868]"></span> Stack:
              </span>
              {heroContent.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs font-mono text-slate-300 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: High-Impact Profile Picture Hero Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#26D868] via-emerald-500 to-teal-400 rounded-3xl blur-xl opacity-40 animate-pulse-slow"></div>

              {/* Glass Card Container */}
              <div className="relative glass-card rounded-3xl p-5 border border-slate-800 bg-[#0c121e]/90 shadow-2xl space-y-4">
                
                {/* Profile Image Frame */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 border-[#26D868]/40 shadow-inner group">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">{personalInfo.name}</h4>
                      <p className="text-[11px] text-[#26D868] font-mono font-medium">B.Tech CSE '27</p>
                    </div>
                    <div className="p-2 rounded-lg bg-[#26D868]/15 text-[#26D868]">
                      <Code2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Quick Bio Info Strip */}
                <div className="grid grid-cols-2 gap-2 text-center pt-1 font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="block text-xs text-slate-400">Target Role</span>
                    <span className="text-xs font-bold text-white">Software Eng</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="block text-xs text-slate-400">College</span>
                    <span className="text-xs font-bold text-[#26D868]">IMS College</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
