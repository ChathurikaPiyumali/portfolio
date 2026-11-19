import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CertificateProps } from '../types';
import { Award, ExternalLink, Eye, X, CheckCircle, ShieldCheck } from 'lucide-react';

const CertificateCard: React.FC<CertificateProps> = ({
  title,
  issuer,
  date,
  image,
  url,
  badge
}) => {
  const [showModal, setShowModal] = useState(false);
  const [imgError, setImgError] = useState(!image);

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative bg-background-light/75 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-accent-gold/50 shadow-xl flex flex-col justify-between transition-all duration-300"
      >
        {/* Card Header & Media */}
        <div>
          <div
            className="relative h-44 w-full bg-background-dark overflow-hidden cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            {!imgError ? (
              <img
                src={image}
                alt={title}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-background-dark to-amber-950/20 text-center border-b border-white/5">
                <div className="w-12 h-12 rounded-2xl bg-accent-gold/15 text-accent-gold flex items-center justify-center mb-2 shadow-inner">
                  <Award size={26} />
                </div>
                <span className="text-xs font-bold text-white tracking-wide">{issuer}</span>
                <span className="text-[10px] text-amber-300/80 mt-0.5">Verified Completion</span>
              </div>
            )}

            {/* Hover Quick View Overlay */}
            <div className="absolute inset-0 bg-background-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(true);
                }}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110"
                title="Preview Certificate"
              >
                <Eye size={18} />
              </button>
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 rounded-full bg-accent-gold text-slate-950 flex items-center justify-center font-bold hover:bg-yellow-400 transition-all hover:scale-110"
                  title="Verify Online"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>

            {/* Verified Badge */}
            <div className="absolute top-2.5 right-2.5">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-background-dark/80 backdrop-blur-md text-emerald-300 border border-emerald-400/30">
                <ShieldCheck size={11} />
                <span>{badge || 'Verified'}</span>
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="p-4 sm:p-5">
            <h3 className="font-bold text-white text-sm sm:text-base mb-1 group-hover:text-accent-gold transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-xs text-text-secondary font-medium">{issuer}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 flex items-center justify-between border-t border-white/5">
          <span className="text-[11px] text-accent-gold font-semibold">{date}</span>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-medium transition-colors"
            >
              <span>Verify</span>
              <ExternalLink size={12} />
            </a>
          ) : (
            <span className="text-[11px] text-text-secondary">Official Credential</span>
          )}
        </div>
      </motion.div>

      {/* Modern Modal Preview */}
      <AnimatePresence>
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background-dark/85 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-background-light border border-white/10 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-background-dark/80 hover:bg-background-dark text-white flex items-center justify-center transition-colors"
                onClick={() => setShowModal(false)}
              >
                <X size={16} />
              </button>

              <div className="relative max-h-[70vh] overflow-auto bg-black flex items-center justify-center">
                {!imgError ? (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <div className="py-20 px-8 text-center">
                    <Award size={48} className="text-accent-gold mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                    <p className="text-sm text-text-secondary">{issuer} • {date}</p>
                  </div>
                )}
              </div>

              <div className="p-5 bg-background-light flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10">
                <div>
                  <h4 className="text-base font-bold text-white">{title}</h4>
                  <p className="text-xs text-text-secondary">{issuer} • {date}</p>
                </div>
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-accent-gold text-slate-950 font-bold text-xs hover:bg-yellow-400 transition-colors self-start sm:self-auto"
                  >
                    <span>Verify Credential Online</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificateCard;
