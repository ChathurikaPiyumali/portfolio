import React from 'react';
import {
  User,
  Briefcase,
  Grid,
  Award,
  Mail as MailIcon,
} from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const items = [
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'resume', label: 'Resume', icon: <Briefcase size={18} /> },
    { id: 'portfolio', label: 'Projects', icon: <Grid size={18} /> },
    { id: 'certificates', label: 'Awards', icon: <Award size={18} /> },
    { id: 'contact', label: 'Contact', icon: <MailIcon size={18} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background-dark/95 backdrop-blur-xl text-slate-300 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] z-50 flex justify-around items-center h-16 border-t border-white/10 lg:hidden px-2">
      {items.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => {
              onTabChange(item.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-300 ${
              isActive
                ? 'text-amber-400 font-semibold scale-105'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-lg ${isActive ? 'bg-amber-400/15' : 'bg-transparent'}`}>
              {item.icon}
            </div>
            <span className="text-[11px] mt-0.5 tracking-tight">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
