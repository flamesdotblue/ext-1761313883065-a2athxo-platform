import React from 'react';
import './styles/fonts.css';
import Hero from './components/Hero';
import BentoServices from './components/BentoServices';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased">
      <Hero />
      <BentoServices />
      <CaseStudies />
      <CTA />
    </div>
  );
}
