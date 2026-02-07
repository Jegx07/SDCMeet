import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, Car, Bus } from 'lucide-react';

export const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden">
      {/* Connecting glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Event Venue
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-sdc-dark mb-6">
            Find <span className="text-primary">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map with Dark Theme */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-2xl blur-sm" />
            <div className="relative bg-white rounded-2xl overflow-hidden border border-border shadow-xl">
              <div className="aspect-[4/3]">
                {/* Dark themed Google Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.0651889557525!2d77.89805427508364!3d10.416397389711337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9ffb95456ce7f%3A0x14d566dfc1364080!2sPSNA%20College%20Of%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1766972119290!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* Venue Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address Card with Bold Orange Left Border */}
            <div className="address-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-sdc-dark mb-2">
                    SRL Auditorium
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Kothandaraman Nagar
                    <br />
                    Dindigul, Tamil Nadu 624622, India
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Getting There with Custom Icons */}
            <div className="bg-white rounded-2xl p-6 border-2 border-border hover:border-primary/20 transition-all hover:shadow-xl hover:shadow-primary/5">
              <h3 className="font-display font-bold text-xl text-sdc-dark mb-4">
                Getting There
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-primary/80 transition-all">
                    <Car className="w-6 h-6 text-primary group-hover:text-white transition-colors" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-sdc-dark">By Car</p>
                    <p className="text-sm text-muted-foreground">
                      Free parking available
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-primary/80 transition-all">
                    <Bus className="w-6 h-6 text-primary group-hover:text-white transition-colors" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-sdc-dark">By Public Transit</p>
                    <p className="text-sm text-muted-foreground">
                      Reach bus stand before the college, no walking needed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
              <h3 className="font-display font-bold text-xl text-sdc-dark mb-3">
                Need Help?
              </h3>
              <p className="text-muted-foreground mb-3">
                For venue inquiries and accessibility needs, contact us at:
              </p>
              <a
                href="mailto:sdcmeet@uipath.com"
                className="text-primary hover:underline font-bold text-lg"
              >
                shasthishree23cb@psnacet.edu.in
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Circuit line connector */}
      <div className="absolute bottom-12 left-0 right-0">
        <div className="container mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};
