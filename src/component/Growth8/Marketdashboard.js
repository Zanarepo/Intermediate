import React, { useState } from 'react';
import { 
  FaGlobe, 
  FaRocket, 
  FaTools, 
  FaBalanceScale, 
  FaChartLine, 
  FaCogs, 
  FaQuestionCircle 
} from 'react-icons/fa';

// Import your components
import MarketExplorationProcess from './MarketExplorationProcess';
import MarketValidationAndEntry from './MarketValidationAndEntry';
import ToolsFrameworksCaseStudies from './ToolsFrameworksCaseStudies';
import CaseStudiesAndChallenges from './CaseStudiesAndChallenges';
import MetricsEthicsActionPlan from './MetricsEthicsActionPlan';
import MetricsSimulation from './MetricsSimulation';
import MarketQuiz from './MarketQuiz';

const dashboardModules = [
  {
    id: 'marketExploration',
    number: 1,
    title: 'Market Exploration Process',
    icon: <FaGlobe className="text-4xl text-indigo-500" />,
    component: <MarketExplorationProcess />,
  },
  {
    id: 'marketValidation',
    number: 2,
    title: 'Market Validation & Entry',
    icon: <FaRocket className="text-4xl text-green-500" />,
    component: <MarketValidationAndEntry />,
  },
  {
    id: 'toolsFrameworks',
    number: 3,
    title: 'Tools & Frameworks / Case Studies',
    icon: <FaTools className="text-4xl text-blue-500" />,
    component: <ToolsFrameworksCaseStudies />,
  },
  {
    id: 'caseStudiesChallenges',
    number: 4,
    title: 'Case Studies & Challenges',
    icon: <FaBalanceScale className="text-4xl text-red-500" />,
    component: <CaseStudiesAndChallenges />,
  },
  {
    id: 'metricsEthics',
    number: 5,
    title: 'Metrics, Ethics & Action Plan',
    icon: <FaChartLine className="text-4xl text-purple-500" />,
    component: <MetricsEthicsActionPlan />,
  },
  {
    id: 'metricsSimulation',
    number: 6,
    title: 'Metrics Simulation',
    icon: <FaCogs className="text-4xl text-orange-500" />,
    component: <MetricsSimulation />,
  },
  {
    id: 'marketQuiz',
    number: 7,
    title: 'Market Quiz',
    icon: <FaQuestionCircle className="text-4xl text-teal-500" />,
    component: <MarketQuiz />,
  },
];

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState(null);

  const toggleModule = (id) => {
    setActiveModule(activeModule === id ? null : id);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center">
          Product Expansion & Localization Dashboard
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Click on a module to display its content.
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
                <span className="text-xl font-medium text-gray-800">
                  {module.title}
                </span>
              </div>
              <div className="text-xl text-gray-600">
                {activeModule === module.id ? <>&#9650;</> : <>&#9660;</>}
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
