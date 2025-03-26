import React, { useState } from 'react';
import { FaSearch, FaUsers, FaMapMarkerAlt, FaLemon, FaLightbulb } from 'react-icons/fa';

const CustomerMarketResearchSimulation = () => {
  // Simulation state for customer research inputs
  const [customerType, setCustomerType] = useState('');
  const [location, setLocation] = useState('');
  const [flavorPreference, setFlavorPreference] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission and show insights
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Reset simulation
  const handleReset = () => {
    setCustomerType('');
    setLocation('');
    setFlavorPreference('');
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-8">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-yellow-600 flex items-center justify-center gap-2">
          <FaLemon className="text-yellow-500" />
          Customer & Market Research Simulation
        </h1>
        <p className="mt-2 text-gray-700 max-w-3xl mx-auto">
          Imagine you want to open a lemonade stand. Before you start, you need to know who wants lemonade, where they buy it, and what flavors they like.
        </p>
      </header>

      {/* Simulation Form */}
      {!submitted ? (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaSearch className="text-blue-500" /> Let's Research
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Customer Type */}
            <div>
              <label className="block text-gray-700 font-medium">
                Who are your potential customers?
              </label>
              <input
                type="text"
                value={customerType}
                onChange={(e) => setCustomerType(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                placeholder="e.g., students, office workers, families"
                required
              />
            </div>
            {/* Market Location */}
            <div>
              <label className="block text-gray-700 font-medium">
                Where do people buy lemonade?
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                placeholder="e.g., near college campuses, city parks"
                required
              />
            </div>
            {/* Flavor Preferences */}
            <div>
              <label className="block text-gray-700 font-medium">
                What flavors do they like?
              </label>
              <input
                type="text"
                value={flavorPreference}
                onChange={(e) => setFlavorPreference(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                placeholder="e.g., classic, strawberry, mint"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
            >
              See Insights
            </button>
          </form>
        </div>
      ) : (
        // Display the insights once submitted
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <FaLightbulb className="text-yellow-500" /> Research Insights
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-md">
              <div className="flex items-center gap-2">
                <FaUsers className="text-blue-500" />
                <span className="font-bold text-blue-700">Target Customers:</span>
              </div>
              <p className="text-gray-700 ml-6">{customerType}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-md">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-500" />
                <span className="font-bold text-green-700">Market Location:</span>
              </div>
              <p className="text-gray-700 ml-6">{location}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-md">
              <div className="flex items-center gap-2">
                <FaLemon className="text-purple-500" />
                <span className="font-bold text-purple-700">Flavor Preferences:</span>
              </div>
              <p className="text-gray-700 ml-6">{flavorPreference}</p>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Overall Insights</h3>
            <p className="text-gray-700">
              Based on your inputs, it's clear that the potential customers (<strong>{customerType}</strong>) in the market located around <strong>{location}</strong> have a taste for <strong>{flavorPreference}</strong> flavored lemonade.
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Recommendation:</strong> Focus on setting up your stand in areas near <strong>{location}</strong> where <strong>{customerType}</strong> frequent, and offer a variety of flavors with an emphasis on <strong>{flavorPreference}</strong>. This targeted approach ensures that you're meeting the customers’ needs—just like how Netflix tailors its content based on viewer preferences.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Reset & Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomerMarketResearchSimulation;
