import React, { useState, useEffect } from 'react';
import {
  User,
  FileText,
  Grid,
  Award,
  Mail as MailIcon,
  Menu,
  X,
} from 'lucide-react';

import StarfieldBackground from './components/StarfieldBackground';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
import About from './sections/About';
import Resume from './sections/Resume';
import Portfolio from './sections/Portfolio';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import { TabProps } from './types';

const tabs: TabProps[] = [
  { id: 'about',       label: 'About',       icon: <User size={18} /> },
  { id: 'resume',      label: 'Resume',      icon: <FileText size={18} /> },
  { id: 'portfolio',   label: 'Portfolio',   icon: <Grid size={18} /> },
  { id: 'certificates',label: 'Certificates',icon: <Award size={18} /> },
  { id: 'contact',     label: 'Contact',     icon: <MailIcon size={18} /> },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile,        setIsMobile]        = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(o => !o);

  return (
    <div className="relative min-h-screen">
      {/* full-screen starfield */}
      <StarfieldBackground />

      {/* mobile menu button */}
      {isMobile && (
        <button
          className="fixed top-4 right-4 z-50 w-10 h-10 bg-background-light text-text-primary rounded-full flex items-center justify-center shadow-lg"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={20}/> : <Menu size={20}/>}
        </button>
      )}

      {/* center everything in a max-width “card” */}
      <div className="relative z-10 flex justify-center p-6">
        <div className="card flex w-full max-w-screen-xl h-screen overflow-hidden">
          
          {/* sidebar (fixed overlay on mobile) */}
          <div
            className={
              isMobile
                ? mobileMenuOpen ? 'block fixed inset-0 z-40' : 'hidden'
                : 'block'
            }
          >
            <Sidebar />
          </div>

          {/* main content */}
          <main className="flex-1 bg-background-dark p-6 md:p-10 overflow-auto">
            <Tabs tabs={tabs}>
              <About />
              <Resume />
              <Portfolio />
              <Certificates />
              <Contact />
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
