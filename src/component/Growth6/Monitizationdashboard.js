import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaDollarSign } from 'react-icons/fa';

// Import your components (make sure these are defined and exported in your project)
import MonetizationAlignmentModule from './MonetizationAlignmentModule';
import MonetizationAlignment from './MonetizationAlignment';
import FrameworksAndCaseStudies from './FrameworksAndCaseStudies';
import CommonPitfalls from './CommonPitfalls';
import MonetizationAlignmentSimulation from './MonetizationAlignmentSimulation';
import MonetizationQuiz from './MonetizationQuiz';

const dashboardItems = [
  {
    id: 'alignmentModule',
    number: 1,
    title: 'Monetization Alignment Module',
    component: <MonetizationAlignmentModule />,
  },
  {
    id: 'alignment',
    number: 2,
    title: 'Monetization Alignment',
    component: <MonetizationAlignment />,
  },
  {
    id: 'frameworksCaseStudies',
    number: 3,
    title: 'Frameworks & Case Studies',
    component: <FrameworksAndCaseStudies />,
  },
  {
    id: 'commonPitfalls',
    number: 4,
    title: 'Common Pitfalls',
    component: <CommonPitfalls />,
  },
  {
    id: 'simulation',
    number: 5,
    title: 'Monetization Alignment Simulation',
    component: <MonetizationAlignmentSimulation />,
  },
  {
    id: 'quiz',
    number: 6,
    title: 'Monetization Quiz',
    component: <MonetizationQuiz />,
  },
];

const MonetizationDashboard = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 flex justify-center items-center">
          <FaDollarSign className="mr-2" /> Monetization Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Click on a module below to view its content.
        </p>
      </header>

      <div className="space-y-4">
        {dashboardItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {item.number}
                </div>
                <span className="text-xl font-medium text-gray-800">{item.title}</span>
              </div>
              <div className="text-xl text-gray-600">
                {activeItem === item.id ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </button>
            {activeItem === item.id && (
              <div className="p-4 border-t border-gray-200">{item.component}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonetizationDashboard;
