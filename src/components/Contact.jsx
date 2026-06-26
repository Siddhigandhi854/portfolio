import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import portfolioData from "../data/portfolio.json";

export default function Contact() {
  const { email, linkedin, github } = portfolioData.personal;

  const handleDownloadResume = () => {
    const resumeSection = document.getElementById("resume");
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.print();
      }, 800);
    } else {
      window.print();
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#FFFBF5] to-[#F1F5F9] text-slate-800 relative overflow-hidden print:hidden">
      {/* Ambient glowing backdrops */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column (5 cols): Details & CTA links */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            
            {/* Pulsing Badge */}
            <div className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono tracking-wide font-medium shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to Internship Opportunities
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900">
              Get In Touch
            </h2>
            
            {/* Subtext description */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-normal">
              I'm open to internships, collaborations, and exciting opportunities in Full Stack Development, Data Engineering, Data Analytics, and Cyber Security.
            </p>

            {/* Compact grid details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              {/* Email */}
              <div className="p-4 rounded-[20px] border border-slate-200/60 bg-white/60 backdrop-blur-md flex items-center gap-3.5 hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-mono text-slate-400 uppercase block tracking-wider">Email</span>
                  <a href={`mailto:${email}`} className="text-xs font-mono text-slate-700 hover:text-primary transition-colors truncate block">
                    {email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <a 
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-[20px] border border-slate-200/60 bg-white/60 backdrop-blur-md flex items-center gap-3.5 hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] shrink-0">
                  <LinkedinIcon className="w-4.5 h-4.5 fill-current" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-mono text-slate-400 uppercase block tracking-wider">LinkedIn</span>
                  <span className="text-xs font-mono text-slate-700 hover:text-primary transition-colors truncate block">
                    Connect
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href={github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-[20px] border border-slate-200/60 bg-white/60 backdrop-blur-md flex items-center gap-3.5 hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900/10 flex items-center justify-center text-slate-800 shrink-0">
                  <GithubIcon className="w-4.5 h-4.5 fill-current" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-mono text-slate-400 uppercase block tracking-wider">GitHub</span>
                  <span className="text-xs font-mono text-slate-700 hover:text-primary transition-colors truncate block">
                    Repository
                  </span>
                </div>
              </a>

              {/* Resume Download */}
              <button 
                onClick={handleDownloadResume}
                className="p-4 rounded-[20px] border border-slate-200/60 bg-white/60 backdrop-blur-md flex items-center gap-3.5 hover:border-accent/30 hover:bg-white hover:shadow-md text-left transition-all duration-300 cursor-pointer w-full"
              >
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <FileText className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-mono text-slate-400 uppercase block tracking-wider">Resume</span>
                  <span className="text-xs font-mono text-slate-700 hover:text-accent transition-colors block">
                    Download PDF
                  </span>
                </div>
              </button>

            </div>

          </div>

          {/* Right Column (7 cols): Direct CTA Buttons */}
          <div className="lg:col-span-7 flex items-center">
            <div className="w-full p-8 rounded-[24px] border border-slate-200/80 bg-white/70 backdrop-blur-xl space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-center">
              {/* Top border linear gradient accent */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight">
                  Let's Connect Directly
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-sans font-normal">
                  Skip the forms. Reach out via email or connect with me on LinkedIn to start a conversation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                {/* Email Me CTA */}
                <a
                  href={`mailto:${email}`}
                  className="flex-grow flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary hover:bg-primary/95 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_25px_rgba(37,99,235,0.15)] cursor-pointer"
                >
                  <Mail className="w-4.5 h-4.5" />
                  Email Me
                </a>

                {/* LinkedIn CTA */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-grow flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] hover:border-primary/25 cursor-pointer shadow-sm"
                >
                  <LinkedinIcon className="w-4.5 h-4.5 fill-current" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
