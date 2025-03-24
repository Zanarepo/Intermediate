import React, { useState } from 'react';
import {
  FaStar,
  FaUsers,
  FaCheckCircle,
  FaChartLine,
  FaSearch,
  FaMagic,
  FaRedo,
  FaDollarSign,
  FaShareAlt,
} from 'react-icons/fa';

/**
 * Accordion component to show/hide content.
 */
const Accordion = ({ title, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded-lg my-2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
      >
        <div className="flex items-center">
          {Icon && <Icon className="mr-3 text-blue-500" size={24} />}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="text-xl">{isOpen ? '–' : '+'}</div>
      </div>
      {isOpen && <div className="p-4 text-gray-700">{children}</div>}
    </div>
  );
};

/**
 * OverviewComponent displays the core product metrics and KPIs content.
 */
const OverviewComponent = () => {
  return (
    <div>
      {/* North Star Metric */}
      <Accordion title="North Star Metric" icon={FaStar}>
        <p className="mb-2">
          <strong>What It Is:</strong> The single most important metric that reflects the product’s core value.
        </p>
        <p className="mb-2">
          <strong>Example/Use Case:</strong>
        </p>
        <ul className="list-disc ml-6">
          <li>
            For a <em>social networking app</em>, it might be <strong>Daily Active Users (DAU)</strong> – showing how often users engage.
          </li>
          <li>
            For an <em>e-commerce platform</em>, it could be the <strong>number of purchases per month</strong> that drives revenue.
          </li>
        </ul>
      </Accordion>

      {/* Key Business Metrics */}
      <Accordion title="Key Business Metrics" icon={FaChartLine}>
        <p className="mb-2">
          These metrics provide insights into the entire user journey:
        </p>
        <Accordion title="Retention" icon={FaUsers}>
          <p>
            <strong>Definition:</strong> The percentage of users who continue using the product over time.
          </p>
          <p className="mt-2">
            <strong>Example/Use Case:</strong> A streaming service monitors monthly retention rates to determine if users return – helping guide content updates or personalized recommendations.
          </p>
        </Accordion>
        <Accordion title="Conversion" icon={FaCheckCircle}>
          <p>
            <strong>Definition:</strong> The percentage of users who complete a desired action (e.g., sign up, purchase, subscribe).
          </p>
          <p className="mt-2">
            <strong>Example/Use Case:</strong> An e-commerce website might track the conversion rate on product pages to see if design changes boost sales.
          </p>
        </Accordion>
        <Accordion title="Engagement" icon={FaChartLine}>
          <p>
            <strong>Definition:</strong> How actively users interact with your product (e.g., time spent, frequency of visits).
          </p>
          <p className="mt-2">
            <strong>Example/Use Case:</strong> A mobile game measures session length and frequency to decide if new challenges or rewards keep players engaged.
          </p>
        </Accordion>
      </Accordion>

      {/* AARRR Framework */}
      <Accordion title="AARRR Framework" icon={FaShareAlt}>
        <p className="mb-2">
          The AARRR framework breaks down the customer lifecycle into five stages:
        </p>
        <Accordion title="Acquisition" icon={FaSearch}>
          <p>
            <strong>What It Is:</strong> How users discover your product.
          </p>
          <p className="mt-2">
            <strong>Example/Use Case:</strong> Tracking sign-ups from organic search, social media, and paid ads helps identify the most effective channels.
          </p>
        </Accordion>
        <Accordion title="Activation" icon={FaMagic}>
          <p>
            <strong>What It Is:</strong> The initial user experience that leads to a “happy” moment.
          </p>
          <p className="mt-2">
            <strong>Example/Use Case:</strong> For a SaaS tool, activation might be defined as completing an onboarding tutorial or using a key feature.
          </p>
        </Accordion>
        <Accordion title="Retention" icon={FaRedo}>
          <p>
            <strong>What It Is:</strong> The percentage of users who return after their initial experience.
          </p>
          <p className="mt-2">
            <strong>Example/Use Case:</strong> Monitoring weekly active users to see if updates are making the product “sticky.”
          </p>
        </Accordion>
        <Accordion title="Revenue" icon={FaDollarSign}>
          <p>
            <strong>What It Is:</strong> How the product generates income.
          </p>
          <p className="mt-2">
            <strong>Example/Use Case:</strong> A subscription service might track Monthly Recurring Revenue (MRR) to assess the impact of pricing changes.
          </p>
        </Accordion>
        <Accordion title="Referral" icon={FaShareAlt}>
          <p>
            <strong>What It Is:</strong> How often users recommend the product to others.
          </p>
          <p className="mt-2">
            <strong>Example/Use Case:</strong> A referral program that rewards users for inviting friends can be monitored to measure word-of-mouth growth.
          </p>
        </Accordion>
      </Accordion>
    </div>
  );
};

/**
 * QuizComponent tests the user's knowledge with a few simple questions.
 */
const QuizComponent = () => {
  // A simple quiz with questions, options, and answers.
  const questions = [
    {
      question: 'Which metric reflects the product’s core value?',
      options: ['Retention', 'Conversion', 'North Star Metric', 'Engagement'],
      answer: 'North Star Metric',
    },
    {
      question: 'Which metric measures the percentage of users who complete a desired action?',
      options: ['Engagement', 'Conversion', 'Referral', 'Acquisition'],
      answer: 'Conversion',
    },
    {
      question: 'In the AARRR framework, which stage focuses on how users discover your product?',
      options: ['Activation', 'Acquisition', 'Revenue', 'Retention'],
      answer: 'Acquisition',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = () => {
    if (selected === '') return;
    if (selected === questions[currentQuestion].answer) {
      setFeedback('Correct!');
      setScore(score + 1);
    } else {
      setFeedback(`Incorrect. The correct answer is: ${questions[currentQuestion].answer}`);
    }
    setTimeout(() => {
      setFeedback('');
      setSelected('');
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizFinished(true);
      }
    }, 2000);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {quizFinished ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
          <p className="text-lg">Your Score: {score} / {questions.length}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`w-full text-left p-2 border rounded hover:bg-gray-100 ${
                  selected === option ? 'bg-gray-200' : ''
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleAnswer}
            disabled={selected === ''}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Submit Answer
          </button>
          {feedback && <p className="mt-2 font-medium">{feedback}</p>}
        </div>
      )}
    </div>
  );
};

/**
 * SimulationComponent allows users to simulate key product metrics.
 */
const SimulationComponent = () => {
  // State values for our simple simulation.
  const [acquisition, setAcquisition] = useState(1000);
  const [activation, setActivation] = useState(500);
  const [retention, setRetention] = useState(50);
  const [revenue, setRevenue] = useState(200);
  const [referral, setReferral] = useState(30);

  // Compute an example "growth score" based on inputs.
  const growthScore =
    Math.round(
      (acquisition * 0.2 +
        activation * 0.3 +
        retention * 0.2 +
        revenue * 0.2 +
        referral * 0.1) *
        10
    ) / 10;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Product Metrics Simulation</h2>
      <p className="mb-2 text-gray-700">
        Adjust the values below to simulate a real-life product metrics dashboard.
      </p>
      <div className="space-y-4">
        {/* Acquisition */}
        <div>
          <label className="block mb-1 font-medium">Acquisition (New Users)</label>
          <input
            type="number"
            value={acquisition}
            onChange={(e) => setAcquisition(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Activation */}
        <div>
          <label className="block mb-1 font-medium">Activation (First-time Users)</label>
          <input
            type="number"
            value={activation}
            onChange={(e) => setActivation(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Retention */}
        <div>
          <label className="block mb-1 font-medium">Retention (%)</label>
          <input
            type="number"
            value={retention}
            onChange={(e) => setRetention(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Revenue */}
        <div>
          <label className="block mb-1 font-medium">Revenue ($)</label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Referral */}
        <div>
          <label className="block mb-1 font-medium">Referral (Invites)</label>
          <input
            type="number"
            value={referral}
            onChange={(e) => setReferral(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h3 className="text-xl font-semibold mb-2 text-center">Simulated Growth Score</h3>
        <p className="text-center text-3xl font-bold">{growthScore}</p>
        <p className="mt-2 text-center text-gray-600">
          (A higher score suggests better overall performance.)
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Print Simulation Results
        </button>
      </div>
    </div>
  );
};

/**
 * Main component with tabs to switch between Overview, Quiz, and Simulation.
 */
const ProductMetricsInteractive = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Basic Product Metrics & KPIs</h1>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded ${
            activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-2 rounded ${
            activeTab === 'quiz' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Quiz
        </button>
        <button
          onClick={() => setActiveTab('simulation')}
          className={`px-4 py-2 rounded ${
            activeTab === 'simulation' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Simulation
        </button>
      </div>
      <div>
        {activeTab === 'overview' && <OverviewComponent />}
        {activeTab === 'quiz' && <QuizComponent />}
        {activeTab === 'simulation' && <SimulationComponent />}
      </div>
    </div>
  );
};

export default ProductMetricsInteractive;
