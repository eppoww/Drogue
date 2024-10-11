import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import AssetSwitcher from './components/AssetSwitcher';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import CanvasAnimation from './components/CanvasAnimation';
import CaseDetails from './components/CaseDetails'; // Import the new component
import About from './components/About'; // Import the new About component
import Accordion from './components/Accordion'; // Import the Accordion component

import * as Sentry from '@sentry/react';
import Model from './components/Model';
import { BentoGridDemo } from './components/BentoGrid';
import DrugUsageChart from './components/DrugsUsageChart';

const App = () => {
  
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <section id='hero'>
      <Hero />
      </section>
      <CaseDetails />
      <DrugUsageChart/>
      <Accordion />
      <section id='case'>
      <BentoGridDemo/>
      </section>
     
      <Highlights />
      {/* <Model/> */}
      <Features />
      <section id='3d'>
      <CanvasAnimation />
      </section>
      
      <HowItWorks />
      <section id='about'>
      <About />
      </section>
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
