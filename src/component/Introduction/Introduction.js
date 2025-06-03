
import React from "react";
import { FaCheckCircle, FaLightbulb, FaUsers, FaClipboardList, FaProjectDiagram, FaBuilding, FaPrint } from "react-icons/fa";
import IntroQuize from './IntroQuize';
import IntroSummary from './IntroSummary';

const ProductManagementIntro = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full min-h-screen p-4 xs:p-6 sm:p-8 bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col space-y-4 xs:space-y-6 overflow-x-hidden">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-blue-600 text-center break-all tracking-tight">
        Introduction to Product Management
      </h1>
      <p className="text-sm xs:text-base sm:text-lg text-gray-700 text-center max-w-full px-1 break-all leading-relaxed">
        Product Management is at the heart of building great products that solve real problems for customers. It combines
        strategy, business, technology, and user experience to create products that succeed in the market.
      </p>

      <section className="bg-white shadow-md rounded-xl p-4 xs:p-6 w-full max-w-full">
        <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold flex items-center gap-2 text-gray-800 border-b border-gray-200 pb-2">
          <FaLightbulb className="text-yellow-500" /> What is Product Management?
        </h2>
        <p className="text-sm xs:text-base text-gray-700 mt-2 break-all">
          Product Management is the process of identifying, developing, and delivering products that meet customer needs while aligning with business goals. It involves:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
          <li className="flex items-center gap-2 text-sm xs:text-base">
            <FaCheckCircle className="text-green-500" /> Understanding user problems through research and data
          </li>
          <li className="flex items-center gap-2 text-sm xs:text-base">
            <FaCheckCircle className="text-green-500" /> Defining product vision and strategy to solve those problems
          </li>
          <li className="flex items-center gap-2 text-sm xs:text-base">
            <FaCheckCircle className="text-green-500" /> Collaborating with cross-functional teams
          </li>
          <li className="flex items-center gap-2 text-sm xs:text-base">
            <FaCheckCircle className="text-green-500" /> Prioritizing features and initiatives based on business impact
          </li>
          <li className="flex items-center gap-2 text-sm xs:text-base">
            <FaCheckCircle className="text-green-500" /> Measuring success using key product metrics
          </li>
        </ul>
        <p className="text-sm xs:text-base text-gray-700 bg-blue-100 p-3 xs:p-4 rounded-lg mt-4 break-all">
          <FaUsers className="inline text-blue-500 mr-1" /> <strong>Example:</strong> Think about Spotify. A product manager helps decide new features (e.g., AI-generated playlists) and ensures they meet user needs.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-xl p-4 xs:p-6 w-full max-w-full">
        <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold flex items-center gap-2 text-gray-800 border-b border-gray-200 pb-2">
          <FaClipboardList className="text-purple-500" /> Role & Responsibilities of a Product Manager
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
          <li className="text-sm xs:text-base"><FaCheckCircle className="inline text-green-500 mr-1" /> Valuable – Solves a real problem for users</li>
          <li className="text-sm xs:text-base"><FaCheckCircle className="inline text-green-500 mr-1" /> Usable – Easy and enjoyable to use</li>
          <li className="text-sm xs:text-base"><FaCheckCircle className="inline text-green-500 mr-1" /> Feasible – Can be built within technical constraints</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-xl p-4 xs:p-6 w-full max-w-full">
        <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold flex items-center gap-2 text-gray-800 border-b border-gray-200 pb-2">
          <FaProjectDiagram className="text-indigo-500" /> Differences Between Product Manager, Project Manager, and Program Manager
        </h2>
        <div className="w-full overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-300 rounded-lg text-sm xs:text-base">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-300 p-2 xs:p-3 text-left">Role</th>
                <th className="border border-gray-300 p-2 xs:p-3 text-left">Focus</th>
                <th className="border border-gray-300 p-2 xs:p-3 text-left">Key Responsibilities</th>
                <th className="border border-gray-300 p-2 xs:p-3 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100">
                <td className="border border-gray-300 p-2 xs:p-3 break-all">Product Manager</td>
                <td className="border border-gray-300 p-2 xs:p-3 break-all">What to build and why</td>
                <td className="border border-gray-300 p-2 xs:p-3 break-all">Defines vision, strategy, and features</td>
                <td className="border border-gray-300 p-2 xs:p-3 break-all">Decides if Uber should launch a subscription plan</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 p-2 xs:p-3 break-all">Project Manager</td>
                <td className="border border-gray-300 p-2 xs:p-3 break-all">How to execute a plan</td>
                <td className="border border-gray-300 p-2 xs:p-3 break-all">Manages tasks, deadlines, and resources</td>
                <td className="border border-gray-300 p-2 xs:p-3 break-all">Ensures Uber’s engineering team delivers a feature on time</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="border border-gray-300 p-2 xs:p-3 break-all">Program Manager</td>
                <td className="border border-gray-300 p-2 xs:p-3 break-all">Coordinating multiple projects</td>
                <td className="border border-gray-300 p-2 xs:p-3 break-all">Manages interdependencies</td>
                <td className="border border-gray-300 p-2 xs:p-3 break-all">Oversees all Uber driver experience projects</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-xl p-4 xs:p-6 w-full max-w-full">
        <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold flex items-center gap-2 text-gray-800 border-b border-gray-200 pb-2">
          <FaBuilding className="text-orange-500" /> Analogy: Building a House
        </h2>
        <p className="text-sm xs:text-base text-gray-700 italic mt-2 break-all">Think of Product Management like building a house:</p>
        <p className="text-sm xs:text-base text-gray-700 mt-1 break-all"><strong>Product Manager:</strong> Decides what kind of house to build.</p>
        <p className="text-sm xs:text-base text-gray-700 mt-1 break-all"><strong>Project Manager:</strong> Ensures construction happens on time and within budget.</p>
        <p className="text-sm xs:text-base text-gray-700 mt-1 break-all"><strong>Program Manager:</strong> Oversees multiple housing projects in the city.</p>
      </section>

      <section className="bg-white shadow-md rounded-xl p-4 xs:p-6 w-full max-w-full">
        <p className="text-base xs:text-lg font-semibold text-gray-800 break-all">Final Thoughts</p>
        <p className="text-sm xs:text-base text-gray-700 mt-1 break-all">
          Product Management is about creating value, solving problems, and working cross-functionally. Understanding these roles is the first step in becoming an effective product leader.
        </p>
      </section>

      <button
        onClick={handlePrint}
        className="mt-4 xs:mt-6 px-4 xs:px-6 py-2 xs:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 shadow-md text-sm xs:text-base w-full sm:w-auto"
      >
        <FaPrint /> Print
      </button>

      <section className="w-full max-w-full">
        <IntroSummary />
      </section>
      <section className="w-full max-w-full">
        <IntroQuize />
      </section>
    </div>
  );
};

export default ProductManagementIntro;