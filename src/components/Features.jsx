import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Swords, Trophy, Sparkles, MessageSquare, ShieldCheck, RefreshCw, Lock } from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Survival Gameplay",
      desc: "Immerse yourself in a player-driven economy with lands protection, custom quests, daily jobs, and a bustling player marketplace."
    },
    {
      icon: <Swords className="w-6 h-6" />,
      title: "Competitive PvP",
      desc: "Engage in zero-lag battles with optimized knockback, custom-coded kit arenas, practice queues, and daily server tournaments."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Community Events",
      desc: "Participate in weekly hosted activities, including parkour races, massive build battle contests, and custom raid-boss events."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Custom Features",
      desc: "Level up your unique skill tree, unlock dozens of epic cosmetic trails, gather legendary custom items, and browse the live interactive web map."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Active Discord Community",
      desc: "Connect your Discord to chat with in-game players, check server stats, take part in server giveaways, and chat in active voice rooms."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Dedicated Staff Team",
      desc: "Our mature, active support team operates 24/7. We strictly maintain clean play, fast support tickets, and fair rule enforcement."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Regular Updates",
      desc: "We continuously add fresh content and mechanics, running new theme seasons and resets entirely guided by community suggestions."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure & Optimized",
      desc: "Enjoy seamless gameplay backed by enterprise DDoS protection, low latency nodes, and automated off-site backups."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="features" className="relative py-24 md:py-36 bg-brand-dark overflow-hidden">
      {/* Decorative Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs md:text-sm font-bold tracking-widest text-brand-accent uppercase mb-4 block font-display">
            Features & Highlights
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-6">
            The WhiteMC Experience
          </h2>
          <p className="text-base md:text-lg text-brand-silver">
            Explore a selection of server highlights meticulously engineered to deliver the ultimate Minecraft adventure and competitive environment.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featureList.map((feat) => (
            <motion.div
              variants={cardVariants}
              key={feat.title}
              className="group relative p-6 bg-white/5 border border-white/10 hover:border-brand-accent/30 rounded-2xl backdrop-blur-md hover:shadow-glow-blue hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with glowing ring */}
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/25 text-brand-accentGlow flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-glow-blue">
                  {feat.icon}
                </div>
                
                <h3 className="font-display font-extrabold text-white text-lg md:text-xl mb-3 group-hover:text-brand-accentGlow transition-colors duration-300">
                  {feat.title}
                </h3>
                
                <p className="text-sm text-brand-silver leading-relaxed font-sans mb-4">
                  {feat.desc}
                </p>
              </div>

              {/* Decorative Subtle Glowing corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-brand-accent/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
