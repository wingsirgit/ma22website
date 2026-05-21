import { motion } from "motion/react";
import { SERVICES_DATA } from "../data";
import * as LucideIcons from "lucide-react";

interface ServicesProps {
  onOpenConsultation: (serviceTitle: string) => void;
}

// Map dynamic server icons manually for typed safety without eval imports
const IconMapper = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case "Compass":
      return <LucideIcons.Compass className={className} />;
    case "GraduationCap":
      return <LucideIcons.GraduationCap className={className} />;
    case "FileCheck":
      return <LucideIcons.FileCheck className={className} />;
    case "Award":
      return <LucideIcons.Award className={className} />;
    case "FileText":
      return <LucideIcons.FileText className={className} />;
    case "Stamp":
      // Fallback to FileDigit / Handshake / Stamp
      return <LucideIcons.FileDown className={className} />;
    case "ShieldAlert":
      return <LucideIcons.ShieldAlert className={className} />;
    case "Home":
      return <LucideIcons.Home className={className} />;
    case "PlaneTakeoff":
      return <LucideIcons.PlaneTakeoff className={className} />;
    case "TrendingUp":
      return <LucideIcons.TrendingUp className={className} />;
    default:
      return <LucideIcons.GraduationCap className={className} />;
  }
};

export default function Services({ onOpenConsultation }: ServicesProps) {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#030716] text-[#dfdcd3]">
      
      {/* Visual background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 radial-gradient bg-gold-classic/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 radial-gradient bg-navy-abyss/50 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Header info */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase font-bold">
            Comprehensive Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gold-light mt-2 tracking-tight">
            Premium Laminated <span className="text-gold-classic">Services</span> Built For Your Dreams
          </h2>
          <p className="text-gold-light/60 text-xs sm:text-sm mt-3 leading-relaxed max-w-xl mx-auto">
            From the minute you step into our NCR offices to the day you qualify as a global graduate, WINGSIR-ABROAD delivers attorney-guided, ethical expertise at every single stage.
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gold-classic to-transparent mx-auto mt-4" />
        </div>

        {/* Services interactive cards list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-laminated glass-laminated-hover p-5 rounded-2xl flex flex-col justify-between h-[230px] group cursor-pointer"
              onClick={() => onOpenConsultation(`${service.title} consultation`)}
            >
              <div className="space-y-4">
                {/* Header Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-gold-classic/10 text-gold-bright border border-gold-classic/20 group-hover:bg-gold-classic group-hover:text-navy-void transition-all duration-300">
                    <IconMapper name={service.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-gold-classic/40 group-hover:text-gold-bright/60 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Info Text */}
                <div className="space-y-1">
                  <h3 className="text-sm font-heading font-bold text-gold-light group-hover:text-gold-bright transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-gold-light/60 group-hover:text-gold-light/80 leading-normal line-clamp-3 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Gold card accent button action on hover */}
              <div className="pt-2 flex items-center justify-between border-t border-gold-classic/10 text-[10px] font-mono text-gold-bright uppercase tracking-wider">
                <span>Request details</span>
                <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform">
                  ➔
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global disclaimer / value add badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 glass-laminated p-3.5 rounded-2xl max-w-2xl mx-auto">
            <span className="text-xl">🍁</span>
            <p className="text-[11px] text-gold-light/70 text-left leading-normal">
              <strong>Need-to-Know:</strong> All Canada study visas and documentation checks undergo professional, legal-strength alignment mentored by our associated **Toronto Attorney Firm**.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
