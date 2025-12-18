import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

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
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Github, href: '#' },
              { icon: Instagram, href: '#' },
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

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© 2025 SDC Meet. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
