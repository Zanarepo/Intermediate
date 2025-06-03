import React, { useState } from 'react';
import { FaLightbulb, FaSearch, FaRocket, FaBullhorn } from 'react-icons/fa';

const ProductDevelopmentProcess = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const cards = [
    {
      title: "1. Idea Generation & Market Research",
      Icon: FaLightbulb,
      content: (
        <>
          <div>
            <h3 className="text-base md:text-lg font-medium mt-4">A. Idea Generation</h3>
            <p className="mt-2 text-sm md:text-base">
              This is the stage where new product ideas are born. Ideas can come from:
            </p>
            <ul className="list-disc ml-6 mt-2 text-sm md:text-base">
              <li><strong>Customer pain points</strong> – What problems do people face?</li>
              <li><strong>Competitor gaps</strong> – What are competitors missing?</li>
              <li><strong>Industry trends</strong> – What’s changing in the market?</li>
              <li><strong>Brainstorming & team insights</strong> – Internal innovation sessions.</li>
            </ul>
            <div className="mt-4 p-3 md:p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <strong>Example:</strong>
              <p className="mt-1 text-sm md:text-base">
                Imagine you notice that students struggle to manage multiple assignments and deadlines. This could inspire the idea for a smart task management app for students.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-medium mt-6">B. Market Research</h3>
            <p className="mt-2 text-sm md:text-base">
              Before building anything, research is needed to check if the idea is worth pursuing:
            </p>
            <ul className="list-disc ml-6 mt-2 text-sm md:text-base">
              <li>User Interviews & Surveys – Talking to potential users.</li>
              <li>Competitive Analysis – Studying existing solutions.</li>
              <li>Market Size & Demand – Checking how big the problem is.</li>
              <li>Feasibility Check – Can we actually build it?</li>
            </ul>
            <div className="mt-4 p-3 md:p-4(bg-green-50 border-l-4 border-green-500 rounded">
              <strong>Example:</strong>
              <p className="mt-1 text-sm md:text-base">
                If research shows that 80% of students find managing assignments difficult, and current apps lack automated reminders, then there’s an opportunity to create a better tool.
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      title: "2. Product Discovery & Validation",
      Icon: FaSearch,
      content: (
        <>
          <div>
            <h3 className="text-base md:text-lg font-medium mt-4">A. Understanding the Problem Deeply</h3>
            <p className="mt-2 text-sm md:text-base">
              Define the exact problem you are solving, identify your target audience (e.g., college students aged 18-25), and create user personas.
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-medium mt-6">B. Validation Methods</h3>
            <p className="mt-2 text-sm md:text-base">
              Validate the idea using:
            </p>
            <ul className="list-disc ml-6 mt-2 text-sm md:text-base">
              <li>Landing Page Test – Create a simple webpage explaining your idea and see how many people sign up.</li>
              <li>Prototype & Wireframes – A basic design to show potential users.</li>
              <li>Beta Testing – A small group of users try an early version.</li>
            </ul>
            <div className="mt-4 p-3 md:p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
              <strong>Example:</strong>
              <p className="mt-1 text-sm md:text-base">
                For the smart task app, you could create a clickable prototype using Figma and ask students for feedback before coding.
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      title: "3. Building an MVP (Minimum Viable Product)",
      Icon: FaRocket,
      content: (
        <>
          <div>
            <h3 className="text-base md:text-lg font-medium mt-4">A. What is an MVP?</h3>
            <p className="mt-2 text-sm md:text-base">
              An MVP is a basic version of your product with just enough features to test the idea with real users. Focus on core functionality (e.g., for the task app: adding tasks, setting reminders) and skip non-essential features.
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-medium mt-6">B. The MVP Process</h3>
            <ul className="list-disc ml-6 mt-2 text-sm md:text-base">
              <li>Define Core Features – What’s the most important function?</li>
              <li>Develop Quickly – Build using no-code tools or simple tech.</li>
              <li>Test with Early Users – Get real-world feedback.</li>
              <li>Iterate & Improve – Adjust based on feedback.</li>
            </ul>
            <div className="mt-4 p-3 md:p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <strong>Example:</strong>
              <p className="mt-1 text-sm md:text-base">
                The MVP for a smart task app might allow students to add tasks, set deadlines, and receive reminders—but without fancy AI suggestions or integrations yet.
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      title: "4. Product Launch & Go-To-Market Strategy",
      Icon: FaBullhorn,
      content: (
        <>
          <div>
            <h3 className="text-base md:text-lg font-medium mt-4">A. Preparing for Launch</h3>
            <ul className="list-disc ml-6 mt-2 text-sm md:text-base">
              <li>Beta Testing – Final round of testing with real users.</li>
              <li>Bug Fixing & Optimizations – Ensuring a smooth experience.</li>
              <li>Marketing Plan – Decide how to reach users (ads, influencers, etc.).</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-medium mt-6">B. Go-To-Market (GTM) Strategy</h3>
            <ul className="list-disc ml-6 mt-2 text-sm md:text-base">
              <li>Launch on App Store/Web – Make it publicly available.</li>
              <li>User Acquisition – How will people find it? (SEO, ads, social media).</li>
              <li>Monetization – How will it make money? (subscriptions, ads).</li>
              <li>Customer Support & Feedback Loop – Provide help and improve based on feedback.</li>
            </ul>
            <div className="mt-4 p-3 md:p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <strong>Example:</strong>
              <p className="mt-1 text-sm md:text-base">
                For the task app, you might launch on the Google Play Store, use TikTok & Instagram ads targeting students, and offer a free version with an optional premium upgrade.
              </p>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl overflow-x-hidden">
      
     <div className="flex flex-col space-y-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-lg shadow-md p-4 sm:p-5 cursor-pointer"
            onClick={() => toggleCard(index)}
          >
            <div className="flex items-center mb-4">
              <card.Icon className="text-xl sm:text-2xl mr-3" />
              <h2 className="text-base sm:text-lg md:text-xl font-semibold">{card.title}</h2>
            </div>
            <div className={`${openCard === index ? 'block' : 'hidden'} transition-all duration-300`}>
              {card.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDevelopmentProcess;