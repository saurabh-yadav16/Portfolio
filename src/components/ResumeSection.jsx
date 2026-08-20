import React from 'react';
import { FileText, ArrowRight, Mail, Download } from 'lucide-react';

export default function ResumeSection({ onDownloadResume }) {
  return (
    <section className="py-20 relative border-y border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl border border-[#26D868]/30 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#26D868]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#26D868]/15 border border-[#26D868]/30 flex items-center justify-center text-[#26D868] mx-auto shadow-lg">
              <FileText className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Want to know more about my experience?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Download my complete technical resume or get in touch directly to discuss Full-Stack & Software Engineering opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onDownloadResume}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-[#26D868] hover:bg-[#22c35e] rounded-xl shadow-xl shadow-[#26D868]/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 text-base font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-[#26D868] hover:text-[#26D868] rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 text-base font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-[#26D868] hover:text-[#26D868] rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
