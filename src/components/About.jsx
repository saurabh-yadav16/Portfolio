import React from 'react';
import { User, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { aboutContent, personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    { title: "Frontend Engineering", text: "React 19, TypeScript, Redux Toolkit, Tailwind CSS, Responsive UI Design" },
    { title: "Backend Systems", text: "Node.js, Express.js, RESTful APIs, JWT Auth, Microservice Architecture" },
    { title: "Real-Time Web", text: "Socket.IO WebSockets, Event-Driven Sync, Live Chat & Status Tracking" },
    { title: "Databases & Storage", text: "MongoDB, GeoJSON Spatial Queries, MySQL, Prisma, Schema Design" },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Premium Badge */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#26D868]/10 border border-[#26D868]/30 text-[#26D868] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-md backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-[#26D868]" />
            <span>ABOUT ME & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {aboutContent.heading}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Computer Science Undergraduate at IMS Engineering College, Ghaziabad.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Profile Details Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-7 rounded-2xl border border-[#26D868]/25 space-y-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-4">
                <img 
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-[#26D868] shadow-md shadow-[#26D868]/20 shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-xs text-[#26D868] font-mono font-bold">B.Tech Computer Science Engineering</p>
                  <p className="text-xs text-slate-400 font-medium">{personalInfo.education.college}</p>
                </div>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-slate-800">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#26D868] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Data Structures & Algorithms</h4>
                    <p className="text-xs text-slate-400">Strong problem-solving foundation in Java and C</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#26D868] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Full-Stack Web Architecture</h4>
                    <p className="text-xs text-slate-400">Building scalable React frontends & Node.js backends</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#26D868] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Real-Time Web & Security</h4>
                    <p className="text-xs text-slate-400">Socket.IO websockets, JWT auth, RBAC controls</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text & Technical Focus */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="glass-panel p-7 rounded-2xl border border-slate-800 space-y-4">
              {aboutContent.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-200 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="glass-panel glass-panel-hover p-5 rounded-xl border border-slate-800"
                >
                  <h4 className="text-sm font-bold text-[#26D868] mb-1 flex items-center gap-2 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-[#26D868]" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-normal">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
