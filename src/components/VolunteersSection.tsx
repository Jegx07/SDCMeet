import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';

const volunteers = [
  {
    name: 'Alex Johnson',
    role: 'Student Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Maria Garcia',
    role: 'Tech Support',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Ryan Chen',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Sophie Williams',
    role: 'Social Media',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'David Park',
    role: 'Registration',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Emma Thompson',
    role: 'Student Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
];

export const VolunteersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="volunteers" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.1) 1px, transparent 0)',
        backgroundSize: '48px 48px'
      }} />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Meet Our Team
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-sdc-dark mb-6">
            The Champion <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated volunteers make SDC Meet possible. Join this amazing team and be part of something extraordinary.
          </p>
        </motion.div>

        {/* Volunteers Grid - Matching Speaker Card Style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {volunteers.map((volunteer, index) => (
            <motion.div
              key={volunteer.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              {/* Premium Layered Card - Same as speakers */}
              <div className="premium-card p-6 pt-16">
                {/* Geometric pattern on hover */}
                <div className="geo-pattern top-4 right-4 group-hover:opacity-100" />
                <div className="geo-pattern bottom-4 left-4 group-hover:opacity-100 rotate-180" />

                {/* Image with "out of bounds" effect */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="relative w-24 h-24">
                    {/* Glow behind image */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-xl opacity-0 group-hover:opacity-50 transition-opacity scale-125" />
                    {/* Image container */}
                    <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-primary/30 to-white border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={volunteer.image}
                        alt={volunteer.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center relative z-10 mt-2">
                  <h3 className="font-display font-bold text-xl text-sdc-dark mb-2 group-hover:text-primary transition-colors">
                    {volunteer.name}
                  </h3>
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full">
                    {volunteer.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground font-medium">Want to be part of the team?</span>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-display font-bold text-lg rounded-full neon-button group"
            >
              <Sparkles className="w-5 h-5" />
              Join Volunteer Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
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
