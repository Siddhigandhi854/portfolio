import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#FFF5F6] to-[#E2E8F0] pt-16 pb-12 print:hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <button
              onClick={handleScrollToTop}
              className="text-2xl font-display font-bold tracking-tight text-slate-900 mb-4 block hover:opacity-85 text-left cursor-pointer"
            >
              Siddhi Gandhi<span className="text-accent font-display">.</span>
            </button>
            <p className="text-slate-600 max-w-sm text-sm leading-relaxed mb-6">
              Building scalable, performant full-stack web applications and exploring data engineering pipelines, AI integration, and cybersecurity.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Siddhigandhi854/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-200/60 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-primary transition-all duration-300 shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/siddhi-gandhi-0866b7289/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-200/60 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-primary transition-all duration-300 shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:siddhigandhi53@gmail.com"
                className="w-9 h-9 rounded-full bg-slate-200/60 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-primary transition-all duration-300 shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-wider text-accent uppercase mb-4">
              Sections
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Certifications
                </button>
              </li>
            </ul>
          </div>

          {/* Core Interests */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-wider text-primary uppercase mb-4">
              Focus Areas
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Full Stack Web Apps</li>
              <li>Data Engineering & Analytics</li>
              <li>AI & Machine Learning</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
        </div>

        {/* Separator & Footer bottom */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-slate-500">
            &copy; {currentYear} Siddhi Gandhi. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>Handcrafted in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
