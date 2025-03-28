import React, { useState } from 'react';
import {
  FaLightbulb,
  FaSitemap,
  FaQuestionCircle,
  FaCogs,
  FaChalkboardTeacher,
  FaChevronDown,
  FaChevronUp,
  FaTachometerAlt,
} from 'react-icons/fa';

// Import your modules (ensure these files/components are defined in your project)
import DesigningForVirality from './DesigningForVirality';
import NetworkEffectsModule from './NetworkEffectsModule';
import ViralityQuiz from './ViralityQuiz';
import ViralitySimulation from './ViralitySimulation';
import ExercisesForStudents from './ExercisesForStudents';

// Dashboard modules array
const dashboardItems = [
  {
    id: 'designForVirality',
    title: 'Designing for Virality',
    icon: <FaLightbulb className="text-4xl text-yellow-500" />,
    component: <DesigningForVirality />,
  },
  {
    id: 'networkEffects',
    title: 'Network Effects Module',
    icon: <FaSitemap className="text-4xl text-green-500" />,
    component: <NetworkEffectsModule />,
  },
  {
    id: 'viralityQuiz',
    title: 'Virality Quiz',
    icon: <FaQuestionCircle className="text-4xl text-blue-500" />,
    component: <ViralityQuiz />,
  },
  {
    id: 'viralitySimulation',
    title: 'Virality Simulation',
    icon: <FaCogs className="text-4xl text-red-500" />,
    component: <ViralitySimulation />,
  },
  {
    id: 'exercisesForStudents',
    title: 'Exercise',
    icon: <FaChalkboardTeacher className="text-4xl text-purple-500" />,
    component: <ExercisesForStudents />,
  },
];

const Dashboard = () => {
  // State to track the active (expanded) module
  const [activeTile, setActiveTile] = useState(null);

  // Toggle the selected module
  const toggleTile = (id) => {
    setActiveTile(activeTile === id ? null : id);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Dashboard header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 flex justify-center items-center">
          <FaTachometerAlt className="mr-2" /> Virality Learning Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Click on a module below to view its content.
        </p>
      </header>
      {/* Module tiles */}
      <div className="space-y-4">
        {dashboardItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <button
              onClick={() => toggleTile(item.id)}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <div className="flex items-center">
                {/* Module number inside a circle */}
                <div className="w-10 h-10 flex items-center justify-center mr-4 bg-gray-200 rounded-full font-bold">
                  {dashboardItems.indexOf(item) + 1}
                </div>
                <span className="text-xl font-medium text-gray-800">{item.title}</span>
              </div>
              <div className="text-xl text-gray-600">
                {activeTile === item.id ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </button>
            {activeTile === item.id && (
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
