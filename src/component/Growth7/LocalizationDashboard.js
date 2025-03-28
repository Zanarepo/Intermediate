import React, { useState } from 'react';
import { FaGlobe, FaChartLine, FaTasks, FaBookOpen, FaCogs, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Import your module components
import LocalizationExpansionModule from './LocalizationExpansionModule';
import MetricsAndPitfalls from './MetricsAndPitfalls';
import LocalizationExpansionTasks from './LocalizationExpansionTasks';
import CaseStudiesAndTakeaways from './CaseStudiesAndTakeaways';
import LocalizationSimulation from './LocalizationSimulation';

const dashboardModules = [
  {
    id: 'localizationExpansionModule',
    number: 1,
    title: 'Localization & Expansion Module',
    icon: <FaGlobe className="text-4xl text-indigo-500" />,
    component: <LocalizationExpansionModule />,
  },
  {
    id: 'metricsAndPitfalls',
    number: 2,
    title: 'Metrics & Pitfalls',
    icon: <FaChartLine className="text-4xl text-green-500" />,
    component: <MetricsAndPitfalls />,
  },
  {
    id: 'localizationExpansionTasks',
    number: 3,
    title: 'Localization & Expansion Tasks',
    icon: <FaTasks className="text-4xl text-blue-500" />,
    component: <LocalizationExpansionTasks />,
  },
  {
    id: 'caseStudiesAndTakeaways',
    number: 4,
    title: 'Case Studies & Takeaways',
    icon: <FaBookOpen className="text-4xl text-purple-500" />,
    component: <CaseStudiesAndTakeaways />,
  },
  {
    id: 'localizationSimulation',
    number: 5,
    title: 'Localization Simulation',
    icon: <FaCogs className="text-4xl text-orange-500" />,
    component: <LocalizationSimulation />,
  },
];

const Dashboard = () => {
  // Track the currently active module; null means none are expanded.
  const [activeModule, setActiveModule] = useState(null);

  const toggleModule = (id) => {
    setActiveModule(activeModule === id ? null : id);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 flex justify-center items-center">
          Product Localization & Expansion Dashboard
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Click on a module below to view its content.
        </p>
      </header>

      <div className="space-y-4">
        {dashboardModules.map((module) => (
          <div key={module.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center font-bold mr-4">
                  {module.number}
                </div>
                <span className="text-xl font-medium text-gray-800">{module.title}</span>
              </div>
              <div className="text-xl text-gray-600">
                {activeModule === module.id ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </button>
            {activeModule === module.id && (
              <div className="p-4 border-t border-gray-200">
                {module.component}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
