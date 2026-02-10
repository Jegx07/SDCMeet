import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Award,
  Code,
  Coffee,
  Cpu,
  Sparkles,
  Target,
  Users,
  Utensils,
  Zap,
} from 'lucide-react';

const schedule = [
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
    title: 'Mr. Viraj',
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
    title: 'Mr. Srenivasan',
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
    isOlympics: true,
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
  onClick,
}: {
  item: (typeof schedule)[0] & { isOlympics?: boolean };
  index: number;
  isInView: boolean;
  onClick?: () => void;
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
      <div
        className={`flex-1 frosted-card rounded-xl p-5 ${
          item.isOlympics ? 'olympics-card cursor-pointer' : ''
        }`}
        onClick={onClick}
        role={item.isOlympics ? 'button' : undefined}
        tabIndex={item.isOlympics ? 0 : -1}
        onKeyDown={(event) => {
          if (!item.isOlympics || !onClick) return;
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick();
          }
        }}
      >
        {item.isOlympics ? (
          <>
            <span className="olympics-wave" aria-hidden="true" />
            <span className="olympics-ripple" aria-hidden="true" />
            <span className="olympics-glow" aria-hidden="true" />
            <span className="olympics-badge">
              <span className="olympics-badge-text">Special Event</span>
              <Sparkles className="olympics-badge-icon" aria-hidden="true" />
            </span>
          </>
        ) : null}
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
  const [isOlympicsOpen, setOlympicsOpen] = useState(false);

  const olympicsSteps = [
    { title: 'Draw Problem Cue Card', icon: Sparkles },
    { title: 'Analyze Real-Life Challenge', icon: Cpu },
    { title: 'Design Automation Workflow Idea', icon: Zap },
    { title: 'Present Solution to Judges', icon: Target },
  ];

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
                  onClick={item.isOlympics ? () => setOlympicsOpen(true) : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOlympicsOpen ? (
          <motion.div
            className="olympics-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              className="olympics-overlay-backdrop"
              onClick={() => setOlympicsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close UiPath Olympics experience"
            />
            <motion.div
              className="olympics-modal"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              role="dialog"
              aria-modal="true"
            >
              <div className="olympics-modal-glow" aria-hidden="true" />
              <div className="olympics-modal-grid" aria-hidden="true" />

              <div className="olympics-modal-content">
                <div className="olympics-modal-header">
                  <div>
                    <p className="text-primary font-semibold text-xs uppercase tracking-[0.3em]">
                      UiPath Olympics
                    </p>
                    <h3 className="font-display font-black text-3xl md:text-5xl text-white mt-3">
                      UiPath Olympics - Innovation Challenge
                    </h3>
                    <p className="text-white/70 text-lg mt-3">
                      Think. Automate. Innovate.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="olympics-close"
                    onClick={() => setOlympicsOpen(false)}
                  >
                    Back to Schedule
                  </button>
                </div>

                <div className="mt-8 text-white/70 leading-relaxed space-y-4">
                  <p>
                    UiPath Olympics is an engaging innovation challenge designed to promote
                    creativity, teamwork, and real-world automation problem solving.
                  </p>
                  <p>
                    In this event, each team leader will draw a cue card containing a real-life
                    problem scenario. Teams will be given one hour to analyze the challenge and
                    propose a technical or automation-based workflow solution using logical
                    thinking and UiPath concepts.
                  </p>
                  <p>
                    Participants are not required to fully develop a project. Instead, they must
                    focus on understanding the problem, designing an efficient automation
                    workflow idea, and presenting their solution strategy and expected outcome
                    to judges.
                  </p>
                  <p>
                    The activity encourages students to think like automation developers and
                    explore how automation can simplify everyday tasks through collaboration
                    and innovation.
                  </p>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  <div className="frosted-card rounded-2xl p-6 olympics-panel">
                    <h4 className="text-white font-display text-xl font-bold mb-6">
                      How The Challenge Works
                    </h4>
                    <div className="space-y-4">
                      {olympicsSteps.map((step, index) => (
                        <motion.div
                          key={step.title}
                          className="olympics-step"
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.08 }}
                        >
                          <span className="olympics-step-icon">
                            <step.icon className="w-5 h-5 text-primary" />
                          </span>
                          <span className="text-white/80 text-sm md:text-base">
                            {step.title}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="frosted-card rounded-2xl p-6 olympics-panel">
                    <h4 className="text-white font-display text-xl font-bold mb-6">
                      Automation Innovation Story
                    </h4>
                    <div className="olympics-visual">
                      <div className="olympics-visual-flow">
                        <span className="olympics-visual-line" />
                        <div className="olympics-visual-node">
                          <span className="olympics-visual-dot" />
                          <div>
                            <p className="text-white font-semibold">Problem Signal</p>
                            <p className="text-white/60 text-xs">Input discovery</p>
                          </div>
                        </div>
                        <div className="olympics-visual-node">
                          <span className="olympics-visual-dot" />
                          <div>
                            <p className="text-white font-semibold">Automation Logic</p>
                            <p className="text-white/60 text-xs">Workflow design</p>
                          </div>
                        </div>
                        <div className="olympics-visual-node">
                          <span className="olympics-visual-dot" />
                          <div>
                            <p className="text-white font-semibold">Transformation</p>
                            <p className="text-white/60 text-xs">Impact outcome</p>
                          </div>
                        </div>
                      </div>
                      <div className="olympics-visual-diagram" aria-hidden="true">
                        <span className="olympics-visual-gear" />
                        <span className="olympics-visual-gear olympics-visual-gear-lg" />
                        <span className="olympics-visual-node-dot" />
                        <span className="olympics-visual-node-dot olympics-visual-node-bright" />
                        <span className="olympics-visual-link" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};
