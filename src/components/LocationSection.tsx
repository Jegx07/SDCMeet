import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, Car, Train } from 'lucide-react';

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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977097460944!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1234567890&style=feature:all|element:geometry|color:0x1a1a1a&style=feature:all|element:labels.text.fill|color:0x757575&style=feature:all|element:labels.text.stroke|color:0x212121"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
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
                    Tech Innovation Hub
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    123 Innovation Drive, Suite 500
                    <br />
                    San Francisco, CA 94107
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
                      Free parking available in the underground garage
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-primary/80 transition-all">
                    <Train className="w-6 h-6 text-primary group-hover:text-white transition-colors" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-sdc-dark">By Public Transit</p>
                    <p className="text-sm text-muted-foreground">
                      5 min walk from Downtown BART station
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
                sdcmeet@uipath.com
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
