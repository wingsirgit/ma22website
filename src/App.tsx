import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Countries from "./components/Countries";
import Partners from "./components/Partners";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MessageSquare, Phone, Sparkles, CheckCircle, Calendar, X, GraduationCap, Compass, ShieldAlert } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Aligning University Portals...");
  const [isSolarGold, setIsSolarGold] = useState(false);
  const [consultationModal, setConsultationModal] = useState<string | null>(null);
  const [modalFormData, setModalFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Canada",
    academicScore: "",
    privacyAccepted: true,
  });
  const [modalSubmitted, setModalSubmitted] = useState(false);

  // Micro list of loading sentences
  const loaders = [
    "Aligning University Portals...",
    "Securing Attorney Canadian Study Frameworks...",
    "Retrieving UK Agent & Counsellor registries...",
    "Initiating Delhi NCR Admissions Desk...",
    "Designed for Global Dreams..."
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % loaders.length;
      setLoadingText(loaders[index]);
    }, 600);

    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleOpenModal = (type?: string) => {
    setConsultationModal(type || "General Study Abroad Consultation");
    setModalSubmitted(false);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
    setTimeout(() => {
      setConsultationModal(null);
      setModalFormData({
        name: "",
        phone: "",
        email: "",
        destination: "Canada",
        academicScore: "",
        privacyAccepted: true,
      });
    }, 3500);
  };

  return (
    <div className={`min-h-screen text-[#dfdcd3] selection:bg-gold-classic selection:text-navy-void font-sans relative ${
      isSolarGold 
        ? "bg-gradient-to-b from-[#030919] via-[#05112e] to-[#01050f]" 
        : "bg-navy-void"
    }`}>
      
      {/* Dynamic Ambient Animated Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Deep ambient animated background nodes */}
        <div className={`absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full filter blur-[130px] mix-blend-screen transition-all duration-1000 ${
          isSolarGold ? "bg-amber-500/10" : "bg-gold-classic/5"
        }`} />
        
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-[#071536]/35 rounded-full filter blur-[150px] mix-blend-screen" />
        
        <div className={`absolute bottom-[15%] left-[10%] w-[450px] h-[450px] rounded-full filter blur-[120px] transition-all duration-1000 ${
          isSolarGold ? "bg-amber-900/15" : "bg-gold-classic/5"
        }`} />

        {/* Floating golden particle dots decoration */}
        <div className="absolute inset-0 opacity-25">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="particles" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#d4af37" opacity="0.3" className="animate-pulse" />
                <circle cx="60" cy="50" r="1.5" fill="#e2b95c" opacity="0.2" className="animate-ping" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#particles)" />
          </svg>
        </div>
      </div>

      {/* Premium Loader Animation overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-navy-void flex flex-col items-center justify-center p-6 text-center select-none"
          >
            <div className="space-y-6 max-w-sm w-full">
              
              {/* Spinning luxury logo halo */}
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 rounded-full border border-dashed border-gold-classic animate-spin" />
                <div className="absolute inset-2 rounded-full border border-gold-bright/30 animate-pulse" />
                <div className="absolute inset-4 bg-navy-abyss rounded-full flex items-center justify-center border border-gold-classic/20">
                  <span className="text-gold-classic font-heading font-black text-xl tracking-tighter">W</span>
                </div>
              </div>

              <div className="space-y-1">
                <h2 className="text-xl font-heading font-extrabold text-gold-light tracking-widest uppercase">
                  WINGSIR-ABROAD
                </h2>
                <span className="text-[10px] font-mono tracking-widest text-gold-bright/60 uppercase">
                  LLP • Global admissions Support
                </span>
              </div>

              {/* Loader progress line indicator */}
              <div className="space-y-2">
                <div className="h-[2px] w-full bg-navy-abyss rounded-full overflow-hidden border border-gold-classic/15">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-gold-dark via-gold-classic to-gold-bright"
                  />
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingText}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="text-[11px] font-mono text-gold-light/60 h-4"
                  >
                    {loadingText}
                  </motion.p>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      {!loading && (
        <div className="relative z-10">
          
          <Header onOpenConsultation={handleOpenModal} />
          
          <main>
            <Hero onOpenConsultation={handleOpenModal} />
            <About />
            <Services onOpenConsultation={handleOpenModal} />
            <Countries onOpenConsultation={handleOpenModal} />
            <Partners />
            <Team />
            <Testimonials />
            <Contact />
          </main>
          
          <Footer />

          {/* Luxury Floating UI Command Controls */}
          <div className="fixed bottom-6 left-6 z-40 hidden sm:flex flex-col gap-3">
            
            {/* Ambiance switch dark mode toggle */}
            <button
              onClick={() => setIsSolarGold(!isSolarGold)}
              className="px-4 py-2.5 rounded-xl bg-navy-abyss/85 border border-gold-classic/20 backdrop-blur-md text-gold-bright hover:border-gold-bright transition-all text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Ambiance: {isSolarGold ? "Solar Gold" : "Cosmic Navy"}</span>
            </button>
          </div>

          <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
            
            {/* Floating dial button 1: Direct phone connection */}
            <a
              href="tel:+917677787916"
              className="w-13 h-13 rounded-full bg-gradient-to-r from-gold-dark to-gold-classic shadow-lg shadow-gold-classic/30 hover:scale-105 flex items-center justify-center text-navy-void hover:brightness-110 active:scale-95 transition-all cursor-pointer group"
              title="Call Delhi Office"
            >
              <Phone className="w-5 h-5 stroke-[2.5px] group-hover:animate-bounce" />
            </a>

            {/* Floating dial button 2: Urgent WhatsApp chat */}
            <a
              href="https://wa.me/917677787916"
              target="_blank"
              rel="noopener referrer"
              referrerPolicy="no-referrer"
              className="w-13 h-13 rounded-full bg-[#1c2541] hover:bg-[#202c4f] border border-gold-classic/40 shadow-lg shadow-black/60 hover:scale-105 flex items-center justify-center text-[#e2b95c] active:scale-95 transition-all cursor-pointer group"
              title="Open WhatsApp Support"
            >
              <MessageSquare className="w-5 h-5 stroke-[2px] group-hover:animate-pulse" />
            </a>
          </div>

          {/* Booking enquiry modal pop-up dialogue */}
          <AnimatePresence>
            {consultationModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
                onClick={() => setConsultationModal(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 30 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 30 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="w-full max-w-lg bg-navy-obsidian border border-gold-classic rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  
                  {/* Decorative glowing backplate */}
                  <div className="absolute top-0 right-0 w-44 h-44 radial-gradient bg-gold-classic/10 filter blur-2xl pointer-events-none" />

                  {/* Close [X] */}
                  <button
                    onClick={() => setConsultationModal(null)}
                    className="absolute top-4 right-4 p-1.5 rounded bg-gold-classic/10 text-gold-bright hover:bg-gold-classic hover:text-navy-void transition-colors cursor-pointer text-xs font-mono uppercase font-black"
                  >
                    CLOSE [X]
                  </button>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#d4af37] font-bold uppercase">
                      ✓ ENROLLMENT DECK DIRECT
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-extrabold text-gold-light mb-1">
                    Book: {consultationModal}
                  </h3>
                  <p className="text-xs text-gold-light/65 mb-6">
                    Leave your registered contact credentials to speak directly with an award-winning NCR counselling mentor.
                  </p>

                  <form onSubmit={handleModalSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] font-black">
                        Student Name
                      </label>
                      <input
                        type="text"
                        required
                        value={modalFormData.name}
                        onChange={(e) => setModalFormData({ ...modalFormData, name: e.target.value })}
                        className="w-full bg-navy-void/80 border border-gold-classic/20 focus:border-gold-bright rounded-xl p-3 text-xs text-gold-light focus:outline-none"
                        placeholder="e.g. Priyesh Ranjan"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] font-black">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={modalFormData.phone}
                          onChange={(e) => setModalFormData({ ...modalFormData, phone: e.target.value })}
                          className="w-full bg-navy-void/80 border border-gold-classic/20 focus:border-gold-bright rounded-xl p-3 text-xs text-gold-light focus:outline-none font-mono"
                          placeholder="e.g. +91 76777-XXXXX"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] font-black">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={modalFormData.email}
                          onChange={(e) => setModalFormData({ ...modalFormData, email: e.target.value })}
                          className="w-full bg-navy-void/80 border border-gold-classic/20 focus:border-gold-bright rounded-xl p-3 text-xs text-gold-light focus:outline-none font-mono"
                          placeholder="student@wingsir-abroad.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1 col-span-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] font-black">
                          Preferred Country
                        </label>
                        <select
                          value={modalFormData.destination}
                          onChange={(e) => setModalFormData({ ...modalFormData, destination: e.target.value })}
                          className="w-full bg-navy-void/80 border border-gold-classic/20 focus:border-gold-bright rounded-xl p-3 text-xs text-gold-light focus:outline-none"
                        >
                          {["USA", "Canada", "United Kingdom", "Australia", "Germany", "France", "Europe (Schengen)"].map((opt) => (
                            <option key={opt} value={opt} className="bg-[#030716] text-[#dfdcd3]">{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1 col-span-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] font-black">
                          Current GPA / Exam Scores
                        </label>
                        <input
                          type="text"
                          value={modalFormData.academicScore}
                          onChange={(e) => setModalFormData({ ...modalFormData, academicScore: e.target.value })}
                          className="w-full bg-navy-void/80 border border-gold-classic/20 focus:border-gold-bright rounded-xl p-3 text-xs text-gold-light focus:outline-none"
                          placeholder="e.g. IELTS 7.5, TOEFL 105, GPA 3.8"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        checked={modalFormData.privacyAccepted}
                        onChange={(e) => setModalFormData({ ...modalFormData, privacyAccepted: e.target.checked })}
                        className="w-4 h-4 text-[#d4af37] bg-navy-void border-gold-classic/30 focus:ring-0 rounded cursor-pointer"
                      />
                      <label htmlFor="privacy" className="text-[10px] text-gold-light/60 leading-none cursor-pointer">
                        I accept compliance privacy terms and consent to call/SMS updates from Delhi advisors.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-gold-classic to-gold-bright text-navy-void font-heading font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-md mt-4 cursor-pointer"
                    >
                      Process My Registration
                    </button>
                  </form>

                  <AnimatePresence>
                    {modalSubmitted && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-navy-obsidian/98 flex flex-col items-center justify-center text-center p-6"
                      >
                        <div className="w-16 h-16 rounded-full bg-gold-classic/10 border border-gold-classic flex items-center justify-center text-gold-bright text-4xl mb-4 animate-bounce">
                          ✓
                        </div>
                        <h4 className="text-lg font-heading font-black text-gold-light">
                          Registered Successfully!
                        </h4>
                        <p className="text-xs text-gold-light/75 max-w-xs mt-1 leading-normal">
                          An awards certified study abroad counsellor from Wingsir and a Canadian Legal Advisor are co-reviewing your study pathways files. Speak to you shortly!
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      )}
    </div>
  );
}
