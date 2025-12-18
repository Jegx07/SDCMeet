import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const speakers = [
  {
    name: 'Sarah Chen',
    title: 'Head of Automation',
    domain: 'UiPath',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Michael Roberts',
    title: 'Senior RPA Developer',
    domain: 'Tech Innovators Inc.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Priya Sharma',
    title: 'AI/ML Engineer',
    domain: 'Automation Labs',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'David Kim',
    title: 'Startup Founder',
    domain: 'AutoScale Ventures',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Emma Wilson',
    title: 'Business Strategist',
    domain: 'Global Consulting',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'James Park',
    title: 'Developer Advocate',
    domain: 'UiPath Community',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
  },
];

export const SpeakersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="speakers" className="py-24 bg-white relative overflow-hidden">
      {/* Connecting glow line from schedule */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Meet The Experts
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-sdc-dark mb-6">
            Our <span className="text-primary">Speakers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders and automation experts
          </p>
        </motion.div>

        {/* Speakers Grid - Layered Premium Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group ${index === 0 || index === 5 ? 'lg:mt-8' : ''}`}
            >
              {/* Premium Layered Card */}
              <div className="premium-card p-6 pt-16">
                {/* Geometric pattern on hover */}
                <div className="geo-pattern top-4 right-4 group-hover:opacity-100" />
                <div className="geo-pattern bottom-4 left-4 group-hover:opacity-100 rotate-180" />

                {/* Image with "out of bounds" effect */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="relative w-28 h-28">
                    {/* Glow behind image */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-xl opacity-0 group-hover:opacity-50 transition-opacity scale-125" />
                    {/* Image container */}
                    <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-primary/30 to-white border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center relative z-10 mt-4">
                  <h3 className="font-display font-bold text-xl text-sdc-dark mb-1 group-hover:text-primary transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-1">{speaker.title}</p>
                  <p className="text-muted-foreground text-sm">{speaker.domain}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-sdc-dark flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-sdc-dark flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Circuit line connector */}
      <div className="absolute bottom-12 left-0 right-0">
        <div className="container mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};
