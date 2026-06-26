import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Cpu, CheckCircle, Lightbulb, Play, Layers } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import portfolioData from "../data/portfolio.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  useEffect(() => {
    const foundProject = portfolioData.projects.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    } else {
      setProject(null);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center text-center p-6 text-slate-900">
        <h2 className="text-2xl font-display font-bold mb-4">Project Not Found</h2>
        <p className="text-slate-600 mb-8 max-w-sm">The project you are looking for does not exist or has been moved.</p>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-all"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  // Screenshot Slides for each project (low opacity for light background)
  const slides = [
    {
      title: "Main Dashboard View",
      bgClass: "from-blue-600/5 to-indigo-600/5",
      description: "Primary interface demonstrating core user flow and dynamic grids."
    },
    {
      title: "Analytics & Reports Panel",
      bgClass: "from-indigo-600/5 to-purple-600/5",
      description: "Visual analysis, details reports, and filter parameters."
    },
    {
      title: "Responsive Mobile Screen",
      bgClass: "from-purple-600/5 to-teal-600/5",
      description: "Adaptive layout preview optimized for mobile devices."
    }
  ];

  // Dynamic system architecture drawing helper for light theme
  const renderArchitectureMap = () => {
    const boxStyle = "px-4 py-3 rounded-lg border bg-white shadow-sm text-center w-36 font-semibold";
    const arrowStyle = "text-slate-400 text-lg font-bold";

    switch (project.id) {
      case "mess-management-system":
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 font-mono text-xs">
            <div className={`${boxStyle} border-accent/30 text-accent`}>
              React Frontend
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">SPA Client</span>
            </div>
            <div className={arrowStyle}>➔</div>
            <div className={`${boxStyle} border-primary/30 text-primary`}>
              Express.js Server
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">REST API</span>
            </div>
            <div className={arrowStyle}>➔</div>
            <div className={`${boxStyle} border-purple-500/30 text-purple-600`}>
              MongoDB Atlas
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">NoSQL DB</span>
            </div>
          </div>
        );
      case "augmented-reality-herbal-garden":
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 font-mono text-xs">
            <div className={`${boxStyle} border-emerald-500/30 text-emerald-600`}>
              Target Markers
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">Camera Feed</span>
            </div>
            <div className={arrowStyle}>➔</div>
            <div className={`${boxStyle} border-teal-500/30 text-teal-600`}>
              Vuforia & Unity
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">Tracking Logic</span>
            </div>
            <div className={arrowStyle}>➔</div>
            <div className={`${boxStyle} border-sky-500/30 text-sky-600`}>
              ARCore APK
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">3D Screen Output</span>
            </div>
          </div>
        );
      case "fresh-pick":
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 font-mono text-xs">
            <div className={`${boxStyle} border-amber-500/30 text-amber-600`}>
              Farmer/Client Web
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">Web Interface</span>
            </div>
            <div className={arrowStyle}>➔</div>
            <div className={`${boxStyle} border-primary/30 text-primary`}>
              Node.js Backend
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">Controller Server</span>
            </div>
            <div className={arrowStyle}>➔</div>
            <div className={`${boxStyle} border-emerald-500/30 text-emerald-600`}>
              MySQL DB
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">Relational DB</span>
            </div>
          </div>
        );
      case "ats-resume-analyzer":
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 font-mono text-xs">
            <div className={`${boxStyle} border-cyan-500/30 text-cyan-600`}>
              Streamlit UI
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">PDF Upload</span>
            </div>
            <div className={arrowStyle}>➔</div>
            <div className={`${boxStyle} border-indigo-500/30 text-indigo-600`}>
              Google Gemini Pro
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">LLM API</span>
            </div>
            <div className={arrowStyle}>➔</div>
            <div className={`${boxStyle} border-teal-500/30 text-teal-600`}>
              Feedback Panel
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">ATS Score Output</span>
            </div>
          </div>
        );
      case "ai-resume-builder":
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 font-mono text-xs">
            <div className={`${boxStyle} border-indigo-500/30 text-indigo-600`}>
              React Editor
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">UI Workspace</span>
            </div>
            <div className={arrowStyle}>➔</div>
            <div className={`${boxStyle} border-primary/30 text-primary`}>
              Express & OpenAI
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">Content Generator</span>
            </div>
            <div className={arrowStyle}>➔</div>
            <div className={`${boxStyle} border-purple-500/30 text-purple-600`}>
              PDFKit & MongoDB
              <span className="block text-[9px] text-slate-500 mt-1 font-normal">PDF Exporter</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 font-mono text-xs">
            <div className={`${boxStyle} border-slate-300 text-slate-800`}>Client Interface</div>
            <div className={arrowStyle}>➔</div>
            <div className={`${boxStyle} border-primary/30 text-primary`}>Processing Pipeline</div>
            <div className={arrowStyle}>➔</div>
            <div className={`${boxStyle} border-slate-300 text-slate-800`}>Result Outputs</div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-28 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Navigation Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-mono text-slate-500 hover:text-slate-900 mb-8 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight text-slate-900">
              {project.title}
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-sm font-mono text-slate-800 transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                Repository
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-primary hover:bg-primary/95 text-sm font-mono text-white transition-all shadow-[0_4px_20px_rgba(37,99,235,0.15)]"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Screenshot Carousel Showcase */}
        <div className="w-full rounded-3xl overflow-hidden bg-white border border-slate-200/80 mb-16 relative shadow-md">
          <div className="aspect-video md:aspect-[21/9] flex items-center justify-center relative overflow-hidden">
            {/* Slide backgrounds */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${slides[activeSlide].bgClass} transition-all duration-700`} />
            
            {/* Tech grid texture overlay */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:30px_30px]" />

            {/* Simulated Screenshot Mockup Content */}
            <div className="relative z-10 w-11/12 max-w-4xl h-3/4 rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-6 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-mono text-slate-400 ml-4">
                    https://siddhigandhi.dev/{project.id}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-accent">SECURE_LINK</span>
              </div>
              
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <Cpu className="w-12 h-12 text-primary/60 mb-3 animate-pulse" />
                <h4 className="text-xl font-display font-semibold mb-2 text-slate-900">{slides[activeSlide].title}</h4>
                <p className="text-xs text-slate-500 max-w-md font-mono">{slides[activeSlide].description}</p>
              </div>

              <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-[9px] font-mono text-slate-400 select-none">
                <span>MODULE: SCREEN_0{activeSlide + 1}</span>
                <span>STATUS: DYNAMIC_SIMULATOR</span>
              </div>
            </div>
          </div>

          {/* Slide selectors */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                  activeSlide === idx ? "bg-accent w-6" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Detailed Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (8 cols): Description, Features, Architecture, Improvements */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Detailed Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-semibold border-l-2 border-accent pl-3 text-slate-900 flex items-center gap-2">
                Project Overview
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            {/* Architecture Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-semibold border-l-2 border-accent pl-3 text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent" />
                System Architecture
              </h2>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm">
                <p className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-wider text-center">
                  // Architecture Mapping Data Flow
                </p>
                {renderArchitectureMap()}
                <p className="text-sm text-slate-700 leading-relaxed font-sans mt-6 pt-6 border-t border-slate-200">
                  {project.architecture}
                </p>
              </div>
            </div>

            {/* Video Walkthrough Container */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-semibold border-l-2 border-accent pl-3 text-slate-900 flex items-center gap-2">
                Walkthrough Video
              </h2>
              <div className="aspect-video w-full rounded-2xl border border-slate-200 bg-slate-100 overflow-hidden flex items-center justify-center relative group shadow-sm">
                {isPlayingVideo ? (
                  <div className="absolute inset-0 bg-white flex items-center justify-center p-6">
                    <p className="text-sm font-mono text-primary animate-pulse">
                      &lt; Connecting simulator to media stream... &gt;
                    </p>
                    <button
                      onClick={() => setIsPlayingVideo(false)}
                      className="absolute top-4 right-4 text-xs font-mono border border-slate-300 px-3 py-1 rounded hover:bg-slate-50"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors z-10" />
                    <button
                      onClick={() => setIsPlayingVideo(true)}
                      className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg relative z-20 cursor-pointer group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-300"
                    >
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </button>
                    <span className="absolute bottom-6 text-[10px] font-mono text-slate-500 tracking-wider uppercase z-20">
                      Click to start project preview demo
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-semibold border-l-2 border-accent pl-3 text-slate-900">
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 bg-white flex gap-3.5 shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Enhancements */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-semibold border-l-2 border-accent pl-3 text-slate-900 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-accent" />
                Future Enhancements
              </h2>
              <div className="space-y-3">
                {project.improvements.map((improvement, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-dashed border-primary/20 bg-primary/5 flex items-center gap-3.5"
                  >
                    <span className="font-mono text-xs text-primary font-bold">
                      {(idx + 1).toString().padStart(2, "0")}.
                    </span>
                    <p className="text-xs md:text-sm text-slate-700 font-mono">
                      {improvement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Metadata Side-panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-6 shadow-sm">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary border-b border-slate-100 pb-3 font-semibold">
                Specifications
              </h3>

              <div className="space-y-4 font-mono text-xs text-slate-800">
                <div>
                  <span className="text-slate-400 block mb-1">Developer Role</span>
                  <span className="font-semibold">Principal Engineer (Solo)</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">Affiliation</span>
                  <span className="font-semibold">Academic / Personal</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">Deployment Location</span>
                  <span className="font-semibold break-all">
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1">
                        View Live Site <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      "Not Publicly Hosted (Local Simulation)"
                    )}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">Core Tech Stack</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] rounded bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-mono font-medium transition-all cursor-pointer shadow-sm"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                  Clone Repository
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
