import React from 'react';
import { FileText, Download, Printer, ExternalLink } from 'lucide-react';
import { personalInfo, projects, techStackCategories, certifications } from '../data/portfolioData';

export default function ResumeSection({ onDownloadResume }) {
  return (
    <section id="exact-resume" className="py-16 relative bg-[#090d16] text-slate-900 font-serif">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 font-sans text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#26D868]/15 border border-[#26D868]/30 text-[#26D868]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Official Resume Document (Exact Format)</h3>
              <p className="text-xs text-slate-400">Standard single-page resume layout matching original PDF</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onDownloadResume}
              className="px-5 py-2 rounded-xl font-bold text-xs text-slate-950 bg-[#26D868] hover:bg-[#22c35e] transition-all flex items-center gap-2 shadow-lg shadow-[#26D868]/20"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl font-medium text-xs text-slate-200 bg-slate-800 border border-slate-700 hover:border-[#26D868] transition-all flex items-center gap-2"
            >
              <Printer className="w-4 h-4 text-[#26D868]" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Paper Document Container - Replicating Exact PDF Layout & Typography */}
        <div className="bg-white text-slate-950 p-8 sm:p-14 rounded-xl shadow-2xl border border-slate-200 font-serif leading-relaxed text-sm">
          
          {/* Header */}
          <div className="text-center pb-2">
            <h1 className="text-3xl sm:text-4xl font-normal text-slate-950 tracking-wide font-serif mb-1">
              Saurabh Yadav
            </h1>
            <div className="text-xs sm:text-sm text-slate-800 font-serif flex flex-wrap items-center justify-center gap-2 mt-1">
              <span>+91-8052680534</span>
              <span>|</span>
              <a href="mailto:saurabhyadav082005@gmail.com" className="text-slate-900 hover:underline">saurabhyadav082005@gmail.com</a>
              <span>|</span>
              <a href="https://www.linkedin.com/in/saurabh-yadav-599b6a42b/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">LinkedIn</a>
              <span>|</span>
              <a href="https://github.com/saurabh-yadav16" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">GitHub</a>
              <span>|</span>
              <a href="#hero" className="text-slate-900 hover:underline">Portfolio</a>
            </div>
          </div>

          {/* Section 1: Professional Summary */}
          <div className="mt-4">
            <h2 className="text-base font-bold text-slate-950 font-serif border-b border-slate-950 pb-0.5 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-900 leading-normal text-justify font-serif">
              Computer Science undergraduate and aspiring Software Engineer with experience in full-stack and backend development using Java, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, and REST APIs. Proficient in Data Structures Algorithms, OOP, DBMS, algorithm design, time and space complexity, and computational optimization. Built secure, scalable web applications featuring JWT authentication, role-based authorization, real-time communication, and database-driven REST APIs.
            </p>
          </div>

          {/* Section 2: Education */}
          <div className="mt-4">
            <h2 className="text-base font-bold text-slate-950 font-serif border-b border-slate-950 pb-0.5 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline font-serif text-xs sm:text-sm font-bold text-slate-950">
              <span>IMS Engineering College</span>
              <span className="font-normal text-slate-900">October 2023 – July 2027</span>
            </div>
            <div className="flex justify-between items-baseline font-serif text-xs sm:text-sm text-slate-900 mt-0.5">
              <span>Bachelor of Technology in Computer Science Engineering</span>
              <span>Ghaziabad, Uttar Pradesh</span>
            </div>
          </div>

          {/* Section 3: Projects */}
          <div className="mt-4">
            <h2 className="text-base font-bold text-slate-950 font-serif border-b border-slate-950 pb-0.5 mb-2">
              Projects
            </h2>

            {/* SyncParty */}
            <div className="mb-3 font-serif">
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <span className="font-bold text-slate-950 text-sm">SyncParty</span>
                <div className="space-x-1 text-xs">
                  <a href="https://github.com/saurabh-yadav16" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">GitHub</a>
                  <span>|</span>
                  <a href="https://syncparty-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">Live</a>
                </div>
              </div>
              <p className="text-xs text-slate-800 italic mt-0.5">
                React.js, Node.js, Express.js, MongoDB, Socket.IO, Tailwind CSS, JWT
              </p>
              <ul className="text-xs text-slate-900 space-y-1 mt-1 pl-3">
                <li>- Built a full-stack MERN application with synchronized YouTube playback and real-time chat using Socket.IO, supporting 10+ concurrent users across shared watch rooms.</li>
                <li>- Implemented JWT authentication, password-protected rooms, and RBAC across 2 user roles (Host and Participant), with 4 MongoDB data models for persistent session and chat data.</li>
                <li>- Created a responsive React.js + Tailwind CSS interface with dark mode, room management, and real-time event handling across 3+ core interactive features.</li>
              </ul>
            </div>

            {/* FoodCare */}
            <div className="mb-3 font-serif">
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <span className="font-bold text-slate-950 text-sm">FoodCare</span>
                <div className="space-x-1 text-xs">
                  <a href="https://github.com/saurabh-yadav16/Food-Waste-Management-System" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">GitHub</a>
                  <span>|</span>
                  <a href="https://food-waste-management-system-seven.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">Live</a>
                </div>
              </div>
              <p className="text-xs text-slate-800 italic mt-0.5">
                React.js, Node.js, Express.js, MongoDB, Mongoose, Socket.IO, JWT, REST APIs, GeoJSON, Vite
              </p>
              <ul className="text-xs text-slate-900 space-y-1 mt-1 pl-3">
                <li>- Architected a full-stack MERN food redistribution platform connecting 3 user roles—restaurants, NGOs, and volunteers through role-based donation, acceptance, and delivery workflows.</li>
                <li>- Secured REST APIs with Express.js, JWT, RBAC, and Socket.IO, enabling real-time donation updates across 3 role-specific dashboards.</li>
                <li>- Integrated MongoDB GeoJSON geospatial queries into a 4+ stage workflow covering donation creation, NGO matching, pickup, and delivery with notifications and status tracking.</li>
              </ul>
            </div>

            {/* AI Interview Coach */}
            <div className="mb-3 font-serif">
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <span className="font-bold text-slate-950 text-sm">AI Interview Coach</span>
                <div className="space-x-1 text-xs">
                  <a href="https://github.com/saurabh-yadav16/AI-Interview-Coach" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">GitHub</a>
                  <span>|</span>
                  <a href="https://ai-interview-coach-eta-sandy.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">Live</a>
                </div>
              </div>
              <p className="text-xs text-slate-800 italic mt-0.5">
                React.js, Vite, Node.js, Express.js, REST APIs, OpenAI API, MongoDB, JWT, bcrypt, MongoDB Atlas
              </p>
              <ul className="text-xs text-slate-900 space-y-1 mt-1 pl-3">
                <li>- Designed a full-stack MERN AI Interview Coach integrating the OpenAI API for 3 core AI features: personalized mock interviews, resume-based question generation, and ATS analysis.</li>
                <li>- Implemented an AI evaluation system across 5 performance metrics—correctness, technical depth, completeness, relevance, and clarity—to generate structured interview feedback and scoring.</li>
                <li>- Configured secure REST API workflows using JWT and bcrypt with MongoDB Atlas, enabling performance analytics, progress tracking, and personalized 7-day improvement plans.</li>
              </ul>
            </div>
          </div>

          {/* Section 4: Technical Skills */}
          <div className="mt-4">
            <h2 className="text-base font-bold text-slate-950 font-serif border-b border-slate-950 pb-0.5 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs sm:text-sm font-serif">
              <div><span className="font-bold text-slate-950">Languages:</span> Java, JavaScript, TypeScript, C, SQL, HTML5, CSS3</div>
              <div><span className="font-bold text-slate-950">Frontend:</span> React.js, Tailwind CSS, EJS, Responsive Web Design</div>
              <div><span className="font-bold text-slate-950">Backend:</span> Node.js, Express.js, REST APIs, Socket.IO</div>
              <div><span className="font-bold text-slate-950">Databases:</span> MongoDB, MySQL, MongoDB Atlas, Mongoose, Prisma, Database Design</div>
              <div><span className="font-bold text-slate-950">Authentication:</span> JWT, Role-Based Access Control (RBAC), GitHub OAuth, bcrypt</div>
              <div><span className="font-bold text-slate-950">Tools:</span> Git, GitHub, VS Code, Postman, IntelliJ IDEA, Vite</div>
              <div><span className="font-bold text-slate-950">Core CS:</span> Data Structures Algorithms (Java), Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks</div>
            </div>
          </div>

          {/* Section 5: Certifications */}
          <div className="mt-4">
            <h2 className="text-base font-bold text-slate-950 font-serif border-b border-slate-950 pb-0.5 mb-2">
              Certifications
            </h2>
            <ul className="text-xs sm:text-sm text-slate-900 space-y-1 font-serif pl-3">
              <li>- Exploratory Data Analysis — NASSCOM | 2026</li>
              <li>- Full Stack Development with MERN — NASSCOM Foundation | 2026</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
