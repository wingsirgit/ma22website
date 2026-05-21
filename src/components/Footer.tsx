import { GraduationCap, ArrowUp, Instagram, Facebook, Linkedin, Twitter, MessageSquare } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy-void border-t border-gold-classic/20 pt-20 pb-10 overflow-hidden text-[#dfdcd3]">
      
      {/* Decorative Golden Ambient Backplates */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-classic/5 rounded-full filter blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-navy-abyss/40 rounded-full filter blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Core Footer top grid columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start border-b border-gold-classic/10 pb-16">
          
          {/* Column A: Logo, details, licensing, and social links */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleScrollTop}>
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-gold-bright to-gold-classic p-[1.5px] shadow-lg shadow-gold-classic/10">
                <div className="w-full h-full bg-navy-abyss rounded-[10px] flex items-center justify-center px-1">
                  <span className="text-gold-bright font-heading text-base font-extrabold tracking-tighter">
                    WA
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-gold-bright font-heading text-md font-bold tracking-widest uppercase">
                  WINGSIR-ABROAD
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#a1a1aa] uppercase -mt-1">
                  LLP • DEL_HQ • NCR_DECK
                </span>
              </div>
            </div>

            <p className="text-xs text-gold-light/65 leading-relaxed">
              Serving student dreams across Delhi, Faridabad, and Agra. Our certified consultants and Toronto attorney partnerships ensure legal-strength visa success pathways for high-ranking universities worldwide.
            </p>

            {/* Social Icons with dark blue and gold glow buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    className="w-10 h-10 rounded-xl bg-navy-abyss/50 border border-gold-classic/20 text-gold-light hover:text-gold-bright hover:border-gold-bright hover:scale-105 flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column B: Quick Links */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-xs font-mono uppercase text-gold-bright tracking-widest font-bold">
              Corporate Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: "About Company", href: "#about" },
                { name: "Certified Services", href: "#services" },
                { name: "Pathways Showcase", href: "#countries" },
                { name: "Portal Collaborators", href: "#partners" },
                { name: "Leadership Desk", href: "#team" },
                { name: "Student FAQs", href: "#faq" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs text-[#b4b1a7] hover:text-gold-bright transition-colors duration-300 flex items-center gap-1.5"
                >
                  <span>⬦</span> {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column C: Laminated Services Quick list */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-gold-bright tracking-widest font-bold">
              Study Abroad Care
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                "Study Abroad Counselling",
                "Admission & SOP Drafting",
                "Attorney Canadian Study Permit",
                "Consular Mock Preps NCR",
                "Schengen University Ingress",
                "Airport & Post-Landing Setup"
              ].map((serv) => (
                <span
                  key={serv}
                  className="text-xs text-[#b4b1a7] hover:text-gold-light transition-colors flex items-center gap-1.5"
                >
                  ✓ {serv}
                </span>
              ))}
            </div>
          </div>

          {/* Column D: Destination Countries */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-xs font-mono uppercase text-gold-bright tracking-widest font-bold">
              Global Gateways
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { flag: "🇺🇸", name: "USA Ivy Select" },
                { flag: "🇨🇦", name: "Canada attorney Permit" },
                { flag: "🇬🇧", name: "UK PSW Schemes" },
                { flag: "🇦🇺", name: "Australia PR Routes" },
                { flag: "🇪🇺", name: "Schengen Free Tuition" }
              ].map((c) => (
                <span
                  key={c.name}
                  className="text-xs text-[#b4b1a7] flex items-center gap-2"
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright row with tagline */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-[#b4b1a7]/60 text-center md:text-left">
            © {new Date().getFullYear()} <strong>WINGSIR-ABROAD LLP</strong>. All rights reserved. 
            <span className="block sm:inline sm:ml-2">ISO 9001:2015 Registered NCR Firm. LLPIN: ACA-XXXX.</span>
          </div>

          <div className="text-center md:text-right">
            <span className="font-heading font-black text-[#d4af37] italic text-md tracking-wider block drop-shadow-md">
              “Designed for Global Dreams”
            </span>
            <span className="text-[10px] text-gold-light/40 uppercase tracking-widest font-mono">
              Delhi CP • Faridabad SEC-15 • Agra Civil Lines
            </span>
          </div>

          {/* Scroll up trigger */}
          <button
            onClick={handleScrollTop}
            className="p-3 rounded-xl bg-navy-abyss/60 border border-gold-classic/20 text-gold-bright hover:bg-gold-classic hover:text-navy-void hover:scale-105 transition-all text-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-xs font-heading font-black uppercase">Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
