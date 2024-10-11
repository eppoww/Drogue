import React, { useState } from 'react';

const tips = [
  {
    title: 'Choose a Positive Environment',
    content: 'Surround yourself with people who support a healthy and drug-free lifestyle. A positive environment will help you stay committed to avoiding drugs.',
  },
  {
    title: 'Develop Positive Hobbies and Interests',
    content: 'Engage in productive hobbies and interests such as sports, arts, or social activities. Staying busy with these activities can effectively keep you away from drug temptations.',
  },
  {
    title: 'Learn to Say "No"',
    content: 'Learning to firmly but politely decline when offered drugs is crucial. Practice different ways to say "no" in social situations that could be risky.',
  },
  {
    title: 'Seek Information and Education',
    content: 'Understanding the harmful effects of drugs on your physical, mental, and social well-being can reinforce your commitment to staying drug-free.',
  },
  {
    title: 'Build a Support System',
    content: 'Having supportive people around, such as family and caring friends, makes it easier to maintain a healthy, drug-free lifestyle.',
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-transparent via-gray-900 to-transparent p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">How to Avoid Drugs</h2>
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className="border border-gray-700 rounded-lg backdrop-blur-md bg-gray-800/30">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-700 focus:outline-none"
            >
              <span>{tip.title}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray">
                <p>{tip.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
