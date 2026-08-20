import React, { useState } from 'react';
import { ExternalLink, BookOpen, Sparkles, Check, ArrowRight, Terminal, Plus, RotateCcw, LayoutGrid, SlidersHorizontal, Trash2, FolderPlus, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ projects, onSelectCaseStudy, onAddProject, onDeleteProject, onResetProjects }) {
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'dashboard'
  
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    technologies: '',
    github: '',
    liveDemo: '',
    features: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const techArray = formData.technologies
      ? formData.technologies.split(',').map(t => t.trim()).filter(Boolean)
      : ['React.js', 'JavaScript', 'Node.js'];

    const featuresArray = formData.features
      ? formData.features.split('\n').map(f => f.trim()).filter(Boolean)
      : ['Full-stack modular architecture', 'Responsive dark UI', 'Clean REST API endpoints'];

    const newProject = {
      id: `project-${Date.now()}`,
      title: formData.title,
      subtitle: formData.subtitle || 'Custom Full-Stack Web Application',
      featured: true,
      description: formData.description,
      technologies: techArray,
      github: formData.github || 'https://github.com/saurabh-yadav16',
      liveDemo: formData.liveDemo || '#',
      features: featuresArray,
      caseStudy: {
        overview: formData.description,
        problem: 'Need for scalable, modern full-stack web application.',
        solution: 'Engineered using modern JavaScript, React, and modular backend architecture.',
        myRole: 'Full-Stack Developer — Designed components, REST routing, and database models.',
        architecture: [
          'React Frontend -> Client State Controller',
          'Node.js / Express Backend -> REST Middleware',
          'Database Storage -> Persistent Collection Engine'
        ],
        challenges: [
          'Building responsive UI across mobile and desktop devices.',
          'Optimizing API latency and state updates.'
        ]
      }
    };

    onAddProject(newProject);
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      technologies: '',
      github: '',
      liveDemo: '',
      features: ''
    });
    setActiveTab('gallery');
  };

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Dashboard Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="font-mono text-xs text-[#26D868] tracking-widest uppercase mb-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>// FEATURED PROJECTS & MANAGEMENT DASHBOARD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Work & Real-Time Case Studies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Full-stack web applications built with React, Node.js, Express, MongoDB, and Socket.IO.
            </p>
          </div>

          {/* Section View Tabs */}
          <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'gallery'
                  ? 'bg-[#26D868] text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Project Gallery ({projects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-[#26D868] text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <FolderPlus className="w-4 h-4" />
              <span>+ Add Project Dashboard</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Project Cards Gallery */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="glass-panel glass-panel-hover rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="space-y-1">
                    <span className="px-2.5 py-1 rounded-md bg-[#26D868]/10 border border-[#26D868]/30 text-[#26D868] text-[11px] font-mono uppercase tracking-wider">
                      Full-Stack Project
                    </span>
                    <h3 className="text-2xl font-bold text-white hover:text-[#38bdf8] transition-colors pt-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 6).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-2 py-1 text-[10px] text-slate-500 font-mono">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                      Key Features
                    </h4>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-[#26D868] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 bg-slate-950/80 border-t border-slate-800 space-y-3">
                  <button
                    onClick={() => onSelectCaseStudy(project)}
                    className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-[#26D868] hover:bg-[#22c35e] rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#26D868]/15"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveDemo && project.liveDemo !== '#' && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-[#38bdf8] rounded-lg transition-all flex items-center justify-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-[#38bdf8] rounded-lg transition-all flex items-center justify-center gap-1.5"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Inline Dashboard Launcher Card inside Grid */}
            <div 
              onClick={() => setActiveTab('dashboard')}
              className="rounded-2xl border-2 border-dashed border-[#26D868]/40 hover:border-[#26D868] bg-[#26D868]/5 hover:bg-[#26D868]/10 transition-all flex flex-col items-center justify-center p-8 text-center cursor-pointer group min-h-[380px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#26D868]/20 border border-[#26D868]/40 flex items-center justify-center text-[#26D868] mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Plus className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#26D868] transition-colors">
                Add Project Dashboard
              </h3>
              <p className="text-xs text-slate-400 max-w-xs mt-2 leading-relaxed">
                Click to open the inline management dashboard and add custom project cards to this section.
              </p>
              <span className="mt-6 px-4 py-2 rounded-lg bg-[#26D868] text-slate-950 text-xs font-bold shadow-md">
                Open Dashboard →
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Embedded Project Management Dashboard Panel */}
        {activeTab === 'dashboard' && (
          <div className="glass-panel rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-8 bg-slate-900/90 shadow-2xl animate-fade-in">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <FolderPlus className="w-6 h-6 text-[#26D868]" />
                  Inline Project Dashboard
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Create new projects dynamically or manage existing entries in your portfolio.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {onResetProjects && (
                  <button
                    onClick={onResetProjects}
                    className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Defaults</span>
                  </button>
                )}
                
                <button
                  onClick={() => setActiveTab('gallery')}
                  className="px-4 py-2 text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Back to Gallery
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form Column */}
              <div className="lg:col-span-7 space-y-5">
                <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider font-mono flex items-center gap-2">
                  <Plus className="w-4 h-4 text-[#26D868]" />
                  Add New Project Form
                </h4>

                <form onSubmit={handleSubmit} className="space-y-4 bg-slate-950/70 p-6 rounded-xl border border-slate-800">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                        Title <span className="text-[#26D868]">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. AI Workflow Engine"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#26D868]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                        Subtitle / Tagline
                      </label>
                      <input
                        type="text"
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={handleChange}
                        placeholder="e.g. No-Code Automation System"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#26D868]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                      Description <span className="text-[#26D868]">*</span>
                    </label>
                    <textarea
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Developed a responsive web application that enables users to..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#26D868] resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                        Tech Stack (comma-separated)
                      </label>
                      <input
                        type="text"
                        name="technologies"
                        value={formData.technologies}
                        onChange={handleChange}
                        placeholder="React.js, Node.js, Express, MongoDB"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#26D868]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                        GitHub Repo URL
                      </label>
                      <input
                        type="url"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                        placeholder="https://github.com/saurabh-yadav16/project"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#26D868]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                      Live Demo Link
                    </label>
                    <input
                      type="url"
                      name="liveDemo"
                      value={formData.liveDemo}
                      onChange={handleChange}
                      placeholder="https://myproject.vercel.app/"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#26D868]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                      Key Features (one line per feature)
                    </label>
                    <textarea
                      name="features"
                      rows={2}
                      value={formData.features}
                      onChange={handleChange}
                      placeholder="Real-time WebSocket event synchronization&#10;JWT authentication & session control"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs font-mono focus:outline-none focus:border-[#26D868]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-bold text-slate-950 bg-[#26D868] hover:bg-[#22c35e] rounded-lg shadow-lg shadow-[#26D868]/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Publish Project to Portfolio</span>
                  </button>
                </form>
              </div>

              {/* Live Portfolio List Column */}
              <div className="lg:col-span-5 space-y-4">
                <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider font-mono flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#38bdf8]" />
                  Current Portfolio Entries ({projects.length})
                </h4>

                <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
                  {projects.map((proj, idx) => (
                    <div 
                      key={proj.id} 
                      className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">{proj.title}</span>
                          {idx < 3 && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-indigo-950 text-cyan-300 border border-indigo-800">
                              Resume Standard
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{proj.subtitle}</p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {proj.technologies.slice(0, 3).map((t, i) => (
                            <span key={i} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {onDeleteProject && idx >= 3 && (
                        <button
                          onClick={() => onDeleteProject(proj.id)}
                          className="p-2 rounded-lg bg-rose-950/40 text-rose-400 hover:bg-rose-900/60 border border-rose-800/40 transition-colors shrink-0"
                          title="Delete custom project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
