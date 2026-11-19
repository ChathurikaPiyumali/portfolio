import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Users2, 
  Download, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Building2,
  Sparkles
} from 'lucide-react';
import TabContent from '../components/TabContent';
import ProgressBar from '../components/ProgressBar';
import { 
  workExperience, 
  education, 
  skills, 
  extracurriculars, 
  references, 
  personalInfo 
} from '../constants/data';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Resume: React.FC = () => {
  return (
    <TabContent>
      <motion.div
        className="space-y-12 pb-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Top Header & Download Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Professional Experience & Academic Journey
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Verified track record across enterprise software development, data science, and academic leadership.
            </p>
          </div>

          <a
            href={personalInfo.resumeUrl}
            download="Chathurika_Unagalle_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs md:text-sm shadow-glow-gold transition-all duration-300 shrink-0"
          >
            <Download size={16} />
            <span>Download Official CV</span>
          </a>
        </div>

        {/* 1. Industry Experience */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-400/20">
              <Briefcase size={20} />
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Industry Work Experience
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Enterprise Engineering Roles
              </h3>
            </div>
          </div>

          <div className="space-y-6">
            {workExperience.map((exp) => (
              <div
                key={exp.id}
                className="bg-background-light/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-amber-400/40 transition-all duration-300 shadow-glass"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-lg md:text-xl font-bold text-white">{exp.role}</h4>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300 flex-wrap">
                      <span className="font-semibold text-amber-400 flex items-center gap-1">
                        <Building2 size={13} />
                        {exp.company}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1">{exp.type}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {exp.description.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs bg-white/5 border border-white/10 text-slate-300 px-3 py-1 rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2. Education */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-400/20">
              <GraduationCap size={20} />
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                Academic Background
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Education & Qualifications
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-background-light/70 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-medium text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                      {edu.period}
                    </span>
                    {edu.grade && (
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        {edu.grade}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-xs font-medium text-slate-300 mb-2">{edu.institution}</p>

                  {edu.description && (
                    <p className="text-xs text-slate-400 leading-relaxed">{edu.description}</p>
                  )}
                </div>

                {edu.location && (
                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1 text-[11px] text-slate-400">
                    <MapPin size={11} className="text-amber-400" />
                    <span>{edu.location}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3. Technical Proficiency Progress */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-400/20">
              <Sparkles size={20} />
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Core Competencies
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Technical Proficiency Metrics
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 bg-background-light/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <ProgressBar name={skill.name} percentage={skill.percentage} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4. Extracurricular Leadership & Honors */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-400/20">
              <Award size={20} />
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Leadership & Recognition
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Extracurricular Activities & Awards
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {extracurriculars.map((activity, index) => (
              <div
                key={index}
                className="bg-background-light/70 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-amber-400/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                      activity.awardType === 'Award'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : activity.awardType === 'Leadership'
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {activity.awardType}
                  </span>
                </div>

                <h4 className="font-bold text-white text-sm mb-1">{activity.title}</h4>
                <p className="text-xs text-amber-400/90 font-medium mb-2">{activity.organization}</p>
                {activity.description && (
                  <p className="text-xs text-slate-400 leading-relaxed">{activity.description}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 5. Professional References */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
              <Users2 size={20} />
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                Professional Endorsement
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Verified Referees
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {references.map((ref, index) => (
              <div
                key={index}
                className="bg-background-light/70 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all duration-300"
              >
                <h4 className="text-base font-bold text-white mb-0.5">{ref.name}</h4>
                <p className="text-xs font-semibold text-amber-400 mb-1">{ref.designation}</p>
                <p className="text-xs text-slate-300 mb-3">{ref.department} • <span className="text-white font-medium">{ref.organization}</span></p>

                <div className="space-y-1.5 pt-3 border-t border-white/5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-cyan-400 shrink-0" />
                    <a href={`tel:${ref.phone}`} className="hover:text-amber-400 transition-colors">
                      {ref.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-cyan-400 shrink-0" />
                    <a href={`mailto:${ref.email}`} className="hover:text-amber-400 transition-colors truncate">
                      {ref.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </TabContent>
  );
};

export default Resume;
