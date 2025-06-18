import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SkillProps } from '../types';

const ProgressBar: React.FC<SkillProps> = ({ name, percentage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay to ensure animation runs after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-accent-gold">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;