import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';

const volunteers = [
  {
    name: 'Shashti Shree',
    role: 'Student Developer Champion',
    image: '/Team/Shashti Shri - Student Developer Champion.png',
    linkedin: 'https://www.linkedin.com/in/shashti-shree-s-29a3ba295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Boomika B',
    role: 'Vice President',
    image: '/Team/Boomika B - Vice President.png',
    linkedin: 'https://www.linkedin.com/in/boomika-boobala-ilanthirayan-273403295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Akash',
    role: 'Event Manager',
    image: '/Team/Akash  - Event Manager.png',
    linkedin: 'https://www.linkedin.com/in/akash-akash-94bb18336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Deepika K',
    role: 'Event Manager',
    image: '/Team/Deepika K - Event Manager.png',
    linkedin: 'https://www.linkedin.com/in/deepika-kasirajan-280602378',
  },
  {
    name: 'Harini MM',
    role: 'Secretary',
    image: '/Team/Harini MM - Secretary.png',
    linkedin: 'https://www.linkedin.com/in/harini-mahesh-32155a2ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Haritha',
    role: 'Technical Lead',
    image: '/Team/Haritha - Technical Lead.png',
    linkedin: 'https://www.linkedin.com/in/haritha-krishnamoorthy-861ba1339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Jegatheesh',
    role: 'Technical Lead',
    image: '/Team/Jegatheesh - Technical Lead.png',
    linkedin: 'https://www.linkedin.com/in/jegatheesh-v-877b61327',
  },
  {
    name: 'Karishma',
    role: 'Content Creator',
    image: '/Team/Karishma - Content Creator.png',
    linkedin: 'https://www.linkedin.com/in/karishma-j-b741bb295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Karthikeyan',
    role: 'Secretary',
    image: '/Team/Karthikeyan - Secretary.png',
    linkedin: 'https://www.linkedin.com/in/karthikeyan-s-956227217/',
  },
  {
    name: 'Lena Sri S',
    role: 'Public Executive Officer',
    image: '/Team/Lena Sri S - Public Executive Officer.png',
    linkedin: 'https://www.linkedin.com/in/lena-sri-s-916192295',
  },
  {
    name: 'Lenin Roy',
    role: 'Team Member',
    image: '/Team/Lenin Roy.png',
    linkedin: 'https://www.linkedin.com/in/lenin-roy-s-a2194132b',
  },
  {
    name: 'Narmatha',
    role: 'Secretary',
    image: '/Team/Narmatha - Secretary.png',
    linkedin: 'https://www.linkedin.com/in/narmatha-m-a849212a1',
  },
  {
    name: 'Praveena',
    role: 'Social Media Handler',
    image: '/Team/Praveena - Social Media Handler.png',
    linkedin: 'https://www.linkedin.com/in/praveena-s-740a93381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Shakthi Pranaash',
    role: 'Technical Lead',
    image: '/Team/Shakthi Pranaash -  Technical Lead.png',
    linkedin: 'https://www.linkedin.com/in/sakthi-pranaash-63p830?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Yuvaraj',
    role: 'Graphical Designer',
    image: '/Team/Yuvaraj - Graphical Designer.png',
    linkedin: 'https://www.linkedin.com/in/yuva2007',
  },
  {
    name: 'Madhusudhanan',
    role: 'Team Member',
    image: 'Team/Madhusudhanan - Team Member.png',
    linkedin: 'https://www.linkedin.com/in/madhusudhanan-n-a-972819336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Dharshini Shri',
    role: 'Graphical Designer',
    image: '/Team/Dharshini Shri - Graphical Designer.png',
    linkedin: 'https://www.linkedin.com/in/dharshini-shri-895829327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Dharani',
    role: 'Graphical Designer',
    image: '/Team/Dharani- Graphical Designer.png',
    linkedin: 'https://www.linkedin.com/in/dharani-m-5146b3328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
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
            volunteer.linkedin ? (
              <motion.a
                key={volunteer.name}
                href={volunteer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
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
              </motion.a>
            ) : (
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
            )
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
