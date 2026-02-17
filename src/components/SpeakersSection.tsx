import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Linkedin, X } from "lucide-react";

const speakers = [
  {
    name: "Mr. Veeraraj S",
    title: "UiPath Community MVP 2025 | UiARD v1",
    bio: "Dynamic UiPath automation leader empowering India's RPA community through intelligent bot development and hands-on mentorship. Recognized as UiPath Community MVP 2025, he simplifies complex automation into scalable real-world solutions.",
    sessionTopic: "Building Intelligent Bots with Advanced RPA & AI",
    sessionAnchor: "#schedule",
    image: "/Speaker/Veeraraj S.png",
    linkedin: "https://www.linkedin.com/in/veeraraj-s-7028b1233/",
  },
  {
    name: "Mr. Srenivasan Kannan",
    title: "3× UiPath MVP | Agentic AI & Automation Architect",
    bio: "Senior RPA Tech Lead known for transforming complex enterprise challenges into scalable automation solutions. A 3× UiPath MVP who delivers impactful AI demos and real-world automation strategies.",
    sessionTopic: "Agentic AI & Enterprise Automation Strategy",
    sessionAnchor: "#schedule",
    image: "/Speaker/Srenivasan Kannan.png",
    linkedin: "https://www.linkedin.com/in/srenivasankannanrpa/",
  },
  {
    name: "Mr. Palaniyappan P",
    title: "4× UiPath MVP | Enterprise AI Automation Architect",
    bio: "Senior Solution Architect at Novo Nordisk and 4× UiPath MVP. Known for simplifying enterprise AI automation through impactful demos, keynote sessions, and community mentorship.",
    sessionTopic: "Enterprise Agentic Automation at Scale",
    sessionAnchor: "#schedule",
    image: "/Speaker/Palaniyappan P.png",
    linkedin: "https://www.linkedin.com/in/palaniyappan-p-uipathmvp/",
  },
  {
    name: "Mr. Jobin Thekkekara Joy",
    title: "UiPath MVP | Automation Solution Architect",
    bio: "Automation leader with 12+ years of enterprise expertise in RPA, AI solutions, and DevOps integration. Recognized for delivering scalable automation frameworks across industries.",
    sessionTopic: "Scaling Enterprise Automation with CoE & DevOps",
    sessionAnchor: "#schedule",
    image: "/Speaker/Mr. Jobin Thekkekara Joy.png",
    linkedin: "https://www.linkedin.com/in/jobinthekkekara/",
  },
  {
    name: "Mr. Ernest Ng",
    title: "UiPath Speaker | Director of Digital Innovation & Technology, ACI",
    bio: "UiPath Student Developer Champion 2025 empowering future automation leaders through RPA masterclasses, AI workshops, and real-world innovation initiatives.",
    sessionTopic: "Empowering the Next Generation with Agentic Automation",
    sessionAnchor: "#schedule",
    image: "/Speaker/Mr. Ernest.png",
    linkedin: "https://www.linkedin.com/in/ernestng/",
  },
];

type Speaker = typeof speakers[number];

export const SpeakersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selected, setSelected] = useState<Speaker | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    if (selected) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selected]);

  return (
    <section id="speakers" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,107,0,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,107,0,0.03),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-4">
            Industry Experts
          </span>

          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-sdc-dark mb-6">
            Meet Our <span className="text-primary">Speakers</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders, automation architects, and AI innovators shaping the future of enterprise automation.
          </p>
        </motion.div>

        {/* Speaker Grid - Clickable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelected(speaker)}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col items-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <img
                    src={speaker.image}
                    alt={`${speaker.name} - ${speaker.title}`}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg group-hover:border-primary/50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-sdc-dark text-center mb-2">
                  {speaker.name}
                </h3>

                {/* Title/Achievements */}
                <p className="text-primary font-semibold text-sm text-center leading-tight">
                  {speaker.title}
                </p>

                {/* Click hint */}
                <p className="text-muted-foreground/60 text-xs mt-4 group-hover:text-primary transition-colors">
                  Click to view details
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-sdc-dark" />
              </button>

              <div className="text-center">
                {/* Profile Image */}
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-6 border-4 border-primary/30 shadow-xl"
                />

                {/* Name */}
                <h2 className="text-2xl md:text-3xl font-bold text-sdc-dark mb-2">
                  {selected.name}
                </h2>

                {/* Title */}
                <p className="text-primary font-semibold text-sm mb-6">
                  {selected.title}
                </p>

                {/* Divider */}
                <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-6" />

                {/* Bio */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {selected.bio}
                </p>

                {/* Session Topic Badge */}
                <a
                  href={selected.sessionAnchor}
                  onClick={() => setSelected(null)}
                  className="block mb-8"
                >
                  <div className="bg-gradient-to-r from-primary/10 to-orange-100 border border-primary/20 rounded-xl p-4 hover:from-primary/15 hover:to-orange-200 transition-all duration-300">
                    <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider block mb-1">
                      Session Topic
                    </span>
                    <p className="text-sdc-dark font-medium text-sm leading-snug">
                      "{selected.sessionTopic}"
                    </p>
                  </div>
                </a>

                {/* LinkedIn Button */}
                <a
                  href={selected.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  aria-label={`Connect with ${selected.name} on LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
