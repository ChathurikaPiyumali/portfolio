import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      
      // Reset submission message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <motion.form 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          className="contact-input"
          placeholder="John Doe"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>
        )}
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="contact-input"
          placeholder="john@example.com"
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
        )}
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="contact-input resize-none"
          placeholder="Type your message here..."
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>
        )}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent-gold hover:bg-opacity-90 transition-all text-background-dark font-medium py-3 px-4 rounded-md flex items-center justify-center disabled:opacity-70"
      >
        {isSubmitting ? (
          <span className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-background-dark"></span>
        ) : (
          'Send Message'
        )}
      </button>
      
      {isSubmitted && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-green-500 bg-opacity-20 border border-green-500 rounded-md text-green-400 text-sm"
        >
          Your message has been sent successfully!
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;