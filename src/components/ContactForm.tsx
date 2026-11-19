import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);

    // Simulate sending or mailto fallback
    setTimeout(() => {
      console.log('Form submission:', data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }, 1200);
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="name">
            Your Name <span className="text-amber-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="contact-input text-xs"
            placeholder="e.g. John Doe"
            {...register('name', { required: 'Please enter your name' })}
          />
          {errors.name && (
            <p className="flex items-center gap-1 text-rose-400 text-[11px] mt-1">
              <AlertCircle size={11} />
              <span>{errors.name.message}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="email">
            Your Email <span className="text-amber-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="contact-input text-xs"
            placeholder="e.g. john@company.com"
            {...register('email', {
              required: 'Please enter your email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <p className="flex items-center gap-1 text-rose-400 text-[11px] mt-1">
              <AlertCircle size={11} />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="subject">
          Subject / Opportunity Title <span className="text-amber-400">*</span>
        </label>
        <input
          id="subject"
          type="text"
          className="contact-input text-xs"
          placeholder="e.g. Data Scientist / Software Engineer Opportunity"
          {...register('subject', { required: 'Please enter a subject' })}
        />
        {errors.subject && (
          <p className="flex items-center gap-1 text-rose-400 text-[11px] mt-1">
            <AlertCircle size={11} />
            <span>{errors.subject.message}</span>
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="message">
          Message <span className="text-amber-400">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className="contact-input text-xs resize-none"
          placeholder="Write your message here..."
          {...register('message', {
            required: 'Please enter your message',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
        />
        {errors.message && (
          <p className="flex items-center gap-1 text-rose-400 text-[11px] mt-1">
            <AlertCircle size={11} />
            <span>{errors.message.message}</span>
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 text-xs md:text-sm shadow-glow-gold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-slate-950 border-t-transparent" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send size={15} />
            <span>Send Message</span>
          </>
        )}
      </button>

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center gap-2"
        >
          <CheckCircle2 size={16} className="shrink-0" />
          <span>Thank you! Your message has been received. I will reply shortly.</span>
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
