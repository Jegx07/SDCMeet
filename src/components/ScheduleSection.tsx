import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Code, Briefcase, Users, Award, Utensils } from 'lucide-react';

const morningSchedule = [
  {
    time: '08:30 - 08:45',
    title: 'Welcome & Kick-off',
    description: '15 mins - —',
    icon: Users,
  },
  {
    time: '08:45 - 09:00',
    title: 'Keynote Session',
    description: '15 mins - Keynote Speaker',
    icon: Award,
  },
  {
    time: '09:00 - 10:00',
    title: 'Meet UiPath: Turning Manual Tasks into Smart Automation',
    description: '60 mins - Viraj Sir',
    icon: Code,
  },
  {
    time: '10:00 - 10:30',
    title: 'Road map to Automation',
    description: '30 mins - Pugal',
    icon: Code,
  },
  {
    time: '10:30 - 11:15',
    title: 'RPA Gateway to Agentic Automation',
    description: '45 mins - Parvathy Mam',
    icon: Code,
  },
  {
    time: '11:15 - 11:45',
    title: 'Champion Session 2',
    description: '30 mins - Saptak',
    icon: Award,
  },
  {
    time: '11:45 - 12:15',
    title: 'Morning Break',
    description: '30 mins - —',
    icon: Coffee,
  },
];

const afternoonSchedule = [
  {
    time: '12:15 - 13:15',
    title: 'Speaker Session 3',
    description: '60 mins - Srenivasan sir',
    icon: Briefcase,
  },
  {
    time: '01:15 - 01:45',
    title: 'Champion Session 3',
    description: '30 mins - Dharshini',
    icon: Award,
  },
  {
    time: '01:45 - 02:45',
    title: 'Lunch Break',
    description: '60 mins - —',
    icon: Utensils,
  },
  {
    time: '02:45 - 03:30',
    title: 'UiPath Olympics',
    description: '45 mins - All',
    icon: Users,
  },
  {
    time: '03:30 - 04:15',
    title: 'Speaker Session 4',
    description: '45 mins - S4',
    icon: Briefcase,
  },
  {
    time: '04:15 - 04:35',
    title: 'Champion Session 4',
    description: '30 mins - Srishti',
    icon: Award,
  },
  {
    time: '04:35 - 05:30',
    title: 'Felicitation + Closing Remarks + Photo Session',
    description: '60 mins - —',
    icon: Award,
  },
];

const TimelineItem = ({
  item,
  index,
  isInView,
  isActive = false,
}: {
  item: (typeof morningSchedule)[0];
  index: number;
  isInView: boolean;
  isActive?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative flex gap-4 pb-8 last:pb-0 group"
    >
      {/* Timeline node */}
      <div className="relative flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            isActive
              ? 'bg-primary pulse-glow scale-125'
              : 'bg-white/20 border-2 border-white/40 group-hover:bg-primary group-hover:border-primary group-hover:scale-110'
          }`}
        />
        {/* Connecting line */}
        <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/50 to-white/10 mt-2" />
      </div>

      {/* Content - Frosted glass card */}
      <div className="flex-1 frosted-card rounded-xl p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-primary font-bold text-sm">{item.time}</span>
            <h4 className="font-display font-bold text-lg text-white mt-1 mb-1 group-hover:text-primary transition-colors">
              {item.title}
            </h4>
            <p className="text-white/60 text-sm">{item.description}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/40 transition-colors">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="schedule" className="relative overflow-hidden">
      {/* Feathered gradient transition from white */}
      <div className="h-24 bg-gradient-to-b from-white via-white/50 to-transparent absolute top-0 left-0 right-0 z-10" />
      
      <div className="pt-32 pb-24 dark-section relative">
        {/* Animated blobs - lava lamp effect */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 blob opacity-50" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 blob blob-secondary opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

        {/* Grid overlay is applied via dark-section */}

        <div className="container mx-auto px-6 relative z-10" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Event Schedule
            </span>
            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              The <span className="gradient-text-orange">Timeline</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A full day packed with technical sessions and business insights
            </p>
          </motion.div>

          {/* Schedule Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Morning Track */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center glow-orange-sm">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Morning Session
                  </h3>
                </div>
              </motion.div>
              <div>
                {morningSchedule.map((item, index) => (
                  <TimelineItem
                    key={item.title}
                    item={item}
                    index={index}
                    isInView={isInView}
                    isActive={index === 2}
                  />
                ))}
              </div>
            </div>

            {/* Afternoon Track */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-sdc-dark" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Afternoon Session
                  </h3>
                </div>
              </motion.div>
              <div>
                {afternoonSchedule.map((item, index) => (
                  <TimelineItem
                    key={item.title}
                    item={item}
                    index={index + morningSchedule.length}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
