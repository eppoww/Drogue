import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { cryImg, effectImg, explore1Img, explore2Img, exploreVideo, videos } from '../utils';
import gsap from 'gsap';


const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })

    animateWithGsap('#features_title', { y:0, opacity:1})
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )
  }, []);

  return (
    <section className="relative h-full bg-zinc common-padding overflow-hidden">
      {/* Gradient overlay for the top and bottom */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black via-transparent to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      
      <div className="screen-max-wdith relative z-10">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Understand the dangers of drugs.</h1>
        </div>
        
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">Drugs.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">A hidden danger around us.</h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
                <source src={videos} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={cryImg} alt="education" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={effectImg} alt="education 2" className="feature-video g_grow" />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Drug abuse can cause {' '}
                    <span className="text-white">
                      damage to the central nervous system
                    </span>,
                    along with various other health issues.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    It's important to {' '}
                    <span className="text-white">
                      recognize the signs of drug abuse
                    </span>
                    and seek help as soon as possible.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Education about drugs can {' '}
                    <span className="text-white">
                      save lives and prevent addiction
                    </span>.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Stay informed and {' '}
                    <span className="text-white">
                      make healthy choices
                    </span>.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
