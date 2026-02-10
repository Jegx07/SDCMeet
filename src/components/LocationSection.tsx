import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RobotSpline } from "@/components/RobotSpline";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden dark-section"
    >
      {/* Subtle Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/15 rounded-full blur-[140px]" />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl text-center lg:text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
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
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl"
          >
            Ignite your future in automation. Join us for an immersive day of
            learning, networking, and innovation with industry experts.
          </motion.p>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 text-sm"
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
            className="mb-10 flex justify-center lg:justify-start"
          >
            <Link
              to="/register"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-display font-bold text-lg rounded-full btn-hover glow-orange-sm group"
            >
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <RobotSpline />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
