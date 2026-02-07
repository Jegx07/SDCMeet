import { Github, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-16 bg-sdc-black text-white relative">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-3xl">
              SDC<span className="text-primary">Meet</span>
            </span>
            <p className="text-white/50 text-sm mt-2">
              Hosted by UiPath · Student Developer Champions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Youtube, href: '#' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
              >
                <social.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
