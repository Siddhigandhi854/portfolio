import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Zap, Users, Terminal, Trophy, Eye, X } from "lucide-react";
import portfolioData from "../data/portfolio.json";

function AchievementModal({ achievement, onClose }) {
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

        {/* Full Image Container */}
        <div className="w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex items-center justify-center mb-6 relative select-none">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-contain bg-slate-50"
          />
        </div>

        {/* Achievement info */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-[10px] font-mono text-slate-500 uppercase">
              {achievement.date}
            </span>
          </div>
          <h3 className="text-xl font-display font-bold text-slate-900 leading-tight">
            {achievement.title}
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed font-sans font-normal">
            {achievement.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Achievements() {
  const { achievements } = portfolioData;
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const getAchievementConfig = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("nvidia") || lowerTitle.includes("cuda")) {
      return {
        icon: <Terminal className="w-5 h-5 text-amber-600" />,
        borderClass: "hover:border-amber-500/30",
        badgeClass: "bg-amber-50 border border-amber-200 text-amber-800",
        viewText: "View Certificate"
      };
    }
    if (lowerTitle.includes("leetcode")) {
      return {
        icon: <Trophy className="w-5 h-5 text-yellow-600" />,
        borderClass: "hover:border-yellow-500/30",
        badgeClass: "bg-yellow-50 border border-yellow-200 text-yellow-800",
        viewText: "View Stats"
      };
    }
    if (lowerTitle.includes("smart india") || lowerTitle.includes("sih")) {
      return {
        icon: <Users className="w-5 h-5 text-primary" />,
        borderClass: "hover:border-primary/30",
        badgeClass: "bg-blue-50 border border-blue-200 text-blue-800",
        viewText: "View Attachment"
      };
    }
    // Fallback for hackathons or other
    return {
      icon: <Zap className="w-5 h-5 text-emerald-600" />,
      borderClass: "hover:border-emerald-500/30",
      badgeClass: "bg-emerald-50 border border-emerald-200 text-emerald-800",
      viewText: "View Attachment"
    };
  };

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-[#FFF9F2] to-[#FFFDF9] relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Achievements & Hackathons
          </h2>
          <div className="w-12 h-1.5 bg-accent rounded-full mt-3" />
        </div>

        {/* Timeline Grid */}
        <div className="space-y-6">
          {achievements.map((ach, idx) => {
            const config = getAchievementConfig(ach.title);
            const hasImage = !!ach.image;

            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => {
                  if (hasImage) {
                    setSelectedAchievement(ach);
                  }
                }}
                className={`p-6 rounded-2xl glass-card border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 ${
                  hasImage ? "cursor-pointer group" : ""
                } ${config.borderClass}`}
              >
                
                {/* Left Content (Icon & Info) */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 shrink-0">
                    {config.icon}
                  </div>
                  
                  <div className="space-y-2">
                    <span className={`px-2 py-0.5 text-[10px] font-mono rounded ${config.badgeClass}`}>
                      ACHIEVEMENT_0{idx + 1}
                    </span>
                    <h3 className="text-lg font-display font-bold text-slate-900">
                      {ach.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-sans font-normal">
                      {ach.description}
                    </p>
                  </div>
                </div>

                {/* Right content (Date tag & View action indicator) */}
                <div className="shrink-0 flex flex-row md:flex-col items-center md:items-end gap-3">
                  <span className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-mono text-slate-600">
                    {ach.date}
                  </span>
                  {hasImage && (
                    <span className="flex items-center gap-1.5 text-[10px] text-primary font-semibold bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary select-none whitespace-nowrap">
                      {config.viewText}
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Selected Achievement Detail Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <AchievementModal
            achievement={selectedAchievement}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

