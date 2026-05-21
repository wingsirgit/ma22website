import { motion } from "motion/react";
import { Shield, Award, Users, BookOpen, MapPin, Scale } from "lucide-react";

export default function About() {
  const stats = [
    {
      value: "1,000+",
      label: "Students Guided",
      desc: "Profiling, SOPs & Enrolments NCR wide",
      icon: Users,
    },
    {
      value: "500+",
      label: "Visa Successes",
      desc: "Fast-tracked applications approved",
      icon: Award,
    },
    {
      value: "80,000+",
      label: "Global Programs Network",
      desc: "Integrated portal selection options",
      icon: BookOpen,
    },
    {
      value: "100%",
      label: "Trusted Support",
      desc: "Ethical counselling certified advisors",
      icon: Shield,
    },
  ];

  const branches = [
    { name: "Delhi", role: "Corporate Headquarters", spec: "Connaught Place, Central Delhi" },
    { name: "Faridabad", role: "NCR Counselling Hub", spec: "Sector 15 Main Commercial" },
    { name: "Agra", role: "Regional Resource Center", spec: "Sanjay Place Commerce Center" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-abyss/40 border-t border-b border-gold-classic/10">
      
      {/* Decorative spotlights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 gold-spotlight -translate-y-1/2 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] navy-spotlight rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-gold-bright uppercase font-bold">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gold-light mt-2 tracking-tight">
            The Pinnacle of Trust in <span className="text-gold-classic">Global Education Support</span>
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gold-classic to-transparent mx-auto mt-4" />
        </div>

        {/* Narrative & Value Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Block: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-gold-bright">
              Delhi Headquarters with Deep Multi-Branch Reach & Legal Strength
            </h3>
            
            <p className="text-gold-light/80 text-sm sm:text-base leading-relaxed">
              WINGSIR-ABROAD LLP has its head office in Delhi with branches in Faridabad and Agra, providing easy access to expert study abroad counselling across NCR. Our counsellors are certified **UK agent and counsellor training certificate awardees**, ensuring ethical, compliant, and professional guidance for every student.
            </p>

            <div className="p-5 rounded-2xl glass-laminated border-l-2 border-l-gold-classic flex gap-4">
              <div className="p-2.5 h-fit bg-gold-classic/10 rounded-xl text-gold-bright border border-gold-classic/20">
                <Scale className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-heading font-bold text-gold-light">
                  Toronto-Based Immigration Attorney Power
                </h4>
                <p className="text-xs text-gold-light/70 leading-relaxed">
                  Backed directly by a Toronto-based attorney firm, we provide legal-strength support for Canadian study permits, visa preps, and complex immigration files. Your application carries legal professional integrity.
                </p>
              </div>
            </div>

            <p className="text-gold-light/75 text-xs sm:text-sm">
              Our team bridges diverse expertise—combining Canadian and Indian attorneys, experienced international educators, IT professionals, and social workers dedicated purely to ensuring student career success.
            </p>

            {/* Branch Locations chips */}
            <div className="pt-4 space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa]">Our NCR Branches Network</p>
              <div className="grid grid-cols-3 gap-3">
                {branches.map((b) => (
                  <div key={b.name} className="p-3 bg-navy-void/80 border border-gold-classic/10 rounded-xl flex flex-col gap-1 text-center">
                    <span className="text-gold-bright font-heading font-bold text-sm flex items-center justify-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {b.name}
                    </span>
                    <span className="text-[9px] text-gold-light/50 tracking-tight leading-none">
                      {b.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Block: Aggregators Integration Cards */}
          <div className="lg:col-span-5 relative">
            <div className="glass-laminated p-6 sm:p-8 rounded-3xl relative z-10 w-full space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gold-classic animate-ping" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-bright font-bold">
                  The Global Portal Powerhouse
                </span>
              </div>
              
              <h4 className="text-lg font-heading font-extrabold text-gold-light">
                One Single Portal. Thousands of International Programs.
              </h4>

              <p className="text-xs text-gold-light/75 leading-relaxed">
                By integrating leading global networks – **ApplyBoard, KC Overseas Education, Adventus.io, and StudyReach.com** – we deliver streamlined courses searching directly to our students under one trusted umbrella dashboard.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {["1500+ Universities", "50k+ Live Programs", "Instant Offer Checks", "Direct Representative Deals"].map((badge, idx) => (
                  <div key={idx} className="p-3 bg-navy-void/60 border border-gold-classic/10 rounded-xl text-center text-[10px] font-mono text-gold-bright">
                    ✓ {badge}
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <span className="text-[10px] text-gold-light/40 italic font-sans block">
                  Counsellors thoroughly certified to support UK Agent & Counsellor Training standards.
                </span>
              </div>
            </div>

            {/* Glowing gold back plate background */}
            <div className="absolute inset-4 bg-gold-classic/5 rounded-3xl filter blur-xl -z-10" />
          </div>

        </div>

        {/* Dynamic Statistics Block widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-gold-classic/15">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-2xl glass-laminated text-center select-none"
              >
                <div className="inline-flex p-3 rounded-full bg-gold-classic/10 text-gold-bright border border-gold-classic/20 mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-4xl font-heading font-extrabold text-gold-light tracking-tight text-gold-glow">
                  {stat.value}
                </h4>
                <p className="text-sm font-heading font-semibold text-gold-classic mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-gold-light/60 mt-2 leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
