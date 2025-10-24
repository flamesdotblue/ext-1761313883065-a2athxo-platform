import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-10%] top-[-10%] w-[36rem] h-[36rem] bg-rose-500/20 blur-3xl rounded-full" />
      </div>
      <div className="container mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06]"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60rem_60rem_at_120%_-10%,rgba(244,63,94,0.20),transparent)]" />
          <div className="relative p-8 sm:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs sm:text-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-rose-300" />
              <span>Free strategy session</span>
            </div>
            <h3 className="font-display mt-4 text-2xl sm:text-3xl">
              Ready to ship faster and automate smarter?
            </h3>
            <p className="mt-2 text-white/80 max-w-2xl">
              Tell us your goals. We’ll map the quickest path to a measurable win — then scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-lg bg-rose-500 hover:bg-rose-600 text-white px-5 py-3 transition-colors">
                <Rocket className="h-4 w-4" />
                Book your session
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition-colors">
                Explore services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
