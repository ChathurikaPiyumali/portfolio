import React from 'react';
import { motion } from 'framer-motion';

interface InfoBoxProps {
  number: string;
  text: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ number, text }) => {
  return (
    <motion.div 
      className="bg-background-light border border-gray-700 rounded-lg p-6 text-center"
      whileHover={{ 
        scale: 1.03, 
        borderColor: '#D4AF37',
        transition: { duration: 0.2 } 
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-3xl font-bold text-accent-gold mb-2">{number}</h3>
      <p className="text-sm text-text-secondary">{text}</p>
    </motion.div>
  );
};

export default InfoBox;