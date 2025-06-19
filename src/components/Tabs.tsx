import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TabProps } from '../types';

interface TabsProps {
  tabs: TabProps[];
  children: React.ReactNode[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="flex overflow-x-auto scrollbar-hide mb-8 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button flex items-center ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden">
        {React.Children.map(children, (child, index) => {
          const isActive = tabs[index].id === activeTab;

          return (
            <motion.div
              key={tabs[index].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : 20,
                pointerEvents: isActive ? 'auto' : 'none',
                position: isActive ? 'relative' : 'absolute',
                zIndex: isActive ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full"
            >
              {child}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
