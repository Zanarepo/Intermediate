import React, { useState } from 'react';
import { FaStar, FaBullseye, FaChartLine, FaUserFriends, FaDollarSign } from 'react-icons/fa';

const NorthStarMetrics = () => {
  // Simulation state for three key metrics
  const [userEngagement, setUserEngagement] = useState(50);
  const [customerRetention, setCustomerRetention] = useState(50);
  const [revenue, setRevenue] = useState(50);

  // Calculate composite metric as the average of the three metrics
  const compositeMetric = ((userEngagement + customerRetention + revenue) / 3).toFixed(1);
  // Projected Growth is estimated as 1.2x of the composite metric
  const projectedGrowth = (compositeMetric * 1.2).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3 text-gray-800">
          <FaStar className="text-yellow-500" /> North Star Metrics
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Understand the core value of your product through key performance indicators. These metrics help align your team’s efforts and drive growth.
        </p>
      </header>

      {/* Tiles Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Explanation Tile */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <FaBullseye className="text-blue-500" size={24} />
            <h2 className="text-2xl font-semibold text-gray-700">What are North Star Metrics?</h2>
          </div>
          <p className="text-gray-700">
            North Star Metrics capture the primary value your product delivers. Rather than tracking dozens of metrics, you focus on one key indicator that best reflects your product’s success. This focus ensures every team member is working towards the same goal.
          </p>
        </div>

        {/* Importance Tile */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <FaChartLine className="text-green-500" size={24} />
            <h2 className="text-2xl font-semibold text-gray-700">Why They Matter</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Focus:</strong> Directs your team towards what truly matters.</li>
            <li><strong>Alignment:</strong> Ensures all departments work towards a common goal.</li>
            <li><strong>Growth:</strong> Helps you measure and drive product success over time.</li>
          </ul>
        </div>

        {/* Key Metrics Tile */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <FaUserFriends className="text-purple-500" size={24} />
            <h2 className="text-2xl font-semibold text-gray-700">Key Metrics Explained</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>User Engagement:</strong> How actively users interact with your product.
            </li>
            <li>
              <strong>Customer Retention:</strong> The percentage of users who continue using your product over time.
            </li>
            <li>
              <strong>Revenue:</strong> The financial performance and market fit of your product.
            </li>
          </ul>
        </div>

        {/* Simulation Tile */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <FaDollarSign className="text-red-500" size={24} />
            <h2 className="text-2xl font-semibold text-gray-700">Interactive Simulation</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Adjust the sliders to simulate how changes in your key metrics affect overall performance. This simulation consists of two parts:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>
              <strong>Composite Metric:</strong> The average of User Engagement, Customer Retention, and Revenue.
            </li>
            <li>
              <strong>Projected Growth:</strong> An estimated growth rate calculated as 1.2 times the composite metric.
            </li>
          </ul>
          <div className="space-y-6">
            {/* User Engagement Slider */}
            <div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">User Engagement</span>
                <span className="font-bold text-gray-800">{userEngagement}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={userEngagement}
                onChange={(e) => setUserEngagement(Number(e.target.value))}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            {/* Customer Retention Slider */}
            <div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Customer Retention</span>
                <span className="font-bold text-gray-800">{customerRetention}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={customerRetention}
                onChange={(e) => setCustomerRetention(Number(e.target.value))}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            {/* Revenue Slider */}
            <div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Revenue</span>
                <span className="font-bold text-gray-800">{revenue}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded">
            <p className="text-gray-700">
              <strong>Composite Metric:</strong> {compositeMetric} <br />
              <strong>Projected Growth:</strong> {projectedGrowth}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NorthStarMetrics;
