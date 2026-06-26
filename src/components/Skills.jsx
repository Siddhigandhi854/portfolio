import { motion } from "framer-motion";
import { Code, Layout, Database, Cloud, Network, BarChart2, ShieldCheck, Cpu, Wrench } from "lucide-react";
import portfolioData from "../data/portfolio.json";

export default function Skills() {
  const { skills } = portfolioData;

  // Custom styling for each category in light mode
  const categoryStyles = {
    "Programming": {
      bg: "bg-blue-50/80 backdrop-blur-md",
      border: "border-blue-200/60 hover:border-blue-400/40",
      text: "text-slate-900",
      iconColor: "text-blue-600",
      tagBg: "bg-blue-100/50 border-blue-200/40 text-blue-800 hover:bg-blue-100"
    },
    "Web Development": {
      bg: "bg-teal-50/80 backdrop-blur-md",
      border: "border-teal-200/60 hover:border-teal-400/40",
      text: "text-slate-900",
      iconColor: "text-teal-600",
      tagBg: "bg-teal-100/50 border-teal-200/40 text-teal-800 hover:bg-teal-100"
    },
    "Databases": {
      bg: "bg-purple-50/80 backdrop-blur-md",
      border: "border-purple-200/60 hover:border-purple-400/40",
      text: "text-slate-900",
      iconColor: "text-purple-600",
      tagBg: "bg-purple-100/50 border-purple-200/40 text-purple-800 hover:bg-purple-100"
    },
    "Cloud": {
      bg: "bg-sky-50/80 backdrop-blur-md",
      border: "border-sky-200/60 hover:border-sky-400/40",
      text: "text-slate-900",
      iconColor: "text-sky-600",
      tagBg: "bg-sky-100/50 border-sky-200/40 text-sky-800 hover:bg-sky-100"
    },
    "Data Engineering": {
      bg: "bg-indigo-50/80 backdrop-blur-md",
      border: "border-indigo-200/60 hover:border-indigo-400/40",
      text: "text-slate-900",
      iconColor: "text-indigo-600",
      tagBg: "bg-indigo-100/50 border-indigo-200/40 text-indigo-800 hover:bg-indigo-100"
    },
    "Data Analytics": {
      bg: "bg-emerald-50/80 backdrop-blur-md",
      border: "border-emerald-200/60 hover:border-emerald-400/40",
      text: "text-slate-900",
      iconColor: "text-emerald-600",
      tagBg: "bg-emerald-100/50 border-emerald-200/40 text-emerald-800 hover:bg-emerald-100"
    },
    "Cyber Security": {
      bg: "bg-rose-50/80 backdrop-blur-md",
      border: "border-rose-200/60 hover:border-rose-400/40",
      text: "text-slate-900",
      iconColor: "text-rose-600",
      tagBg: "bg-rose-100/50 border-rose-200/40 text-rose-800 hover:bg-rose-100"
    },
    "AI & ML": {
      bg: "bg-amber-50/80 backdrop-blur-md",
      border: "border-amber-200/60 hover:border-amber-400/40",
      text: "text-slate-900",
      iconColor: "text-amber-600",
      tagBg: "bg-amber-100/50 border-amber-200/40 text-amber-800 hover:bg-amber-100"
    },
    "Tools": {
      bg: "bg-slate-50/80 backdrop-blur-md",
      border: "border-slate-200/60 hover:border-slate-400/40",
      text: "text-slate-900",
      iconColor: "text-slate-600",
      tagBg: "bg-slate-100 border-slate-200/40 text-slate-800 hover:bg-slate-100"
    }
  };

  // Helper to render the appropriate Lucide icon with dynamic color
  const renderIcon = (category) => {
    const style = categoryStyles[category] || categoryStyles["Tools"];
    const className = `w-5 h-5 ${style.iconColor}`;
    switch (category) {
      case "Programming": return <Code className={className} />;
      case "Web Development": return <Layout className={className} />;
      case "Databases": return <Database className={className} />;
      case "Cloud": return <Cloud className={className} />;
      case "Data Engineering": return <Network className={className} />;
      case "Data Analytics": return <BarChart2 className={className} />;
      case "Cyber Security": return <ShieldCheck className={className} />;
      case "AI & ML": return <Cpu className={className} />;
      default: return <Wrench className={className} />;
    }
  };

  return (
    <section id="skills" className="pt-16 pb-12 bg-gradient-to-b from-[#E8E4FC] to-[#FFF0F2] relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-12 h-1.5 bg-accent rounded-full mt-3" />
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {skills.map((skillGroup, idx) => {
            const style = categoryStyles[skillGroup.category] || categoryStyles["Tools"];
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`break-inside-avoid inline-block w-full p-6 rounded-2xl border transition-all duration-300 ${style.bg} ${style.border} mb-6 group`}
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className={`text-base font-display font-semibold ${style.text} flex items-center gap-2`}>
                      {renderIcon(skillGroup.category)}
                      {skillGroup.category}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all duration-200 ${style.tagBg}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
