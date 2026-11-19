import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Download,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { personalInfo } from '../constants/data';

interface SidebarProps {
  onNavigate?: (tabId: string) => void;
}

const TERMS = [
  'Data Science Undergraduate (SLIIT)',
  'Software Developer Intern @ Toyota Lanka',
  'Lead ML & Anomaly Detection Researcher',
  'Enterprise Web & API Engineer',
  'Data Warehousing & BI Analyst'
];

const Typewriter: React.FC<{ terms: string[] }> = ({ terms }) => {
  const [termIndex, setTermIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = terms[termIndex];
    let timer: number;

    if (!deleting && charIndex <= full.length) {
      timer = window.setTimeout(() => {
        setDisplayed(full.slice(0, charIndex));
        setCharIndex((i) => i + 1);
      }, 70);
    } else if (!deleting && charIndex > full.length) {
      timer = window.setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      timer = window.setTimeout(() => {
        setDisplayed(full.slice(0, charIndex - 1));
        setCharIndex((i) => i - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTermIndex((i) => (i + 1) % terms.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, deleting, termIndex, terms]);

  return (
    <span className="text-amber-400 font-medium text-xs md:text-sm tracking-wide inline-flex items-center min-h-[22px]">
      {displayed}
      <span className="inline-block w-1.5 h-3.5 bg-amber-400 ml-1 animate-pulse" />
    </span>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col justify-between bg-background-light/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
      {/* Top subtle decorative accent */}
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 -right-16 w-28 h-28 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Profile Image with animated ring and status */}
        <div className="relative mb-5 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-indigo-500 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-500 group-hover:blur" />
          <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-amber-400/80 bg-background-dark p-1">
            <img
              src="/sliit.jpg"
              alt={personalInfo.displayName}
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Active status badge */}
          <div className="absolute bottom-1 right-2 bg-background-dark/95 border border-emerald-500/60 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-semibold text-emerald-400 tracking-wider uppercase">Open to Work</span>
          </div>
        </div>

        {/* Name and Designation */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-white tracking-tight leading-snug"
        >
          {personalInfo.displayName}
        </motion.h1>

        <p className="text-xs text-slate-400 mt-1 mb-2 font-mono">
          U. Chathurika Piyumali Unagalle
        </p>

        {/* Dynamic Typewriter badge */}
        <div className="bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 mb-5 max-w-full">
          <Typewriter terms={TERMS} />
        </div>

        {/* Quick Highlights / Mini Badges */}
        <div className="w-full grid grid-cols-2 gap-2 mb-6 text-left">
          <div className="bg-background-card/90 border border-white/5 rounded-xl p-2.5 flex items-center gap-2">
            <Briefcase size={16} className="text-amber-400 shrink-0" />
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Experience</p>
              <p className="text-xs font-semibold text-white truncate">Toyota Lanka</p>
            </div>
          </div>
          <div className="bg-background-card/90 border border-white/5 rounded-xl p-2.5 flex items-center gap-2">
            <GraduationCap size={16} className="text-indigo-400 shrink-0" />
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Education</p>
              <p className="text-xs font-semibold text-white truncate">SLIIT BSc (Hons)</p>
            </div>
          </div>
        </div>

        {/* Contact info list with 1-click copy buttons */}
        <div className="w-full space-y-2.5 text-xs text-left mb-6">
          {/* Email */}
          <div className="group bg-background-card/80 border border-white/5 hover:border-amber-400/40 rounded-xl p-2.5 flex items-center justify-between transition-all">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <Mail size={14} />
              </div>
              <div className="truncate">
                <p className="text-[10px] text-slate-400 uppercase font-medium">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-200 hover:text-amber-400 transition-colors truncate block"
                  title={personalInfo.email}
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personalInfo.email, 'email')}
              className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-1"
              title="Copy Email"
            >
              {copiedKey === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          </div>

          {/* Phone */}
          <div className="group bg-background-card/80 border border-white/5 hover:border-amber-400/40 rounded-xl p-2.5 flex items-center justify-between transition-all">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <Phone size={14} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-medium">Phone</p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-slate-200 hover:text-amber-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
              className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-1"
              title="Copy Phone"
            >
              {copiedKey === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          </div>

          {/* Location */}
          <div className="bg-background-card/80 border border-white/5 rounded-xl p-2.5 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
              <MapPin size={14} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-medium">Location</p>
              <p className="text-slate-200">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons: Resume Download & Contact */}
        <div className="w-full space-y-2 mb-6">
          <a
            href={personalInfo.resumeUrl}
            download="Chathurika_Unagalle_CV.pdf"
            className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-semibold rounded-xl flex items-center justify-center gap-2 text-xs md:text-sm shadow-glow-gold transition-all duration-300 hover:shadow-lg"
          >
            <Download size={16} />
            Download CV / Resume
          </a>

          {onNavigate && (
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 text-slate-200 font-medium rounded-xl flex items-center justify-center gap-2 text-xs md:text-sm transition-all"
            >
              <Sparkles size={15} className="text-amber-400" />
              Let's Connect
            </button>
          )}
        </div>

        {/* Social Links */}
        <div className="w-full pt-4 border-t border-white/10 flex justify-center items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={17} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all hover:scale-110"
            aria-label="Send Email"
          >
            <Mail size={17} />
          </a>
          <a
            href={personalInfo.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all hover:scale-110"
            aria-label="Live Portfolio"
            title="Live URL"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
