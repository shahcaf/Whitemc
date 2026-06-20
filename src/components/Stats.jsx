import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ target, duration = 2000, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out quadratic function
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(easeProgress * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  // Format count nicely (e.g., add commas for numbers over 1000)
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <span ref={elementRef} className="font-display font-black text-4xl md:text-6xl text-white tracking-tight">
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}

export default function Stats() {
  const statList = [
    {
      title: "Community Members",
      target: 25000,
      suffix: "+",
      desc: "Players in our Discord and community platforms"
    },
    {
      title: "Active Players",
      target: 1450,
      suffix: "+",
      desc: "Average simultaneous users daily"
    },
    {
      title: "Events Hosted",
      target: 350,
      suffix: "+",
      desc: "Tournaments and global battle encounters"
    },
    {
      title: "Server Uptime",
      target: 99.9,
      suffix: "%",
      isFloat: true,
      desc: "Guaranteed connectivity round the clock"
    },
    {
      title: "Total Registrations",
      target: 100000,
      suffix: "+",
      desc: "Unique accounts logged on our network"
    }
  ];

  return (
    <section id="stats" className="relative py-20 md:py-28 bg-brand-dark overflow-hidden border-y border-white/5">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Stats Panel */}
        <div className="p-8 md:p-16 rounded-3xl bg-gradient-to-r from-white/5 via-white/[0.02] to-white/5 border border-white/10 backdrop-blur-xl shadow-glass">
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 text-center items-stretch">
            {statList.map((stat, idx) => (
              <div 
                key={stat.title}
                className={`flex flex-col justify-between items-center ${
                  idx === statList.length - 1 && statList.length % 2 !== 0 
                    ? 'col-span-2 lg:col-span-1' 
                    : ''
                }`}
              >
                <div className="mb-4">
                  {stat.isFloat ? (
                    // Float logic (uptime 99.9%)
                    <span className="font-display font-black text-4xl md:text-6xl text-white tracking-tight">
                      99.9%
                    </span>
                  ) : (
                    <Counter target={stat.target} suffix={stat.suffix} />
                  )}
                </div>
                
                <div className="flex flex-col items-center">
                  <h4 className="font-display font-extrabold text-sm md:text-base text-brand-accentGlow tracking-wider uppercase mb-2">
                    {stat.title}
                  </h4>
                  <p className="text-xs md:text-sm text-brand-silver max-w-[160px]">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
