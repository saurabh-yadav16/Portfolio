import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Moving Grid */}
      <div className="absolute inset-0 bg-grid-animated opacity-60" />

      {/* Floating Animated Ambient Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#26D868]/15 rounded-full blur-[150px] animate-orb-glow-1" />
      <div className="absolute top-1/3 -right-32 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] animate-orb-glow-2" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[130px] animate-orb-glow-1" />

      {/* Drifting Background Particles */}
      <div className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-[#26D868]/40 animate-particle" />
      <div className="absolute top-1/4 left-[80%] w-3 h-3 rounded-full bg-[#26D868]/30 animate-particle [animation-delay:2s]" />
      <div className="absolute top-1/2 left-[45%] w-2.5 h-2.5 rounded-full bg-emerald-400/40 animate-particle [animation-delay:4s]" />
      <div className="absolute top-[70%] left-[20%] w-3 h-3 rounded-full bg-[#26D868]/30 animate-particle [animation-delay:6s]" />
      <div className="absolute bottom-20 left-[75%] w-2 h-2 rounded-full bg-teal-400/40 animate-particle [animation-delay:8s]" />

      {/* Background Code Watermarks Floating across the page */}
      <div className="absolute top-48 right-[10%] font-mono text-[140px] font-extrabold text-slate-800/10 select-none animate-float-slow">
        &lt;/&gt;
      </div>
      <div className="absolute top-[60%] left-[5%] font-mono text-[160px] font-extrabold text-slate-800/10 select-none animate-float-reverse">
        &#123; &#125;
      </div>
      <div className="absolute bottom-32 right-[8%] font-mono text-[120px] font-extrabold text-slate-800/10 select-none animate-float-slow">
        //
      </div>
    </div>
  );
}
