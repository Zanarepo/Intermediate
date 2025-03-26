import React, { useState } from 'react';
import { FaLemon, FaChartLine, FaLightbulb } from 'react-icons/fa';

const CompetitiveAnalysisSimulation = () => {
  // State for your stand and competitor's stand metrics
  const [yourCustomers, setYourCustomers] = useState(50);
  const [competitorCustomers, setCompetitorCustomers] = useState(100);
  const [yourQuality, setYourQuality] = useState(50);
  const [competitorQuality, setCompetitorQuality] = useState(70);

  // Generate insights based on the comparisons
  let insightText = '';
  if (competitorCustomers > yourCustomers && competitorQuality > yourQuality) {
    insightText =
      "Your competitor is winning on both customer numbers and quality! Focus on enhancing your recipe and marketing strategies to attract more customers and improve quality.";
  } else if (competitorCustomers > yourCustomers) {
    insightText =
      "Your competitor attracts more customers. Consider boosting your marketing or offering promotions to increase foot traffic.";
  } else if (competitorQuality > yourQuality) {
    insightText =
      "Your competitor's lemonade quality is superior. Think about refining your recipe, sourcing better ingredients, or improving your service.";
  } else {
    insightText =
      "Great job! Your lemonade stand is performing well compared to your competitor. Continue to monitor the market and innovate to stay ahead.";
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-8">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-indigo-600 flex items-center justify-center gap-3">
          3️⃣ Competitive Analysis & Benchmarking
        </h1>
        <p className="mt-2 text-lg text-gray-700 max-w-3xl mx-auto">
          Imagine you and your friend both sell lemonade. 🍋 But their lemonade stand gets twice as many customers! 😲
        </p>
        <ul className="mt-2 list-disc pl-6 text-gray-700 max-w-xl mx-auto">
          <li>Looking at what your competitors do well. 👀</li>
          <li>Figuring out how to be even better. 🚀</li>
          <li>Learning from their mistakes. ❌</li>
        </ul>
        <p className="mt-4 text-gray-700">
          If your competitor makes amazing lemonade and you don’t improve yours, they will always win. Use this simulation to understand what you can do better.
        </p>
      </header>

      {/* Simulation Dashboard */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FaChartLine className="text-green-500" /> Simulation Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Your Lemonade Stand */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <FaLemon className="text-yellow-500" /> Your Lemonade Stand
            </h3>
            <div className="mt-4">
              <label className="block text-gray-700">
                Daily Customers: <span className="font-bold">{yourCustomers}</span>
              </label>
              <input
                type="range"
                min="0"
                max="200"
                value={yourCustomers}
                onChange={(e) => setYourCustomers(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">
                Lemonade Quality: <span className="font-bold">{yourQuality}</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={yourQuality}
                onChange={(e) => setYourQuality(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* Competitor's Lemonade Stand */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <FaLemon className="text-yellow-500" /> Competitor's Lemonade Stand
            </h3>
            <div className="mt-4">
              <label className="block text-gray-700">
                Daily Customers: <span className="font-bold">{competitorCustomers}</span>
              </label>
              <input
                type="range"
                min="0"
                max="200"
                value={competitorCustomers}
                onChange={(e) => setCompetitorCustomers(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">
                Lemonade Quality: <span className="font-bold">{competitorQuality}</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={competitorQuality}
                onChange={(e) => setCompetitorQuality(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>
        {/* Insight & Recommendation */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-bold text-blue-800 flex items-center gap-2">
            <FaLightbulb className="text-yellow-500" /> Recommendation
          </h3>
          <p className="mt-2 text-gray-700">{insightText}</p>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveAnalysisSimulation;
