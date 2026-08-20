import React from 'react';
import { Layers, Zap, ShieldCheck, Cpu, Terminal, Compass } from 'lucide-react';
import { principles } from '../data/portfolioData';

export default function Principles() {
  const iconMap = {
    Layers: Layers,
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    Cpu: Cpu
  };

  return (
    <section id="principles" className="py-24 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Premium Glass Badge */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#26D868]/10 border border-[#26D868]/30 text-[#26D868] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-md backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#26D868]" />
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Core Engineering Principles
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Architectural standards and technical foundations driving every software system I construct.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item) => {
            const IconComponent = iconMap[item.icon] || Layers;
            return (
              <div 
                key={item.id}
                className="glass-panel glass-panel-hover p-8 rounded-2xl border border-slate-800 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#26D868]/5 group-hover:bg-[#26D868]/15 rounded-full blur-2xl transition-all pointer-events-none" />

                <div className="w-12 h-12 rounded-xl bg-[#26D868]/15 border border-[#26D868]/30 flex items-center justify-center text-[#26D868] mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#26D868] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
