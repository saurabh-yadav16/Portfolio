import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, AlertTriangle, ShieldCheck, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#0b0f19]/85 backdrop-blur-md overflow-y-auto">
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/80 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#26D868] mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>PROJECT CASE STUDY</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300">
          
          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveDemo && project.liveDemo !== '#' && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-bold text-slate-950 bg-[#26D868] hover:bg-[#22c35e] rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-[#26D868]/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Project Demo</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-[#26D868] rounded-xl transition-all flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-[#26D868]" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Overview */}
          <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-sm uppercase tracking-wider text-[#26D868] font-mono flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Project Overview
            </h4>
            <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
              {caseStudy.overview}
            </p>
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-xl border border-rose-900/30 bg-rose-950/10 space-y-2">
              <h4 className="text-sm font-bold text-rose-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                The Problem
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-[#26D868]/30 bg-[#26D868]/10 space-y-2">
              <h4 className="text-sm font-bold text-[#26D868] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#26D868]" />
                Engineering Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* My Role */}
          <div className="glass-panel p-6 rounded-xl border border-[#26D868]/30 bg-[#26D868]/10">
            <h4 className="text-sm font-bold text-[#26D868] mb-2 font-mono">My Engineering Role</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {caseStudy.myRole}
            </p>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-400 font-mono mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-slate-800 text-[#26D868] border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-400 font-mono mb-4">
              Key Features & Functionalities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#26D868] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#26D868]" />
              System Architecture & Flow
            </h4>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-[#26D868] space-y-2">
              {caseStudy.architecture.map((line, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-[#26D868]">➜</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-400 font-mono mb-3">
              Key Implementation Challenges Overcome
            </h4>
            <ul className="space-y-2">
              {caseStudy.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#26D868] shrink-0 mt-2" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Saurabh Yadav Portfolio Case Study
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
