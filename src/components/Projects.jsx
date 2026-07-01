import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, X, Terminal, Target, HelpCircle, Layers, Lightbulb } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import portfolioData from "../data/portfolio.json";

export default function Projects() {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Custom visual backdrops for each project card (low opacity for light background)
  const cardBackdrops = {
    "mess-management-system": "from-blue-600/10 to-cyan-500/10",
    "augmented-reality-herbal-garden": "from-teal-600/10 to-emerald-500/10",
    "fresh-pick": "from-emerald-600/10 to-amber-500/10",
    "foodies-heaven": "from-amber-600/10 to-orange-500/10",
    "supermarket-transaction-analysis": "from-purple-600/10 to-pink-500/10",
    "ats-resume-analyzer": "from-cyan-600/10 to-indigo-500/10",
    "ai-resume-builder": "from-indigo-600/10 to-purple-500/10",
    "movie-recommendation-system": "from-rose-600/10 to-amber-500/10",
    "student-management-system": "from-blue-600/10 to-indigo-500/10",
    "ai-financial-advisor": "from-emerald-600/10 to-teal-500/10"
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#FFF5F6] to-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1.5 bg-accent rounded-full mt-3" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={(e) => {
                if (e.target.closest("a")) return;
                setActiveModalProject(project);
              }}
              className="group flex flex-col justify-between h-full rounded-2xl glass-card border border-slate-100 overflow-hidden hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] cursor-pointer"
            >
              <div>
                {/* Visual Header */}
                <div className="h-48 relative overflow-hidden border-b border-slate-100">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${cardBackdrops[project.id] || "from-primary/10 to-accent/10"} flex items-center justify-center relative`}>
                      <div className="absolute inset-0 bg-white/30 backdrop-blur-[0.5px]" />
                      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:14px_24px]" />
                      <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center relative z-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                        <Code2 className="w-8 h-8 text-slate-700 group-hover:text-primary group-hover:scale-110 transition-all" />
                      </div>
                    </div>
                  )}

                  {/* Corner tags */}
                  <span className="absolute top-4 right-4 px-2.5 py-1 text-[9px] font-mono rounded bg-white/80 border border-slate-200 text-slate-500 backdrop-blur-xs shadow-sm z-10">
                    PROJECT_0{idx + 1}
                  </span>
                </div>

                {/* Info Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors flex items-center gap-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans mb-6 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[10px] font-mono rounded bg-slate-100 border border-slate-200 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-[10px] font-mono rounded bg-slate-200 border border-slate-300 text-slate-800">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-mono transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-600" />
                    <span>Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary hover:text-white text-primary text-xs font-mono transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
                    title="Live Deployment"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Detailed Project Explanations Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop wrapper */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-zoom-out"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl border border-slate-100 flex flex-col scrollbar-thin"
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 rounded-full transition-all duration-300 shadow-sm z-20 cursor-pointer hover:rotate-90"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className={`h-40 bg-gradient-to-br ${cardBackdrops[activeModalProject.id] || "from-primary/10 to-accent/10"} relative flex items-center px-8 border-b border-slate-100 shrink-0`}>
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[0.5px]" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-4 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
                    <Code2 className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                      {activeModalProject.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                      Academic Project Showcase
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-8 space-y-8 flex-1 overflow-y-auto">
                
                {/* Project Screenshot Mockup */}
                {activeModalProject.image && (
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm max-h-[320px] bg-slate-50 relative group">
                    <img
                      src={activeModalProject.image}
                      alt={`${activeModalProject.title} screenshot`}
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                )}
                
                {/* Tech Stack Segment */}
                <div>
                  <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-accent" /> Tech Stack & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Long Description */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-primary" /> Project Overview
                  </h4>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Problem Statement (Slide Data) */}
                {activeModalProject.problemStatement && (
                  <div className="space-y-3 p-5 rounded-2xl bg-rose-50/40 border border-rose-100">
                    <h4 className="text-xs font-mono tracking-wider text-rose-600 uppercase flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5" /> The Problem Statement
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700 font-sans list-disc list-inside">
                      {activeModalProject.problemStatement.map((statement, sIdx) => (
                        <li key={sIdx} className="leading-relaxed">
                          {statement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Objectives (Slide Data) */}
                {activeModalProject.objectives && (
                  <div className="space-y-3 p-5 rounded-2xl bg-blue-50/40 border border-blue-100">
                    <h4 className="text-xs font-mono tracking-wider text-blue-600 uppercase flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5" /> Project Objectives
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700 font-sans list-disc list-inside">
                      {activeModalProject.objectives.map((obj, oIdx) => (
                        <li key={oIdx} className="leading-relaxed">
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Features */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-emerald-600" /> Core Features & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {activeModalProject.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-start gap-2.5 text-sm"
                      >
                        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {fIdx + 1}
                        </span>
                        <p className="text-slate-700 leading-relaxed font-sans">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Architecture */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-600" /> System Architecture & Flow
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                    {activeModalProject.architecture}
                  </p>
                </div>

                {/* Future Improvements */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Future Roadmap
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-sans list-disc list-inside">
                    {activeModalProject.improvements.map((imp, impIdx) => (
                      <li key={impIdx} className="leading-relaxed">
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Modal Footer (Action buttons) */}
              <div className="p-8 border-t border-slate-100 bg-slate-50/70 flex items-center gap-3 shrink-0 rounded-b-3xl">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-sm font-mono transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-600" />
                    <span>View Repository</span>
                  </a>
                )}
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary hover:text-white text-primary text-sm font-mono transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Live Demo</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="ml-auto px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-mono transition-all cursor-pointer"
                >
                  Close Details
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
