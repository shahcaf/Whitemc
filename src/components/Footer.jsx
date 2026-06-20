import React from 'react';

// Custom inline SVG icons for social/gaming platforms (since Lucide v0.400+ removed brand icons)
const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const DiscordIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
  </svg>
);

export default function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Game Modes", href: "#gamemodes" },
    { name: "Features", href: "#features" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <footer className="relative bg-brand-dark/95 border-t border-white/5 py-16 overflow-hidden">
      {/* Subtle lines background decoration */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-6 group">
              <img src="/whitemc-logo.png" alt="WhiteMC Logo" className="w-8 h-8 object-contain" />
            </a>
            <p className="text-sm text-brand-silver max-w-sm leading-relaxed mb-6 font-sans">
              Experience Minecraft the way it was meant to be played. WhiteMC is a premium, high-performance gaming network featuring custom game modes and an active, friendly community.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://discord.gg/HVhjzPhJ4U" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-accent/20 border border-white/10 hover:border-brand-accent/40 text-brand-silver hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <DiscordIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-brand-silver hover:text-brand-accentGlow transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Info */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-6 tracking-wide">
              Community Links
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://discord.gg/HVhjzPhJ4U" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-silver hover:text-brand-accentGlow transition-colors duration-300"
                >
                  Discord Community
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-silver">
            © 2026 WhiteMC Network. All rights reserved.
          </p>
          
          <p className="text-xs text-brand-silver/50 max-w-md text-center md:text-right leading-relaxed">
            We are NOT affiliated with Mojang Studios or Microsoft. Minecraft is copyright Mojang Studios and all assets are property of their respective owners.
          </p>
        </div>

      </div>
    </footer>
  );
}
