import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ThreeDScene from './ThreeDScene'; 

gsap.registerPlugin(ScrollTrigger);

const CaseDetails = () => {
  useEffect(() => {
    gsap.fromTo(
      '.animate-from-left',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.animate-from-left',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      '.animate-from-right',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.animate-from-right',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center">
      <div className="absolute inset-0">
        <canvas className="w-full h-full" />
      </div>
      <div className="relative z-10 text-white p-8 lg:p-16 flex flex-col lg:flex-row w-full">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 animate-from-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">How is the Drug Case in Indonesia?</h2>
          <p className="text-lg lg:text-xl opacity-80 leading-relaxed">
            The drug case in Indonesia reflects the multifactorial impact of social and economic dynamics. Recent data from BNN indicates that the prevalence of drug use among teenagers has reached around 8% in 2022, signaling a concerning trend that requires more in-depth intervention.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center animate-from-right">
          {/* 3D Scene */}
          <div className="w-full h-full max-w-4xl max-h-4xl">
            <ThreeDScene />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseDetails;
