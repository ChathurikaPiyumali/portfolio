import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CertificateProps } from '../types';
import { FiEye } from 'react-icons/fi';

const CertificateCard: React.FC<CertificateProps> = ({ title, issuer, date, image, url }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div 
        className="card cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        onClick={() => setShowModal(true)}
      >
        <div className="relative h-48 overflow-hidden rounded-t-md">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
          />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // prevent modal open on link click
              className="flex items-center justify-center w-10 h-10 bg-gray-900 text-white rounded-full hover:bg-yellow-400 hover:text-black transition-all"
            >
              <FiEye size={18} />
            </a>
          </div>
        </div>

        <div className="p-4 bg-background-light rounded-b-md">
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-text-secondary text-sm">{issuer}</p>
          <p className="text-accent-gold text-xs mt-2">{date}</p>
        </div>
      </motion.div>
      
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background-dark bg-opacity-80"
          onClick={() => setShowModal(false)}
        >
          <motion.div 
            className="bg-background-light rounded-lg overflow-hidden max-w-3xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto"
              />
              <button 
                className="absolute top-4 right-4 bg-background-dark bg-opacity-80 text-white p-2 rounded-full"
                onClick={() => setShowModal(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-text-secondary">Issued by {issuer} • {date}</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
