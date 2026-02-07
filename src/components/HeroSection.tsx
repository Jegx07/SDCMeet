import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

// Floating Shape Component
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
    initial={{ opacity: 0, scale: 0.6 }}
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
      {/* 🔥 TOP LEFT LOGO */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 left-6 md:top-8 md:left-10 z-20"
      >
        <img
          src="/champion.png"
          alt="UiPath Student Developer Champion"
          className="h-16 md:h-20 lg:h-24 object-contain"
        />
      </motion.div>

      {/* Floating 3D Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Orange Sphere */}
        <FloatingShape className="absolute top-24 right-[15%] float" delay={0.2}>
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-primary/50 opacity-80 glow-orange blur-sm" />
        </FloatingShape>

        {/* White Cube */}
        <FloatingShape className="absolute top-40 left-[10%] float-delayed" delay={0.4}>
          <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-sm border border-white/20 rotate-45 rounded-lg" />
        </FloatingShape>

        {/* Orange Ring */}
        <FloatingShape className="absolute bottom-40 right-[20%] float-slow" delay={0.6}>
          <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-primary/40 animate-spin-slow" />
        </FloatingShape>

        {/* Small Dots */}
        <FloatingShape className="absolute top-1/3 right-[30%] float" delay={0.3}>
          <div className="w-4 h-4 rounded-full bg-white/60" />
        </FloatingShape>

        <FloatingShape className="absolute bottom-1/3 left-[25%] float-delayed" delay={0.5}>
          <div className="w-3 h-3 rounded-full bg-primary pulse-glow" />
        </FloatingShape>

        {/* Glow Blobs */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
      </div>

      {/* Circuit Line */}
      <div className="absolute top-1/2 left-0 w-full">
        <div className="circuit-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-52">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              UiPath Student Developers Meet
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          >
            <span className="text-white">Student Developers </span>
            <span className="gradient-text-orange">Meet</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto"
          >
            Ignite your future in automation. Join us for an immersive day of
            learning, networking, and innovation with industry experts.
          </motion.p>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-14 text-sm"
          >
            <div className="flex items-center gap-2 text-white/80 glass-card px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-primary" />
              <span>21 February 2026</span>
            </div>

            <div className="flex items-center gap-2 text-white/80 glass-card px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-primary" />
              <span>9:00 AM - 5:30 PM</span>
            </div>

            <div className="flex items-center gap-2 text-white/80 glass-card px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-primary" />
              <span>SRL Auditorium</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
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

      {/* Lowered Curve */}
      <div className="absolute -bottom-16 left-0 right-0 h-48">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0 120L1440 120L1440 75C1440 75 1200 15 720 15C240 15 0 75 0 75L0 120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
