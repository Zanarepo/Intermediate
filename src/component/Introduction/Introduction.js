import React from "react";
import { FaCheckCircle, FaLightbulb, FaUsers, FaClipboardList, FaProjectDiagram, FaBuilding, FaPrint } from "react-icons/fa";
import IntroQuize from './IntroQuize'
import IntroSummary from './IntroSummary'

const ProductManagementIntro = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg space-y-6 border border-gray-200">
      <h1 className="text-4xl font-bold text-blue-600 text-center">Introduction to Product Management</h1>
      <p className="text-gray-700 text-lg text-center">
        Product Management is at the heart of building great products that solve real problems for customers. It combines
        strategy, business, technology, and user experience to create products that succeed in the market.
      </p>

      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 border-b pb-2"><FaLightbulb className="text-yellow-500" /> What is Product Management?</h2>
      <p className="text-gray-700">Product Management is the process of identifying, developing, and delivering products that meet customer needs while aligning with business goals. It involves:</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Understanding user problems through research and data</li>
        <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Defining product vision and strategy to solve those problems</li>
        <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Collaborating with cross-functional teams</li>
        <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Prioritizing features and initiatives based on business impact</li>
        <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Measuring success using key product metrics</li>
      </ul>
      <p className="text-gray-700 bg-blue-100 p-4 rounded-lg"><FaUsers className="inline text-blue-500" /> <strong>Example:</strong> Think about Spotify. A product manager helps decide new features (e.g., AI-generated playlists) and ensures they meet user needs.</p>

      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 border-b pb-2"><FaClipboardList className="text-purple-500" /> Role & Responsibilities of a Product Manager</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li><FaCheckCircle className="inline text-green-500" /> Valuable – Solves a real problem for users</li>
        <li><FaCheckCircle className="inline text-green-500" /> Usable – Easy and enjoyable to use</li>
        <li><FaCheckCircle className="inline text-green-500" /> Feasible – Can be built within technical constraints</li>
      </ul>

      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 border-b pb-2"><FaProjectDiagram className="text-indigo-500" /> Differences Between Product Manager, Project Manager, and Program Manager</h2>
      <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border border-gray-300 p-3">Role</th>
            <th className="border border-gray-300 p-3">Focus</th>
            <th className="border border-gray-300 p-3">Key Responsibilities</th>
            <th className="border border-gray-300 p-3">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-gray-100">
            <td className="border border-gray-300 p-3">Product Manager</td>
            <td className="border border-gray-300 p-3">What to build and why</td>
            <td className="border border-gray-300 p-3">Defines vision, strategy, and features</td>
            <td className="border border-gray-300 p-3">Decides if Uber should launch a subscription plan</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="border border-gray-300 p-3">Project Manager</td>
            <td className="border border-gray-300 p-3">How to execute a plan</td>
            <td className="border border-gray-300 p-3">Manages tasks, deadlines, and resources</td>
            <td className="border border-gray-300 p-3">Ensures Uber’s engineering team delivers a feature on time</td>
          </tr>
          <tr className="bg-white hover:bg-gray-100">
            <td className="border border-gray-300 p-3">Program Manager</td>
            <td className="border border-gray-300 p-3">Coordinating multiple projects</td>
            <td className="border border-gray-300 p-3">Manages interdependencies</td>
            <td className="border border-gray-300 p-3">Oversees all Uber driver experience projects</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 border-b pb-2"><FaBuilding className="text-orange-500" /> Analogy: Building a House</h2>
      <p className="text-gray-700 italic">Think of Product Management like building a house:</p>
      <p className="text-gray-700"><strong>Product Manager:</strong> Decides what kind of house to build.</p>
      <p className="text-gray-700"><strong>Project Manager:</strong> Ensures construction happens on time and within budget.</p>
      <p className="text-gray-700"><strong>Program Manager:</strong> Oversees multiple housing projects in the city.</p>

      <p className="text-lg font-semibold text-gray-800">Final Thoughts</p>
      <p className="text-gray-700">Product Management is about creating value, solving problems, and working cross-functionally. Understanding these roles is the first step in becoming an effective product leader.</p>
      
      <button onClick={handlePrint} className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 shadow-md">
      
        <FaPrint /> Print
      </button>
<IntroSummary/>
      <IntroQuize/>

    </div>
  );
};

export default ProductManagementIntro;
