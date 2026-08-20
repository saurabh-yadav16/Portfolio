import React from 'react';
import { ArrowRight, FileText, Mail, Terminal, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onDownloadResume }) {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Code Declaration Tag */}
            <div className="font-mono text-base sm:text-lg flex items-center gap-2 font-bold">
              <span className="text-[#26D868]">const</span>
              <span className="text-white">developer</span>
              <span className="text-[#26D868]">=</span>
              <span className="text-[#26D868]">"{personalInfo.name}"</span>
              <span className="text-slate-400">;</span>
            </div>

            {/* Main Headline with Extra Bold Font */}
            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
                Full-Stack Developer
              </h1>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 flex items-center flex-wrap leading-tight">
                <span>Building things that just work.</span>
                <span className="inline-block w-2 h-9 sm:h-11 bg-[#26D868] ml-2 animate-blink" />
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-200 font-semibold max-w-2xl leading-relaxed pt-1">
              Hi, I'm <strong className="text-white font-extrabold">{personalInfo.name}</strong> — a Computer Science undergraduate and Full-Stack Developer. I build end-to-end web applications, connecting intuitive frontends with scalable backend systems focused on clean architecture, performance, and production-ready results.
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

                <button
                  onClick={onDownloadResume}
                  className="px-7 py-4 text-base font-extrabold text-slate-100 bg-slate-900/90 border-2 border-slate-700 hover:border-[#26D868] hover:text-[#26D868] rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </button>
              </div>

              {/* Code Comment string */}
              <div className="font-mono text-xs sm:text-sm text-slate-400 font-bold tracking-wide select-none">
                // developer // problem-solver // backend-engineer
              </div>

            </div>

            {/* Social Profile Links */}
            <div className="flex items-center gap-4 pt-2 text-slate-300">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border-2 border-slate-800 hover:border-[#26D868] hover:text-[#26D868] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border-2 border-slate-800 hover:border-[#26D868] hover:text-[#26D868] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.social.email}
                className="p-3.5 rounded-xl bg-slate-900 border-2 border-slate-800 hover:border-[#26D868] hover:text-[#26D868] transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column - Perfectly Aligned Vertical Stack Container */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center lg:items-end w-full">
            <div className="w-full max-w-[320px] flex flex-col items-center space-y-6">
              
              {/* Profile Picture Card */}
              <div className="relative group w-full">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#26D868] to-emerald-500 opacity-40 blur-xl group-hover:opacity-75 transition-opacity" />
                
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#26D868]/60 bg-slate-900 shadow-2xl w-full">
                  
                  {/* Available Status Pill */}
                  <div className="absolute top-3 right-3 z-10 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-[#26D868]/50 text-[#26D868] text-xs font-mono font-black backdrop-blur-md flex items-center gap-1.5 shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#26D868] animate-ping" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#26D868] -ml-4" />
                    <span>Available</span>
                  </div>

                  <img 
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-500"
                  />

                  {/* Frosted Glass Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4.5 bg-slate-950/90 backdrop-blur-md border-t-2 border-[#26D868]/40">
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight drop-shadow-md flex items-center justify-between">
                      <span>{personalInfo.name}</span>
                      <Sparkles className="w-4 h-4 text-[#26D868]" />
                    </h3>
                    <p className="text-xs sm:text-sm font-extrabold text-[#26D868] mt-1 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 shrink-0" />
                      <span>IMS Engineering College, Ghaziabad</span>
                    </p>
                  </div>

                </div>
              </div>

              {/* Floating Yellow Coding Mantra Sticky Card */}
              <div className="mantra-card p-5.5 rounded-2xl w-full relative border-2 border-amber-400/50 shadow-2xl">
                <div className="text-4xl font-serif text-slate-900 leading-none mb-1 opacity-80 font-black">
                  “
                </div>
                <p className="text-slate-950 font-black text-base sm:text-lg italic leading-snug">
                  Design with Intent. Develop with discipline.
                </p>
                <div className="mt-4.5 pt-3 border-t-2 border-slate-950/20 flex items-center justify-between">
                  <span className="text-xs font-mono font-black uppercase tracking-widest text-slate-950">
                    —— CODING MANTRA
                  </span>
                  <Terminal className="w-4 h-4 text-slate-900 stroke-[3]" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
