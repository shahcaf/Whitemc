import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Coins, Flame, Heart } from 'lucide-react';

export default function GameModes() {
  const [activeMode, setActiveMode] = useState(0);

  const modes = [
    {
      title: "Custom Survival",
      icon: <Shield className="w-5 h-5" />,
      tagline: "Enhanced Vanilla Experience",
      description: "Experience classic survival with custom economy, claims protection, daily jobs, player-owned warps, and a dynamic quest system. Explore a custom 3D generated map populated with unique custom biomes.",
      features: [
        "Land claims protection",
        "Player-driven market economy",
        "Hundreds of custom quests",
        "Bespoke dungeons & bosses"
      ],
      colorClass: "from-blue-500/20 to-blue-600/5",
      borderClass: "hover:border-blue-500/40 border-white/10",
      iconColor: "text-blue-400"
    },
    {
      title: "Practice PvP",
      icon: <Flame className="w-5 h-5" />,
      tagline: "Unleash Your Skills",
      description: "Refine your combat skills in our zero-lag training arenas. Queue ranked or unranked duels in various game modes, challenge other players to custom matches, and climb the seasonal matchmaking ladder.",
      features: [
        "Optimized knockback profiles",
        "1v1, 2v2 & FFA arenas",
        "Detailed match statistics",
        "Custom kit editor"
      ],
      colorClass: "from-emerald-500/20 to-emerald-600/5",
      borderClass: "hover:border-emerald-500/40 border-white/10",
      iconColor: "text-emerald-400"
    }
  ];

  const currentMode = modes[activeMode] || modes[0];

  return (
    <section id="gamemodes" className="relative py-24 md:py-36 bg-brand-dark overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold tracking-widest text-brand-accent uppercase mb-4 block font-display">
            Select Your Adventure
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-6">
            Featured Game Modes
          </h2>
          <p className="text-base md:text-lg text-brand-silver">
            Whether you are a builder, competitor, or explorer, WhiteMC has a customized world tailored specifically for you.
          </p>
        </div>

        {/* Tab Buttons / Switcher */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {modes.map((mode, idx) => (
            <button
              key={mode.title}
              onClick={() => setActiveMode(idx)}
              className={`flex items-center justify-center gap-3 p-4 rounded-xl border transition-all duration-300 font-display font-bold text-sm md:text-base ${
                activeMode === idx
                  ? 'bg-brand-accent/25 border-brand-accent text-white shadow-glow-blue'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-brand-silver hover:text-white'
              }`}
            >
              <span className={mode.iconColor}>{mode.icon}</span>
              <span>{mode.title}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Display Panel */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`p-8 md:p-12 rounded-3xl bg-gradient-to-br ${currentMode.colorClass} border border-white/10 backdrop-blur-xl relative overflow-hidden grid md:grid-cols-2 gap-8 items-center`}
            >
              {/* Left Column: Details */}
              <div>
                <span className="text-xs md:text-sm font-bold tracking-wider text-brand-accent uppercase mb-2 block font-display">
                  {currentMode.tagline}
                </span>
                <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-6">
                  {currentMode.title}
                </h3>
                <p className="text-brand-silver leading-relaxed font-sans mb-8">
                  {currentMode.description}
                </p>

                {/* Bullet List */}
                <ul className="grid grid-cols-2 gap-4">
                  {currentMode.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-white font-semibold">
                      <span className={`w-1.5 h-1.5 rounded-full bg-brand-accent`}></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Visual Feature Representation */}
              <div className="flex justify-center items-center h-full min-h-[220px] md:min-h-0">
                <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full flex items-center justify-center bg-white/5 border border-white/10 shadow-glass">
                  <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-brand-dark to-brand-accent/20 flex items-center justify-center">
                    <div className="text-brand-accentGlow p-4">
                      {React.cloneElement(currentMode.icon, { className: "w-16 h-16 md:w-20 md:h-20 animate-pulse" })}
                    </div>
                  </div>
                  {/* Decorative rotating orbit */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-brand-accent/30 animate-[spin_20s_linear_infinite]"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
