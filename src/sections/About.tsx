import React from 'react';
import { motion, Variants } from 'framer-motion';
import CountUp from 'react-countup';
import { BarChart2, Database, Code, LineChart } from 'lucide-react';
import TabContent from '../components/TabContent';
import ServiceCard from '../components/ServiceCard';
import { services } from '../constants/data';

import {
  SiReact, SiHtml5, SiCss3, SiJavascript,
  SiNodedotjs, SiSpringboot, SiMysql, SiMongodb,
  SiPython, SiNumpy, SiPandas, SiTensorflow, SiPytorch, SiR,
  SiC, SiCplusplus, SiSnowflake, SiApachespark, SiPowers
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } }
};

const About: React.FC = () => {
  const serviceIcons = [
    <BarChart2 size={24} />, <Database size={24} />, <Code size={24} />, <LineChart size={24} />
  ];

  const techCategories = [
    {
      title: 'Frontend Development',
      items: [
        { name: 'React', Icon: SiReact, color: '#61DAFB' },
        { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS', Icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F0DB4F' },
      ]
    },
    {
      title: 'Backend Development',
      items: [
        { name: 'Node.js', Icon: SiNodedotjs, color: '#68A063' },
        { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
        { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      ]
    },
    {
      title: 'Data Science & AI',
      items: [
        { name: 'Python', Icon: SiPython, color: '#3776AB' },
        { name: 'NumPy', Icon: SiNumpy, color: '#013243' },
        { name: 'Pandas', Icon: SiPandas, color: '#150458' },
        { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
        { name: 'PyTorch', Icon: SiPytorch, color: '#EE4C2C' },
        { name: 'R', Icon: SiR, color: '#276DC3' },
      ]
    },
    {
      title: 'Programming Languages',
      items: [
        { name: 'C', Icon: SiC, color: '#00599C' },
        { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
        { name: 'Java', Icon: DiJava, color: '#007396' },
      ]
    },
    {
      title: 'Data Warehouse & BI',
      items: [
        { name: 'Snowflake', Icon: SiSnowflake, color: '#28A8E0' },
        { name: 'Spark', Icon: SiApachespark, color: '#E25A1C' },
        { name: 'Power BI', Icon: SiPowers, color: '#F2C811' },
      ]
    }
  ];

  return (
    <TabContent>
      <motion.div
        className="min-h-screen"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* About Me */}
        <motion.div variants={blockVariants} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Hello! I am an aspiring Data Scientist with a strong passion for uncovering insights and solving complex problems through data. Currently pursuing a Bachelor's degree in Information Technology with a specialization in Data Science at SLIIT, I have developed a solid foundation in data analysis, machine learning, and statistical modeling. My journey so far includes hands-on experience with tools like Python and R. I am enthusiastic about leveraging data science to make a meaningful impact on businesses and society, and I continuously seek opportunities to grow and challenge myself in this ever-evolving field.
          </p>

          {/* Stat Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div className="h-[110px] w-full bg-background-dark border border-accent-gold rounded-lg p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center"
                style={{ willChange: 'transform' }}
              >
                <h3 className="text-3xl font-bold text-accent-gold mb-1">
                  <CountUp end={2} duration={2} />+
                </h3>
                <p className="text-sm text-text-secondary text-center">
                  Years Academic/Project Experience
                </p>
              </motion.div>
            </div>

            <div className="h-[110px] w-full bg-background-dark border border-gray-600 rounded-lg p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center"
                style={{ willChange: 'transform' }}
              >
                <h3 className="text-3xl font-bold text-accent-gold mb-1">
                  <CountUp end={10} duration={2} />+
                </h3>
                <p className="text-sm text-text-secondary text-center">
                  Projects Completed in Data Science & Full Stack Dev
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* What I'm Doing */}
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

        {/* My Tech Universe */}
        <motion.div variants={blockVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">My Tech Universe</h2>

          {techCategories.map(({ title, items }) => (
            <div key={title} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 inline-block border-b-2 border-accent-gold">
                {title}
              </h3>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {items.map(({ name, Icon, color }) => (
                  <motion.div
                    key={name}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
                    }}
                    className="h-[110px] w-full bg-transparent border border-gray-700 rounded-lg p-4 flex items-center justify-center transition-all duration-300 hover:border-accent-gold"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center"
                      style={{ willChange: 'transform' }}
                    >
                      <Icon size={32} style={{ color }} className="mb-2" />
                      <span className="text-sm text-white text-center">{name}</span>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </TabContent>
  );
};

export default About;
