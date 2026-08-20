import React from 'react';
import { GraduationCap, Calendar, MapPin, Building2, BookOpen, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Education() {
  const { education } = personalInfo;

  return (
    <section id="education" className="py-20 relative border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Premium Glass Badge */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#26D868]/10 border border-[#26D868]/30 text-[#26D868] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-md backdrop-blur-md">
            <GraduationCap className="w-4 h-4 text-[#26D868]" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Degree coursework and engineering specialization at IMS Engineering College.
          </p>
        </div>

        {/* Education Card in Green Theme */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-2xl p-7 sm:p-8 border border-[#26D868]/25 hover:border-[#26D868]/50 transition-all shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#26D868]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#26D868]/15 border border-[#26D868]/30 flex items-center justify-center text-[#26D868] shrink-0 shadow-lg">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {education.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-200 text-sm mt-1">
                    <Building2 className="w-4 h-4 text-[#26D868] shrink-0" />
                    <span className="font-semibold text-slate-100">{education.college}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#26D868]/15 border border-[#26D868]/40 text-[#26D868] text-xs font-mono font-bold shadow-md">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-mono font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#26D868]" />
                  {education.location}
                </span>
              </div>
            </div>

            {/* Coursework Focus */}
            <div className="pt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#26D868]/10 border border-[#26D868]/30 text-[#26D868] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <BookOpen className="w-3.5 h-3.5 text-[#26D868]" />
                <span>CORE COMPUTER SCIENCE COURSEWORK</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Data Structures & Algorithms",
                  "Object-Oriented Programming (OOP)",
                  "Database Management Systems (DBMS)",
                  "Operating Systems",
                  "Computer Networks",
                  "Web Technologies"
                ].map((course, i) => (
                  <span 
                    key={i}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 text-slate-200 text-xs border border-slate-800 font-mono font-semibold hover:border-[#26D868]/50 hover:text-[#26D868] transition-colors shadow-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
