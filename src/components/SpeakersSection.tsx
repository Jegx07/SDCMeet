import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Linkedin, X } from "lucide-react";

const speakers = [
  {
    name: "Palaniyappan P",
    session: "Coded Agent with UiPath SDK & LangGraph",
    role:
      "4× UiPath MVP | Agentic AI Strategist | Enterprise AI Automation Architect",
    image: "/Speaker/Palaniyappan P.png",
    linkedin: "https://www.linkedin.com/in/palaniyappan-p-uipathmvp/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    details: `Get Ready to meet Mr. Palaniyappan P — 4× UiPath MVP and Enterprise AI Automation Architect.

With nearly a decade of experience, he currently architects enterprise AI automation at Novo Nordisk, turning complex business challenges into intelligent, scalable solutions.

Known for his high-energy sessions blending real-world insights with Agentic AI strategies, his mission is simple: make automation smarter, faster, and truly impactful.`,
  },
  {
    name: "Veeraraj S",
    session: "Meet UiPath: Turning Manual Tasks into Smart Automation",
    role:
      "UiPath Community MVP 2025 | UiPath Advanced RPA Developer (UiARD v1)",
    image: "/Speaker/Veeraraj S.png",
    linkedin: "https://www.linkedin.com/in/veeraraj-s-7028b1233/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    details: `Meet Mr. Veeraraj S — UiPath Community MVP 2025 and Certified Advanced RPA Developer.

As a Senior RPA Developer, he delivers enterprise-grade automation solutions using UiPath, Python, Power Automate, and AI-driven workflows.

He focuses on transforming manual tasks into efficient digital processes and simplifying automation adoption for teams.`,
  },
  {
    name: "Srenivasan Kannan",
    session:
      "AI Agents in Action: Building Smart Campus Helpdesks & Intelligent Placement Engines",
    role:
      "3× UiPath MVP | Agentic AI & Automation Architect | Technical Architect",
    image: "/Speaker/Srenivasan Kannan.png",
    linkedin: "https://www.linkedin.com/in/srenivasankannanrpa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    details: `Meet Mr. Srenivasan Kannan — Agentic AI & Automation Architect with 10+ years of experience.

He serves as a Technical Architect and RPA Practice Lead, designing scalable and secure enterprise automation solutions.

A 3× UiPath MVP and Certified UiPath Trainer, he specializes in Agentic AI, Intelligent Document Processing, workflow orchestration, and AI-powered automation.`,
  },
];

export const SpeakersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selected, setSelected] = useState<any>(null);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  /* ESC close */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };

    if (selected) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selected]);

  return (
    <section id="speakers" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"  // 👈 EXTRA SPACE ADDED HERE
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-6">
            Meet The Experts
          </span>

          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-sdc-dark mb-8">
            Our <span className="text-primary">Speakers</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders, automation architects, and AI innovators.
          </p>
        </motion.div>

        {/* ===== SPEAKER GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer"
              onClick={() => setSelected(speaker)}
            >
              <div className="premium-card p-6 pt-16 text-center relative">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-sdc-dark">
                    {speaker.name}
                  </h3>
                  <p className="text-primary font-medium mt-2 text-sm">
                    {speaker.session}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 md:p-12"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
              >
                <X className="w-5 h-5 text-sdc-dark" />
              </button>

              <div className="text-center">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover mx-auto mb-6 shadow-lg"
                />

                <h2 className="text-3xl font-bold mb-2">
                  {selected.name}
                </h2>

                <p className="text-primary font-semibold mb-4">
                  {selected.session}
                </p>

                <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6" />

                <p className="text-sm text-primary mb-6">
                  {selected.role}
                </p>

                <div className="max-w-2xl mx-auto text-justify text-muted-foreground leading-relaxed space-y-4">
                  {selected.details.split("\n\n").map(
                    (para: string, i: number) => (
                      <p key={i}>{para}</p>
                    )
                  )}
                </div>

                <div className="flex justify-center mt-10">
                  <a
                    href={selected.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary pulse-glow hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
