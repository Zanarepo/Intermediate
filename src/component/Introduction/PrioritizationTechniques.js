import React, { useState } from 'react';
import { FaTasks, FaChartBar, FaSmile, FaPrint } from 'react-icons/fa';

// Reusable collapsible section for each technique
const CollapsibleSection = ({ title, Icon, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6 transition-all duration-300">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center">
          {Icon && <Icon className="text-blue-500 mr-3" size={28} />}
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div className="text-xl text-gray-500">{open ? '-' : '+'}</div>
      </div>
      {open && <div className="mt-4 text-gray-700">{children}</div>}
    </div>
  );
};

// Simulation component to mirror a real-life scenario
const Simulation = () => {
  const [projectType, setProjectType] = useState('');
  let recommendation = '';
  if (projectType === 'MVP') {
    recommendation =
      'For MVP development, the MoSCoW method is recommended to define the minimum necessary features.';
  } else if (projectType === 'Roadmap') {
    recommendation =
      'For roadmap planning, the RICE scoring model is ideal to prioritize high-impact features with minimal effort.';
  } else if (projectType === 'Customer') {
    recommendation =
      'For customer-focused development, the Kano model is best to balance basic needs with delight factors.';
  }
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold mb-2">Real-Life Scenario Simulation</h3>
      <p className="mb-2">
        Select your project type to get a prioritization technique recommendation:
      </p>
      <select
        className="p-2 border border-gray-300 rounded mb-2"
        value={projectType}
        onChange={(e) => setProjectType(e.target.value)}
      >
        <option value="">-- Select Project Type --</option>
        <option value="MVP">MVP Development</option>
        <option value="Roadmap">Roadmap Planning</option>
        <option value="Customer">Customer-Focused Development</option>
      </select>
      {recommendation && (
        <div className="mt-2 p-3 bg-white border rounded">{recommendation}</div>
      )}
    </div>
  );
};

// Quiz component to test your knowledge
const Quiz = () => {
  const quizQuestions = [
    {
      question:
        "Which method categorizes features as Must-Have, Should-Have, Could-Have, and Won't-Have?",
      options: ['MoSCoW', 'RICE', 'Kano'],
      answer: 'MoSCoW'
    },
    {
      question:
        'Which method uses Reach, Impact, Confidence, and Effort for scoring?',
      options: ['MoSCoW', 'RICE', 'Kano'],
      answer: 'RICE'
    },
    {
      question:
        'Which model focuses on customer delight vs. expectation?',
      options: ['MoSCoW', 'RICE', 'Kano'],
      answer: 'Kano'
    }
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (qIndex, value) => {
    setUserAnswers({
      ...userAnswers,
      [qIndex]: value
    });
  };

  const score = quizQuestions.reduce((acc, q, index) => {
    if (userAnswers[index] === q.answer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold mb-2">
        Quiz: Test Your Prioritization Knowledge
      </h3>
      {quizQuestions.map((q, index) => (
        <div key={index} className="mb-4">
          <p className="font-medium">
            {index + 1}. {q.question}
          </p>
          <div className="mt-2">
            {q.options.map((option, i) => (
              <label key={i} className="block">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  className="mr-2"
                  onChange={() => handleOptionChange(index, option)}
                  disabled={showResults}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setShowResults(true)}
      >
        Check Answers
      </button>
      {showResults && (
        <div className="mt-4 p-3 bg-white border rounded">
          <p className="font-medium">
            Your Score: {score} / {quizQuestions.length}
          </p>
          {quizQuestions.map((q, index) => (
            <div key={index} className="mt-2">
              <p>
                <strong>Q{index + 1}:</strong> {q.question}
              </p>
              <p>
                <span
                  className={
                    userAnswers[index] === q.answer
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  Your Answer: {userAnswers[index] || 'Not Answered'}
                </span>{' '}
                |{' '}
                <span className="ml-2 text-green-600">
                  Correct Answer: {q.answer}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PrioritizationTechniques = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Print Button */}
      <div className="flex justify-end mb-4">
        <button
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => window.print()}
        >
          <FaPrint className="mr-2" />
          Print
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center">
        Prioritization Techniques in Product Management
      </h1>
      <p className="text-center mb-8">
        Prioritizing features and tasks effectively is crucial in product
        management to ensure the best use of resources.
      </p>

      {/* Simulation Section */}
      <Simulation />

      {/* MoSCoW Method Section */}
      <CollapsibleSection title="1. MoSCoW Method" Icon={FaTasks}>
        <p className="mb-2">
          <strong>What is it?</strong> The MoSCoW method helps teams categorize
          features into four priority levels:
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>
            <strong>Must-Have:</strong> Essential features needed for the product
            to function.
          </li>
          <li>
            <strong>Should-Have:</strong> Important but not critical features that
            can be delayed.
          </li>
          <li>
            <strong>Could-Have:</strong> Nice-to-have features that enhance the
            experience but are not necessary.
          </li>
          <li>
            <strong>Won’t-Have (for now):</strong> Features that are not a priority
            for the current phase.
          </li>
        </ul>
        <div className="mb-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <strong>Example:</strong>
          <p>
            Imagine you're building a <strong>food delivery app</strong>:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Must-Have:</strong> Order placement, payment integration,
              restaurant listings.
            </li>
            <li>
              <strong>Should-Have:</strong> Order tracking, reviews & ratings.
            </li>
            <li>
              <strong>Could-Have:</strong> Dark mode, loyalty points.
            </li>
            <li>
              <strong>Won’t-Have:</strong> AR-based virtual dining experience.
            </li>
          </ul>
        </div>
        <div className="mb-2 p-2 bg-white border rounded">
          <strong>Use Case:</strong> Ideal for <em>MVP development</em> when teams
          need to define the minimum necessary features for launch.
        </div>
      </CollapsibleSection>

      {/* RICE Scoring Model Section */}
      <CollapsibleSection title="2. RICE Scoring Model" Icon={FaChartBar}>
        <p className="mb-2">
          <strong>What is it?</strong> RICE helps teams prioritize features by
          scoring them based on:
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>
            <strong>R (Reach):</strong> How many users will be affected?
          </li>
          <li>
            <strong>I (Impact):</strong> How significant is the benefit?
          </li>
          <li>
            <strong>C (Confidence):</strong> How sure are we about the impact?
          </li>
          <li>
            <strong>E (Effort):</strong> How much time & resources are needed?
          </li>
        </ul>
        <div className="mb-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <strong>Example:</strong>
          <p>
            You're a PM at a <strong>fitness app</strong> deciding between two
            features:
          </p>
          <ol className="list-decimal ml-6">
            <li>
              <strong>Personalized Workout Plans</strong> (RICE Score: 600)
              <ul className="list-disc ml-6">
                <li>Reach: 50,000 users</li>
                <li>Impact: 4/5</li>
                <li>Confidence: 80%</li>
                <li>Effort: 20 person-days</li>
              </ul>
            </li>
            <li>
              <strong>Live Trainer Support</strong> (RICE Score: 300)
              <ul className="list-disc ml-6">
                <li>Reach: 10,000 users</li>
                <li>Impact: 5/5</li>
                <li>Confidence: 60%</li>
                <li>Effort: 40 person-days</li>
              </ul>
            </li>
          </ol>
          <p className="mt-2">
            Since <strong>Personalized Workout Plans</strong> has a higher RICE
            score, it should be prioritized first.
          </p>
        </div>
        <div className="mb-2 p-2 bg-white border rounded">
          <strong>Use Case:</strong> Perfect for <em>roadmap planning</em>,
          ensuring high-impact features with minimal effort are tackled first.
        </div>
      </CollapsibleSection>

      {/* Kano Model Section */}
      <CollapsibleSection title="3. Kano Model" Icon={FaSmile}>
        <p className="mb-2">
          <strong>What is it?</strong> The Kano Model helps teams categorize features
          based on customer delight vs. expectation:
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>
            <strong>Basic Needs (Must-Have):</strong> Features users expect (e.g.,
            search bar in an e-commerce app).
          </li>
          <li>
            <strong>Performance Features (Linear Satisfaction):</strong> The better
            they are, the happier users are (e.g., app speed).
          </li>
          <li>
            <strong>Excitement Features (Delighters):</strong> Unexpected but delightful
            (e.g., free next-day delivery).
          </li>
        </ul>
        <div className="mb-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <strong>Example:</strong>
          <p>
            You're a PM at a <strong>music streaming app</strong>:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Basic Need:</strong> Users can play & pause songs.
            </li>
            <li>
              <strong>Performance Feature:</strong> Higher audio quality.
            </li>
            <li>
              <strong>Delighter:</strong> AI-powered song recommendations.
            </li>
          </ul>
        </div>
        <div className="mb-2 p-2 bg-white border rounded">
          <strong>Use Case:</strong> Great for customer-focused development,
          balancing basic needs with delight factors.
        </div>
      </CollapsibleSection>

      {/* Quiz Section */}
      <Quiz />
    </div>
  );
};

export default PrioritizationTechniques;
