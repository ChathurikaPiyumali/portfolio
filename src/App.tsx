import React, { useState, useEffect } from 'react';
import {
  User,
  FileText,
  Grid,
  Award,
  Mail as MailIcon,
  Menu,
  X,
  Download,
  Sparkles
} from 'lucide-react';

import StarfieldBackground from './components/StarfieldBackground';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
import About from './sections/About';
import Resume from './sections/Resume';
import Portfolio from './sections/Portfolio';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import BottomNav from './components/BottomNav';
import { TabProps } from './types';
import { personalInfo } from './constants/data';

const tabs: TabProps[] = [
  { id: 'about', label: 'About Me', icon: <User size={16} /> },
  { id: 'resume', label: 'Resume & Experience', icon: <FileText size={16} /> },
  { id: 'portfolio', label: 'Projects & Research', icon: <Grid size={16} /> },
  { id: 'certificates', label: 'Certificates', icon: <Award size={16} /> },
  { id: 'contact', label: 'Contact', icon: <MailIcon size={16} /> },
];

function App() {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMobileProfileOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile profile is open
  useEffect(() => {
    if (mobileProfileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileProfileOpen]);

  return (
    <div className="relative min-h-screen bg-background-dark text-text-primary selection:bg-accent-gold selection:text-slate-950 font-sans">
      {/* Background Starfield and Ambient Glows */}
      <StarfieldBackground />

      {/* Mobile Top Header */}
      {isMobile && (
        <header className="sticky top-0 z-40 w-full bg-background-light/90 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center justify-between shadow-lg">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setMobileProfileOpen(true)}
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-accent-gold p-0.5">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.fullName}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h2 className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>{personalInfo.displayName}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </h2>
              <p className="text-[10px] text-accent-gold font-medium">Data Science & Full-Stack</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePdf}
              download="Chathurika_Unagalle_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-accent-gold text-slate-950 font-bold hover:bg-yellow-400 transition-colors shadow"
              title="Download Resume"
            >
              <Download size={16} />
            </a>
            <button
              onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors"
              aria-label="Toggle Profile Sidebar"
            >
              {mobileProfileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>
      )}

      {/* Main Container Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 pb-24 lg:pb-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Desktop Sticky Sidebar */}
          <div className="hidden lg:block sticky top-6">
            <Sidebar />
          </div>

          {/* Mobile Profile Drawer Modal */}
          {isMobile && mobileProfileOpen && (
            <div
              className="fixed inset-0 z-50 bg-background-dark/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setMobileProfileOpen(false)}
            >
              <div
                className="w-full max-w-md my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <Sidebar
                  isMobileModal={true}
                  onCloseMobile={() => setMobileProfileOpen(false)}
                />
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <main className="flex-1 w-full min-w-0 bg-background-light/40 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-7 lg:p-9 shadow-2xl overflow-hidden">
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            >
              <div id="about"><About /></div>
              <div id="resume"><Resume /></div>
              <div id="portfolio"><Portfolio /></div>
              <div id="certificates"><Certificates /></div>
              <div id="contact"><Contact /></div>
            </Tabs>
          </main>
        </div>
      </div>

      {/* Bottom Floating Navigation for Mobile screens */}
      {isMobile && (
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      )}
    </div>
  );
}

export default App;
