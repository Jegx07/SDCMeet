import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Rocket, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with fellow student developers passionate about automation.',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Learn cutting-edge automation technologies and best practices.',
  },
  {
    icon: Target,
    title: 'Career Growth',
    description: 'Bridge technical skills with real-world business applications.',
  },
  {
    icon: Zap,
    title: 'Hands-On',
    description: 'Participate in interactive workshops and live demonstrations.',
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Expected Attendees' },
  { value: 6, suffix: '+', label: 'Expert Speakers' },
  { value: 8, suffix: '+', label: 'Sessions' },
  { value: 1, suffix: '', label: 'Day of Innovation' },
];

// Counter animation component
const AnimatedCounter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="counter-animate">
      {count}{suffix}
    </span>
  );
};

export const AboutSection = () => {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background 3D Shape - Faded gear/node */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            fill="currentColor"
            className="text-sdc-dark"
            d="M100,10 L120,40 L160,40 L130,70 L140,110 L100,85 L60,110 L70,70 L40,40 L80,40 Z"
          />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-sdc-dark" />
        </svg>
      </div>

      {/* Subtle accent line connecting from hero */}
      <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            About The Event
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-sdc-dark mb-6">
            What is <span className="text-primary">SDC Meet</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SDC Meet brings together aspiring developers, technical enthusiasts, and business
            professionals to explore the transformative power of automation. Hosted by UiPath,
            this event bridges the gap between technical skills and real-world career opportunities.
          </p>
        </motion.div>

        {/* Features Grid - Premium Icon Tiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="icon-tile h-full">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/30">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-sdc-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats with Counter Animation */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display font-black text-5xl md:text-6xl text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={statsInView} />
              </div>
              <div className="text-sdc-dark font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Feathered gradient transition to dark section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white to-white" />
    </section>
  );
};
