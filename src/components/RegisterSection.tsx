import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Check, User, Mail, Phone, Building, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export const RegisterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Registration successful! Check your email for confirmation.');
  };

  return (
    <section id="register" className="py-24 dark-section relative overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 blob opacity-40" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 blob blob-secondary opacity-30" />

      {/* Grid overlay applied via dark-section */}

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Secure Your Spot
            </span>
            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Register <span className="gradient-text-orange">Now</span>
            </h2>
            <p className="text-lg text-white/60">
              Limited seats available. Join us for an unforgettable day of learning and networking.
            </p>
          </motion.div>

          {/* Premium Glass Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-white/20 to-primary rounded-2xl blur-sm opacity-50" />

            <div className="relative glass-card rounded-2xl p-8 md:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mx-auto mb-6 glow-orange">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    Registration Complete!
                  </h3>
                  <p className="text-white/60">
                    We've sent a confirmation email with all the event details.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="group">
                    <label className="block text-sm font-medium text-white/80 mb-2 tracking-wide">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-primary transition-colors" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="premium-input pl-8"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="block text-sm font-medium text-white/80 mb-2 tracking-wide">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-primary transition-colors" />
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="premium-input pl-8"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label className="block text-sm font-medium text-white/80 mb-2 tracking-wide">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-primary transition-colors" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        className="premium-input pl-8"
                      />
                    </div>
                  </div>

                  {/* University/Company */}
                  <div className="group">
                    <label className="block text-sm font-medium text-white/80 mb-2 tracking-wide">
                      University / Company
                    </label>
                    <div className="relative">
                      <Building className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-primary transition-colors" />
                      <input
                        type="text"
                        required
                        placeholder="Your organization"
                        className="premium-input pl-8"
                      />
                    </div>
                  </div>

                  {/* Submit Button with Neon Glow */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 py-4 bg-primary text-primary-foreground font-display font-bold text-lg rounded-xl neon-button disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Register Now
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-white/40 mt-4">
                    By registering, you agree to receive event updates via email.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Glow line connector */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary to-transparent" />
    </section>
  );
};
