import React from 'react';
import TabContent from '../components/TabContent';
import ProgressBar from '../components/ProgressBar';
import { skills } from '../constants/data';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Resume: React.FC = () => {
  const education = [
    {
      period: 'Feb 2023 – Present',
      degree: 'BSc (Hons) in IT – Data Science',
      institution: 'Sri Lanka Institute of Information Technology',
      description: 'Current CGPA: 3.2 / 4.0',
    },
    {
      period: 'Feb 2023 – Nov 2024',
      degree: 'Higher Diploma in Information Technology',
      institution: 'Sri Lanka Institute of Information Technology',
    },
    {
      period: 'Feb 2022 – Jun 2023',
      degree: 'Diploma in IT (Distinction)',
      institution: 'Esoft Metro Campus',
    },
    {
      period: '2022',
      degree: 'G.C.E. Advanced Level – Biological Sciences',
      institution: 'Anula Vidyalaya',
      description: 'Biology: B • Chemistry: B • Physics: C',
    },
  ];

  const softSkills = [
    'Creativity', 'Teamwork', 'Problem Solving',
    'Leadership', 'Flexibility', 'Self Confidence'
  ];

  const extracurriculars = [
    {
      role: 'Organizing Committee Vice President – Delegates',
      org: 'Corporate Connect 2025, AIESEC in SLIIT',
      description: 'Led the Delegate team, facilitated corporate partnerships and participant engagement.'
    },
    {
      role: 'Team Leader',
      org: 'AIESEC in SLIIT',
    },
    {
      role: 'Member',
      org: 'Data Science Student Community – SLIIT FOC',
    },
    {
      role: 'Member',
      org: 'SEDS SLIIT',
    },
    {
      role: 'Junior Prefect',
      org: 'Anula Vidyalaya',
    },
  ];

  return (
    <TabContent>
       <div className="px-4 md:px-8">
      {/* Education */}
      <motion.div 
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="relative pl-6 border-l-2 border-gray-700"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-gold"></div>
              <div className="bg-background-light p-6 rounded-lg">
                <span className="text-accent-gold text-sm font-medium">{edu.period}</span>
                <h3 className="text-lg font-semibold mt-1 mb-1">{edu.degree}</h3>
                <p className="text-text-secondary">{edu.institution}</p>
                {edu.description && (
                  <p className="text-text-secondary text-sm mt-2">{edu.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technical Skills */}
      <motion.div 
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProgressBar name={skill.name} percentage={skill.percentage} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills */}
      <motion.div 
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-2xl font-bold mb-6">Soft Skills</h2>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="bg-background-light px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-accent-gold transition-colors duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Extracurricular Activities */}
      <motion.div 
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-2xl font-bold mb-6">Extracurricular Activities</h2>
        <div className="space-y-4">
          {extracurriculars.map((activity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background-light p-4 rounded-lg border border-gray-700"
            >
              <h4 className="font-semibold">{activity.role}</h4>
              <p className="text-text-secondary">{activity.org}</p>
              {activity.description && (
                <p className="text-sm text-text-secondary mt-1">{activity.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Languages */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-2xl font-bold mb-4">Languages</h2>
        <div className="grid grid-cols-1 gap-y-4">
          <motion.div
            variants={itemVariants}
            className="flex justify-between items-center bg-background-light rounded-lg p-4"
          >
            <span className="font-medium">Sinhala</span>
            <span className="text-accent-gold">Native</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex justify-between items-center bg-background-light rounded-lg p-4"
          >
            <span className="font-medium">English</span>
            <span className="text-accent-gold">Professional</span>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </TabContent>
  );
};

export default Resume;
