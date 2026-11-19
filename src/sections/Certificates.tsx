import React from 'react';
import { Award, ShieldCheck, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';
import TabContent from '../components/TabContent';
import CertificateCard from '../components/CertificateCard';
import { certificates, personalInfo } from '../constants/data';

const Certificates: React.FC = () => {
  return (
    <TabContent>
      <div className="space-y-8 pb-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <ShieldCheck size={16} />
              <span>Verified Qualifications & Recognition</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Certifications & Honors
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Industry credentials from IBM, SLIIT University, University of Moratuwa, DevTown, and national awards.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`${personalInfo.linkedIn}details/certifications/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border border-sky-500/30 text-xs font-semibold transition-all hover:scale-105"
            >
              <span>View on LinkedIn</span>
              <ExternalLink size={13} />
            </a>

            <div className="flex items-center gap-2 bg-background-light/80 border border-white/10 px-3.5 py-2 rounded-xl text-xs text-slate-300">
              <Award size={15} className="text-amber-400" />
              <span><strong className="text-white">{certificates.length}</strong> Credentials</span>
            </div>
          </div>
        </div>

        {/* Verification Banner */}
        <div className="bg-gradient-to-r from-amber-500/10 via-background-light/60 to-transparent border border-amber-400/20 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-glass">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">100% Credential Verification</h4>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                Click any certificate to launch the high-resolution lightbox preview or verify the issuing hash directly.
              </p>
            </div>
          </div>
          <span className="text-[10px] uppercase font-mono font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full self-start sm:self-auto whitespace-nowrap">
            Updated for 2026
          </span>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} {...certificate} />
          ))}
        </div>
      </div>
    </TabContent>
  );
};

export default Certificates;
