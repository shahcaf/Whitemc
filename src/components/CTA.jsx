import React from 'react';
import { Shield } from 'lucide-react';


export default function CTA() {
  return (
    <section className="relative py-28 md:py-36 bg-brand-dark overflow-hidden">
      {/* Massive Glowing Center Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Glow CTA Card */}
        <div className="relative p-12 md:p-20 rounded-3xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/10 backdrop-blur-md overflow-hidden">
          
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

          <span className="text-xs md:text-sm font-bold tracking-widest text-brand-accent uppercase mb-4 block font-display">
            Start Your Journey
          </span>
          
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6 leading-tight">
            Ready to become a Legend?
          </h2>
          
          <p className="text-base md:text-xl text-brand-silver max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Join our active community Discord and jump into the ultimate Minecraft experience alongside thousands of players.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://discord.gg/HVhjzPhJ4U"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accentGlow text-white font-extrabold text-lg py-4 px-8 rounded-xl shadow-glow-blue hover:shadow-glow-blue-lg hover:-translate-y-0.5 transition-all duration-300 font-display"
            >
              <span>Join our Discord</span>
              <Shield className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
