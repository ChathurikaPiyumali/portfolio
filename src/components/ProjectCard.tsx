import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { SiFigma } from 'react-icons/si';
import { motion } from 'framer-motion';

interface ProjectProps {
  id: string;
  title: string;
  category: string;
  image: string;
  technologies: string[];
  description: string;
  github?: string;
  demo?: string;
  figma?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  image,
  description,
  technologies,
  github,
  demo,
  figma,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative bg-background-light rounded-xl shadow-md p-4 flex flex-col h-full border-2 border-transparent hover:border-yellow-400 transition-all duration-300"
    >
      <img
        src={image}
        alt={title}
        className="rounded-md mb-4 object-cover h-48 w-full"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-text-secondary mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-12">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons bottom right */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-yellow-400 hover:text-black transition-all"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        )}

        {figma && (
          <a
            href={figma}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-yellow-400 hover:text-black transition-all"
          >
            <SiFigma size={16} />
            Figma
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium bg-accent-gold text-background-dark rounded-full hover:bg-yellow-500"
          >
            <FiExternalLink size={16} />
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
