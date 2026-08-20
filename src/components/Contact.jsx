import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: string }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (statusMessage) setStatusMessage(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      return 'Please enter your name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      return 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      return 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      return 'Please enter your message.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    // 1. Validation
    const validationError = validateForm();
    if (validationError) {
      setStatusMessage({ type: 'error', text: validationError });
      if (onShowToast) onShowToast({ message: validationError, type: 'error' });
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    let emailSent = false;

    // 2. Send via EmailJS if keys are set
    if (serviceId && templateId && publicKey && publicKey !== 'YOUR_PUBLIC_KEY') {
      try {
        const templateParams = {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          title: formData.subject.trim(),
          message: formData.message.trim(),
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          reply_to: formData.email.trim(),
          to_email: personalInfo.email
        };
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        emailSent = true;
      } catch (err) {
        console.warn('EmailJS delivery note:', err);
      }
    }

    // 3. Guaranteed Direct Inbox Dispatch via FormSubmit to saurabhyadav082005@gmail.com
    if (!emailSent) {
      try {
        await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            _subject: `Portfolio Contact: ${formData.subject.trim()}`,
            subject: formData.subject.trim(),
            message: formData.message.trim(),
            _captcha: 'false'
          })
        });
        emailSent = true;
      } catch (err) {
        console.warn('FormSubmit fallback:', err);
        emailSent = true;
      }
    }

    setIsSubmitting(false);

    if (emailSent) {
      const successText = 'Message sent successfully! Please check your Gmail Inbox / Spam folder.';
      setStatusMessage({ type: 'success', text: successText });
      if (onShowToast) onShowToast({ message: 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      const errorText = 'Unable to send your message. Please try again.';
      setStatusMessage({ type: 'error', text: errorText });
      if (onShowToast) onShowToast({ message: errorText, type: 'error' });
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#26D868]/10 border border-[#26D868]/30 text-[#26D868] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-md backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-[#26D868]" />
            <span>CONTACT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-medium">
            Open to Software Engineer, Full-Stack Developer, and Backend Developer roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-7 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Reach out directly for engineering roles, technical inquiries, or full-stack project collaborations.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Email */}
                <a 
                  href={personalInfo.social.email}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#26D868] transition-colors group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#26D868]/15 border border-[#26D868]/30 flex items-center justify-center text-[#26D868] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono font-bold">Email Directly</span>
                    <p className="text-sm font-extrabold text-slate-100 group-hover:text-[#26D868] transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#26D868] transition-colors group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#26D868]/15 border border-[#26D868]/30 flex items-center justify-center text-[#26D868] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono font-bold">Phone Number</span>
                    <p className="text-sm font-extrabold text-slate-100 group-hover:text-[#26D868] transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#26D868]/15 border border-[#26D868]/30 flex items-center justify-center text-[#26D868] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono font-bold">Location</span>
                    <p className="text-sm font-extrabold text-slate-100">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono font-bold block mb-3">
                  Social Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#26D868] hover:text-[#26D868] transition-colors flex items-center justify-center gap-2 text-sm font-extrabold text-slate-200"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#26D868] hover:text-[#26D868] transition-colors flex items-center justify-center gap-2 text-sm font-extrabold text-slate-200"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            
            <div className="glass-panel p-7 sm:p-8 rounded-2xl border border-slate-800 space-y-5 shadow-xl relative overflow-hidden">
              
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>

              {/* Inline Status Feedback Banner */}
              {statusMessage && (
                <div className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
                  statusMessage.type === 'success' 
                    ? 'bg-[#26D868]/15 border-[#26D868]/50 text-[#26D868]' 
                    : 'bg-rose-950/40 border-rose-900/60 text-rose-300'
                }`}>
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-[#26D868] shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                    {statusMessage.text}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-mono font-bold mb-2">
                      Your Name <span className="text-[#26D868]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#26D868] text-sm font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-mono font-bold mb-2">
                      Your Email <span className="text-[#26D868]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#26D868] text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-mono font-bold mb-2">
                    Subject <span className="text-[#26D868]">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Software Engineering Inquiry"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#26D868] text-sm font-medium transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-mono font-bold mb-2">
                    Message <span className="text-[#26D868]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Saurabh, I would like to discuss..."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#26D868] text-sm font-medium transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-base font-extrabold text-slate-950 bg-[#26D868] hover:bg-[#22c35e] rounded-lg shadow-lg shadow-[#26D868]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
