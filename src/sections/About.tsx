import React from 'react';
import { motion, Variants } from 'framer-motion';
import CountUp from 'react-countup';
import { 
  BarChart2, 
  Database, 
  Code2, 
  Cpu, 
  Sparkles, 
  BrainCircuit, 
  Layers, 
  Activity, 
  ArrowRight,
  Workflow,
  CheckCircle2
} from 'lucide-react';
import TabContent from '../components/TabContent';
import { services, keyResearchProject, skillCategories, personalInfo } from '../constants/data';

import {
  SiReact, SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiNodedotjs, SiSpringboot, SiMysql, SiMongodb,
  SiPython, SiNumpy, SiPandas, SiScikitlearn, SiR,
  SiC, SiCplusplus, SiPowers, SiPostgresql, SiFirebase,
  SiGrafana, SiArduino
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const pillarIcons = [
  <BrainCircuit size={22} className="text-amber-400" />,
  <Code2 size={22} className="text-cyan-400" />,
  <BarChart2 size={22} className="text-yellow-400" />,
  <Cpu size={22} className="text-emerald-400" />
];

const techIconsMap: Record<string, { icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>; color: string }> = {
  'Python': { icon: SiPython, color: '#38BDF8' },
  'SQL': { icon: SiPostgresql, color: '#60A5FA' },
  'Java': { icon: DiJava, color: '#F87171' },
  'TypeScript': { icon: SiTypescript, color: '#38BDF8' },
  'JavaScript': { icon: SiJavascript, color: '#FACC15' },
  'R': { icon: SiR, color: '#60A5FA' },
  'C / C++': { icon: SiCplusplus, color: '#818CF8' },
  'React': { icon: SiReact, color: '#22D3EE' },
  'Node.js': { icon: SiNodedotjs, color: '#4ADE80' },
  'NestJS': { icon: Code2, color: '#F43F5E' },
  'Express.js': { icon: SiJavascript, color: '#E2E8F0' },
  'Spring Boot': { icon: SiSpringboot, color: '#4ADE80' },
  'Tailwind CSS': { icon: SiCss3, color: '#38BDF8' },
  'Power BI': { icon: SiPowers, color: '#FACC15' },
  'Scikit-learn': { icon: SiScikitlearn, color: '#FB923C' },
  'Pandas & NumPy': { icon: SiPandas, color: '#A78BFA' },
  'MySQL': { icon: SiMysql, color: '#38BDF8' },
  'MongoDB': { icon: SiMongodb, color: '#34D399' },
  'Firebase': { icon: SiFirebase, color: '#FBBF24' },
  'ESP32 & MQTT': { icon: SiArduino, color: '#2DD4BF' },
  'Grafana': { icon: SiGrafana, color: '#FB923C' }
};

interface AboutProps {
  onNavigate?: (tabId: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <TabContent>
      <motion.div
        className="space-y-12 pb-8"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Header Hero Section */}
        <motion.div variants={blockVariants} className="space-y-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Data Science & Software Engineering</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Transforming Complex Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200">Intelligent Solutions</span>
          </h2>

          <p className="text-slate-300 leading-relaxed text-sm md:text-base max-w-4xl">
            {personalInfo.summary}
          </p>

          {/* Quick Metrics Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-4">
            <div className="bg-background-light/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:border-amber-400/40 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-extrabold text-amber-400">
                <CountUp end={1} duration={1.5} />+ Yr
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-medium">Industry Experience at Toyota Lanka</p>
            </div>

            <div className="bg-background-light/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:border-amber-400/40 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-extrabold text-amber-400">
                <CountUp end={8} duration={2} />+
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-medium">Enterprise Apps Contributed / Delivered</p>
            </div>

            <div className="bg-background-light/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:border-amber-400/40 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-extrabold text-amber-400">
                <CountUp end={12} duration={2.2} />+
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-medium">Data Science, ML & Full Stack Projects</p>
            </div>

            <div className="bg-background-light/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:border-amber-400/40 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-extrabold text-amber-400">
                3.0 / 4.0
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-medium">SLIIT Data Science Degree CGPA</p>
            </div>
          </div>
        </motion.div>

        {/* Flagship Research Spotlight Card */}
        <motion.div
          variants={blockVariants}
          className="relative bg-gradient-to-br from-background-card via-background-light/90 to-background-card border border-amber-400/30 rounded-3xl p-6 md:p-8 shadow-glass overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-400/20">
                  <Activity size={20} />
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    {keyResearchProject.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {keyResearchProject.title}
                  </h3>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  {keyResearchProject.role}
                </span>
                <p className="text-[11px] text-amber-400/90 font-mono mt-1">{keyResearchProject.period}</p>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6">
              {keyResearchProject.overview}
            </p>

            {/* Contributions list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {keyResearchProject.keyContributions.map((point, index) => (
                <div
                  key={index}
                  className="bg-background-dark/60 border border-white/5 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <CheckCircle2 size={15} className="text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>

            {/* Tags and Benchmarks */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5">
                {keyResearchProject.technologies.slice(0, 6).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] bg-amber-400/10 border border-amber-400/20 text-amber-300 px-2.5 py-1 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {onNavigate && (
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Explore in Projects</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* What I'm Doing / Core Pillars */}
        <motion.div variants={blockVariants} className="space-y-6">
          <div className="flex items-center gap-2">
            <Layers size={18} className="text-amber-400" />
            <h3 className="text-xl md:text-2xl font-bold text-white">What I Do & Specialize In</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-background-light/70 backdrop-blur-xl border border-white/10 hover:border-amber-400/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-glow-gold hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {pillarIcons[idx % pillarIcons.length]}
                    </div>
                    <h4 className="text-base font-bold text-white">{service.title}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {service.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] bg-white/5 text-slate-400 border border-white/5 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Skills Matrix / Tech Universe */}
        <motion.div variants={blockVariants} className="space-y-6">
          <div className="flex items-center gap-2">
            <Workflow size={18} className="text-amber-400" />
            <h3 className="text-xl md:text-2xl font-bold text-white">Comprehensive Technical Stack</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((categoryGroup, index) => (
              <div
                key={index}
                className="bg-background-light/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="mb-3.5 pb-2.5 border-b border-white/10">
                  <h4 className="font-bold text-white text-sm flex items-center justify-between">
                    <span>{categoryGroup.category}</span>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
                      {categoryGroup.skills.length} skills
                    </span>
                  </h4>
                  {categoryGroup.description && (
                    <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                      {categoryGroup.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {categoryGroup.skills.map((skill, sIdx) => {
                    const iconConfig = techIconsMap[skill.name];
                    const IconComp = iconConfig?.icon;

                    return (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border transition-all ${
                          skill.featured
                            ? 'bg-amber-400/10 border-amber-400/30 text-amber-200 font-medium'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {IconComp && (
                          <IconComp size={12} style={{ color: iconConfig.color }} />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </TabContent>
  );
};

export default About;
