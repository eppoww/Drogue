import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { frameImg, frameVideo, chipImg } from '../utils';
import { animateWithGsap } from '../utils/animations';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const videoRef = useRef();

  useEffect(() => {
    // Ensure GSAP animations are applied after component mounts
    gsap.from('#info', {
      scrollTrigger: {
        trigger: '#info',
        start: '20% bottom',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      scale: 2,
      duration: 3,
      ease: 'power2.inOut'
    });

    // Apply animations to elements with class 'g_fadeIn'
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/* Chip image without GSAP animation */}
        <div className="flex-center w-full my-20">
          <img src={chipImg} alt="information" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            The Impact of Drug Abuse.
            <br /> A Call for Awareness and Action.
          </h2>

          <p className="hiw-subtitle">
            Understanding the far-reaching consequences of substance abuse.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-15"
              />
            </div>
            <div className="hiw-video">
              <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">We are Drogue.</p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              Drug abuse can have devastating effects on {' '}
              <span className="text-white">both the body and mind</span>.
            </p>

            <p className="hiw-text g_fadeIn">
              It can lead to severe health issues, {' '}
              <span className="text-white">including addiction, mental illness, and even death</span>.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">Stopping is hard,</p>
            <p className="hiw-bigtext">But it's possible</p>
            <p className="hiw-text">- Seek help today</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;