import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { SiFigma } from 'react-icons/si';
import { Sparkles, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectProps } from '../types';

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  subtitle,
  category,
  image,
  description,
  highlights,
  technologies,
  github,
  demo,
  figma,
  isFeatured,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative bg-background-light/75 backdrop-blur-sm rounded-2xl p-5 flex flex-col h-full border transition-all duration-300 shadow-xl ${
        isFeatured
          ? 'border-accent-gold/40 hover:border-accent-gold ring-1 ring-accent-gold/20'
          : 'border-white/10 hover:border-accent-gold/40'
      }`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent-gold text-slate-950 font-bold text-[10px] shadow-lg">
          <Sparkles size={11} />
          <span>Featured</span>
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-xl mb-4 bg-background-dark">
        {!imgError ? (
          <img
            src={image}
            alt={title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-background-dark to-slate-900 text-center">
            <span className="text-accent-gold text-2xl font-bold mb-1">
              {title.slice(0, 2).toUpperCase()}
            </span>
            <span className="text-xs text-text-secondary">{category}</span>
          </div>
        )}

        {/* Category Pill Over Image */}
        <div className="absolute bottom-2.5 left-2.5 z-10">
          <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-background-dark/85 backdrop-blur-md text-amber-300 border border-amber-300/20">
            {category}
          </span>
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="mb-2">
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight line-clamp-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[11px] text-accent-gold font-medium mt-0.5 line-clamp-1">
            {subtitle}
          </p>
        )}
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-text-secondary mb-3 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Highlights (Expandable or preview) */}
      {highlights && highlights.length > 0 && (
        <div className="mb-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-[11px] text-accent-gold hover:text-yellow-300 font-semibold flex items-center gap-1 transition-colors"
          >
            {showDetails ? (
              <>
                <span>Hide key details</span>
                <ChevronUp size={13} />
              </>
            ) : (
              <>
                <span>Show key details ({highlights.length})</span>
                <ChevronDown size={13} />
              </>
            )}
          </button>

          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 space-y-1.5 p-2.5 rounded-xl bg-background-dark/70 border border-white/5"
            >
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                  <CheckCircle2 size={13} className="text-accent-gold flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="text-[10px] font-medium bg-background-dark/80 text-slate-300 border border-white/5 px-2 py-0.5 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links / Action Buttons */}
      <div className="flex items-center gap-2 pt-3 border-t border-white/10 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold bg-background-dark hover:bg-white/10 text-white rounded-xl border border-white/10 hover:border-accent-gold/40 transition-all duration-200"
          >
            <FaGithub size={14} />
            <span>GitHub</span>
          </a>
        )}

        {figma && (
          <a
            href={figma}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold bg-background-dark hover:bg-purple-900/40 text-purple-300 rounded-xl border border-purple-500/20 hover:border-purple-400 transition-all duration-200"
          >
            <SiFigma size={13} />
            <span>Figma</span>
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold bg-gradient-to-r from-accent-gold to-yellow-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 rounded-xl shadow transition-all duration-200"
          >
            <FiExternalLink size={13} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
