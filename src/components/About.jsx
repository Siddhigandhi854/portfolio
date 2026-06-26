import { motion } from "framer-motion";
import { GraduationCap, FolderCode, Award, ShieldAlert } from "lucide-react";
import portfolioData from "../data/portfolio.json";

export default function About() {
  const { summary } = portfolioData.personal;
  
  const stats = [
    {
      label: "B.Tech GPA",
      value: "9.1 / 10",
      description: "CSE (AI & ML) at DYPCET",
      icon: <GraduationCap className="w-5 h-5 text-accent" />,
      color: "border-slate-200 hover:border-accent/40"
    },
    {
      label: "Built Projects",
      value: "7+",
      description: "Web, AR, and ML systems",
      icon: <FolderCode className="w-5 h-5 text-primary" />,
      color: "border-slate-200 hover:border-primary/40"
    },
    {
      label: "Certifications",
      value: "9+",
      description: "Microsoft, NVIDIA, AWS",
      icon: <Award className="w-5 h-5 text-amber-500" />,
      color: "border-slate-200 hover:border-amber-500/40"
    },
    {
      label: "Hackathons",
      value: "3+",
      description: "SIH, NVIDIA Codethon, Ninja",
      icon: <ShieldAlert className="w-5 h-5 text-rose-500" />,
      color: "border-slate-200 hover:border-rose-500/40"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#E8E4FC] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Background & Expertise
          </h2>
          <div className="w-12 h-1.5 bg-accent rounded-full mt-3" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans">
              I am an engineering undergraduate specializing in Artificial Intelligence and Machine Learning. My development journey is fueled by a passion for solving tangible problems through robust code, structured database design, and cloud efficiency.
            </p>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans">
              Over the last few years, I have built several projects ranging from MERN stack applications to machine learning data pipelines, cloud-native deployments on Azure, and immersive Unity AR experiences. I enjoy designing architectures that can scale seamlessly and remain secure.
            </p>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans">
              Beyond pure software engineering, I actively explore cybersecurity, ethical hacking, and data analytics. When I'm not coding, I'm usually reading novels, traveling to new destinations, or learning about advanced AI frameworks.
            </p>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl glass-card border flex flex-col justify-between ${stat.color} transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                    {stat.label}
                  </span>
                  <div className="p-2 bg-slate-100 rounded-xl group-hover:bg-slate-200 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-3xl font-display font-bold text-slate-900 mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
