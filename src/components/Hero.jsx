import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
// Logo will be loaded from public folder

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.3 + 0.1; // slowly drifts down
        this.color = Math.random() > 0.5 
          ? 'rgba(56, 189, 248, ' + (Math.random() * 0.3 + 0.1) + ')' // icy blue
          : 'rgba(255, 255, 255, ' + (Math.random() * 0.2 + 0.05) + ')'; // white/silver
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y > height) {
          this.reset();
          this.y = 0;
        }
        if (this.x < 0 || this.x > width) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 80 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-24 pb-16">
      {/* Background Graphic with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="WhiteMC Landscape" 
          className="w-full h-full object-cover scale-105 filter brightness-[0.35] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-glow opacity-30"></div>
      </div>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Animated Brand Shield */}
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative flex items-center justify-center"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 p-[2px] rounded-2xl bg-gradient-to-b from-white via-white/40 to-brand-accent/20 shadow-glow-blue-lg">
            <div className="w-full h-full bg-brand-dark/90 backdrop-blur-md rounded-2xl flex items-center justify-center p-3 relative overflow-hidden group">
              <img
                  src="/whitemc-logo.png"
                  alt="WhiteMC Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] transform group-hover:scale-105 transition-transform duration-500"
                />
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transition-transform duration-1000 group-hover:translate-x-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Small Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-accent/15 border border-brand-accent/30 px-4 py-1.5 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4 text-brand-accentGlow animate-pulse" />
          <span className="text-xs md:text-sm font-bold text-brand-accentGlow tracking-widest uppercase font-display">
            Premium Gaming Network
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display font-extrabold text-5xl md:text-8xl tracking-tight text-white mb-6 leading-none"
        >
          Where <span className="text-glow bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-accentGlow">Legends</span> Begin.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-xl text-brand-silver max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          Join WhiteMC and experience a next-generation Minecraft community built for adventure, competition, and unforgettable memories.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="https://discord.gg/HVhjzPhJ4U"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accentGlow text-white font-extrabold text-base py-4 px-8 rounded-xl shadow-glow-blue hover:shadow-glow-blue-lg hover:-translate-y-0.5 transition-all duration-300 font-display"
          >
            <span>Join Discord</span>
            <Shield className="w-5 h-5" />
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-extrabold text-base py-4 px-8 rounded-xl backdrop-blur-md transition-all duration-300 font-display"
          >
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  );
}
