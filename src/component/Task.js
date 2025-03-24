import React, { useState } from 'react';
import { FaInfoCircle, FaChartLine, FaUsers, FaClipboardList, FaRegLightbulb, FaLink } from 'react-icons/fa';

const MarketResearchTask = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Toggle section visibility
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          Market Research & Competitive Analysis
        </h1>
        <p className="text-lg text-gray-700">
          Help GLO enhance its product strategy for businesses by exploring market trends, competitor data, and more.
        </p>
      </header>

      {/* Section 1: Understand GLO’s Offerings */}
      <div className="mb-6">
        <div
          onClick={() => toggleSection(1)}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer border-l-4 border-blue-500"
        >
          <div className="flex items-center space-x-3">
            <FaInfoCircle className="text-blue-500 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-800">
              1. Understand GLO's Offerings
            </h2>
          </div>
          <span className="text-blue-500">{activeSection === 1 ? '-' : '+'}</span>
        </div>
        {activeSection === 1 && (
          <div className="bg-white p-6 mt-2 rounded-lg shadow">
            <p className="text-gray-700 mb-4">
              <strong>Task:</strong> Research GLO’s current products and services for businesses (e.g., connectivity solutions, enterprise services, IoT). Look into features, pricing strategies, and customer support.
            </p>
            <textarea
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Example: 'GLO offers high-speed connectivity with 99.9% uptime, competitive pricing for bulk services, and 24/7 customer support with dedicated account managers.'"
            ></textarea>
            <p className="mt-2 text-sm text-gray-500">
              <em>Real-world example:</em> Think of a company like <strong>Verizon Business</strong> – note how they detail different service levels and support options.
            </p>
          </div>
        )}
      </div>

      {/* Section 2: Analyze the Target Audience */}
      <div className="mb-6">
        <div
          onClick={() => toggleSection(2)}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer border-l-4 border-green-500"
        >
          <div className="flex items-center space-x-3">
            <FaUsers className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-800">
              2. Analyze the Target Audience
            </h2>
          </div>
          <span className="text-green-500">{activeSection === 2 ? '-' : '+'}</span>
        </div>
        {activeSection === 2 && (
          <div className="bg-white p-6 mt-2 rounded-lg shadow">
            <p className="text-gray-700 mb-4">
              <strong>Task:</strong> Define the characteristics of businesses using or needing GLO’s services (e.g., size, industry type, location). Identify pain points and unmet needs.
            </p>
            <textarea
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="Example: 'Small to medium enterprises in tech, retail, or logistics sectors struggling with outdated connectivity solutions.'"
            ></textarea>
            <p className="mt-2 text-sm text-gray-500">
              <em>Real-world example:</em> Consider how <strong>AT&T Business</strong> segments its client base and tailors solutions accordingly.
            </p>
          </div>
        )}
      </div>

      {/* Section 3: Competitive Analysis */}
      <div className="mb-6">
        <div
          onClick={() => toggleSection(3)}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer border-l-4 border-red-500"
        >
          <div className="flex items-center space-x-3">
            <FaChartLine className="text-red-500 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-800">
              3. Competitive Analysis
            </h2>
          </div>
          <span className="text-red-500">{activeSection === 3 ? '-' : '+'}</span>
        </div>
        {activeSection === 3 && (
          <div className="bg-white p-6 mt-2 rounded-lg shadow">
            <p className="text-gray-700 mb-4">
              <strong>Task:</strong> Research GLO’s competitors (e.g., Airtel, MTN, 9mobile). Compare products, pricing, and market positioning. Include a SWOT analysis.
            </p>
            <textarea
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-200"
              placeholder="Example: 'Airtel offers lower prices but lacks premium customer support; SWOT: GLO has strong technical support (strength) but limited geographic reach (weakness).'"
            ></textarea>
            <p className="mt-2 text-sm text-gray-500">
              <em>Real-world example:</em> Look at how companies like <strong>Vodafone</strong> position themselves against competitors in different regions.
            </p>
          </div>
        )}
      </div>

      {/* Section 4: Gather Insights from Businesses */}
      <div className="mb-6">
        <div
          onClick={() => toggleSection(4)}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer border-l-4 border-yellow-500"
        >
          <div className="flex items-center space-x-3">
            <FaClipboardList className="text-yellow-500 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-800">
              4. Gather Insights from Businesses
            </h2>
          </div>
          <span className="text-yellow-500">{activeSection === 4 ? '-' : '+'}</span>
        </div>
        {activeSection === 4 && (
          <div className="bg-white p-6 mt-2 rounded-lg shadow">
            <p className="text-gray-700 mb-4">
              <strong>Task:</strong> Create surveys or conduct interviews with business representatives. Understand their preferences, satisfaction levels, and gaps in current services.
            </p>
            <textarea
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-200"
              placeholder="Example: 'Many business clients mention that the response time from customer support is longer than expected. They prefer a dedicated account manager.'"
            ></textarea>
            <p className="mt-2 text-sm text-gray-500">
              <em>Real-world example:</em> Compare how survey data is used in companies like <strong>Salesforce</strong> to enhance client relations.
            </p>
          </div>
        )}
      </div>

      {/* Section 5: Identify Trends and Opportunities */}
      <div className="mb-8">
        <div
          onClick={() => toggleSection(5)}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer border-l-4 border-purple-500"
        >
          <div className="flex items-center space-x-3">
            <FaRegLightbulb className="text-purple-500 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-800">
              5. Identify Trends and Opportunities
            </h2>
          </div>
          <span className="text-purple-500">{activeSection === 5 ? '-' : '+'}</span>
        </div>
        {activeSection === 5 && (
          <div className="bg-white p-6 mt-2 rounded-lg shadow">
            <p className="text-gray-700 mb-4">
              <strong>Task:</strong> Explore emerging trends such as digital transformation, 5G adoption, and IoT. Propose innovative ideas that address these trends.
            </p>
            <textarea
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-200"
              placeholder="Example: 'With the rise of IoT, GLO could offer integrated connectivity solutions that cater specifically to smart manufacturing setups.'"
            ></textarea>
            <p className="mt-2 text-sm text-gray-500">
              <em>Real-world example:</em> Look at how companies like <strong>Ericsson</strong> or <strong>Nokia</strong> use trend analysis to forecast future tech needs.
            </p>
          </div>
        )}
      </div>

      {/* Resources Section */}
      <div className="bg-white p-6 mt-10 rounded-lg shadow border-l-4 border-indigo-500">
        <div className="flex items-center space-x-3 mb-4">
          <FaLink className="text-indigo-500 text-2xl" />
          <h2 className="text-2xl font-semibold text-gray-800">Additional Resources</h2>
        </div>
        <p className="text-gray-700 mb-4">
          Below are some useful resources that you can use to carry out your research:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            <a
              href="https://www.statista.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Statista – Market and consumer data statistics
            </a>
          </li>
          <li>
            <a
              href="https://www.ibisworld.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              IBISWorld – Industry market research reports
            </a>
          </li>
          <li>
            <a
              href="https://www.gartner.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Gartner – Technology research and advisory
            </a>
          </li>
          <li>
            <a
              href="https://www.comptia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              CompTIA – IT and telecom industry insights
            </a>
          </li>
          <li>
            <a
              href="https://www.businessinsider.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Business Insider – Industry trends and competitor analysis
            </a>
          </li>
        </ul>
      </div> 

      {/* Submission Button */}
      <div className="text-center mt-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition">
          Submit Your Report
        </button>
      </div>
    </div>
  );
};

export default MarketResearchTask;
