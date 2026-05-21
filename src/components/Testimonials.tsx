import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS_DATA, FAQS_DATA } from "../data";
import { ChevronDown, ChevronUp, Star, Quote, Play, Sparkles, CheckCircle } from "lucide-react";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeFaq, setActiveFaq] = useState<string | null>("faq-1");
  const [videoModal, setVideoModal] = useState<string | null>(null);

  const mockVideos = [
    {
      id: "vid-1",
      title: "Tanmay's Canada Permit Approved!",
      duration: "2:45 min",
      campus: "Seneca College, Toronto",
      thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=405&h=240",
      quote: "My study visa was deferred twice by local consultants. Wingsir's legal mentors reviewed my file, restructured the SOP, and got my stamp in 17 days!",
    },
    {
      id: "vid-2",
      title: "Rishabh's USA Ivy League Success Journey",
      duration: "4:12 min",
      campus: "Cornell University, USA",
      thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=405&h=240",
      quote: "The admissions coaches at Wingsir are amazing! They coordinated directly with ApplyBoard representatives to fast-track my I-20 application. Premium service!",
    },
  ];

  const handleNextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const toggleFaq = (id: string) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#030716] text-[#dfdcd3] border-b border-gold-classic/10">
      
      {/* Glow Effects background */}
      <div className="absolute top-1/3 left-0 w-80 h-80 gold-spotlight rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 navy-spotlight rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
        
        {/* Left Side: Testimonials Slider & Video Cards */}
        <div className="lg:col-span-6 space-y-12">
          
          {/* Section Header for Testimonials */}
          <div className="text-left space-y-2">
            <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Success Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-gold-light mt-1">
              Endorsed by Over <span className="text-gold-classic">1,000+ Aspirants</span>
            </h2>
            <div className="h-[2px] w-14 bg-gold-classic mt-2" />
          </div>

          {/* Core Testimonials Slider Box */}
          <div className="glass-laminated p-6 sm:p-8 rounded-3xl relative overflow-hidden min-h-[290px] flex flex-col justify-between">
            <span className="absolute top-4 right-6 text-gold-classic/15">
              <Quote className="w-24 h-24 stroke-[1px]" />
            </span>

            {/* active testimonial details */}
            <div className="space-y-4 relative z-10">
              <div className="flex gap-1">
                {Array.from({ length: TESTIMONIALS_DATA[activeIdx].rating }).map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-gold-bright text-gold-bright" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gold-light/90 leading-relaxed italic">
                "{TESTIMONIALS_DATA[activeIdx].quote}"
              </p>
            </div>

            <div className="pt-6 border-t border-gold-classic/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-classic/10 border border-gold-classic/30 flex items-center justify-center font-heading font-bold text-gold-bright">
                  {TESTIMONIALS_DATA[activeIdx].studentName[0]}
                </div>
                <div>
                  <h4 className="text-xs font-heading font-bold text-gold-light">
                    {TESTIMONIALS_DATA[activeIdx].studentName}
                  </h4>
                  <p className="text-[10px] text-gold-bright/70 font-mono">
                    {TESTIMONIALS_DATA[activeIdx].university} ({TESTIMONIALS_DATA[activeIdx].country})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevTestimonial}
                  className="w-10 h-10 rounded-xl bg-navy-void border border-gold-classic/20 text-gold-light hover:text-gold-bright hover:border-gold-bright flex items-center justify-center transition-all cursor-pointer"
                >
                  ◀
                </button>
                <div className="text-[11px] font-mono text-gold-classic/60">
                  {activeIdx + 1} / {TESTIMONIALS_DATA.length}
                </div>
                <button
                  onClick={handleNextTestimonial}
                  className="w-10 h-10 rounded-xl bg-navy-void border border-gold-classic/20 text-gold-light hover:text-gold-bright hover:border-gold-bright flex items-center justify-center transition-all cursor-pointer"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Video Testimonials Section */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase text-[#a1a1aa] tracking-widest pl-1 font-bold">
              Recent Video Testimonials
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockVideos.map((video) => (
                <div
                  key={video.id}
                  className="glass-laminated p-3.5 rounded-2xl flex flex-col gap-3 group cursor-pointer hover:border-gold-bright transition-all"
                  onClick={() => setVideoModal(video.id)}
                >
                  {/* Thumbnail skeleton */}
                  <div className="relative h-32 rounded-xl overflow-hidden bg-navy-obsidian flex items-center justify-center">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Play button overlay */}
                    <div className="relative w-10 h-10 rounded-full bg-gold-classic text-navy-void flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-navy-void ml-0.5" />
                    </div>

                    <span className="absolute bottom-2 right-2 text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/70 text-gold-bright">
                      {video.duration}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-heading font-black text-gold-light group-hover:text-gold-bright leading-snug transition-colors">
                      {video.title}
                    </h4>
                    <span className="text-[9px] font-mono text-gold-classic/60 leading-none block mt-0.5">
                      {video.campus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: FAQ Accordion block */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="text-left space-y-2">
            <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase font-bold">
              Aspirative Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-gold-light mt-1">
              Have Queries? <span className="text-gold-classic">Get Quick Solutions</span>
            </h2>
            <div className="h-[2px] w-14 bg-gold-classic mt-2" />
          </div>

          <div className="flex flex-col gap-3.5 w-full">
            {FAQS_DATA.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-laminated rounded-2xl overflow-hidden border border-gold-classic/20 transition-all duration-300"
                >
                  {/* Toggle Header button */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-4 bg-navy-abyss/20 hover:bg-navy-abyss/60 text-left cursor-pointer transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-heading font-bold text-gold-light hover:text-gold-bright transition-colors">
                      {faq.question}
                    </span>
                    <div className="text-gold-bright p-1 bg-navy-void rounded">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Accordion description block */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="p-4 border-t border-gold-classic/10 text-xs sm:text-[13px] text-gold-light/75 leading-relaxed bg-navy-void/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Call-to-Consultation prompt */}
          <div className="p-5 rounded-2xl glass-laminated border border-gold-classic/30 bg-gold-classic/5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="text-center sm:text-left">
              <span className="text-xs font-heading font-bold text-gold-bright block">Still have unresolved doubts?</span>
              <span className="text-[11px] text-[#b4b1a7]">Reach out to our professional Delhi consulting deck directly.</span>
            </div>
            <a
              href="https://wa.me/917677787916"
              target="_blank"
              rel="noopener referrer"
              referrerPolicy="no-referrer"
              className="px-4 py-2 border border-gold-classic rounded-lg text-xs font-mono font-medium text-gold-bright hover:bg-gold-classic hover:text-navy-void transition-all cursor-pointer"
            >
              Ask on WhatsApp
            </a>
          </div>

        </div>

      </div>

      {/* Video success modals */}
      <AnimatePresence>
        {videoModal && (() => {
          const video = mockVideos.find((v) => v.id === videoModal);
          if (!video) return null;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setVideoModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 15 }}
                className="w-full max-w-lg bg-navy-obsidian border border-gold-classic rounded-3xl p-6 relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => setVideoModal(null)}
                    className="p-1 rounded bg-gold-classic/10 text-gold-bright hover:bg-gold-classic hover:text-navy-void transition-all text-xs font-heading"
                  >
                    CLOSE [X]
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono tracking-widest text-[#d4af37] font-bold">
                    VIDEO TESTIMONIAL SUMMARY
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-gold-light mb-1">
                  {video.title}
                </h3>
                <span className="text-[11px] font-mono text-gold-classic/70 block mb-4 border-b border-gold-classic/15 pb-2">
                  ✓ Verified Enrollment: {video.campus}
                </span>

                <div className="p-4 rounded-xl bg-navy-void/80 border border-gold-classic/10 flex gap-3 mb-6">
                  <span className="text-3xl text-gold-classic select-none">“</span>
                  <p className="text-xs text-gold-light/90 leading-relaxed italic">
                    {video.quote}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-heading font-semibold text-gold-bright">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Wingsir Verified Visa Success</span>
                  </div>
                  <span>{video.duration} runtime</span>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

    </section>
  );
}
