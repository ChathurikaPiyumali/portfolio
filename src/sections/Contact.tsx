import React from 'react';
import TabContent from '../components/TabContent';

const Contact: React.FC = () => {
  return (
    <TabContent>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
        <p className="text-text-secondary mb-6">
          Feel free to contact me for any questions or opportunities!
        </p>

        {/* Contact Info Box */}
        <div className="bg-background-light p-6 rounded-lg mb-10">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="text-text-secondary mb-6">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-accent-gold bg-opacity-20 flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="text-sm text-text-secondary">Call Me</span>
                <h4 className="font-medium">+94 706375577</h4>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-accent-gold bg-opacity-20 flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="text-sm text-text-secondary">Email Me</span>
                <h4>
                  <a
                    href="mailto:chathurikapiyumali01@gmail.com"
                    className="font-medium break-all text-white hover:underline transition-colors duration-200"
                  >
                    chathurikapiyumali01@gmail.com
                  </a>
                </h4>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-accent-gold bg-opacity-20 flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="text-sm text-text-secondary">Location</span>
                <h4 className="font-medium">Boralesgamuwa, Sri Lanka</h4>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-accent-gold bg-opacity-20 flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div>
                <span className="text-sm text-text-secondary">LinkedIn</span>
                <h4>
                  <a
                    href="https://www.linkedin.com/in/chathurika-unagalle-10a937284/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white hover:underline transition-colors duration-200"
                  >
                    chathurika-unagalle
                  </a>
                </h4>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-accent-gold bg-opacity-20 flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" viewBox="0 0 24 24">
                  <path d="M12 1C5.925 1 1 5.925 1 12c0 4.867 3.163 8.987 7.549 10.436.552.101.752-.24.752-.533 0-.264-.01-1.137-.015-2.063-3.073.668-3.722-1.481-3.722-1.481-.502-1.276-1.227-1.615-1.227-1.615-.997-.681.076-.667.076-.667 1.104.078 1.684 1.134 1.684 1.134.98 1.678 2.573 1.193 3.201.912.099-.71.384-1.193.698-1.467-2.455-.279-5.034-1.228-5.034-5.466 0-1.207.432-2.194 1.139-2.967-.114-.278-.494-1.397.108-2.913 0 0 .93-.297 3.048 1.135a10.626 10.626 0 0 1 2.774-.373c.941.004 1.89.127 2.775.373 2.116-1.432 3.045-1.135 3.045-1.135.604 1.516.224 2.635.11 2.913.71.773 1.138 1.76 1.138 2.967 0 4.247-2.583 5.185-5.045 5.459.395.34.748 1.008.748 2.03 0 1.466-.014 2.647-.014 3.008 0 .296.198.64.759.53C19.843 20.982 23 16.862 23 12c0-6.075-4.925-11-11-11z"/>
                </svg>
              </div>
              <div>
                <span className="text-sm text-text-secondary">GitHub</span>
                <h4>
                  <a
                    href="https://github.com/ChathurikaPiyumali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white hover:underline transition-colors duration-200"
                  >
                    github.com/ChathurikaPiyumali
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-background-light p-6 rounded-md text-center text-sm text-text-secondary max-w-4xl mx-auto">
          <p className="text-white font-semibold mb-2">
            © 2025 Chathurika Unagalle • All rights reserved
          </p>
          <p className="leading-relaxed text-xs text-text-secondary">
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
            to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
            and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 
            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
          </p>
        </div>
      </div>
    </TabContent>
  );
};

export default Contact;
