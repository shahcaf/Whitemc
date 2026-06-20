import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How do I join WhiteMC?",
      a: "You can connect using the IP address play.whitemc.qzz.io on Minecraft: Java Edition. We support connections from version 1.20 all the way to the latest release! Simply add the IP in your Multiplayer menu and click Join."
    },
    {
      q: "What are the server requirements?",
      a: "Only a standard Minecraft: Java Edition client is required. There are no mandatory mods to download or install, as everything runs server-side. However, we highly recommend installing performance mods like Sodium or OptiFine for the smoothest gameplay."
    },
    {
      q: "What benefits do I get by joining the Discord?",
      a: "Our Discord is the beating heart of WhiteMC. By joining, you receive instant server status notifications, early announcements for resets and events, access to members-only giveaways, and direct chat channels synced with in-game servers."
    },
    {
      q: "What are the rules and moderation policies?",
      a: "We are committed to maintaining a clean, competitive, and respectful gaming environment. Cheating, using unauthorized modifications, toxicity, and griefing are strictly prohibited. We use an advanced anti-cheat system coupled with 24/7 staff oversight."
    },
    {
      q: "How can I get community support?",
      a: "If you need assistance, simply head to our Discord server and open a support ticket. Our active staff team typically reviews and resolves tickets within minutes. We can help with password resets, rank transfers, and reporting players."
    }
  ];

  const toggleFAQ = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 md:py-36 bg-brand-dark overflow-hidden">
      {/* Accent lighting */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs md:text-sm font-bold tracking-widest text-brand-accent uppercase mb-4 block font-display">
            FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-brand-silver">
            Have questions about connecting, playing, or getting support? Find quick answers to the most common inquiries below.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-white/[0.04] border-brand-accent/40 shadow-glow-blue' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-display font-extrabold text-base md:text-lg text-white group-hover:text-brand-accentGlow transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-brand-accent transition-transform duration-300 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 text-sm md:text-base text-brand-silver leading-relaxed font-sans">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
