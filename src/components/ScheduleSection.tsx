import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Award,
  Code,
  Coffee,
  Users,
  Utensils,
  type LucideIcon,
} from 'lucide-react';

type ScheduleItem = {
  time: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const schedule: ScheduleItem[] = [
  {
    time: '09:00 - 09:15',
    title: 'Welcome & Inauguration',
    description: 'Event opening and introduction',
    icon: Users,
  },
  {
    time: '09:15 - 09:45',
    title: 'Keynote: Future of AI & Intelligent Automation',
    description: 'Industry insights',
    icon: Award,
  },
  {
    time: '09:45 - 10:30',
    title: 'Mr. Veeraraj',
    description: 'Meet UiPath: Turning Manual Tasks into Smart Automation',
    icon: Code,
  },
  {
    time: '10:30 - 11:15',
    title: 'Mr. Palaniyappan',
    description: 'Coded Agent with UiPath SDK and LangGraph',
    icon: Code,
  },
  {
    time: '11:15 - 11:45',
    title: 'Tea Break',
    description: '',
    icon: Coffee,
  },
  {
    time: '11:45 - 12:30',
    title: 'Mr. Srenivasan Kannan',
    description: 'AI Help Desk & Smart Resume Screening Agent',
    icon: Code,
  },
  {
    time: '12:30 - 01:30',
    title: 'Ms. Teena Cobb',
    description: 'Industry Automation Insights',
    icon: Code,
  },
  {
    time: '01:30 - 02:30',
    title: 'Lunch Break',
    description: '',
    icon: Utensils,
  },
  {
    time: '02:30 - 03:30',
    title: 'UiPath Olympics',
    description: 'Automation challenges',
    icon: Users,
  },
  {
    time: '03:30 - 03:45',
    title: 'Tea Break',
    description: '',
    icon: Coffee,
  },
  {
    time: '03:45 - 04:00',
    title: 'Evaluation',
    description: '',
    icon: Award,
  },
  {
    time: '04:00 - 04:30',
    title: 'Prize Distribution & Closing Ceremony',
    description: '',
    icon: Award,
  },
];

const TimelineItem = ({
  item,
  index,
  isInView,
}: {
  item: ScheduleItem;
  index: number;
  isInView: boolean;
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
          className="w-4 h-4 rounded-full transition-all duration-300 bg-white/20 border-2 border-white/40 group-hover:bg-primary group-hover:border-primary group-hover:scale-110"
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

          {/* Schedule */}
          <div className="max-w-4xl mx-auto">
            <div>
              {schedule.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
