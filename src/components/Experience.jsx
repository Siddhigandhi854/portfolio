import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import portfolioData from "../data/portfolio.json";

export default function Experience() {
  const { education } = portfolioData;

  return (
    <section id="experience" className="pt-12 pb-20 bg-gradient-to-b from-[#FFF0F2] via-[#EBF4FF] via-[#F3E8FF] to-[#FFF5F6] relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-300/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-pink-300/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Education
          </h2>
          <span className="text-sm font-mono tracking-wider text-slate-500 uppercase mt-2">
            Academic Timeline
          </span>
          <div className="w-12 h-1.5 bg-accent rounded-full mt-4" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-200 pl-6 md:pl-10 space-y-12">
          
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Icon indicator in timeline */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#F8FAFC] border border-slate-300 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <GraduationCap className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 text-slate-500 group-hover:text-primary transition-colors" />
              </div>

              {/* Card */}
              <div className="p-6 rounded-2xl glass-card border border-slate-100 group-hover:border-slate-300/80 transition-all duration-300">
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-mono">
                    {edu.period}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>
                      {edu.location || (edu.institution.includes("Kolhapur") ? "Kolhapur, India" : "Ratnagiri, India")}
                    </span>
                  </div>
                </div>

                {/* Institution & Degree */}
                <h3 className="text-lg md:text-xl font-display font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-sm font-mono text-slate-700 mb-4">
                  {edu.degree}
                </p>

                {/* Score & Minors Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100 text-sm">
                  {edu.minor && (
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-slate-400">Minor Field</span>
                      <p className="font-medium text-slate-800">{edu.minor}</p>
                    </div>
                  )}

                  <div className="space-y-1">
                    <span className="text-xs font-mono text-slate-400">
                      {edu.gpa ? "Cumulative GPA" : "Final Percentage"}
                    </span>
                    <p className="font-display font-bold text-slate-900 text-base">
                      {edu.gpa ? `${edu.gpa} / 10.0` : edu.percentage}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
