import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Import your modules – ensure these components are defined and exported correctly
import CrossFunctionalCollaboration from './CrossFunctionalCollaboration';
import KeyTeamsRoles from './KeyTeamsRoles';
import CollaborationStrategies from './CollaborationStrategies';
import ToolsFrameworks from './ToolsFrameworks';
import ChallengesKeyTakeaways from './ChallengesKeyTakeaways';
import CrossfunctionalCollaborationQuiz from './CrossfunctionalCollaborationQuiz';
import CrossfunctionalCollaborationSimulation from './CrossfunctionalCollaborationSimulation';

const dashboardItems = [
  { id: 'collaboration', title: 'Cross-Functional Collaboration', component: <CrossFunctionalCollaboration /> },
  { id: 'teamsRoles', title: 'Key Teams & Roles', component: <KeyTeamsRoles /> },
  { id: 'collabStrategies', title: 'Collaboration Strategies', component: <CollaborationStrategies /> },
  { id: 'toolsFrameworks', title: 'Tools & Frameworks', component: <ToolsFrameworks /> },
  { id: 'challengesTakeaways', title: 'Challenges & Key Takeaways', component: <ChallengesKeyTakeaways /> },
  { id: 'collabQuiz', title: 'Crossfunctional Collaboration Quiz', component: <CrossfunctionalCollaborationQuiz /> },
  { id: 'collabSimulation', title: 'Collaboration Simulation', component: <CrossfunctionalCollaborationSimulation /> },
];

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Cross-Functional Collaboration Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Click on a numbered module to view its content.
        </p>
      </header>
      <div className="space-y-4">
        {dashboardItems.map((item, index) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <div className="flex items-center space-x-4">
                <span className="text-xl font-bold text-blue-500">{index + 1}.</span>
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

export default Dashboard;
