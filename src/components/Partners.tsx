import { PARTNERS_DATA } from "../data";
import { Network, ArrowUpRight } from "lucide-react";

export default function Partners() {
  // Let's copy partners twice to construct a smooth infinite marquee look
  const doubledPartners = [...PARTNERS_DATA, ...PARTNERS_DATA, ...PARTNERS_DATA, ...PARTNERS_DATA];

  return (
    <section id="partners" className="py-20 relative overflow-hidden bg-navy-void border-b border-gold-classic/10">
      
      {/* Absolute Decorative Glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 radial-gradient bg-navy-abyss/45 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase font-bold">
            Portal Integrations
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-gold-light mt-1 tracking-tight">
            Our Elite <span className="text-gold-classic">Representative Portals</span> For Courses
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gold-classic to-transparent mx-auto mt-3" />
        </div>

        {/* Scrolling carousel component */}
        <div className="relative w-full py-4 overflow-hidden">
          {/* Fading side overlays to make it look smooth and elegant */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-navy-void to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-navy-void to-transparent z-10 pointer-events-none" />

          {/* Marquee Track flex block */}
          <div className="flex gap-6 animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] w-max select-none">
            {doubledPartners.map((p, idx) => (
              <div
                key={`${p.id}-${idx}`}
                className="w-64 glass-laminated p-5 rounded-2xl flex items-center justify-between gap-4 cursor-pointer hover:scale-105 hover:border-gold-bright transition-all duration-300 shadow-md shadow-black/80"
              >
                <div className="flex items-center gap-3">
                  {/* Glowing dynamic badge or logo emblem */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-classic/20 to-navy-obsidian flex items-center justify-center text-xl border border-gold-classic/30 shadow-inner">
                    {p.logo}
                  </div>
                  <div>
                    <h3 className="text-xs font-heading font-bold text-gold-light tracking-wide">
                      {p.name}
                    </h3>
                    <p className="text-[9px] font-mono text-gold-bright/60 uppercase tracking-widest -mt-0.5">
                      Platform Partner
                    </p>
                  </div>
                </div>

                <div className="text-[#d4af37]">
                  <ArrowUpRight className="w-4 h-4 opacity-50 hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Partnership description context footer */}
        <div className="text-center mt-10">
          <p className="text-gold-light/40 text-[10px] uppercase font-mono tracking-widest flex items-center justify-center gap-1.5">
            <Network className="w-4 h-4 text-gold-bright" />
            Empowering admissions to 50,000+ courses across USA, Canada, UK, Australia & Europe
          </p>
        </div>

      </div>

      {/* Embedded CSS for marquee animation inside Tailwind environment */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
}
