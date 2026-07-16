import { Printer, Mail } from "lucide-react";
import portfolioData from "../data/portfolio.json";

export default function Resume() {
  const { linkedin, github, leetcode, mslearn, credly } = portfolioData.personal;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-[#FFFDF9] to-[#FFFBF5] relative print:bg-white print:p-0">
      <div className="max-w-5xl mx-auto px-6 print:max-w-full print:px-0">
        
        {/* Section Header (Hidden when printing) */}
        <div className="flex flex-col items-center text-center mb-10 print:hidden">
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
          className="w-full rounded-2xl border border-slate-200 bg-white shadow-xl relative overflow-hidden grid grid-cols-1 md:grid-cols-[30%_70%] print:grid-cols-[30%_70%] print:border-none print:shadow-none print:rounded-none min-h-0"
        >
          {/* Left Column: Sidebar (Dark background, white text) */}
          <div className="bg-[#1E2433] text-white p-6 md:p-8 print:p-4 flex flex-col justify-start print:bg-[#1E2433] print:text-white">
            <div className="space-y-5 print:space-y-2.5">
              
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
                <ul className="space-y-1.5 print:space-y-1 text-[10px] font-mono text-slate-300">
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
                    <a href={credly} target="_blank" rel="noreferrer" className="hover:text-[#C5A880] transition-colors underline">
                      Credly Badges
                    </a>
                  </li>
                  <li>
                    <a href={mslearn} target="_blank" rel="noreferrer" className="hover:text-[#C5A880] transition-colors underline">
                      Microsoft Learn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#C5A880] transition-colors underline">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href={leetcode} target="_blank" rel="noreferrer" className="hover:text-[#C5A880] transition-colors underline">
                      LeetCode Profile
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
                  <p className="text-slate-400 font-mono text-[9px]">2023 – 2027</p>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C5A880]">
                  TECHNICAL SKILLS
                </h3>
                <div className="border-t border-[#C5A880] my-2 print:my-1" />
                <div className="space-y-2.5 print:space-y-1 text-[10px] leading-relaxed print:leading-tight">
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

              {/* Soft Skills */}
              <div>
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C5A880]">
                  SOFT SKILLS
                </h3>
                <div className="border-t border-[#C5A880] my-2 print:my-1" />
                <p className="text-[9.5px] text-slate-300 font-mono leading-relaxed print:leading-snug">
                  Communication • Presentation Skills • Active Listening • Leadership • Teamwork • Problem Solving • Adaptability • Time Management
                </p>
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
          <div className="bg-white text-slate-800 p-6 md:p-8 print:p-4 flex flex-col justify-start print:bg-white print:text-slate-800">
            <div className="space-y-5 print:space-y-2.5">
              
              {/* Professional Summary */}
              <div>
                <h3 className="text-xs print:text-[11px] font-display font-bold uppercase tracking-wider text-[#1E2433] border-b border-[#C5A880] pb-1 print:pb-0.5">
                  PROFESSIONAL SUMMARY
                </h3>
                <p className="mt-2 print:mt-1 text-[11px] print:text-[9px] text-slate-750 leading-relaxed print:leading-snug font-sans font-normal">
                  Computer Science undergraduate (AI & ML, <strong>CGPA 9.1</strong>) with a customer-centric, analytical approach to turning raw data into business insight using <strong>Python, SQL, and EDA</strong>, paired with full-stack development skills to ship decision-ready products end-to-end. A strong communicator and active listener who collaborates naturally across technical and non-technical teams, adapts quickly to new tools, and takes ownership in target-driven settings. Built and deployed an ML-powered customer behavior analysis tool and two live <strong>ATS/resume-analytics applications</strong> used for real-time scoring. Brings leadership potential, sound problem-solving, and a drive for continuous professional growth to a <strong>Data Analyst / Software Engineering</strong> role.
                </p>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-xs print:text-[11px] font-display font-bold uppercase tracking-wider text-[#1E2433] border-b border-[#C5A880] pb-1 print:pb-0.5">
                  PROJECTS
                </h3>
                <div className="mt-3 print:mt-1 space-y-3 print:space-y-1.5">
                  
                  <div>
                    <h4 className="font-bold text-[#1E2433] text-xs print:text-[9.5px] print:leading-tight">
                      AI-Powered Resume & ATS Analytics Platform | <a href="https://ai-resume-frontend-c1mf.onrender.com" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">ai-resume-frontend-c1mf.onrender.com</a>
                    </h4>
                    <ul className="list-disc pl-4 mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                      <li>Engineered a full-stack MERN platform (React.js, Node.js, Express.js, MongoDB) that analyzes resumes against job descriptions, delivering real-time ATS scoring and optimization feedback that improves jobseeker outcomes.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1E2433] text-xs print:text-[9.5px] print:leading-tight">
                      ATS Resume Score Checker | <a href="https://ats-score-checker-oagh.onrender.com" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">ats-score-checker-oagh.onrender.com</a>
                    </h4>
                    <ul className="list-disc pl-4 mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                      <li>Developed and deployed a web tool that parses resumes and job descriptions to score keyword alignment, delivering clear, actionable insights that help users strengthen their applications.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1E2433] text-xs print:text-[9.5px] print:leading-tight">Supermarket Transaction Analysis</h4>
                    <ul className="list-disc pl-4 mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                      <li>Analyzed retail transaction data with Python (Pandas, NumPy, Scikit-learn), applying EDA and visualization to uncover purchasing patterns and deliver insights that informed inventory and marketing decisions.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1E2433] text-xs print:text-[9.5px] print:leading-tight">
                      Mess Management System | <a href="https://mess-management-system-040b.onrender.com/" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">messmanagement-system-040b.onrender.com</a>
                    </h4>
                    <ul className="list-disc pl-4 mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                      <li>Built and deployed a full-stack CRUD application (MERN stack) that digitized student meal-record management, replacing manual tracking with a reliable, database-driven workflow.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1E2433] text-xs print:text-[9.5px] print:leading-tight">Fresh Pick (Farmer-Consumer Marketplace) & AR Herbal Garden</h4>
                    <ul className="list-disc pl-4 mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                      <li>Designed a farmer-to-consumer marketplace with a strong focus on usability, and built a companion AR application enabling interactive visualization of medicinal plants.</li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xs print:text-[11px] font-display font-bold uppercase tracking-wider text-[#1E2433] border-b border-[#C5A880] pb-1 print:pb-0.5">
                  CERTIFICATIONS
                </h3>
                <ul className="list-disc pl-4 mt-2 print:mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans font-normal">
                  <li>Oracle Certified Foundations Associate: Agentic AI | OCI AI Foundations | OCI Foundations | AI Database</li>
                  <li>Copado AI Agent Certified</li>
                  <li>Microsoft Certified: Fabric Analytics Engineer Associate | Azure Fundamentals (AZ-900) | Power Platform (PL-900) | Fabric Data Engineer (DP-700) | Power BI Data Analyst</li>
                  <li>Google Cloud Generative AI Virtual Internship (Cohort 9) | Google AI-ML (Cohort 15) | AWS Cloud (Cohort 13) | AWS Data Engineering (Cohort 14) | MERN Full Stack (Cohort 16)</li>
                  <li>NVIDIA CUDA C/C++ Fundamentals | CUDA Python | Generative AI Essentials: Prompt Engineering</li>
                </ul>
              </div>

              {/* Achievements & Activities */}
              <div>
                <h3 className="text-xs print:text-[11px] font-display font-bold uppercase tracking-wider text-[#1E2433] border-b border-[#C5A880] pb-1 print:pb-0.5">
                  ACHIEVEMENTS & ACTIVITIES
                </h3>
                <ul className="list-disc pl-4 mt-2 print:mt-1 space-y-1 print:space-y-0.5 text-[10.5px] print:text-[8.5px] text-slate-700 leading-relaxed print:leading-snug font-sans">
                  <li>Secured 8th Rank, NVIDIA GPU Codethon (national-level GPU programming competition)</li>
                  <li>Participant, Smart India Hackathon 2024 , Participant, 24-Hour Great Ninja Hackathon</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
