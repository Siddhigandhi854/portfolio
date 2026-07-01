import { Printer, Mail } from "lucide-react";
import portfolioData from "../data/portfolio.json";

export default function Resume() {
  const { linkedin, github } = portfolioData.personal;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 bg-gradient-to-b from-[#FFFDF9] to-[#FFFBF5] relative print:bg-white print:p-0">
      <div className="max-w-5xl mx-auto px-6 print:max-w-full print:px-0">
        
        {/* Section Header (Hidden when printing) */}
        <div className="flex flex-col items-center text-center mb-16 print:hidden">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Resume
          </h2>
          <div className="w-12 h-1.5 bg-accent rounded-full mt-3" />
        </div>

        {/* Action Controls Row (Hidden when printing) */}
        <div className="flex flex-wrap gap-4 items-center justify-end mb-8 print:hidden">
          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-mono transition-all cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </button>
            <a
              href="mailto:siddhigandhi53@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/95 text-white text-xs font-mono transition-all shadow-[0_4px_20px_rgba(37,99,235,0.15)]"
            >
              <Mail className="w-4 h-4" />
              Request Copy
            </a>
          </div>
        </div>

        {/* Resume Document Sheet Container */}
        <div 
          id="resume-sheet"
          className="w-full rounded-2xl border border-slate-200 bg-white shadow-xl relative overflow-hidden grid grid-cols-1 md:grid-cols-[30%_70%] print:grid-cols-[30%_70%] print:border-none print:shadow-none print:rounded-none min-h-[1120px] print:min-h-0"
        >
          {/* Left Column: Sidebar (Dark background, white text) */}
          <div className="bg-[#1E2433] text-white p-6 md:p-8 print:p-4 flex flex-col justify-between print:bg-[#1E2433] print:text-white">
            <div className="space-y-6 print:space-y-3">
              
              {/* Name & Title */}
              <div>
                <h1 className="text-3xl print:text-2xl font-display font-bold tracking-wider text-white leading-tight">
                  SIDDHI
                </h1>
                <h1 className="text-3xl print:text-2xl font-display font-bold tracking-wider text-white leading-tight">
                  GANDHI
                </h1>
                <div className="space-y-1 mt-2 print:space-y-0.5 print:mt-0.5">
                  <span className="text-[#C5A880] text-[9.5px] font-mono tracking-wider uppercase block font-bold leading-tight">
                    Full Stack Developer
                  </span>
                  <span className="text-[#C5A880] text-[9.5px] font-mono tracking-wider uppercase block font-bold leading-tight">
                    Data Engineer
                  </span>
                  <span className="text-[#C5A880] text-[9.5px] font-mono tracking-wider uppercase block font-bold leading-tight">
                    Machine Learning Engineer
                  </span>
                  <span className="text-[#C5A880] text-[9.5px] font-mono tracking-wider uppercase block font-bold leading-tight">
                    Cyber Security Enthusiast
                  </span>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C5A880]">
                  CONTACT
                </h3>
                <div className="border-t border-[#C5A880] my-2 print:my-1" />
                <ul className="space-y-2 print:space-y-1.5 text-[10px] font-mono text-slate-300">
                  <li>+91 8010945602</li>
                  <li>
                    <a href="mailto:siddhigandhi53@gmail.com" className="hover:text-[#C5A880] transition-colors break-all">
                      siddhigandhi53@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-[#C5A880] transition-colors underline">
                      LinkedIn Profile
                    </a>
                  </li>
                  <li>
                    <a href={github} target="_blank" rel="noreferrer" className="hover:text-[#C5A880] transition-colors underline">
                      GitHub Profile
                    </a>
                  </li>
                  <li>
                    <a href="https://www.credly.com/users/siddhi-gandhi.6cb1ee83/badges/credly" target="_blank" rel="noreferrer" className="hover:text-[#C5A880] transition-colors underline">
                      Credly Badges
                    </a>
                  </li>
                  <li>
                    <a href="https://learn.microsoft.com/en-us/users/SiddhiGandhi-3589" target="_blank" rel="noreferrer" className="hover:text-[#C5A880] transition-colors underline">
                      Microsoft Learn
                    </a>
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C5A880]">
                  EDUCATION
                </h3>
                <div className="border-t border-[#C5A880] my-2 print:my-1" />
                <div className="text-[10px] text-slate-300 leading-relaxed space-y-1 print:space-y-0.5">
                  <p className="font-bold text-white text-xs">B.Tech, CSE (AI & ML)</p>
                  <p className="text-[#C5A880] font-mono font-bold">CGPA: 9.1</p>
                  <p className="text-slate-300 font-medium">
                    D. Y. Patil College of Engineering and Technology, Kolhapur
                  </p>
                  <p className="text-slate-400">
                    Minor: Electronics & Telecommunication
                  </p>
                  <p className="text-slate-400 font-mono text-[9px]">2026 – Present</p>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C5A880]">
                  TECHNICAL SKILLS
                </h3>
                <div className="border-t border-[#C5A880] my-2 print:my-1" />
                <div className="space-y-3 print:space-y-1 text-[10px] leading-relaxed print:leading-tight">
                  <div>
                    <span className="font-bold text-white block">Languages</span>
                    <p className="text-slate-300 font-mono text-[9.5px] mt-0.5">
                      Python, Java, JavaScript, SQL
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Data Analytics & ML</span>
                    <p className="text-slate-300 font-mono text-[9.5px] mt-0.5">
                      Pandas, NumPy, Scikit-learn, EDA, Data Visualization, Statistical Analysis
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Web Technologies</span>
                    <p className="text-slate-300 font-mono text-[9.5px] mt-0.5">
                      HTML, CSS, React.js, Node.js, Express.js, MERN Stack, REST APIs
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Databases</span>
                    <p className="text-slate-300 font-mono text-[9.5px] mt-0.5">
                      MySQL, MongoDB
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Cloud & Tools</span>
                    <p className="text-slate-300 font-mono text-[9.5px] mt-0.5">
                      Microsoft Azure, AWS, Git, GitHub, VS Code, Netlify, Render
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Core CS</span>
                    <p className="text-slate-300 font-mono text-[9.5px] mt-0.5">
                      DSA, OOP, DBMS, Operating Systems, Computer Networks
                    </p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C5A880]">
                  LANGUAGES
                </h3>
                <div className="border-t border-[#C5A880] my-2 print:my-1" />
                <p className="text-[10px] text-slate-300 font-mono">
                  English, Hindi, Marathi
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Content (White background, dark text) */}
          <div className="bg-white text-slate-800 p-6 md:p-8 print:p-4 flex flex-col justify-between print:bg-white print:text-slate-800">
            <div className="space-y-6 print:space-y-2.5">
              
              {/* Professional Summary */}
              <div>
                <h3 className="text-xs print:text-[11px] font-display font-bold uppercase tracking-wider text-[#1E2433] border-b border-[#C5A880] pb-1 print:pb-0.5">
                  PROFESSIONAL SUMMARY
                </h3>
                <p className="mt-2 print:mt-1 text-[11px] print:text-[9px] text-slate-750 leading-relaxed print:leading-snug font-sans font-normal">
                  Computer Science undergraduate (AI & ML, <strong>CGPA 9.1</strong>) with hands-on experience translating raw data into business insights using <strong>Python, SQL, and EDA</strong>, alongside full-stack development skills for building end-to-end data products. Built and shipped an <strong>ML-powered customer behavior analysis</strong> tool and two deployed <strong>ATS/resume-analytics web applications</strong> used for real-time keyword scoring — demonstrating the ability to turn data into decision-ready, user-facing tools. Seeking <strong>Software Engineering / Data Engineering / Machine Learning / Cyber Security</strong> roles to apply analytical rigor and engineering skills at scale.
                </p>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-xs print:text-[11px] font-display font-bold uppercase tracking-wider text-[#1E2433] border-b border-[#C5A880] pb-1 print:pb-0.5">
                  PROJECTS
                </h3>
                <div className="mt-3 print:mt-1 space-y-3.5 print:space-y-1.5">
                  
                  <div>
                    <h4 className="font-bold text-[#1E2433] text-xs print:text-[9.5px] print:leading-tight">AI-Powered Resume & ATS Analytics Platform</h4>
                    <ul className="list-disc pl-4 mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                      <li>Built a full-stack platform analyzing resumes against job descriptions using <strong>ATS keyword-matching logic</strong>, generating real-time scoring and optimization feedback for users.</li>
                      <li>Engineered a live preview engine with the <strong>MERN stack</strong> (React.js, Node.js, Express.js, MongoDB), enabling instant resume and cover-letter generation and portfolio creation. <strong>Live:</strong> <a href="https://ai-resume-frontend-c1mf.onrender.com" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">ai-resume-frontend-c1mf.onrender.com</a></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1E2433] text-xs print:text-[9.5px] print:leading-tight">ATS Resume Score Checker</h4>
                    <ul className="list-disc pl-4 mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                      <li>Developed a web tool to parse resumes and job descriptions, scoring <strong>keyword alignment</strong> to surface actionable optimization insights for job seekers. <strong>Live:</strong> <a href="https://ats-score-checker-oagh.onrender.com" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">ats-score-checker-oagh.onrender.com</a></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1E2433] text-xs print:text-[9.5px] print:leading-tight">Supermarket Transaction Analysis</h4>
                    <ul className="list-disc pl-4 mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                      <li>Analyzed retail transaction data using <strong>Python (Pandas, NumPy, Scikit-learn)</strong> to uncover customer purchasing patterns; applied <strong>Association Rule mining</strong> (Apriori, FP-Growth), <strong>EDA and visualization</strong> techniques to surface trends supporting inventory and marketing decisions.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1E2433] text-xs print:text-[9.5px] print:leading-tight">Mess Management System</h4>
                    <ul className="list-disc pl-4 mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                      <li>Built and deployed a full-stack <strong>CRUD application (MERN stack)</strong> to digitize student meal record management, replacing manual tracking with a database-driven workflow. <strong>Live:</strong> <a href="https://mess-management-system-040b.onrender.com/" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">mess-management-system-040b.onrender.com</a></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1E2433] text-xs print:text-[9.5px] print:leading-tight">Fresh Pick (Farmer-Consumer Marketplace) & AR Herbal Garden</h4>
                    <ul className="list-disc pl-4 mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                      <li>Designed a farmer-to-consumer marketplace platform focused on usability; built a separate AR app for interactive medicinal plant visualization.</li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xs print:text-[11px] font-display font-bold uppercase tracking-wider text-[#1E2433] border-b border-[#C5A880] pb-1 print:pb-0.5">
                  CERTIFICATIONS
                </h3>
                <ul className="list-disc pl-4 mt-2 print:mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                  <li>Google Cloud Generative AI Virtual Internship (Cohort 9) | Google AI-ML Virtual Internship (Cohort 15)</li>
                  <li>AWS Cloud Virtual Internship (Cohort 13) | AWS Data Engineering Virtual Internship (Cohort 14)</li>
                  <li>MERN Full Stack Development Virtual Internship + Project (Cohort 16)</li>
                  <li>Microsoft Azure Fundamentals (AZ-900) | Power Platform Fundamentals (PL-900) | Fabric Data Engineer Associate (DP-700)</li>
                  <li>NVIDIA CUDA C/C++ Fundamentals | NVIDIA CUDA Python Fundamentals</li>
                  <li>Google AI Essentials | Cisco Introduction to Cybersecurity</li>
                  <li>Oracle Agentic AI Certified Foundations Associate | Copado Certified Copado AI</li>
                </ul>
              </div>

              {/* Achievements & Activities */}
              <div>
                <h3 className="text-xs print:text-[11px] font-display font-bold uppercase tracking-wider text-[#1E2433] border-b border-[#C5A880] pb-1 print:pb-0.5">
                  ACHIEVEMENTS & ACTIVITIES
                </h3>
                <ul className="list-disc pl-4 mt-2 print:mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                  <li>Secured 8th Rank, NVIDIA GPU Codethon (national-level GPU programming competition); Participant, Smart India Hackathon 2024 & 24-Hour Great Ninja Hackathon</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
