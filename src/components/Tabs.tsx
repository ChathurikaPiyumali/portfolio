import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TabProps } from '../types';

interface TabsProps {
  tabs: TabProps[];
  activeTab: string;
  onTabChange: (id: string) => void;
  children: React.ReactNode[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, children }) => {
  const activeIndex = tabs.findIndex((t) => t.id === activeTab);

  return (
    <div className="w-full">
      {/* Top Navigation Tabs Header */}
      <div className="sticky top-0 z-30 bg-background-dark/80 backdrop-blur-xl pb-4 pt-1 mb-6 border-b border-white/10">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-amber-400 bg-amber-400/10 shadow-sm border border-amber-400/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span className={`transition-colors ${isActive ? 'text-amber-400' : 'text-slate-400 group-hover:text-amber-300'}`}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 rounded-xl bg-amber-400/5 -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels with smooth AnimatePresence transition */}
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          {tabs.map((tab, index) => {
            if (tab.id !== activeTab) return null;
            return (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-full"
              >
                {children[index]}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
