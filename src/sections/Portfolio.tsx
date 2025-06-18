import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TabContent from '../components/TabContent';
import ProjectCard from '../components/ProjectCard';
import { projects, projectCategories } from '../constants/data';

const Portfolio: React.FC = () => {
  const [category, setCategory] = useState<string>('All');

  const filteredProjects = category === 'All' 
    ? projects 
    : projects.filter(project => project.category === category);

  return (
    <TabContent>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">My Projects</h2>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {projectCategories.map((cat, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                category === cat 
                  ? 'bg-accent-gold text-background-dark' 
                  : 'bg-background-light text-text-secondary hover:text-text-primary'
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-text-secondary">No projects found in this category.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </TabContent>
  );
};

export default Portfolio;