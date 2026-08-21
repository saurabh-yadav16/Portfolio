import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Principles from './components/Principles';
import Projects from './components/Projects';
import CaseStudyModal from './components/CaseStudyModal';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import AnimatedBackground from './components/AnimatedBackground';
import { personalInfo, projects as defaultProjects } from './data/portfolioData';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [toast, setToast] = useState(null);
  const [projectList, setProjectList] = useState(defaultProjects);

  const showToast = ({ message, type = 'success' }) => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Saurabh_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast({
      message: 'Downloading Saurabh Yadav Resume PDF...',
      type: 'success'
    });
  };

  const handleAddProject = (newProject) => {
    const updated = [newProject, ...projectList];
    setProjectList(updated);
    localStorage.setItem('saurabh_projects', JSON.stringify(updated));
    showToast({
      message: `Project "${newProject.title}" added to portfolio!`,
      type: 'success'
    });
  };

  const handleDeleteProject = (projectId) => {
    const updated = projectList.filter(p => p.id !== projectId);
    setProjectList(updated);
    localStorage.setItem('saurabh_projects', JSON.stringify(updated));
    showToast({
      message: 'Project removed from portfolio.',
      type: 'success'
    });
  };

  const handleResetProjects = () => {
    setProjectList(defaultProjects);
    localStorage.removeItem('saurabh_projects');
    showToast({
      message: 'Reset portfolio to default resume projects.',
      type: 'success'
    });
  };

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-[#26D868] selection:text-slate-950 font-sans overflow-x-hidden">
      
      {/* Overall Background Animations (Moving grid, glow orbs, drifting particles, code watermarks) */}
      <AnimatedBackground />

      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Navigation Header */}
      <Navbar onDownloadResume={handleDownloadResume} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onDownloadResume={handleDownloadResume} />
        <About />
        <Education />
        <Principles />
        <Projects 
          projects={projectList}
          onSelectCaseStudy={(project) => setSelectedCaseStudy(project)} 
          onAddProject={handleAddProject}
          onDeleteProject={handleDeleteProject}
          onResetProjects={projectList.length !== defaultProjects.length ? handleResetProjects : null}
        />
        <TechStack />
        <Skills />
        <Certifications />
        <ResumeSection onDownloadResume={handleDownloadResume} />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

    </div>
  );
}
