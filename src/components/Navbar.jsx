import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "experience" },
    { name: "Internships", id: "internships" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active Section highlights
      if (location.pathname !== "/") return;
      
      const scrollPosition = window.scrollY + 150;
      
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/50 py-4 text-slate-900 shadow-sm"
          : "bg-transparent py-6 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleNavClick("home")}
          className="text-xl font-display font-bold tracking-tight flex items-center gap-2 group cursor-pointer"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            Siddhi Gandhi
          </span>
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === link.id && location.pathname === "/"
                      ? "text-primary font-semibold"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleNavClick("resume")}
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-full border border-slate-300 text-slate-800 bg-slate-50 hover:bg-slate-100 hover:border-slate-400 transition-all duration-300"
          >
            <FileText className="w-3.5 h-3.5 text-primary" />
            Resume
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => handleNavClick("resume")}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-full border border-slate-300 text-slate-800 bg-slate-50 hover:bg-slate-100"
          >
            <FileText className="w-3 h-3 text-primary" />
            Resume
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-slate-800 hover:text-slate-950 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-45 flex flex-col px-8 py-12 border-t border-slate-200 bg-white shadow-lg">
          <ul className="flex flex-col gap-6 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left py-2 transition-colors ${
                    activeSection === link.id && location.pathname === "/"
                      ? "text-primary font-semibold"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
