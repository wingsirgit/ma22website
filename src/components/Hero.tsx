import { motion } from "motion/react";
import { GraduationCap, ArrowRight, Plane, Globe, Compass, Star, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenConsultation: (type?: string) => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  // Floating separate circular destination items around the main globe
  const circularItems = [
    {
      title: "USA Admissions",
      short: "USA",
      desc: "Top Ivy Leagues",
      badge: "★ Ivy Select",
      icon: "🇺🇸",
      delay: 0,
      coords: "-top-4 -left-4 sm:-top-8 sm:-left-8",
    },
    {
      title: "UK Universities",
      short: "GB",
      desc: "PSW & Support",
      badge: "✦ UK Certified",
      icon: "🇬🇧",
      delay: 0.8,
      coords: "-top-4 -right-4 sm:-top-8 sm:-right-8",
    },
    {
      title: "Canada Study Visa",
      short: "CA",
      desc: "Legal Visas",
      badge: "✔ 98% Success",
      icon: "🇨🇦",
      delay: 1.6,
      coords: "-bottom-4 -right-4 sm:-bottom-8 sm:-right-8",
    },
    {
      title: "Europe Study Programs",
      short: "EU",
      desc: "Tuition-Free",
      badge: "🇪🇺 Schengen",
      icon: "🇪🇺",
      delay: 1.2,
      coords: "-bottom-4 -left-4 sm:-bottom-8 sm:-left-8",
    },
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-navy-void">
      {/* Background World Map / Cinematic Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-classic/5 rounded-full filter blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-navy-abyss/40 rounded-full filter blur-[150px] mix-blend-screen" />
        
        {/* SVG World Map styled with neon grid effects */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <g fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-classic/40">
            {/* Outline grids simulating international pathways */}
            <path d="M 50 150 Q 250 80 450 150 T 850 150" strokeDasharray="5,5" className="animate-pulse" />
            <path d="M 120 380 Q 320 200 620 400" strokeDasharray="8,4" />
            <path d="M 80 200 Q 400 450 820 180" strokeDasharray="3,6" />
            
            {/* World landmarks placeholder lines for flights */}
            <circle cx="150" cy="180" r="4" fill="#d4af37" className="animate-ping" />
            <circle cx="360" cy="140" r="3" fill="#e2b95c" />
            <circle cx="580" cy="220" r="5" fill="#d4af37" className="animate-ping" />
            <circle cx="780" cy="350" r="3.5" fill="#f5e4bd" />
            <circle cx="210" cy="410" r="3" fill="#e2b95c" />
          </g>
        </svg>

        {/* Global Travel Paths Visual - Airplanes floating */}
        <div className="absolute top-[20%] left-[10%] w-[80%] h-[60%] pointer-events-none">
          <motion.div
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "50%", "0%"],
              rotate: [0, 15, -15, 0],
            }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-5 text-gold-classic/30"
          >
            <Plane className="w-8 h-8 opacity-45" />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Side: Brand Value Proposition & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-classic/40 bg-gold-classic/5 text-xs text-gold-bright font-mono tracking-widest uppercase font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-bright animate-spin-slow" />
            <span>ISO 9001:2015 Certified Support</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-gold-light leading-[1.1] text-gold-glow"
          >
            Find Every Solution,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bright via-gold-classic to-gold-light drop-shadow">
              From Applications to Accommodations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold-light/75 text-sm sm:text-base leading-relaxed max-w-xl"
          >
            WINGSIR-ABROAD LLP is a Delhi-headquartered overseas education and visa support firm helping students study in the USA, Canada, UK, Australia, and Europe with trusted counselling, visa guidance, and global admission support.
          </motion.p>

          {/* Premium CTA Buttons Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-4"
          >
            <button
              onClick={() => onOpenConsultation("Start Your Journey")}
              className="px-6 py-4 rounded-xl bg-gradient-to-r from-gold-classic to-gold-bright hover:from-gold-bright hover:to-gold-light text-navy-void font-heading font-bold text-sm tracking-wide shadow-lg shadow-gold-classic/20 hover:shadow-gold-bright/35 transform active:scale-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Your Study Abroad Journey</span>
              <ArrowRight className="w-4 h-4 text-navy-void" />
            </button>

            <button
              onClick={() => onOpenConsultation("Free Counselling")}
              className="px-6 py-4 rounded-xl border border-gold-bright/40 text-gold-bright hover:bg-gold-classic/10 font-heading font-semibold text-sm tracking-wide hover:border-gold-bright transition-all text-center cursor-pointer"
            >
              Free Counselling
            </button>

            <button
              onClick={() => onOpenConsultation("Book Visa Consultation")}
              className="px-6 py-4 rounded-xl bg-navy-abyss/80 border border-gold-classic/15 hover:border-gold-bright/40 text-gold-light hover:text-gold-bright font-heading text-xs tracking-wide transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Visa Consultation</span>
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6 pt-6 border-t border-gold-classic/15 w-full mt-4"
          >
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100"
              ].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Student success"
                  className="w-8 h-8 rounded-full border border-gold-classic object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <p className="text-xs text-gold-light/60 font-mono">TRUSTED BY OVER</p>
              <p className="text-sm font-heading font-semibold text-gold-bright flex items-center gap-1">
                1000+ Students NCR Wide <span>★★★★★</span>
              </p>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Animated Floating Glass Cards Over Cinematic Elements */}
        <div className="lg:col-span-5 relative min-h-[460px] flex items-center justify-center w-full mt-10 lg:mt-0">
          
          {/* Circular Orbit Ring Track */}
          <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-gold-classic/20 pointer-events-none z-0 animate-pulse" />
          <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-gold-classic/5 pointer-events-none z-0 animate-pulse-slow" />
          
          {/* Main Visual Centerpiece: Glowing Gold Hologram Globe / Graduation Visual */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-gold-classic/20 flex items-center justify-center bg-navy-abyss/40 backdrop-blur-3xl animate-pulse z-10 shadow-[0_0_50px_rgba(2,5,16,0.8)]">
            <div className="absolute inset-4 rounded-full border border-dashed border-gold-classic/15 animate-spin-slow" />
            <div className="text-center p-4 flex flex-col items-center justify-center relative z-20">
              <Globe className="w-12 h-12 sm:w-14 sm:h-14 text-gold-bright mb-2 animate-bounce" />
              <div className="text-xl sm:text-2xl font-heading font-black text-gold-light tracking-wide">
                DELHI
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-gold-bright/60 uppercase tracking-widest leading-none mt-1">
                HQ TO THE WORLD
              </div>
            </div>
          </div>

          {/* Render circular items around centerpiece */}
          {circularItems.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -6, 0]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: card.delay,
              }}
              className={`absolute ${card.coords} w-24 h-24 sm:w-32 sm:h-32 rounded-full glass-laminated hover:scale-105 hover:border-gold-bright transition-all duration-300 flex flex-col items-center justify-center text-center p-1 cursor-pointer pointer-events-auto z-20 group`}
              onClick={() => onOpenConsultation(`${card.title} Enquiry`)}
            >
              {/* Spinning inner dashed ring for luxury details */}
              <div className="absolute inset-1.5 rounded-full border border-dashed border-gold-classic/10 group-hover:border-gold-bright/40 transition-colors animate-spin-slow" />
              
              <div className="relative z-10 flex flex-col items-center justify-center">
                {/* Custom circular Flag bracket */}
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-navy-void/90 border border-gold-classic/20 flex items-center justify-center text-lg sm:text-2xl shadow-indigo-950 shadow-inner mb-0.5 sm:mb-1 group-hover:scale-110 group-hover:border-gold-bright transition-all">
                  {card.icon}
                </div>
                
                {/* Target abbreviation */}
                <span className="text-[10px] sm:text-xs font-mono font-black tracking-widest text-gold-bright uppercase leading-none">
                  {card.short}
                </span>

                {/* Badge caption */}
                <span className="text-[8px] sm:text-[9px] text-[#dfdcd3]/80 font-heading font-semibold leading-tight mt-0.5 max-w-[70px] sm:max-w-[100px] truncate">
                  {card.badge}
                </span>
                
                {/* Secondary description micro text */}
                <span className="hidden sm:block text-[8px] text-gold-light/40 mt-0.5 max-w-[85px] truncate">
                  {card.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
