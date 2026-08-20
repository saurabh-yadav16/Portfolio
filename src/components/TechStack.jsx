import React from 'react';
import { Code, Terminal, Server, Database, Key, Wrench, BookOpen } from 'lucide-react';

export default function TechStack() {
  const categories = [
    {
      id: "languages",
      category: "Languages",
      description: "Languages and problem-solving tools I use for backend logic, algorithm design, and structured scripts.",
      icon: Code,
      skills: [
        { name: "C", iconText: "C" },
        { name: "Java", iconText: "☕" },
        { name: "JavaScript", iconText: "JS" },
        { name: "TypeScript", iconText: "TS" },
        { name: "Data Structures & Algorithms with Java", iconText: "DSA" }
      ]
    },
    {
      id: "frontend",
      category: "Frontend",
      description: "Frontend technologies used for creating responsive, user-focused interfaces and smooth SPA workflows.",
      icon: Terminal,
      skills: [
        { name: "React.js", iconText: "⚛️" },
        { name: "Tailwind CSS", iconText: "🎨" },
        { name: "HTML5", iconText: "🌐" },
        { name: "CSS3", iconText: "🎯" },
        { name: "EJS", iconText: "📄" },
        { name: "Responsive UI Development", iconText: "📱" }
      ]
    },
    {
      id: "backend",
      category: "Backend",
      description: "Backend architectures, event-driven web services, and real-time communication engines.",
      icon: Server,
      skills: [
        { name: "Node.js", iconText: "🟢" },
        { name: "Express.js", iconText: "⚡" },
        { name: "REST APIs", iconText: "🔌" },
        { name: "Socket.IO", iconText: "⚡" }
      ]
    },
    {
      id: "databases",
      category: "Databases",
      description: "Robust database systems, ORMs, spatial indexing, and persistent data engines.",
      icon: Database,
      skills: [
        { name: "MongoDB", iconText: "🍃" },
        { name: "MySQL", iconText: "🐬" },
        { name: "Prisma", iconText: "💎" },
        { name: "Database Design", iconText: "📐" },
        { name: "Persistent Storage", iconText: "💾" }
      ]
    },
    {
      id: "authentication",
      category: "Authentication",
      description: "Security protocols, role-based access control (RBAC), session tokens, and OAuth workflows.",
      icon: Key,
      skills: [
        { name: "JWT", iconText: "🔑" },
        { name: "GitHub OAuth", iconText: "🔐" }
      ]
    },
    {
      id: "tools",
      category: "Tools & Platforms",
      description: "Workflow tools that help debug, compile, test, and control application versions.",
      icon: Wrench,
      skills: [
        { name: "Git", iconText: "🔀" },
        { name: "GitHub", iconText: "🐙" },
        { name: "VS Code", iconText: "💻" },
        { name: "Postman", iconText: "🚀" },
        { name: "IntelliJ IDEA", iconText: "💡" }
      ]
    },
    {
      id: "core-cs",
      category: "Coursework & Core CS",
      description: "Fundamental computer science theory, systems architecture, and core engineering paradigms.",
      icon: BookOpen,
      skills: [
        { name: "Object-Oriented Programming", iconText: "🧩" },
        { name: "Database Management Systems", iconText: "🗄️" },
        { name: "Operating Systems", iconText: "⚙️" },
        { name: "Computer Networks", iconText: "🌐" }
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 relative border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#26D868]/15 border border-[#26D868]/40 text-[#26D868] text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-md backdrop-blur-md">
            <Terminal className="w-4 h-4 text-[#26D868]" />
            <span>TECHNICAL SKILLSET & TECH STACK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Tools, Languages & Frameworks
          </h2>
          <p className="text-slate-200 text-base font-semibold mt-3">
            Categorized technical stack based on verified resume experience.
          </p>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div 
                key={cat.id}
                className="glass-panel glass-panel-hover p-7 rounded-2xl border-2 border-slate-800 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Card Header: Icon & Category Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border-2 border-slate-800 flex items-center justify-center text-[#26D868] shadow-md shrink-0">
                      <IconComp className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Subtitle Description */}
                  <p className="text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Rich Tech Badges / Pills */}
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900 border-2 border-slate-800 hover:border-[#26D868]/60 hover:bg-slate-800/90 transition-all cursor-default group shadow-sm"
                      >
                        <span className="w-6.5 h-6.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-mono font-black shrink-0">
                          {skill.iconText}
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-slate-100 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
