import { motion } from "motion/react";
import { TEAM_DATA } from "../data";
import { Scale, Milestone, Sparkles } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-[#030716] text-[#dfdcd3] border-b border-gold-classic/10">
      
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] navy-spotlight rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 gold-spotlight rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block Info */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest text-gold-bright uppercase font-bold">
            Leadership & Counsel
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gold-light mt-2 tracking-tight">
            Our Elite <span className="text-gold-classic">Leadership & Expert Team</span>
          </h2>
          <p className="text-gold-light/65 text-xs sm:text-sm mt-3 leading-relaxed max-w-xl mx-auto">
            Our multi-disciplinary advisers combine Canadian and Indian legal advocates, certified scholars, IT professionals, and social leaders to guide student careers.
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gold-classic to-transparent mx-auto mt-4" />
        </div>

        {/* Team Grid Layout responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16 items-start justify-items-center w-full">
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="flex flex-col items-center w-full max-w-[280px] group"
            >
              
              {/* circular image frame wrapper */}
              <div className="relative w-44 h-44 rounded-full p-[2.5px] bg-gradient-to-tr from-gold-dark via-gold-classic to-gold-bright shadow-lg shadow-gold-classic/10 group-hover:shadow-gold-bright/30 transition-all duration-500 z-10 -mb-10 group-hover:scale-105">
                {/* perfect circular HD frame for the member photo */}
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-navy-void relative bg-navy-abyss">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle spotlight gloss effect layer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold-classic/10 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Glowing border node decoration */}
                <div className="absolute -bottom-1 right-3 w-5 h-5 rounded-full bg-navy-obsidian border border-gold-bright flex items-center justify-center shadow">
                  <Sparkles className="w-2.5 h-2.5 text-gold-bright" />
                </div>
              </div>

              {/* rectangular descriptions block below circular image */}
              <div className="w-full glass-laminated p-5 pt-12 rounded-2xl flex flex-col items-center text-center gap-2 border border-gold-classic/20 group-hover:border-gold-classic/55 transition-all duration-300 min-h-[220px] shadow-md relative">
                
                {/* Name */}
                <h3 className="text-md font-heading font-black text-gold-light group-hover:text-gold-bright transition-colors duration-300 text-center uppercase tracking-wide">
                  {member.name}
                </h3>
                
                {/* Designation */}
                <span className="text-[10px] font-mono font-bold text-gold-bright/80 uppercase px-2 py-0.5 rounded bg-gold-bright/5 border border-gold-bright/15 tracking-widest text-center">
                  {member.designation}
                </span>

                {/* exactly 4-6 lines descriptions */}
                <p className="text-[11px] text-[#b4b1a7] leading-relaxed text-center mt-2 font-sans line-clamp-5 group-hover:text-gold-light/95 transition-colors">
                  {member.description}
                </p>

                {/* Hover spotlight visual */}
                <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-gold-classic/5 to-transparent rounded-t-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic regulatory legal endorsement */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 glass-laminated p-5 rounded-2xl max-w-3xl mx-auto">
            <div className="p-3 bg-gold-classic/10 border border-gold-classic/35 rounded-full text-gold-bright">
              <Scale className="w-6 h-6" />
            </div>
            <div className="text-center sm:text-left space-y-1">
              <h4 className="text-xs font-heading font-bold text-gold-bright uppercase tracking-wide">
                Ethical NCR Counselling & Attorney Standard Compliance
              </h4>
              <p className="text-[11.5px] text-[#b4b1a7] leading-relaxed">
                WINGSIR-ABROAD LLP guarantees that every single student file is prepared according to strict legal and ethical parameters. All staff are certified under standard foreign education registries, led by certified practitioners.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
