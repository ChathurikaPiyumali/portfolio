import React from 'react';
import TabContent from '../components/TabContent';
import ContactForm from '../components/ContactForm';
import { personalInfo } from '../constants/data';
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Clock
} from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Phone size={18} />,
      label: 'Phone / WhatsApp',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
      isAction: true
    },
    {
      icon: <Mail size={18} />,
      label: 'Email Address',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      isAction: true
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: personalInfo.location,
      href: 'https://www.google.com/maps/search/?api=1&query=Colombo,+Sri+Lanka',
      isAction: true
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn Profile',
      value: 'chathurika-unagalle-10a937284',
      href: personalInfo.linkedIn,
      isAction: true
    },
    {
      icon: <Github size={18} />,
      label: 'GitHub Profile',
      value: 'ChathurikaPiyumali',
      href: personalInfo.github,
      isAction: true
    }
  ];

  return (
    <TabContent>
      <div className="space-y-8">
        {/* Header */}
        <div className="pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-8 h-1 bg-accent-gold rounded-full"></span>
            <span className="text-xs font-bold tracking-widest text-accent-gold uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Let's Build Something Exceptional
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Open for Data Science, Machine Learning, Full-Stack Software Engineering opportunities and research collaborations.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-background-light/75 border border-white/10 rounded-2xl p-6 shadow-xl">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles size={16} className="text-accent-gold" />
                <span>Contact Details</span>
              </h3>
              <p className="text-xs text-text-secondary mb-5 leading-relaxed">
                Whether you have an upcoming project, a full-time role inquiry, or an academic research idea, I'm always glad to connect!
              </p>

              <div className="space-y-3">
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center p-3 rounded-xl bg-background-dark/60 hover:bg-white/5 border border-white/5 hover:border-accent-gold/40 transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent-gold/15 text-accent-gold flex items-center justify-center mr-3 group-hover:scale-110 transition-transform flex-shrink-0">
                      {method.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] text-text-secondary block font-medium">
                        {method.label}
                      </span>
                      <span className="text-xs font-semibold text-white truncate block group-hover:text-accent-gold transition-colors">
                        {method.value}
                      </span>
                    </div>
                    {method.isAction && (
                      <ExternalLink size={13} className="text-text-secondary/50 group-hover:text-accent-gold ml-2 flex-shrink-0" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick response badge */}
            <div className="bg-background-dark/60 border border-white/5 rounded-2xl p-4 flex items-center gap-3">
              <Clock size={18} className="text-emerald-400 flex-shrink-0" />
              <div className="text-xs text-text-secondary">
                <span className="text-white font-medium block">Prompt Response</span>
                Usually replies within 24 hours on business days.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-background-light/75 border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare size={18} className="text-accent-gold" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Send a Direct Message
                </h3>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-white/10 text-center text-xs text-text-secondary">
          <p>© 2026 {personalInfo.fullName}. All rights reserved.</p>
          <p className="text-[11px] text-text-secondary/60 mt-1">
            Built with React, TypeScript, Tailwind CSS & Framer Motion • Deployed on Vercel
          </p>
        </div>
      </div>
    </TabContent>
  );
};

export default Contact;
