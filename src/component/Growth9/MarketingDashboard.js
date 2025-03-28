import React, { useState } from 'react';
import { 
  FaSearch, 
  FaDollarSign, 
  FaBrain, 
  FaTools, 
  FaCogs, 
  FaQuestionCircle, 
  FaClipboardList,
  FaChartBar
} from 'react-icons/fa';

// Import your components
import DigitalMarketingForGrowthPMs from './DigitalMarketingForGrowthPMs';
import PaidAdsForGrowthPMs from './PaidAdsForGrowthPMs';
import BehavioralPsychologyForGrowthPMs from './BehavioralPsychologyForGrowthPMs';
import IntegratingDigitalMarketingBehavioralPsychology from './IntegratingDigitalMarketingBehavioralPsychology';
import IntegratedCampaignSimulation from './IntegratedCampaignSimulation';
import Marketingquizzes from './Marketingquizzes';
import TaskDigital from './TaskDigital';

const dashboardItems = [
  {
    id: 'digitalMarketing',
    number: 1,
    title: 'Digital Marketing for Growth PMs',
    icon: <FaSearch className="text-4xl text-indigo-500" />,
    component: <DigitalMarketingForGrowthPMs />,
  },
  {
    id: 'paidAds',
    number: 2,
    title: 'Paid Ads for Growth PMs',
    icon: <FaDollarSign className="text-4xl text-green-500" />,
    component: <PaidAdsForGrowthPMs />,
  },
  {
    id: 'behavioralPsychology',
    number: 3,
    title: 'Behavioral Psychology for Growth PMs',
    icon: <FaBrain className="text-4xl text-blue-500" />,
    component: <BehavioralPsychologyForGrowthPMs />,
  },
  {
    id: 'integratingDigitalMarketing',
    number: 4,
    title: 'Integrating Digital Marketing & Behavioral Psychology',
    icon: <FaTools className="text-4xl text-purple-500" />,
    component: <IntegratingDigitalMarketingBehavioralPsychology />,
  },
  {
    id: 'integratedCampaign',
    number: 5,
    title: 'Integrated Campaign Simulation',
    icon: <FaCogs className="text-4xl text-orange-500" />,
    component: <IntegratedCampaignSimulation />,
  },
  {
    id: 'marketingQuizzes',
    number: 6,
    title: 'Marketing Quizzes',
    icon: <FaQuestionCircle className="text-4xl text-teal-500" />,
    component: <Marketingquizzes />,
  },
  {
    id: 'taskDigital',
    number: 7,
    title: 'Digital Marketing Task',
    icon: <FaClipboardList className="text-4xl text-red-500" />,
    component: <TaskDigital />,
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
          <FaChartBar className="mr-2" /> Growth PM Dashboard
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Click on a module to display its content.
        </p>
      </header>
      <div className="space-y-4">
        {dashboardItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <button
              onClick={() => toggleModule(item.id)}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center font-bold mr-4">
                  {item.number}
                </div>
                <span className="text-xl font-medium text-gray-800">
                  {item.title}
                </span>
              </div>
              <div className="text-xl text-gray-600">
                {activeModule === item.id ? <>&#9650;</> : <>&#9660;</>}
              </div>
            </button>
            {activeModule === item.id && (
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

export default Dashboard;
