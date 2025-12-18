import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

// Floating 3D Shape Component
const FloatingShape = ({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dark-section"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-100" />

      {/* Floating 3D Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orange Sphere */}
        <FloatingShape
          className="absolute top-20 right-[15%] float"
          delay={0.2}
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-primary/50 opacity-80 glow-orange blur-sm" />
        </FloatingShape>

        {/* White Cube */}
        <FloatingShape
          className="absolute top-40 left-[10%] float-delayed"
          delay={0.4}
        >
          <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-sm border border-white/20 rotate-45 rounded-lg" />
        </FloatingShape>

        {/* Orange Ring */}
        <FloatingShape
          className="absolute bottom-32 right-[20%] float-slow"
          delay={0.6}
        >
          <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-primary/40 animate-spin-slow" />
        </FloatingShape>

        {/* Small white dots/nodes */}
        <FloatingShape
          className="absolute top-1/3 right-[30%] float"
          delay={0.3}
        >
          <div className="w-4 h-4 rounded-full bg-white/60" />
        </FloatingShape>

        <FloatingShape
          className="absolute bottom-1/3 left-[25%] float-delayed"
          delay={0.5}
        >
          <div className="w-3 h-3 rounded-full bg-primary pulse-glow" />
        </FloatingShape>

        {/* Large blurred orange blob */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
      </div>

      {/* Circuit Lines */}
      <div className="absolute top-1/2 left-0 w-full">
        <div className="circuit-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              UiPath Student Developer Champion Event
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-6xl md:text-8xl lg:text-9xl mb-6 leading-tight"
          >
            <span className="text-white">SDC </span>
            <span className="gradient-text-orange">Meet</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Ignite your future in automation. Join us for an immersive day of learning, 
            networking, and innovation with industry experts.
          </motion.p>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-10 text-sm"
          >
            <div className="flex items-center gap-2 text-white/80 glass-card px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-primary" />
              <span>January 25, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 glass-card px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-primary" />
              <span>9:00 AM - 5:30 PM</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 glass-card px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Tech Innovation Hub</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#register"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-display font-bold text-lg rounded-full btn-hover glow-orange-sm group"
            >
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Diagonal transition to white section */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L1440 120L1440 60C1440 60 1200 0 720 0C240 0 0 60 0 60L0 120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
