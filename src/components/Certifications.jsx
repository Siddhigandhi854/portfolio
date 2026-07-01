import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, Cloud, Cpu, Database, Shield, Brain, X } from "lucide-react";
import portfolioData from "../data/portfolio.json";

const getCategoryIcon = (category) => {
  switch (category) {
    case "Microsoft":
      return <Cloud className="w-7 h-7 text-blue-600" />;
    case "NVIDIA":
      return <Cpu className="w-7 h-7 text-emerald-600" />;
    case "AWS":
      return <Database className="w-7 h-7 text-amber-500" />;
    case "Cyber Security":
      return <Shield className="w-7 h-7 text-rose-500" />;
    case "AI & ML":
      return <Brain className="w-7 h-7 text-indigo-500" />;
    case "Data Engineering":
      return <Database className="w-7 h-7 text-cyan-600" />;
    default:
      return <Award className="w-7 h-7 text-primary" />;
  }
};

// Sub-component to manage image load failure fallbacks cleanly
function CertificateCard({ cert, isActive, onClick }) {
  const [imageError, setImageError] = useState(false);
  const hasImage = cert.image && !imageError;

  return (
    <motion.div
      onClick={onClick}
      className={`w-[290px] md:w-[380px] h-[210px] md:h-[240px] shrink-0 rounded-3xl p-1 bg-white border transition-all duration-500 cursor-pointer select-none relative ${
        isActive
          ? "border-primary shadow-[0_20px_45px_rgba(37,99,235,0.12)] scale-105 z-10"
          : "border-slate-100/80 opacity-40 scale-95 hover:opacity-60"
      }`}
    >
      {/* Double border certificate style inner wrapper */}
      <div className="w-full h-full border border-dashed border-slate-200 rounded-[22px] overflow-hidden flex flex-col justify-between relative bg-gradient-to-br from-slate-50/60 to-white">
        
        {hasImage ? (
          <div className="absolute inset-0 w-full h-full relative group">
            {/* Real Certificate Photo */}
            <img
              src={cert.image}
              alt={cert.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-750"
            />
            
            {/* Glassmorphic hover overlay detailing text */}
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 md:p-6 backdrop-blur-xs">
              <div className="flex justify-between items-start">
                <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-white/20 text-white border border-white/10 uppercase tracking-wider">
                  {cert.category}
                </span>
                <div className="p-2 rounded-xl bg-white/15 border border-white/10 text-white shadow-xs">
                  {getCategoryIcon(cert.category)}
                </div>
              </div>
              
              <div className="flex-1 flex items-center mt-3 text-white">
                <h3 className="text-sm md:text-base font-display font-bold leading-snug line-clamp-2">
                  {cert.name}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-white/80">
                <span className="font-semibold">{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full p-5 md:p-6 flex flex-col justify-between h-full relative">
            {/* Certificate watermark symbol */}
            <div className="absolute -bottom-8 -right-8 opacity-[0.03] rotate-12 text-[#0F172A] select-none pointer-events-none">
              <Award className="w-48 h-48" />
            </div>

            {/* Top Line: Tags & Category Badge */}
            <div className="flex justify-between items-start relative z-10">
              <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-slate-100 border border-slate-200/60 text-slate-500 uppercase tracking-wider">
                {cert.category}
              </span>
              <div className="p-2 rounded-xl bg-white border border-slate-100 shadow-xs">
                {getCategoryIcon(cert.category)}
              </div>
            </div>

            {/* Title text */}
            <div className="relative z-10 flex-1 flex items-center mt-3">
              <h3 className="text-sm md:text-base font-display font-bold text-slate-800 tracking-tight leading-snug line-clamp-2">
                {cert.name}
              </h3>
            </div>

            {/* Footer details */}
            <div className="mt-4 pt-3 border-t border-slate-100/80 flex justify-between items-center text-[10px] font-mono text-slate-500 relative z-10">
              <span className="font-semibold text-slate-600">{cert.issuer}</span>
              <span className="text-slate-400">{cert.date}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Modal component that supports image previews if the image is successfully loaded
function CertificateModal({ cert, onClose }) {
  const [imageError, setImageError] = useState(false);
  const hasImage = cert.image && !imageError;

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
        className="w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 relative shadow-2xl text-slate-900 overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge Visual Representation or Full Certificate Photo */}
        <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/5 to-accent/10 border border-slate-200 flex flex-col items-center justify-center mb-6 relative overflow-hidden select-none">
          {hasImage ? (
            <img
              src={cert.image}
              alt={cert.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-contain bg-slate-50"
            />
          ) : (
            <div className="p-6 text-center flex flex-col items-center justify-center w-full h-full">
              {/* Watermarked award symbol */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                <Award className="w-64 h-64 text-[#0F172A]" />
              </div>
              
              <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-sm">
                <Award className="w-6 h-6 text-accent animate-bounce" />
              </div>
              <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">
                CREDENTIAL DETAILS
              </h4>
              <p className="text-base font-display font-semibold max-w-xs">{cert.name}</p>
              <span className="text-[10px] font-mono text-accent mt-3">ISSUED BY {cert.issuer.toUpperCase()}</span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-[10px] font-mono text-slate-500 uppercase">
              {cert.date}
            </span>
            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-[10px] font-mono text-slate-500">
              {cert.issuer}
            </span>
          </div>
          <h3 className="text-lg font-display font-bold text-slate-900 leading-tight">
            {cert.name}
          </h3>
          {cert.description && (
            <p className="text-sm text-slate-700 leading-relaxed font-sans font-normal">
              {cert.description}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const { certifications } = portfolioData;
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  
  const containerRef = useRef(null);

  // Track container width for responsive carousel centering math
  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = () => {
      setContainerWidth(containerRef.current.offsetWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (certifications.length === 0) return;
    setActiveIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (certifications.length === 0) return;
    setActiveIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  // Carousel Layout Dimensions
  const cardWidth = typeof window !== "undefined" && window.innerWidth < 768 ? 290 : 380;
  const gap = 24;
  const centerTranslation = containerWidth / 2 - cardWidth / 2 - activeIndex * (cardWidth + gap);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-[#FAF6F0] to-[#FFF9F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Certifications Gallery
          </h2>
          <div className="w-12 h-1.5 bg-accent rounded-full mt-3" />
        </div>

        {/* Interactive Horizontal Carousel Track */}
        {certifications.length > 0 ? (
          <div className="relative w-full mb-8" ref={containerRef}>
            
            {/* Navigation Arrows overlay */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-20 px-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/95 border border-slate-200 text-slate-700 hover:bg-white hover:text-primary transition-all shadow-md pointer-events-auto cursor-pointer hover:scale-105 active:scale-95"
                title="Previous Certification"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/95 border border-slate-200 text-slate-700 hover:bg-white hover:text-primary transition-all shadow-md pointer-events-auto cursor-pointer hover:scale-105 active:scale-95"
                title="Next Certification"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Viewport Frame */}
            <div className="w-full overflow-hidden h-[290px] relative flex items-center">
              
              {/* Draggable/Animated Motion Container */}
              <motion.div
                className="flex absolute"
                style={{ gap: `${gap}px` }}
                animate={{ x: centerTranslation }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
              >
                {certifications.map((cert, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <CertificateCard
                      key={cert.name}
                      cert={cert}
                      isActive={isActive}
                      onClick={() => {
                        if (isActive) {
                          setSelectedCert(cert);
                        } else {
                          setActiveIndex(idx);
                        }
                      }}
                    />
                  );
                })}
              </motion.div>

            </div>

            {/* Selection indicators row */}
            <div className="flex justify-center gap-1.5 mt-2">
              {certifications.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

          </div>
        ) : (
          <div className="text-center py-20 font-mono text-xs text-slate-500 border border-dashed border-slate-200 rounded-2xl bg-white">
            No certifications found.
          </div>
        )}

        {/* Selected Certification Metadata Detail Modal */}
        <AnimatePresence>
          {selectedCert && (
            <CertificateModal
              cert={selectedCert}
              onClose={() => setSelectedCert(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
