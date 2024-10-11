import React, { useEffect } from 'react';
import gsap from 'gsap';
import VanillaTilt from 'vanilla-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

// Define team members
const teamMembers = [
  {
    name: 'Caesarian L.P.Z',
    role: '3D Designer',
    image: '/assets/images/ryann.jpg',
    instagram: 'https://www.instagram.com/ryann_brurur/',
    github: 'https://github.com/caesarian'
  },
  {
    name: 'Alifian Abdiel',
    role: 'Lead Developer',
    image: '/assets/images/jung.JPG',
    instagram: 'https://www.instagram.com/Feblcsack/',
    github: 'https://github.com/alifian'
  },
  {
    name: 'A. Haidar Rahman',
    role: 'UX/UI Designer',
    image: '/assets/images/epo.JPG',
    instagram: 'https://instagram.com/haidar',
    github: 'https://www.instagram.com/myhaidar.rh/'
  },
];

const About = () => {
  useEffect(() => {
    // GSAP animation for the team section
    gsap.fromTo(
      '.team-member',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
      }
    );

    // VanillaTilt for tilt effect
    VanillaTilt.init(document.querySelectorAll('.team-member'), {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
    });
  }, []);

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4 typing-animation">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-400 text-center mb-8">
          We are a team of passionate students dedicated to delivering exceptional results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member bg-black dark:bg-black p-6 rounded-lg shadow-lg border border-gray-700 relative"
            >
              <div className="relative mb-4 overflow-hidden rounded-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-gray-400 dark:text-gray-300 mb-4">{member.role}</p>
              <div className="absolute bottom-4 right-4 flex space-x-3">
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
