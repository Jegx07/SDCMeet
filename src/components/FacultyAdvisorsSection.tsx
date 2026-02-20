import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const facultyAdvisors = [
  {
    name: "Dr. S. Pavalarajan",
    designation: "Head of the Department",
    department: "Department of CSBS",
    image: "/Team/Staff/Dr. S. Pavalarajan Sir.png",
  },
  {
    name: "Dr. S. Shahul Hammed",
    designation: "Assistant Professor",
    department: "Department of CSBS",
    image: "/Team/Staff/Dr. S. Shahul Hammed Sir.jpg",
  },
  {
    name: "Mrs. C. Preethi",
    designation: "Assistant Professor",
    department: "Department of CSBS",
    image: "/Team/Staff/Mrs. C. Preethi Assistant Professor.jpeg",
  },
];

export const FacultyAdvisorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="faculty-advisors"
      className="py-24 bg-sdc-dark relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,0,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,0,0.06),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-4">
            Guiding Excellence
          </span>

          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Faculty <span className="text-primary">Advisors</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our dedicated faculty members guiding and supporting student
            innovation in automation and AI.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {facultyAdvisors.map((faculty, index) => (
            <motion.div
              key={faculty.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-slate-700/50 rounded-2xl p-8 border-t-4 border-primary shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full border-4 border-primary/40 overflow-hidden shadow-lg group-hover:border-primary/70 transition-all duration-300">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {faculty.name}
                </h3>

                {/* Designation */}
                <p className="text-primary font-semibold text-sm text-center mb-1">
                  {faculty.designation}
                </p>

                {/* Department */}
                <p className="text-gray-400 text-sm text-center">
                  {faculty.department}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
