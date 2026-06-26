import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, Eye, X, Database, Brain, Cloud, Award, Code } from "lucide-react";
import portfolioData from "../data/portfolio.json";

const getInternshipIcon = (role) => {
  const lowerRole = role.toLowerCase();
  if (lowerRole.includes("data engineering")) {
    return <Database className="w-5 h-5 text-cyan-600" />;
  }
  if (lowerRole.includes("generative ai") || lowerRole.includes("generative - ai")) {
    return <Brain className="w-5 h-5 text-pink-600" />;
  }
  if (lowerRole.includes("ai-ml") || lowerRole.includes("ai & ml") || lowerRole.includes("machine learning")) {
    return <Brain className="w-5 h-5 text-indigo-500" />;
  }
  if (lowerRole.includes("cloud")) {
    return <Cloud className="w-5 h-5 text-sky-500" />;
  }
  if (lowerRole.includes("mern") || lowerRole.includes("stack") || lowerRole.includes("development")) {
    return <Code className="w-5 h-5 text-emerald-600" />;
  }
  return <Briefcase className="w-5 h-5 text-primary" />;
};

const getInternshipTheme = (role) => {
  const lowerRole = role.toLowerCase();
  if (lowerRole.includes("data engineering")) {
    return {
      borderClass: "hover:border-cyan-500/30",
      badgeClass: "bg-cyan-50 border border-cyan-200 text-cyan-800",
      iconBg: "bg-cyan-50/50"
    };
  }
  if (lowerRole.includes("generative ai") || lowerRole.includes("generative - ai")) {
    return {
      borderClass: "hover:border-pink-500/30",
      badgeClass: "bg-pink-50 border border-pink-200 text-pink-800",
      iconBg: "bg-pink-50/50"
    };
  }
  if (lowerRole.includes("ai-ml") || lowerRole.includes("ai & ml") || lowerRole.includes("machine learning")) {
    return {
      borderClass: "hover:border-indigo-500/30",
      badgeClass: "bg-indigo-50 border border-indigo-200 text-indigo-800",
      iconBg: "bg-indigo-50/50"
    };
  }
  if (lowerRole.includes("cloud")) {
    return {
      borderClass: "hover:border-sky-500/30",
      badgeClass: "bg-sky-50 border border-sky-200 text-sky-800",
      iconBg: "bg-sky-50/50"
    };
  }
  if (lowerRole.includes("mern") || lowerRole.includes("stack") || lowerRole.includes("development")) {
    return {
      borderClass: "hover:border-emerald-500/30",
      badgeClass: "bg-emerald-50 border border-emerald-200 text-emerald-800",
      iconBg: "bg-emerald-50/50"
    };
  }
  return {
    borderClass: "hover:border-primary/30",
    badgeClass: "bg-slate-50 border border-slate-200 text-slate-800",
    iconBg: "bg-slate-50"
  };
};

function InternshipModal({ internship, onClose }) {
  const [imageError, setImageError] = useState(false);
  const hasImage = internship.image && !imageError;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-6 relative shadow-2xl text-slate-900 overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Image or Fallback */}
        <div className="w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex items-center justify-center mb-6 relative select-none">
          {hasImage ? (
            <img
              src={internship.image}
              alt={`${internship.role} Certificate`}
              onError={() => setImageError(true)}
              className="w-full h-full object-contain bg-slate-50"
            />
          ) : (
            <div className="p-6 text-center flex flex-col items-center justify-center w-full h-full relative">
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                <Award className="w-64 h-64 text-[#0F172A]" />
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center mb-4 shadow-sm">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                COMPLETION CREDENTIAL
              </h4>
              <p className="text-base font-display font-semibold max-w-md text-slate-800">
                {internship.role}
              </p>
              <span className="text-[10px] font-mono text-accent mt-3 uppercase">
                ISSUED BY {internship.company}
              </span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-[10px] font-mono text-slate-500 uppercase">
              {internship.period}
            </span>
            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-[10px] font-mono text-slate-500">
              {internship.company}
            </span>
          </div>
          <h3 className="text-xl font-display font-bold text-slate-900 leading-tight">
            {internship.role}
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed font-sans font-normal">
            {internship.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Internships() {
  const { internships } = portfolioData;
  const [selectedInternship, setSelectedInternship] = useState(null);

  if (!internships || internships.length === 0) return null;

  return (
    <section id="internships" className="py-24 bg-gradient-to-b from-[#FFF5F6] to-[#FFFBF7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Internships
          </h2>
          <span className="text-sm font-mono tracking-wider text-slate-500 uppercase mt-2">
            Practical Training & Certifications
          </span>
          <div className="w-12 h-1.5 bg-accent rounded-full mt-4" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {internships.map((intern, idx) => {
            const config = getInternshipTheme(intern.role);
            const icon = getInternshipIcon(intern.role);

            return (
              <motion.div
                key={intern.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onClick={() => intern.image && setSelectedInternship(intern)}
                className={`p-6 rounded-2xl bg-white border border-slate-100/80 flex flex-col justify-between h-[360px] shadow-sm transition-all duration-500 group ${config.borderClass} ${intern.image ? "hover:shadow-xl hover:-translate-y-1.5 cursor-pointer" : "cursor-default"}`}
              >
                <div className="space-y-4">
                  {/* Top line: Icon and Period tag */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl border border-slate-100 text-slate-800 ${config.iconBg}`}>
                      {icon}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-full">
                      {intern.period}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <div>
                    <span className={`px-2 py-0.5 text-[9px] font-mono rounded inline-block mb-1.5 ${config.badgeClass}`}>
                      {intern.company.toUpperCase()}
                    </span>
                    <h3 className="text-lg font-display font-bold text-slate-900 tracking-tight leading-snug line-clamp-1 group-hover:text-primary transition-colors">
                      {intern.role}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-sans font-normal line-clamp-4">
                    {intern.description}
                  </p>
                </div>

                {/* View Action indicator */}
                {intern.image && (
                  <div className="pt-4 border-t border-slate-100/60 flex items-center justify-between text-[11px] font-mono font-semibold text-primary">
                    <span className="flex items-center gap-1.5 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                      View Certificate
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Selected Internship Modal */}
      <AnimatePresence>
        {selectedInternship && (
          <InternshipModal
            internship={selectedInternship}
            onClose={() => setSelectedInternship(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
