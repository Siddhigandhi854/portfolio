import { useState, useEffect } from "react";
import { ArrowRight, Download, Award, BookOpen, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolio.json";
import siddhiPhoto from "../assets/siddhi.jpg";

export default function Hero() {
  const { name, title, linkedin, github, leetcode, mslearn, credly, summary } = portfolioData.personal;
  
  const roles = [
    "Full Stack Developer",
    "Data Engineer",
    "Data Analyst",
    "Cyber Security Enthusiast"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);
        
        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);
        
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center bg-white pt-24 overflow-hidden"
    >
      {/* Decorative Gradients (Soft, pastel colors for light background) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Thin Slate Grid Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-10 gap-12 items-center z-10">
        
        {/* Left Side: 60% */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Internship & Placements Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/35 text-accent text-xs font-mono font-medium mb-6 shadow-[0_0_15px_rgba(20,184,166,0.08)]"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>Open to Internships & Placements</span>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs md:text-sm font-mono tracking-widest text-primary uppercase mb-2"
          >
            Hello, I'm
          </motion.p>

          {/* Main Name Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight text-slate-900 mb-4"
          >
            {name}
          </motion.h1>

          {/* Animated Role Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-2xl font-mono text-slate-800 mb-6 h-8 flex items-center"
          >
            <span className="text-slate-500 mr-2">I am a</span>
            <span className="font-semibold text-accent border-r-2 border-accent pr-1 animate-pulse">
              {currentText}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed mb-8 font-sans"
          >
            {summary}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center mb-10"
          >
            <button
              onClick={handleScrollToProjects}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:translate-y-[-2px] cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleScrollToContact}
              className="px-6 py-3 rounded-full border border-slate-300 text-slate-800 hover:text-accent hover:border-accent text-sm font-medium transition-all duration-300 hover:bg-accent/5 hover:translate-y-[-2px] cursor-pointer"
            >
              Contact Me
            </button>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 text-slate-400 font-mono text-xs border-t border-slate-100 pt-6 w-full max-w-2xl"
          >
            <span className="text-slate-500 mr-2 text-[10px] tracking-widest uppercase font-bold">PROFILES:</span>
            
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 transition-all duration-300 shadow-sm hover:-translate-y-0.5 cursor-pointer font-mono"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 shrink-0 text-slate-700" />
              <span className="text-[11px] font-semibold">GitHub</span>
            </a>
            
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50/20 hover:bg-blue-50/80 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 transition-all duration-300 shadow-sm hover:-translate-y-0.5 cursor-pointer font-mono"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 shrink-0 text-blue-600" />
              <span className="text-[11px] font-semibold">LinkedIn</span>
            </a>
            
            <a
              href={leetcode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50/20 hover:bg-amber-50/80 border border-slate-200 hover:border-amber-300 text-slate-700 hover:text-amber-600 transition-all duration-300 shadow-sm hover:-translate-y-0.5 cursor-pointer font-mono"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4 shrink-0 text-amber-600" />
              <span className="text-[11px] font-semibold">LeetCode</span>
            </a>
            
            <a
              href={mslearn}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-50/20 hover:bg-sky-50/80 border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 transition-all duration-300 shadow-sm hover:-translate-y-0.5 cursor-pointer font-mono"
              aria-label="Microsoft Learn Profile"
            >
              <BookOpen className="w-4 h-4 shrink-0 text-sky-600" />
              <span className="text-[11px] font-semibold">MS Learn</span>
            </a>
            
            <a
              href={credly}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50/20 hover:bg-orange-50/80 border border-slate-200 hover:border-orange-300 text-slate-700 hover:text-orange-600 transition-all duration-300 shadow-sm hover:-translate-y-0.5 cursor-pointer font-mono"
              aria-label="Credly Certifications"
            >
              <Award className="w-4 h-4 shrink-0 text-orange-600" />
              <span className="text-[11px] font-semibold">Credly</span>
            </a>
          </motion.div>

        </div>

        {/* Right Side: 40% */}
        <div className="lg:col-span-4 flex items-center justify-center relative mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full relative flex items-center justify-center"
          >
            {/* Soft background glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-[40px] animate-pulse" />
            
            {/* SVG Visual Frame */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full text-slate-255 select-none pointer-events-none"
            >
              {/* Outer Dash Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="4, 4"
                className="origin-center animate-[spin_60s_linear_infinite]"
              />
              
              {/* Mid Hexagon or Poly */}
              <polygon
                points="50,12 83,31 83,69 50,88 17,69 17,31"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="origin-center animate-[spin_40s_linear_infinite_reverse]"
              />

              {/* Glowing Nodes */}
              <circle cx="50" cy="12" r="1.5" fill="#14B8A6" className="animate-ping" />
              <circle cx="83" cy="69" r="1.5" fill="#2563EB" />
              <circle cx="17" cy="69" r="1.5" fill="#14B8A6" />
            </svg>

            {/* Glowing Core Avatar Frame */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden bg-white/95 shadow-2xl flex flex-col items-center justify-center border border-slate-200/80 relative group z-10 animate-[bounce_8s_ease-in-out_infinite]">
              {/* User Photo */}
              <img
                src={siddhiPhoto}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover object-center z-10 group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Soft dark gradient overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/75 via-transparent to-transparent opacity-90 z-15 pointer-events-none" />
              
              {/* Cyber Grid Lines inside */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.07)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(circle,black_50%,transparent_100%)] z-15 pointer-events-none" />

              {/* Corner Bracket decorations */}
              <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-accent/40 z-20" />
              <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-accent/40 z-20" />
              <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-accent/40 z-20" />
              <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-accent/40 z-20" />
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
