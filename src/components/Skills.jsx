import React from 'react';
import { Cpu, CheckCircle2, Terminal } from 'lucide-react';
import { skillBadges } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#26D868]/15 border border-[#26D868]/40 text-[#26D868] text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-md backdrop-blur-md">
            <Terminal className="w-4 h-4 text-[#26D868]" />
            <span>RECRUITER SUMMARY & SKILLS VISUALIZATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Verified Skills & Competencies
          </h2>
          <p className="text-slate-200 text-base font-semibold mt-2">
            Clean representation of verified skills without arbitrary percentage metrics.
          </p>
        </div>

        {/* Skill Badges Container with Bold Fonts */}
        <div className="max-w-5xl mx-auto glass-panel p-8 sm:p-10 rounded-2xl border-2 border-[#26D868]/30 shadow-2xl">
          <div className="flex flex-wrap justify-center gap-3.5">
            {skillBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4.5 py-3 rounded-xl bg-slate-900 border-2 border-slate-800 hover:border-[#26D868]/60 hover:bg-slate-800/90 transition-all duration-200 group cursor-default shadow-md"
              >
                <CheckCircle2 className="w-4 h-4 text-[#26D868] stroke-[3] group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-sm sm:text-base font-black text-white group-hover:text-[#26D868] transition-colors">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
