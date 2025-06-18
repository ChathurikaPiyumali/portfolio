import React from 'react';
import { motion } from 'framer-motion';
import { ServiceProps } from '../types';

const ServiceCard: React.FC<ServiceProps> = ({ title, icon, description }) => {
  return (
    <motion.div 
      className="bg-background-light rounded-lg p-6 border border-gray-700 hover:border-accent-gold transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-12 h-12 bg-accent-gold bg-opacity-20 rounded-full flex items-center justify-center mb-4">
        <span className="text-accent-gold">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;