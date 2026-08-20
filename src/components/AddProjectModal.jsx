import React, { useState, useEffect } from 'react';
import { X, Plus, Terminal, Code, Sparkles, Link, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function AddProjectModal({ onClose, onAddProject }) {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    technologies: '',
    github: '',
    liveDemo: '',
    features: '',
    overview: '',
    problem: '',
    solution: '',
    myRole: ''
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    // Parse technologies into an array
    const techArray = formData.technologies
      ? formData.technologies.split(',').map(t => t.trim()).filter(Boolean)
      : ['React.js', 'JavaScript', 'Node.js'];

    // Parse features into an array
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
        overview: formData.overview || formData.description,
        problem: formData.problem || 'Need for scalable, modern web implementation.',
        solution: formData.solution || 'Engineered using modern JavaScript, React, and modular backend architecture.',
        myRole: formData.myRole || 'Full-Stack Developer — Designed frontend components, database models, and backend logic.',
        architecture: [
          'React Frontend -> Client REST State Engine',
          'Node.js / Express Backend -> API Routing Middleware',
          'Database Storage -> Persistent Collections'
        ],
        challenges: [
          'Ensuring responsive UI components across mobile and desktop breakpoints.',
          'Optimizing data fetching and state synchronization.'
        ]
      }
    };

    onAddProject(newProject);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#0b0f19]/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="fixed inset-0"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/70 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#26D868] mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>PROJECT DASHBOARD</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Add New Project
            </h3>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Add a new custom project to your live portfolio grid dynamically.
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

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                Project Title <span className="text-[#26D868]">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. AI Workflow Builder"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#26D868] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                Subtitle / Category Tag
              </label>
              <input
                type="text"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                placeholder="e.g. Real-Time Automation Platform"
                className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#26D868] text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
              Project Description <span className="text-[#26D868]">*</span>
            </label>
            <textarea
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              placeholder="Developed a scalable web application that..."
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#26D868] text-sm resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                placeholder="React.js, Node.js, Express, MongoDB, Socket.IO"
                className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#26D868] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                GitHub Repository URL
              </label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="https://github.com/saurabh-yadav16/my-project"
                className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#26D868] text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
              Live Demo URL
            </label>
            <input
              type="url"
              name="liveDemo"
              value={formData.liveDemo}
              onChange={handleChange}
              placeholder="https://my-project.vercel.app/"
              className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#26D868] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
              Key Features (one feature per line)
            </label>
            <textarea
              name="features"
              rows={3}
              value={formData.features}
              onChange={handleChange}
              placeholder="Real-time WebSocket event synchronization&#10;JWT authentication & session security&#10;MongoDB GeoJSON location matching"
              className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#26D868] text-sm font-mono"
            />
          </div>

          {/* Optional Case Study Details */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-[#38bdf8] font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Optional Case Study Details
            </h4>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-1">
                The Engineering Problem
              </label>
              <input
                type="text"
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                placeholder="High latency and lack of synchronized state..."
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-1">
                The Technical Solution
              </label>
              <input
                type="text"
                name="solution"
                value={formData.solution}
                onChange={handleChange}
                placeholder="Dispatched event vectors over Socket.IO websockets..."
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 text-xs"
              />
            </div>
          </div>

          {/* Submit Actions */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 text-xs font-bold text-slate-950 bg-[#26D868] hover:bg-[#22c35e] rounded-lg shadow-lg shadow-[#26D868]/20 transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Project to Portfolio</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
