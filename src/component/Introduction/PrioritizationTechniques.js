import React, { useState } from 'react';
import { FaTasks, FaChartBar, FaSmile, FaPrint, FaQuestionCircle } from 'react-icons/fa';

// Reusable Tile component for each section
const Tile = ({ title, Icon, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 mb-6 shadow-sm transition-all duration-300 ease-in-out w-full max-w-3xl mx-auto">
      <div
        className="flex items-center justify-between cursor-pointer py-2"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="text-indigo-600 flex-shrink-0" size={24} />}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h2>
        </div>
        <div className="text-lg font-semibold text-gray-500">{open ? '−' : '+'}</div>
      </div>
      {open && (
        <div className="mt-3 text-gray-700 text-sm sm:text-base transition-opacity duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

// Simulation component
const Simulation = () => {
  const [projectType, setProjectType] = useState('');
  let recommendation = '';
  if (projectType === 'MVP') {
    recommendation = 'For MVP development, the MoSCoW method is recommended to define the minimum necessary features.';
  } else if (projectType === 'Roadmap') {
    recommendation = 'For roadmap planning, the RICE scoring model is ideal to prioritize high-impact features with minimal effort.';
  } else if (projectType === 'Customer') {
    recommendation = 'For customer-focused development, the Kano model is best to balance basic needs with delight factors.';
  }
  return (
    <Tile title="Scenario Simulation" Icon={FaQuestionCircle}>
      <p className="mb-3 text-gray-600">
        Select a project type to get a prioritization recommendation:
      </p>
      <select
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-sm sm:text-base transition-colors"
        value={projectType}
        onChange={(e) => setProjectType(e.target.value)}
      >
        <option value="">Select Project Type</option>
        <option value="MVP">MVP Development</option>
        <option value="Roadmap">Roadmap Planning</option>
        <option value="Customer">Customer-Focused Development</option>
      </select>
      {recommendation && (
        <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm sm:text-base text-gray-700">
          {recommendation}
        </div>
      )}
    </Tile>
  );
};

// Quiz component
const Quiz = () => {
  const quizQuestions = [
    {
      question: "Which method categorizes features as Must-Have, Should-Have, Could-Have, and Won't-Have?",
      options: ['MoSCoW', 'RICE', 'Kano'],
      answer: 'MoSCoW'
    },
    {
      question: 'Which method uses Reach, Impact, Confidence, and Effort for scoring?',
      options: ['MoSCoW', 'RICE', 'Kano'],
      answer: 'RICE'
    },
    {
      question: 'Which model focuses on customer delight vs. expectation?',
      options: ['MoSCoW', 'RICE', 'Kano'],
      answer: 'Kano'
    }
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (qIndex, value) => {
    setUserAnswers({ ...userAnswers, [qIndex]: value });
  };

  const score = quizQuestions.reduce((acc, q, index) => {
    return userAnswers[index] === q.answer ? acc + 1 : acc;
  }, 0);

  return (
    <Tile title="Test Your Knowledge" Icon={FaQuestionCircle}>
      {quizQuestions.map((q, index) => (
        <div key={index} className="mb-4">
          <p className="font-medium text-sm sm:text-base text-gray-700 mb-2">
            {index + 1}. {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label key={i} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  onChange={() => handleOptionChange(index, option)}
                  disabled={showResults}
                />
                <span className="text-sm sm:text-base text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        onClick={() => setShowResults(true)}
      >
        Submit Answers
      </button>
      {showResults && (
        <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="font-medium text-sm sm:text-base text-gray-900 mb-3">
            Your Score: {score} / {quizQuestions.length}
          </p>
          {quizQuestions.map((q, index) => (
            <div key={index} className="mb-3">
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Q{index + 1}:</strong> {q.question}
              </p>
              <p className="text-sm sm:text-base">
                <span className={userAnswers[index] === q.answer ? 'text-green-600' : 'text-red-600'}>
                  Your Answer: {userAnswers[index] || 'Not Answered'}
                </span>
                <span className="ml-2"> | </span>
                <span className="text-green-600">Correct Answer: {q.answer}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </Tile>
  );
};

const PrioritizationTechniques = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex justify-end w-full max-w-3xl mb-4 sm:mb-6">
          <button
            className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
            onClick={() => window.print()}
          >
            <FaPrint className="mr-2" size={18} />
            Print
          </button>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
          Product Prioritization Techniques
        </h1>
        <p className="text-center mb-6 sm:mb-8 text-sm sm:text-base text-gray-600 max-w-xl">
          Explore key techniques to prioritize features and tasks effectively in product management.
        </p>
        <div className="flex flex-col space-y-6 w-full">
          <Simulation />
          <Tile title="MoSCoW Method" Icon={FaTasks}>
            <p className="mb-3">
              <strong>Overview:</strong> Categorizes features into four priority levels to streamline development.
            </p>
            <ul className="list-disc ml-5 mb-3 space-y-1">
              <li><strong>Must-Have:</strong> Critical features for product functionality.</li>
              <li><strong>Should-Have:</strong> Important but delayable features.</li>
              <li><strong>Could-Have:</strong> Enhancements that are nice to have.</li>
              <li><strong>Won’t-Have:</strong> Non-priority features for the current phase.</li>
            </ul>
            <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <strong>Example:</strong>
              <p>For a <strong>food delivery app</strong>:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li><strong>Must-Have:</strong> Order placement, payment integration, restaurant listings.</li>
                <li><strong>Should-Have:</strong> Order tracking, reviews & ratings.</li>
                <li><strong>Could-Have:</strong> Dark mode, loyalty points.</li>
                <li><strong>Won’t-Have:</strong> AR-based virtual dining experience.</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <strong>Use Case:</strong> Ideal for <em>MVP development</em> to focus on essential features.
            </div>
          </Tile>
          <Tile title="RICE Scoring Model" Icon={FaChartBar}>
            <p className="mb-3">
              <strong>Overview:</strong> Prioritizes features by scoring based on four factors.
            </p>
            <ul className="list-disc ml-5 mb-3 space-y-1">
              <li><strong>R (Reach):</strong> Number of users impacted.</li>
              <li><strong>I (Impact):</strong> Significance of the benefit.</li>
              <li><strong>C (Confidence):</strong> Certainty of impact estimates.</li>
              <li><strong>E (Effort):</strong> Resources and time required.</li>
            </ul>
            <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <strong>Example:</strong>
              <p>For a <strong>fitness app</strong>:</p>
              <ol className="list-decimal ml-5 mt-2 space-y-2">
                <li>
                  <strong>Personalized Workout Plans</strong> (RICE Score: 600)
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Reach: 50,000 users</li>
                    <li>Impact: 4/5</li>
                    <li>Confidence: 80%</li>
                    <li>Effort: 20 person-days</li>
                  </ul>
                </li>
                <li>
                  <strong>Live Trainer Support</strong> (RICE Score: 300)
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Reach: 10,000 users</li>
                    <li>Impact: 5/5</li>
                    <li>Confidence: 60%</li>
                    <li>Effort: 40 person-days</li>
                  </ul>
                </li>
              </ol>
              <p className="mt-2">
                <strong>Personalized Workout Plans</strong> scores higher and should be prioritized.
              </p>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <strong>Use Case:</strong> Best for <em>roadmap planning</em> to prioritize high-impact, low-effort features.
            </div>
          </Tile>
          <Tile title="Kano Model" Icon={FaSmile}>
            <p className="mb-3">
              <strong>Overview:</strong> Categorizes features based on customer satisfaction and expectations.
            </p>
            <ul className="list-disc ml-5 mb-3 space-y-1">
              <li><strong>Basic Needs:</strong> Expected features (e.g., e-commerce search bar).</li>
              <li><strong>Performance Features:</strong> Better implementation, higher satisfaction (e.g., app speed).</li>
              <li><strong>Excitement Features:</strong> Unexpected delights (e.g., free next-day delivery).</li>
            </ul>
            <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <strong>Example:</strong>
              <p>For a <strong>music streaming app</strong>:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li><strong>Basic Need:</strong> Play and pause songs.</li>
                <li><strong>Performance Feature:</strong> High audio quality.</li>
                <li><strong>Delighter:</strong> AI-powered song recommendations.</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <strong>Use Case:</strong> Perfect for <em>customer-focused development</em> to balance essentials and delights.
            </div>
          </Tile>
          <Quiz />
        </div>
      </div>
    </div>
  );
};

export default PrioritizationTechniques;