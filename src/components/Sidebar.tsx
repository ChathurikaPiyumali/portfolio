// src/components/Sidebar.tsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Facebook,
} from 'lucide-react';
import { SocialLinkProps } from '../types';

const profileImage = '/sliit.jpg';
const socialLinks: SocialLinkProps[] = [
  { url: 'https://github.com/chathurika',      icon: <Github    size={18} />, label: 'GitHub'    },
  { url: 'https://www.instagram.com/piyu_c.u/', icon: <Instagram size={18} />, label: 'Instagram' },
  { url: 'https://www.facebook.com/chathurika.piyumali.151755', icon: <Facebook size={18} />, label: 'Facebook' },
  { url: 'mailto:chathurikapiyumali01@gmail.com', icon: <Mail size={18} />,     label: 'Email'     },
];

// Terms for the typewriter
const TERMS = [
  'Data Science Explorer',
  'AI Developer',
  'Machine Learning Enthusiast',
  'Analytics Storyteller'
];

// Typewriter component
const Typewriter: React.FC<{ terms: string[] }> = ({ terms }) => {
  const [termIndex, setTermIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = terms[termIndex];
    let timer: number;

    if (!deleting && charIndex <= full.length) {
      // typing forward
      timer = window.setTimeout(() => {
        setDisplayed(full.slice(0, charIndex));
        setCharIndex(i => i + 1);
      }, 150);

    } else if (!deleting && charIndex > full.length) {
      // pause on full term
      timer = window.setTimeout(() => setDeleting(true), 2000);

    } else if (deleting && charIndex > 0) {
      // deleting backwards
      timer = window.setTimeout(() => {
        setDisplayed(full.slice(0, charIndex - 1));
        setCharIndex(i => i - 1);
      }, 80);

    } else if (deleting && charIndex === 0) {
      // reset to next term
      setDeleting(false);
      setTermIndex(i => (i + 1) % terms.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, deleting, termIndex, terms]);

  return (
    <>
      <style>{`
        @keyframes blink-caret {
          0%,100% { border-color: transparent; }
          50% { border-color: #D4AF37; }
        }
      `}</style>
      <span
        className="text-accent-gold text-lg font-medium overflow-hidden whitespace-nowrap"
        style={{
          borderRight: '2px solid #D4AF37',
          animation: 'blink-caret 0.75s step-end infinite'
        }}
      >
        {displayed}
      </span>
    </>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-80 flex-shrink-0 flex items-center bg-background-dark">
      <div className="card w-full overflow-hidden">
        <div className="p-6 flex flex-col items-center">

          {/* Profile Photo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-accent-gold mb-4"
          >
            <img
              src={profileImage}
              alt="Chathurika Unagalle"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-white mb-2 text-center"
          >
            Chathurika Unagalle
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6 h-8"
          >
            <Typewriter terms={TERMS} />
          </motion.div>

          {/* Contact Info */}
          <div className="w-full space-y-4 mb-6 text-white text-sm">
            <div className="flex items-center">
              <Phone size={16} className="text-accent-gold mr-3" />
              <a href="tel:+94706375577" className="hover:underline">+94 706375577</a>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="text-accent-gold mr-3" />
              <a href="mailto:chathurikapiyumali01@gmail.com" className="break-all hover:underline">
                chathurikapiyumali01@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="text-accent-gold mr-3" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Colombo,+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Colombo, Sri Lanka
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin size={16} className="text-accent-gold mr-3" />
              <a
                href="https://www.linkedin.com/in/chathurika-piyumali-10a937284"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-16 h-1 bg-accent-gold mb-4" />

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-text-secondary hover:text-accent-gold transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
