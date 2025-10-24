import React from 'react';
import { motion } from 'framer-motion';

const studies = [
  {
    tag: 'E-commerce',
    title: 'Headless storefront migration boosted conversion by 21%',
    metric: '+21% CVR',
    gradient: 'from-rose-500/30 via-rose-400/20 to-transparent',
  },
  {
    tag: 'Ops Automation',
    title: 'AI agent reduced manual triage time by 73%',
    metric: '-73% Handling Time',
    gradient: 'from-emerald-500/30 via-emerald-400/20 to-transparent',
  },
  {
    tag: 'SaaS',
    title: 'Pricing page revamp increased signups by 2.4×',
    metric: '2.4× Signups',
    gradient: 'from-violet-500/30 via-violet-400/20 to-transparent',
  },
];

export default function CaseStudies() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight">Recent outcomes</h2>
          <p className="mt-2 text-white/70">
            A snapshot of measurable impact from recent engagements.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {studies.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.gradient}`} />
              <div className="relative p-6 sm:p-7 h-full flex flex-col">
                <div className="text-xs uppercase tracking-wide text-white/70">{s.tag}</div>
                <h3 className="font-display mt-2 text-xl leading-snug">{s.title}</h3>
                <div className="mt-4 inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 text-sm w-max">
                  <span className="font-medium text-white">{s.metric}</span>
                </div>
                <div className="mt-auto pt-8 text-sm text-rose-300">Read case study →</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
