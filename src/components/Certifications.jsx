import React from 'react';
import { Award, BarChart3, Code2, CheckCircle, Terminal } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const iconMap = {
    BarChart3: BarChart3,
    Code2: Code2
  };

  return (
    <section id="certifications" className="py-24 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="font-mono text-xs text-[#26D868] tracking-widest uppercase mb-2 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>// CREDENTIALS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Industry-recognized credentials validating full-stack development and data analysis expertise.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;
            return (
              <div 
                key={cert.id}
                className="glass-panel glass-panel-hover p-8 rounded-2xl border border-slate-800 relative overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#26D868]/15 border border-[#26D868]/30 flex items-center justify-center text-[#26D868] shadow-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-lg bg-[#26D868]/10 border border-[#26D868]/30 text-[#26D868] text-xs font-mono font-bold">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#26D868] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mb-4">
                    Issued by: <span className="text-slate-200 font-semibold">{cert.issuer}</span>
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-[#26D868] font-bold font-mono">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Credential</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
