import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderGit2, Sparkles, Filter } from 'lucide-react';
import TabContent from '../components/TabContent';
import ProjectCard from '../components/ProjectCard';
import { projects, projectCategories } from '../constants/data';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <TabContent>
      <div className="space-y-8 pb-8">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <FolderGit2 size={15} />
              <span>Engineered Work & Research</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Featured Projects & Implementations
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Showcasing practical solutions in Machine Learning, Enterprise Web Applications, IoT Telemetry, and Business Intelligence.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search tech, title, NLP..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background-light/80 border border-white/10 rounded-xl pl-9 pr-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 transition-all"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="text-slate-400 text-xs flex items-center gap-1 shrink-0 mr-1">
            <Filter size={13} />
            <span>Filter:</span>
          </span>
          {projectCategories.map((cat, index) => {
            const isActive = activeCategory === cat;
            const count =
              cat === 'All'
                ? projects.length
                : projects.filter((p) => p.category === cat).length;

            return (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-glow-gold'
                    : 'bg-background-light/70 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive
                      ? 'bg-slate-950/20 text-slate-950'
                      : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 bg-background-light/40 rounded-2xl border border-white/5"
            >
              <Sparkles size={32} className="mx-auto text-amber-400/50 mb-3" />
              <p className="text-white font-semibold text-sm">No matching projects found</p>
              <p className="text-xs text-slate-400 mt-1">
                Try selecting a different category or clearing your search keywords.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-amber-400 text-xs font-medium"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TabContent>
  );
};

export default Portfolio;
