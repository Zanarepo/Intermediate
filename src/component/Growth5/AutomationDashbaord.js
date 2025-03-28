import React, { useState } from 'react';
import { FaChartBar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Import your individual components (ensure these files exist in your project)
import ScalabilityAutomation from './ScalabilityAutomation';
import CaseStudiesAndTech from './CaseStudiesAndTech';
import AutomationSimulation from './AutomationSimulation';
import RobustAutomationSimulation from './RobustAutomationSimulation';
import DigitalProductAutomationSimulation from './DigitalProductAutomationSimulation';
import KeyTakeaways from './KeyTakeaways';
import AutomationQuiz from './AutomationQuiz';

const dashboardItems = [
  {
    id: 'scalabilityAutomation',
    number: 1,
    title: 'Scalability & Automation',
    component: <ScalabilityAutomation />,
  },
  {
    id: 'caseStudiesAndTech',
    number: 2,
    title: 'Case Studies & Tech',
    component: <CaseStudiesAndTech />,
  },
  {
    id: 'automationSimulation',
    number: 3,
    title: 'Automation Simulation',
    component: <AutomationSimulation />,
  },
  {
    id: 'robustAutomationSimulation',
    number: 4,
    title: 'Robust Automation Simulation',
    component: <RobustAutomationSimulation />,
  },
  {
    id: 'digitalProductAutomationSimulation',
    number: 5,
    title: 'Digital Product Automation Simulation',
    component: <DigitalProductAutomationSimulation />,
  },
  {
    id: 'keyTakeaways',
    number: 6,
    title: 'Key Takeaways',
    component: <KeyTakeaways />,
  },
  {
    id: 'automationQuiz',
    number: 7,
    title: 'Automation Quiz',
    component: <AutomationQuiz />,
  },
];

const AutomationDashboard = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 flex justify-center items-center">
          <FaChartBar className="mr-2" /> Automation Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Click on a numbered module below to view its content.
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
              <div className="p-4 border-t border-gray-200">
                {item.component}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutomationDashboard;
