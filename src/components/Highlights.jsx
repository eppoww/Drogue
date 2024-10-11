import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from './VideoCarousel';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useEffect(() => {
    gsap.fromTo('#title', { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 1,
      scrollTrigger: {
        trigger: '#title',
        start: 'top 80%',
      },
    });

    gsap.fromTo('.link', { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 1, stagger: 0.25,
      scrollTrigger: {
        trigger: '.link',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc-900">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading text-white">Learn the Facts.</h1>

          <div className="flex flex-wrap items-end gap-5">
            {/* <p className="link text-blue-400 hover:text-blue-500 flex items-center">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2 w-4 h-4" />
            </p>
            <p className="link text-blue-400 hover:text-blue-500 flex items-center">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2 w-4 h-4" />
            </p> */}
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
