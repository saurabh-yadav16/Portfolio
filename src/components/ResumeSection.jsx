import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Eye, Sparkles, Printer, Check } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo, projects, techStackCategories, certifications } from '../data/portfolioData';

export default function ResumeSection({ onDownloadResume }) {
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'download'

  return (
    <section id="resume-document" className="py-20 relative border-y border-slate-800/80 bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#26D868]">
            <FileText className="w-4 h-4" />
            <span>EXACT RESUME FORMAT & VERIFIED DOCUMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Resume & Technical Profile
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Original single-page resume layout matching the official PDF document format.
          </p>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={onDownloadResume}
              className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-[#26D868] hover:bg-[#22c35e] transition-all shadow-lg shadow-[#26D868]/20 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF</span>
            </button>
            
            <button
              onClick={() => window.print()}
              className="px-5 py-2.5 rounded-xl font-medium text-xs text-slate-200 bg-slate-900 border border-slate-800 hover:border-[#26D868] transition-all flex items-center gap-2"
            >
              <Printer className="w-4 h-4 text-[#26D868]" />
              <span>Print Page</span>
            </button>
          </div>
        </div>

        {/* Paper Document Preview Card (Exact replica of original PDF layout) */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-12 border border-slate-700/80 shadow-2xl bg-white text-slate-900 font-serif leading-relaxed">
          
          {/* Resume Header */}
          <div className="text-center pb-4 border-b border-slate-300">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-normal text-slate-900 font-serif">
              {personalInfo.name}
            </h1>
            <div className="text-xs sm:text-sm text-slate-700 font-sans mt-2 flex flex-wrap items-center justify-center gap-2">
              <span>{personalInfo.phone}</span>
              <span className="text-slate-400">|</span>
              <a href={`mailto:${personalInfo.email}`} className="text-blue-700 hover:underline">{personalInfo.email}</a>
              <span className="text-slate-400">|</span>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
              <span className="text-slate-400">|</span>
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">GitHub</a>
              <span className="text-slate-400">|</span>
              <a href="#hero" className="text-blue-700 hover:underline">Portfolio</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="pt-4 pb-3 border-b border-slate-300">
            <h2 className="text-base font-bold text-slate-900 uppercase font-serif tracking-wide mb-1.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 leading-normal text-justify font-sans">
              {personalInfo.professionalSummary}
            </p>
          </div>

          {/* Education */}
          <div className="pt-4 pb-3 border-b border-slate-300">
            <h2 className="text-base font-bold text-slate-900 uppercase font-serif tracking-wide mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline font-sans text-xs sm:text-sm">
              <span className="font-bold text-slate-900">{personalInfo.education.college}</span>
              <span className="text-slate-700 text-xs font-semibold">{personalInfo.education.duration}</span>
            </div>
            <div className="flex justify-between items-baseline font-sans text-xs text-slate-700 mt-0.5">
              <span>{personalInfo.education.degree}</span>
              <span>{personalInfo.education.location}</span>
            </div>
          </div>

          {/* Projects */}
          <div className="pt-4 pb-3 border-b border-slate-300">
            <h2 className="text-base font-bold text-slate-900 uppercase font-serif tracking-wide mb-3">
              Projects
            </h2>
            
            <div className="space-y-4 font-sans text-xs sm:text-sm">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span className="text-sm font-bold">{proj.title}</span>
                    <div className="flex items-center gap-2 text-xs text-blue-700 font-normal">
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                      )}
                      {proj.github && proj.liveDemo && <span className="text-slate-400">|</span>}
                      {proj.liveDemo && (
                        <a href={proj.liveDemo} target="_blank" rel="noopener noreferrer" className="hover:underline">Live</a>
                      )}
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-600 italic">
                    {proj.technologies.join(', ')}
                  </p>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-slate-800 text-xs leading-normal">
                    {proj.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="pt-4 pb-3 border-b border-slate-300">
            <h2 className="text-base font-bold text-slate-900 uppercase font-serif tracking-wide mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 font-sans text-xs sm:text-sm">
              {techStackCategories.map((cat, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="font-bold text-slate-900 w-36 shrink-0 text-xs">{cat.category}:</span>
                  <span className="text-slate-800 text-xs">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="pt-4">
            <h2 className="text-base font-bold text-slate-900 uppercase font-serif tracking-wide mb-2">
              Certifications
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 font-sans text-xs text-slate-800">
              {certifications.map((c, i) => (
                <li key={i}>
                  <span className="font-semibold">{c.title}</span> — {c.issuer} | {c.year}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
