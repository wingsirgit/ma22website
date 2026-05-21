import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COUNTRIES_DATA } from "../data";
import { GraduationCap, ArrowRight, ShieldCheck, Landmark } from "lucide-react";

interface CountriesProps {
  onOpenConsultation: (countryName: string) => void;
}

export default function Countries({ onOpenConsultation }: CountriesProps) {
  const [selectedId, setSelectedId] = useState<string | null>(COUNTRIES_DATA[0].id);

  const activeCountry = COUNTRIES_DATA.find((c) => c.id === selectedId) || COUNTRIES_DATA[0];

  return (
    <section id="countries" className="py-24 relative overflow-hidden bg-navy-void border-b border-gold-classic/10">
      
      {/* Absolute Decorative Glows */}
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-gold-classic/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-navy-abyss/40 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase font-bold">
            Interactive Global Map
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gold-light mt-2 tracking-tight">
            Explore Golden Pathways to <span className="text-gold-classic">Top-Tier Nations</span>
          </h2>
          <p className="text-gold-light/60 text-xs sm:text-sm mt-3 leading-relaxed max-w-xl mx-auto animate-pulse">
            Click on any country tab to inspect custom visa advantages, popular courses, and top destination universities.
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gold-classic to-transparent mx-auto mt-4" />
        </div>

        {/* Dynamic Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Premium list of Country Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-gold-light/40 pl-2">
              Select Destination Country
            </p>
            {COUNTRIES_DATA.map((country) => {
              const isSelected = country.id === selectedId;
              return (
                <button
                  key={country.id}
                  onClick={() => setSelectedId(country.id)}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left border cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-gold-dark/40 to-navy-abyss border-gold-classic shadow-md shadow-gold-classic/10"
                      : "bg-navy-abyss/40 border-gold-classic/10 hover:border-gold-classic/35 hover:bg-navy-abyss/75"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" role="img" aria-label={country.name}>
                      {country.flag}
                    </span>
                    <div>
                      <span className="text-sm font-heading font-bold text-gold-light">
                        {country.name}
                      </span>
                      <span className="block text-[10px] text-gold-bright/60 font-mono -mt-0.5">
                        {country.visaSuccessRate} Visa Success
                      </span>
                    </div>
                  </div>
                  
                  <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? "bg-gold-bright animate-ping" : "bg-gold-classic/15"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: High-End HD Animated Laminated Display Box */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCountry.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className={`w-full glass-laminated p-6 sm:p-8 rounded-3xl relative overflow-hidden backdrop-blur-2xl flex flex-col justify-between min-h-[460px]`}
              >
                {/* Visual Background Theme Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activeCountry.bgGradient} opacity-20 pointer-events-none -z-10`} />
                <div className="absolute top-0 right-0 w-80 h-80 radial-gradient bg-gold-classic/10 filter blur-3xl pointer-events-none -z-10" />

                {/* Country Card Heading info */}
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gold-classic/15 pb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl sm:text-5xl" role="img" aria-label={activeCountry.name}>
                        {activeCountry.flag}
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-heading font-black text-gold-light">
                          {activeCountry.name} Destination Pathways
                        </h3>
                        <p className="text-xs text-gold-bright font-mono tracking-widest uppercase">
                          Wingsir Approved University Portals
                        </p>
                      </div>
                    </div>
                    
                    <div className="px-3.5 py-1.5 rounded-full border border-gold-classic bg-gold-classic/10 text-center flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-gold-bright" />
                      <span className="text-xs font-heading font-semibold text-gold-bright">
                        {activeCountry.visaSuccessRate} Success Rate
                      </span>
                    </div>
                  </div>

                  {/* Country core descriptions text */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono uppercase text-[#a1a1aa] tracking-widest font-bold">
                        Overview & Core Benefits
                      </h4>
                      <p className="text-sm text-gold-light/95 leading-relaxed">
                        {activeCountry.description}
                      </p>

                      <div className="p-4 rounded-xl bg-navy-void/80 border border-gold-classic/10 flex gap-3">
                        <Landmark className="w-5 h-5 text-gold-bright flex-shrink-0" />
                        <div>
                          <span className="text-xs font-heading font-bold text-gold-light block">
                            Represented Universities
                          </span>
                          <span className="text-[11px] text-gold-light/65 leading-tight block">
                            {activeCountry.keyUniversities}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xs font-mono uppercase text-[#a1a1aa] tracking-widest font-bold">
                        Highly Popular Courses
                      </h4>
                      
                      <div className="grid grid-cols-1 gap-2">
                        {activeCountry.popularCourses.map((course, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 p-2 px-3 rounded-lg bg-gold-classic/5 border border-gold-classic/10 text-xs font-heading font-medium text-gold-light hover:border-gold-classic/40 transition-all cursor-pointer"
                          >
                            <GraduationCap className="w-4 h-4 text-gold-bright" />
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 text-[10px] text-gold-light/50 italic">
                        * Courses fully aggregated through professional portal collaborations with customized scholarship tracks available.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons inside wrapper */}
                <div className="mt-8 pt-6 border-t border-gold-classic/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <span className="text-xs text-gold-light/50 block">Interested in {activeCountry.name}?</span>
                    <span className="text-xs font-heading font-semibold text-gold-bright">
                      Delivered by Legal-Strength NCR Advisors
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenConsultation(`${activeCountry.name} Programs Explore`)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-gold-classic to-gold-bright text-navy-void font-heading font-extrabold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-gold-classic/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                  >
                    <span>Explore Programs</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
