import React, { useState } from 'react';
import { FaHeadphones, FaExclamationTriangle, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const UserPainPointsSimulation = () => {
  const [painPoints, setPainPoints] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [solution, setSolution] = useState('');

  // Add pain point to the list
  const handleAddPainPoint = () => {
    if (inputValue.trim() !== '') {
      setPainPoints([...painPoints, inputValue]);
      setInputValue('');
    }
  };

  // Simulate generating a solution based on the pain points
  const simulateSolution = () => {
    // If any pain point contains "waiting", simulate the Uber scenario
    const containsWaiting = painPoints.some(point =>
      point.toLowerCase().includes('waiting')
    );
    if (containsWaiting) {
      setSolution('Solution: Build an app that allows users to order rides instantly, minimizing wait times—just like Uber did!');
    } else {
      setSolution('Solution: Analyze the pain points and brainstorm innovative ways to address them.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-8">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-indigo-600 flex items-center justify-center gap-2">
          Understanding Users & Their Pain Points
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Imagine you sell shoes 👟 and a customer says, "These shoes hurt my feet!" That's a pain point—a problem they experience. This simulation helps you listen to user complaints, identify frustrations, and create solutions that solve these problems.
        </p>
      </header>

      {/* Simulation Form */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Pain Points Simulation</h2>
        
        {/* Input for Pain Points */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Enter a user pain point:</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g., Customers complain about waiting too long."
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <button
            onClick={handleAddPainPoint}
            className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Pain Point
          </button>
        </div>

        {/* List of Added Pain Points */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Pain Points List:</h3>
          {painPoints.length === 0 ? (
            <p className="text-gray-600">No pain points added yet.</p>
          ) : (
            <ul className="list-disc ml-6 text-gray-700">
              {painPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Simulate Solution */}
        <button
          onClick={simulateSolution}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Simulate Solution
        </button>

        {/* Display Simulation Outcome */}
        {solution && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
            <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">
              <FaLightbulb /> Recommendation
            </h3>
            <p className="text-green-700">{solution}</p>
          </div>
        )}

        {/* Explanation Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaExclamationTriangle className="text-red-500" /> Why is this important?
          </h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li className="flex items-center gap-2">
              <FaHeadphones className="text-gray-500" /> Listen to your customers' complaints.
            </li>
            <li className="flex items-center gap-2">
              <FaExclamationTriangle className="text-gray-500" /> Identify what frustrates them.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-gray-500" /> Create solutions that effectively address these issues.
            </li>
          </ul>
          <p className="mt-4 text-gray-700">
            <strong>Example:</strong> Uber realized people hated waiting for taxis 🚕, so they created an app to order rides instantly. This transformed their business and the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPainPointsSimulation;
