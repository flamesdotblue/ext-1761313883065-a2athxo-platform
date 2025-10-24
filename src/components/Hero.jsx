import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Brain, LineChart, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/40 to-neutral-950" />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur text-xs sm:text-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-white/80">Web Development + AI Automation Solutions</span>
          </div>

          <h1 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Build modern web experiences and automate operations with AI
          </h1>

          <p className="mt-4 max-w-2xl text-white/80 text-base sm:text-lg">
            We craft fast, scalable web apps and deploy AI agents that automate workflows, integrate data, and unlock measurable growth.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/80">
            <div className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-rose-400" />
              Next.js, Vercel, edge-first architectures
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-rose-400" />
              AI agents, RAG, workflow orchestration
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-rose-400" />
              Analytics-driven, conversion-focused UX
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-rose-500 hover:bg-rose-600 text-white px-5 py-3 transition-colors">
              <Rocket className="h-4 w-4" />
              Start a project
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition-colors">
              <Brain className="h-4 w-4" />
              Explore solutions
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <LineChart className="h-4 w-4 text-rose-300" />
              <span>Outcome-first strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-rose-300" />
              <span>Performance engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-rose-300" />
              <span>AI automation at scale</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
