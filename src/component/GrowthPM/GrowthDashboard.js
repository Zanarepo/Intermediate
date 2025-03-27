import React, { useState } from 'react';
import {
  FaChartLine,
  FaUsers,
  FaSearch,
  FaHandshake,
  FaLightbulb,
  FaCogs,
  FaFlask,
  FaRocket,
  FaChartBar,
  FaTimes,
} from 'react-icons/fa';

// Import your individual components (ensure these exist and are correctly exported)
import DataDrivenSimulation from './DataDrivenSimulation';
import CustomerAcquisitionRetention from './CustomerAcquisitionRetention';
import MarketUserInsights from './MarketUserInsights';
import MarketInsightsAndCollaboration from './MarketInsightsAndCollaboration';
import StrategicThinkingInnovation from './StrategicThinkingInnovation';
import StrategicThinkingInnovation2 from './StrategicThinkingInnovation2';
import OperationalExcel from './OperationalExcel';
import ExperimentationTesting from './ExperimentationTesting';
import RapidGrowthScaling from './RapidGrowthScaling';

// Array of dashboard tiles with title, icon, and associated component
const dashboardTiles = [
  {
    id: 'dataDriven',
    title: 'Data Driven Simulation',
    icon: <FaChartLine className="text-4xl text-blue-500" />,
    component: <DataDrivenSimulation />,
  },
  {
    id: 'customerAcquisition',
    title: 'Customer Acquisition & Retention',
    icon: <FaUsers className="text-4xl text-green-500" />,
    component: <CustomerAcquisitionRetention />,
  },
  {
    id: 'marketUserInsights',
    title: 'Market & User Insights',
    icon: <FaSearch className="text-4xl text-purple-500" />,
    component: <MarketUserInsights />,
  },
  {
    id: 'marketCollaboration',
    title: 'Market Insights & Collaboration',
    icon: <FaHandshake className="text-4xl text-red-500" />,
    component: <MarketInsightsAndCollaboration />,
  },
  {
    id: 'strategicInnovation',
    title: 'Strategic Thinking & Innovation',
    icon: <FaLightbulb className="text-4xl text-yellow-500" />,
    component: <StrategicThinkingInnovation />,
  },
  {
    id: 'strategicInnovation2',
    title: 'Strategic Thinking & Innovation 2',
    icon: <FaLightbulb className="text-4xl text-orange-500" />,
    component: <StrategicThinkingInnovation2 />,
  },
  {
    id: 'operationalExcel',
    title: 'Operational Excellence',
    icon: <FaCogs className="text-4xl text-indigo-500" />,
    component: <OperationalExcel />,
  },
  {
    id: 'experimentationTesting',
    title: 'Experimentation & Testing',
    icon: <FaFlask className="text-4xl text-pink-500" />,
    component: <ExperimentationTesting />,
  },
  {
    id: 'rapidGrowth',
    title: 'Rapid Growth & Scaling',
    icon: <FaRocket className="text-4xl text-teal-500" />,
    component: <RapidGrowthScaling />,
  },
];

const DashboardTiles = () => {
  // Maintain state for currently expanded tile (or null if none)
  const [openTile, setOpenTile] = useState(null);

  const handleTileClick = (id) => {
    // Toggle the tile: if it's already open, close it; otherwise, open it
    setOpenTile(openTile === id ? null : id);
  };

  // Find the tile data for the currently open tile
  const openTileData = dashboardTiles.find((tile) => tile.id === openTile);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 flex justify-center items-center">
          <FaChartBar className="mr-2" /> Growth Concepts & Strategies
        </h1>
      </header>
      
      {/* Expanded content displayed at the top */}
      {openTileData && (
        <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-6 bg-gray-50">
            <div className="flex items-center">
              {openTileData.icon}
              <h2 className="ml-4 text-2xl font-semibold text-gray-800">
                {openTileData.title}
              </h2>
            </div>
            <button
              onClick={() => setOpenTile(null)}
              className="text-gray-600 hover:text-gray-800"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>
          <div className="p-4">{openTileData.component}</div>
        </div>
      )}

      {/* Grid of remaining tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dashboardTiles
          .filter((tile) => tile.id !== openTile)
          .map((tile) => (
            <div
              key={tile.id}
              onClick={() => handleTileClick(tile.id)}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-all hover:bg-gray-50"
            >
              <div className="flex flex-col items-center justify-center p-6">
                {tile.icon}
                <h2 className="mt-4 text-xl font-semibold text-gray-800 text-center">
                  {tile.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500">Click to expand</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardTiles;
