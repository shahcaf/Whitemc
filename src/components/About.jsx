import React from 'react';
import { motion } from 'framer-motion';
import { Users, Server, Zap } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: <Users className="w-6 h-6 text-brand-accentGlow" />,
      title: "Player-First Community",
      desc: "WhiteMC was born from a desire to create a gaming space where players feel truly valued. We focus heavily on interactive feedback, fair moderation, and a toxic-free environment."
    },
    {
      icon: <Server className="w-6 h-6 text-brand-accentGlow" />,
      title: "Enterprise Infrastructure",
      desc: "Lag is the enemy of adventure. That's why we run on dedicated enterprise hardware with high-performance AMD Ryzen processors, custom networking, and multi-layered DDoS mitigation."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-accentGlow" />,
      title: "Limitless Innovation",
      desc: "We don't settle for standard plugins. Our development team writes bespoke code to introduce custom systems, mechanics, and features that you won't find anywhere else."
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-36 bg-brand-dark overflow-hidden border-y border-white/5">
      {/* Decorative Radial Glow */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          
          {/* Brand Narrative */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <span className="text-xs md:text-sm font-bold tracking-widest text-brand-accent uppercase mb-4 font-display">
              Our Vision
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-6 leading-tight">
              A Next-Generation Network Built by Players, for Players.
            </h2>
            <div className="space-y-4 text-brand-silver text-base md:text-lg leading-relaxed">
              <p>
                WhiteMC started as a small group of passionate Minecraft enthusiasts who felt that modern networks had lost their soul. We believed that a server should be more than just a lobby—it should be a thriving home.
              </p>
              <p>
                Today, WhiteMC is a premier gaming destination, connecting thousands of players globally. We push the boundaries of vanilla Minecraft by engineering fully customized gameplay experiences, hosting massive server-wide tournaments, and fostering deep community relationships.
              </p>
            </div>
          </div>

          {/* Core Values Cards Grid */}
          <div className="md:col-span-6 space-y-6">
            {coreValues.map((val, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                key={val.title}
                className="group relative p-6 bg-white/5 border border-white/10 hover:border-brand-accent/30 rounded-2xl backdrop-blur-md hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent/20 group-hover:border-brand-accent/40 transition-colors duration-300">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-white text-lg md:text-xl mb-2 group-hover:text-brand-accentGlow transition-colors duration-300">
                      {val.title}
                    </h3>
                    <p className="text-sm md:text-base text-brand-silver leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
                {/* Glow border effect */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none group-hover:border-brand-accent/35 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
