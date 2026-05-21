import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, Menu, X, GraduationCap, Award } from "lucide-react";

interface HeaderProps {
  onOpenConsultation: (type?: string) => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-navy-void/85 border-b border-gold-classic/20 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-gold-bright to-gold-classic p-[1.5px] shadow-lg shadow-gold-classic/10">
              <div className="w-full h-full bg-navy-abyss rounded-[10px] flex items-center justify-between px-2">
                <span className="text-gold-bright font-heading text-lg font-bold tracking-tighter flex items-center">
                  W<span className="text-gold-light">A</span>
                </span>
                <GraduationCap className="w-4 h-4 text-gold-bright absolute -bottom-1 -right-1 bg-navy-void rounded-full p-[1px] border border-gold-classic/40" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-gold-bright font-heading text-lg font-bold tracking-widest sm:text-lg">
                WINGSIR-ABROAD
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#a1a1aa] uppercase -mt-1">
                LLP • Study Overseas
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Services", "Countries", "Partners", "Team", "FAQ"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-gold-light/80 hover:text-gold-bright transition-colors relative py-2 group cursor-pointer"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-classic transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Action Call buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/917677787916"
              target="_blank"
              rel="noopener referrer"
              referrerPolicy="no-referrer"
              className="flex items-center gap-2 text-xs font-mono font-medium text-gold-bright hover:text-gold-light transition-colors p-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
            
            <button
              onClick={() => onOpenConsultation("Free Counselling")}
              className="px-5 py-2.5 bg-gradient-to-r from-gold-dark via-gold-classic to-gold-bright hover:from-gold-classic hover:to-gold-bright text-navy-void font-heading font-semibold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 shadow-md shadow-gold-classic/25 cursor-pointer"
            >
              Free Counselling
            </button>
          </div>

          {/* Mobile Menu trigger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation("Visa")}
              className="px-3 py-1.5 border border-gold-classic/40 rounded bg-gold-classic/10 text-gold-bright text-xs font-heading"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gold-light hover:text-gold-bright transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy-obsidian border-b border-gold-classic/20 backdrop-blur-lg overflow-hidden absolute top-full left-0 right-0"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
              {["About", "Services", "Countries", "Partners", "Team", "FAQ"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left py-2.5 text-base font-medium text-gold-light/90 border-b border-gold-classic/5 hover:text-gold-bright transition-all"
                >
                  {item}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation("Start Journey");
                  }}
                  className="w-full text-center py-3 bg-gradient-to-r from-gold-dark to-gold-classic text-navy-void font-bold rounded-lg text-sm"
                >
                  Book My Visa Session
                </button>
                <a
                  href="tel:+917677787916"
                  className="w-full text-center py-3 border border-gold-classic/30 text-gold-bright rounded-lg text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Delhi Head Office</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
