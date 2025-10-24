import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, LineChart, Wand2, Settings, Bot } from 'lucide-react';

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.6, ease: 'easeOut' } }),
};

export default function BentoServices() {
  const items = [
    {
      title: 'High-performance Web Apps',
      desc: 'Modern stacks (Next.js, Vite, Tailwind) engineered for speed, accessibility, and SEO.',
      icon: Rocket,
      accent: 'from-rose-500/20 to-transparent',
      span: 'md:col-span-2',
    },
    {
      title: 'AI Automation & Agents',
      desc: 'RAG pipelines, multi-agent workflows, and tool integrations that cut manual ops.',
      icon: Bot,
      accent: 'from-fuchsia-500/20 to-transparent',
    },
    {
      title: 'Data & Analytics',
      desc: 'Instrumentation, dashboards, and experimentation frameworks aligned to KPIs.',
      icon: LineChart,
      accent: 'from-violet-500/20 to-transparent',
    },
    {
      title: 'Design Systems',
      desc: 'Scalable component libraries and tokens for consistent, accessible UI at velocity.',
      icon: Settings,
      accent: 'from-sky-500/20 to-transparent',
    },
    {
      title: 'Motion & Micro-interactions',
      desc: 'Delightful transitions and scroll effects that drive engagement and clarity.',
      icon: Wand2,
      accent: 'from-emerald-500/20 to-transparent',
    },
    {
      title: 'AI Strategy & Enablement',
      desc: 'Roadmaps, ROI modeling, and proofs of value to operationalize AI responsibly.',
      icon: Brain,
      accent: 'from-amber-500/20 to-transparent',
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-rose-500/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight">Bento grid of services</h2>
          <p className="mt-2 text-white/70">
            Practical solutions designed around outcomes: faster websites, automated workflows, better insights.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={card}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${item.span || ''}`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent}`} />
              <div className="relative p-6 sm:p-7">
                <item.icon className="h-6 w-6 text-white" />
                <h3 className="font-display mt-4 text-xl">{item.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{item.desc}</p>
                <div className="mt-5 inline-flex text-rose-300 text-sm">Learn more →</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
