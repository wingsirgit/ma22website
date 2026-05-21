import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckSquare, MessageSquare, Globe, ArrowRight, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [selectedBranch, setSelectedBranch] = useState("delhi");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "USA",
    service: "Study Abroad Counselling",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Exact contact details specified in request
  const contactPhones = [
    "76-77-78-79-16",
    "76-77-78-79-36",
    "99999-4444",
    "9999943555"
  ];

  const contactEmails = [
    "contact@wingsir-abroad.com",
    "info@wingsir-abroad.com"
  ];

  const branchDetails = {
    delhi: {
      location: "Delhi Head Office: Connaught Place, New Delhi, India",
      coords: { lat: "28.6304° N", lng: "77.2177° E" },
      hours: "09:30 AM - 06:30 PM",
      desc: "Our premium headquarters coordinates university relationships, Toronto attorney legal files, and mock consular visa interviews.",
    },
    faridabad: {
      location: "Faridabad Branch: Commercial Sector 15, Faridabad, Haryana",
      coords: { lat: "28.3970° N", lng: "77.3090° E" },
      hours: "10:00 AM - 06:00 PM",
      desc: "Serving NCR's growing aspirant student community with certified documentation reviews and course listings selector preps.",
    },
    agra: {
      location: "Agra Branch: Sanjay Place, Civil Lines, Agra, Uttar Pradesh",
      coords: { lat: "27.1767° N", lng: "78.0081° E" },
      hours: "10:00 AM - 06:00 PM",
      desc: "Providing Uttar Pradesh state students with ethical consulting pathways directly under Delhi headquarters compliance parameters.",
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        country: "USA",
        service: "Study Abroad Counselling",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-void text-[#dfdcd3]">
      
      {/* Decorative spotlights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 radial-gradient bg-gold-classic/5 filter blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-navy-abyss/40 filter blur-[155px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase font-bold">
            Connect Securely
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gold-light mt-1 tracking-tight">
            Consult our Team & <span className="text-gold-classic">Lock Your Path</span>
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gold-classic to-transparent mx-auto mt-4" />
        </div>

        {/* Contact Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column A: Contact Details, WhatsApp links, and Interactive Simulated Map Selector [5 cols] */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Dial Cards */}
            <div className="glass-laminated p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-gold-bright font-bold flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-bright" />
                OFFICIAL PHONE CONTACT NUMBERS
              </h3>
              
              <div className="grid grid-cols-2 gap-3.5">
                {contactPhones.map((ph, idx) => (
                  <a
                    key={idx}
                    href={`tel:${ph.replace(/-/g, "")}`}
                    className="p-3 bg-navy-void/85 border border-gold-classic/10 rounded-xl flex items-center gap-2 hover:border-gold-bright/60 transition-colors group cursor-pointer"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-classic animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-gold-light group-hover:text-gold-bright transition-colors">
                      {ph}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Electronic Mail Details */}
            <div className="glass-laminated p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-gold-bright font-bold flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-bright" />
                OFFICIAL INTAKE MAILBOXES
              </h3>
              
              <div className="flex flex-col gap-2.5">
                {contactEmails.map((email, idx) => (
                  <a
                    key={idx}
                    href={`mailto:${email}`}
                    className="p-3.5 bg-navy-void/85 border border-gold-classic/10 rounded-xl flex items-center justify-between hover:border-gold-bright/60 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#d4af37]">✉</span>
                      <span className="text-xs font-mono text-gold-light group-hover:text-gold-bright transition-colors">
                        {email}
                      </span>
                    </div>
                    <ArrowRight className="w-4.5 h-4.5 text-gold-classic/40 group-hover:text-gold-bright transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Interactive simulated Google Map selector widget */}
            <div className="glass-laminated p-6 rounded-2xl flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-mono uppercase tracking-wider text-gold-light/40 font-bold">
                  INTERACTIVE MAP LOCATOR
                </h3>
                <div className="flex gap-1.5">
                  {(["delhi", "faridabad", "agra"] as const).map((branch) => (
                    <button
                      key={branch}
                      onClick={() => setSelectedBranch(branch)}
                      className={`px-2 py-1 rounded text-[10px] font-heading font-black capitalize cursor-pointer transition-all ${
                        selectedBranch === branch
                          ? "bg-gold-classic text-navy-void"
                          : "bg-navy-void text-gold-bright/60 hover:text-gold-bright"
                      }`}
                    >
                      {branch}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Map Canvas */}
              <div className="h-44 rounded-xl bg-navy-obsidian relative overflow-hidden border border-gold-classic/10 flex items-center justify-center p-4">
                
                {/* Micro Map background grid visual */}
                <div className="absolute inset-0 bg-grid-[#aa823e]/5 pointer-events-none opacity-40" />
                
                <svg className="absolute inset-0 w-full h-full text-gold-classic/10 opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 Q25,80 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M50,0 Q80,25 50,50 T50,100" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>

                {/* Branch details overlays */}
                <div className="text-center relative z-10 p-3 space-y-2">
                  <MapPin className="w-8 h-8 text-gold-bright mx-auto animate-bounce" />
                  <div>
                    <span className="text-xs font-heading font-extrabold text-gold-light block uppercase tracking-wide">
                      {branchDetails[selectedBranch as keyof typeof branchDetails].location.split(":")[0]}
                    </span>
                    <span className="text-[10px] text-gold-light/75 leading-normal block max-w-sm mt-0.5">
                      {branchDetails[selectedBranch as keyof typeof branchDetails].location.split(":")[1]}
                    </span>
                  </div>
                  
                  <div className="text-[9px] font-mono text-gold-bright/60 uppercase">
                    Coordinates: {branchDetails[selectedBranch as keyof typeof branchDetails].coords.lat} | {branchDetails[selectedBranch as keyof typeof branchDetails].coords.lng}
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 text-[9px] font-mono text-gold-classic/55 italic">
                  * Click options above to pan map
                </div>
              </div>

              {/* Branch description texts */}
              <p className="text-[11px] text-gold-light/65 leading-relaxed bg-[#020510]/60 p-3 rounded-xl border border-gold-classic/5">
                {branchDetails[selectedBranch as keyof typeof branchDetails].desc}
              </p>
            </div>

          </div>

          {/* Column B: Live Enquiry Submission Form [7 cols] */}
          <div className="lg:col-span-7">
            <div className="glass-laminated p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-84 h-84 radial-gradient bg-gold-classic/5 filter blur-2xl pointer-events-none -z-10" />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-2.5 py-1 rounded bg-gold-classic/15 text-[#d4af37] text-[10px] font-mono font-bold uppercase tracking-widest border border-gold-classic/30">
                    Live Portal Submission
                  </div>
                  <span className="text-xs font-heading text-gold-light/60">Fast-track processed in 24 hours</span>
                </div>

                <h3 className="text-xl font-heading font-extrabold text-gold-light mb-2">
                  Overseas Program Enrollment Enquiry Form
                </h3>
                <p className="text-xs text-gold-light/65 mb-6">
                  Fill in your details below and a certified executive counsellor from our Delhi HQ will contact you to align your University Profiling and Attorney Visa plans.
                </p>

                {/* Form fields layout */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-navy-void/80 border border-gold-classic/20 focus:border-gold-bright rounded-xl p-3 text-xs text-gold-light focus:outline-none"
                        placeholder="e.g. Priyesh Ranjan"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] font-bold">
                        Phone Contact *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-navy-void/80 border border-gold-classic/20 focus:border-gold-bright rounded-xl p-3 text-xs text-gold-light focus:outline-none font-mono"
                        placeholder="e.g. +91 99999-XXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-navy-void/80 border border-gold-classic/20 focus:border-gold-bright rounded-xl p-3 text-xs text-gold-light focus:outline-none font-mono"
                      placeholder="e.g. student@wingsir-abroad.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] font-bold">
                        Selected Country
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full bg-navy-void/80 border border-gold-classic/20 focus:border-gold-bright rounded-xl p-3 text-xs text-gold-light focus:outline-none cursor-pointer"
                      >
                        {["USA", "Canada", "United Kingdom", "Australia", "Germany", "France", "Europe (Schengen)"].map((c) => (
                          <option key={c} value={c} className="bg-[#030716] text-[#dfdcd3]">{c}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] font-bold">
                        Interested Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-navy-void/80 border border-gold-classic/20 focus:border-gold-bright rounded-xl p-3 text-xs text-gold-light focus:outline-none cursor-pointer"
                      >
                        {[
                          "Study Abroad Counselling",
                          "University Selection",
                          "Admission Assistance",
                          "Scholarship Guidance",
                          "SOP & Documentation",
                          "Student Visa Assistance",
                          "Canada Immigration Support",
                          "Accommodation Assistance",
                          "Airport Pickup Guidance",
                          "Career Pathway Planning",
                        ].map((s) => (
                          <option key={s} value={s} className="bg-[#030716] text-[#dfdcd3]">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] font-bold">
                      Add Custom Message *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-navy-void/80 border border-gold-classic/20 focus:border-gold-bright rounded-xl p-3 text-xs text-gold-light focus:outline-none resize-none"
                      placeholder="Explain your academic background, score updates, or study destination timing requirements..."
                    />
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-5 h-5 text-gold-bright" />
                      <span className="text-[11px] text-[#b4b1a7] leading-none">
                        Certified secure data storage with encryption support.
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-gold-classic via-gold-classic to-gold-bright hover:from-gold-bright hover:to-gold-light text-navy-void font-heading font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md shadow-gold-classic/25 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4 text-navy-void" />
                    </button>
                  </div>
                </form>

              </div>

              {/* Submission success alerts */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="absolute inset-0 bg-navy-obsidian/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold-classic/15 border border-gold-classic flex items-center justify-center text-gold-bright text-4xl mb-4 animate-bounce">
                      ✓
                    </div>
                    <div className="px-2.5 py-1 rounded bg-gold-classic/10 text-gold-bright border border-gold-classic/35 text-[9px] font-mono mb-2 uppercase tracking-widest font-black">
                      Inquiry Code: WAS-2026-OK
                    </div>
                    <h3 className="text-xl font-heading font-black text-gold-light">
                      Submission Received Successfully
                    </h3>
                    <p className="text-xs text-gold-light/75 leading-relaxed max-w-sm mt-2">
                      Thank you. A certified foreign education advisor from our Connaught Place Delhi headquarters will contact you on your registered mobile number shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-4 py-2 border border-gold-classic/20 text-gold-bright hover:bg-gold-classic/10 text-[11px] font-mono rounded"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
