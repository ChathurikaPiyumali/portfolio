// src/sections/About.tsx

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BarChart2, Database, Code, LineChart } from 'lucide-react';
import TabContent from '../components/TabContent';
import InfoBox from '../components/InfoBox';
import ServiceCard from '../components/ServiceCard';
import { services } from '../constants/data';

import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPython,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiPytorch,
  SiR,
  SiC,
  SiCplusplus,
  SiSnowflake,
  SiApachespark,
  SiPowers
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import type { IconType } from 'react-icons';

// ─── Motion Variants ───────────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};
const blockVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show:  { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } }
};
const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show:  { opacity: 1, scale: 1,  transition: { type: 'spring', stiffness: 120, damping: 12 } }
};

// ─── Component ───────────────────────────────────────────────────────────────
const About: React.FC = () => {
  const serviceIcons = [
    <BarChart2 size={24} />,
    <Database   size={24} />,
    <Code       size={24} />,
    <LineChart  size={24} />
  ];

  // brand colors for each icon
  const techCategories: {
    title: string;
    items: { name: string; Icon: IconType; color: string }[];
  }[] = [
    {
      title: 'Frontend Development',
      items: [
        { name: 'React',      Icon: SiReact,      color: '#61DAFB' },
        { name: 'HTML',       Icon: SiHtml5,      color: '#E34F26' },
        { name: 'CSS',        Icon: SiCss3,       color: '#1572B6' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F0DB4F' },
      ]
    },
    {
      title: 'Backend Development',
      items: [
        { name: 'Node.js',     Icon: SiNodedotjs,  color: '#68A063' },
        { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
        { name: 'MySQL',       Icon: SiMysql,      color: '#4479A1' },
        { name: 'MongoDB',     Icon: SiMongodb,    color: '#47A248' },
      ]
    },
    {
      title: 'Data Science & AI',
      items: [
        { name: 'Python',     Icon: SiPython,     color: '#3776AB' },
        { name: 'NumPy',      Icon: SiNumpy,      color: '#013243' },
        { name: 'Pandas',     Icon: SiPandas,     color: '#150458' },
        { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
        { name: 'PyTorch',    Icon: SiPytorch,    color: '#EE4C2C' },
        { name: 'R',          Icon: SiR,          color: '#276DC3' },
      ]
    },
    {
      title: 'Programming Languages',
      items: [
        { name: 'C',    Icon: SiC,          color: '#00599C' },
        { name: 'C++',  Icon: SiCplusplus,  color: '#00599C' },
        { name: 'Java', Icon: DiJava,       color: '#007396' },
      ]
    },
    {
      title: 'Data Warehouse & BI',
      items: [
        { name: 'Snowflake', Icon: SiSnowflake,   color: '#28A8E0' },
        { name: 'Spark',     Icon: SiApachespark, color: '#E25A1C' },
        { name: 'Power BI',  Icon: SiPowers,       color: '#F2C811' },
      ]
    }
  ];

  return (
    <TabContent>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >

        {/* ─── About Me ─────────────────────── */}
        <motion.div variants={blockVariants} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Hello! I am an aspiring Data Scientist with a strong passion for uncovering insights and solving complex problems through data. Currently pursuing a Bachelor's degree in Information Technology with a specialization in Data Science at SLIIT, I have developed a solid foundation in data analysis, machine learning, and statistical modeling. My journey so far includes hands-on experience with tools like Python and R. I am enthusiastic about leveraging data science to make a meaningful impact on businesses and society, and I continuously seek opportunities to grow and challenge myself in this ever-evolving field.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <InfoBox number="2+"  text="Years Academic/Project Experience" />
            <InfoBox number="10+" text="Projects Completed in Data Science & Full Stack Dev" />
          </div>
        </motion.div>

        {/* ─── What I'm Doing ────────────────── */}
        <motion.div variants={blockVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What I'm Doing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                description={service.description}
                icon={serviceIcons[idx]}
              />
            ))}
          </div>
        </motion.div>

        {/* ─── My Tech Universe ──────────────── */}
        <motion.div variants={blockVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">My Tech Universe</h2>
          {techCategories.map(({ title, items }) => (
            <div key={title} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 inline-block border-b-2 border-accent-gold">
                {title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {items.map(({ name, Icon, color }) => (
                  <motion.div
                    key={name}
                    variants={iconVariants}
                    className="bg-transparent border border-gray-700 rounded-lg p-4 flex flex-col items-center"
                  >
                    {/* icon in brand color */}
                    <Icon size={32} style={{ color }} className="mb-2" />
                    {/* label in white */}
                    <span className="text-sm text-white">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </TabContent>
  );
};

export default About;
