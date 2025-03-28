import React, { useState } from 'react';
import { FaChartBar, FaChevronDown, FaChevronUp } from 'react-icons/fa';


// Import your components (make sure these are correctly exported in your project)
import TeachingModule from './TeachingModule';
import HypothesisTestSimulation from './HypothesisTestSimulation';
import ExperimentationGuide from './ExperimentationGuide';
import ClassroomExercises from './ClassroomExercises';

const dashboardItems = [
    {
        id: 'teachingModule',
        number: 1,
        title: 'Experimentation for Growth',
        component: <ExperimentationGuide />,
      },


  {
    id: 'hypothesisTestSimulation',
    number: 2,
    title: 'Hypothesis Test Simulation',
    component: <HypothesisTestSimulation />,
  },
  {
    id: 'experimentationGuide',
    number: 3,
    title: 'Tools & Techniques',
    component: <TeachingModule />,
  },
  {
    id: 'classroomExercises',
    number: 4,
    title: 'Classroom Exercises',
    component: <ClassroomExercises />,
  },
];

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 flex justify-center items-center">
          <FaChartBar className="mr-2" /> Product Experimentation Dashboard
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
                <span className="text-xl font-medium text-gray-800">
                  {item.title}
                </span>
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

export default Dashboard;
