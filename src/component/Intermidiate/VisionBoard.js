import React, { useState } from "react";
import VisionDisplay from './VisionDisplay'
import VisionBoardCreate from './VisionBoardCreate'

import {
  FaPrint,
  FaUsers,
  FaExclamationTriangle,
  FaLightbulb,
  FaBullseye,
  FaStar,
  FaQuoteRight,
  FaLaptop,
  FaArrowLeft,
  FaArrowRight,
  FaMobileAlt,
  FaNetworkWired,
} from "react-icons/fa";

/* Quiz Component */
const Quiz = ({ quizId, question, options, correctAnswer }) => {
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleOptionChange = (e) => {
    setSelected(e.target.value);
    setFeedback("");
  };

  const handleSubmit = () => {
    if (!selected) {
      setFeedback("Please select an answer.");
      return;
    }
    setFeedback(selected === correctAnswer ? "Correct! 🎉" : "Incorrect. Try again!");
  };

  return (
    <div className="bg-gray-50 p-4 rounded border mt-4">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      {options.map((option, index) => (
        <label key={index} className="block mb-2 cursor-pointer">
          <input
            type="radio"
            name={quizId}
            value={option.value}
            onChange={handleOptionChange}
            className="mr-2"
          />
          {option.text}
        </label>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
      >
        Submit Answer
      </button>
      {feedback && (
        <div
          className={`mt-2 font-bold ${
            feedback.startsWith("Correct") ? "text-green-500" : "text-red-500"
          }`}
        >
          {feedback}
        </div>
      )}
    </div>
  );
};

/* Interactive Card Component */
const InteractiveCard = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded-lg shadow-md mb-6 overflow-hidden transition-all">
      <div
        className="bg-indigo-100 hover:bg-indigo-200 px-4 py-3 cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="mr-2 text-2xl">{section.icon}</span>
          <h2 className="text-2xl font-bold">{section.title}</h2>
        </div>
        <div className="text-2xl">{isOpen ? "−" : "+"}</div>
      </div>
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          <section className="mb-4">
            <h3 className="font-semibold mb-1">Definition:</h3>
            <p>{section.definition}</p>
          </section>
          <section className="mb-4">
            <h3 className="font-semibold mb-1">Example:</h3>
            <p>{section.example}</p>
          </section>
          {section.scenario && (
            <section className="mb-4">
              <h3 className="font-semibold mb-1">Scenario:</h3>
              <p>{section.scenario}</p>
            </section>
          )}
          {section.keyPoints && (
            <section className="mb-4">
              <h3 className="font-semibold mb-1">Key Points:</h3>
              <ul className="list-disc ml-6">
                {section.keyPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </section>
          )}
          {section.quiz && (
            <Quiz
              quizId={section.id}
              question={section.quiz.question}
              options={section.quiz.options}
              correctAnswer={section.quiz.correctAnswer}
            />
          )}
        </div>
      )}
    </div>
  );
};

/* Simulation Slider Component */
const SimulationSlider = ({ steps }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const currentStep = steps[currentIndex];

  return (
    <div className="mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Vision Board Simulation
      </h2>
      <div className="p-4 border rounded mb-4">
        <div className="flex items-center mb-2">
          <span className="mr-2 text-2xl">{currentStep.icon}</span>
          <span className="text-xl font-semibold">{currentStep.title}</span>
        </div>
        <p>{currentStep.description}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
        >
          <FaArrowLeft className="mr-2" />
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === steps.length - 1}
          className="flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

/* --- Main Product Vision Board Component --- */
const ProductVisionBoard = () => {
  // Data for core components (interactive cards)
  const coreComponents = [
    {
      id: "targetAudience",
      title: "Target Audience",
      icon: <FaUsers />,
      definition:
        "Who are the users or customers that the product is intended for?",
      example:
        'Example: "Tech-savvy millennials in urban areas who are underserved by traditional banking."',
      keyPoints: [
        "Clarifies who the product is built for.",
        "Helps tailor marketing and design strategies.",
      ],
      quiz: {
        question: "Quiz: Who best describes the target audience in our example?",
        options: [
          { value: "A", text: "Retirees in rural areas" },
          { value: "B", text: "Tech-savvy millennials in urban areas" },
          { value: "C", text: "Traditional bank customers" },
          { value: "D", text: "Young children" },
        ],
        correctAnswer: "B",
      },
    },
    {
      id: "userNeeds",
      title: "User Needs / Problems",
      icon: <FaExclamationTriangle />,
      definition:
        "What key challenges or pain points do the target users experience?",
      example:
        'Example: "Users find traditional banking apps too cumbersome and time-consuming."',
      keyPoints: [
        "Identifies the problems that need solving.",
        "Drives the direction for the product solution.",
      ],
      quiz: {
        question: "Quiz: User needs/problems refer to:",
        options: [
          { value: "A", text: "The technical specifications of the product" },
          { value: "B", text: "The challenges faced by users" },
          { value: "C", text: "The company’s revenue goals" },
          { value: "D", text: "The design aesthetics only" },
        ],
        correctAnswer: "B",
      },
    },
    {
      id: "productSolution",
      title: "Product Solution",
      icon: <FaLightbulb />,
      definition:
        "What is the core idea or value proposition of the product?",
      example:
        'Example: "A sleek, intuitive mobile banking app that simplifies everyday transactions."',
      keyPoints: [
        "Highlights how the product solves the users’ problems.",
        "Differentiates the product from competitors.",
      ],
      quiz: {
        question: "Quiz: The product solution should:",
        options: [
          { value: "A", text: "Only focus on aesthetics" },
          { value: "B", text: "Clearly address user problems" },
          { value: "C", text: "Ignore competitor features" },
          { value: "D", text: "Be vague about its benefits" },
        ],
        correctAnswer: "B",
      },
    },
    {
      id: "businessGoals",
      title: "Business Goals",
      icon: <FaBullseye />,
      definition:
        "What are the long-term objectives for the product from a business perspective?",
      example:
        'Example: "Achieve 1 million active users in the first year, increase customer retention by 20%, and open new revenue streams through partnerships."',
      keyPoints: [
        "Aligns the product with company strategy.",
        "Helps measure success over time.",
      ],
      quiz: {
        question: "Quiz: Business goals help to:",
        options: [
          { value: "A", text: "Set vague targets" },
          { value: "B", text: "Measure long-term success" },
          { value: "C", text: "Focus solely on design" },
          { value: "D", text: "Ignore user needs" },
        ],
        correctAnswer: "B",
      },
    },
    {
      id: "keyDifferentiators",
      title: "Key Differentiators",
      icon: <FaStar />,
      definition:
        "What makes the product unique compared to competitors?",
      example:
        'Example: "A unique blend of innovative security features (like biometric authentication) combined with a user-friendly interface."',
      keyPoints: [
        "Highlights unique selling points.",
        "Provides competitive advantage.",
      ],
      quiz: {
        question: "Quiz: Key differentiators should:",
        options: [
          { value: "A", text: "Be the same as competitors" },
          { value: "B", text: "Show what makes the product unique" },
          { value: "C", text: "Ignore user feedback" },
          { value: "D", text: "Focus on cost reduction only" },
        ],
        correctAnswer: "B",
      },
    },
    {
      id: "visionStatement",
      title: "Vision Statement",
      icon: <FaQuoteRight />,
      definition:
        "A concise statement that encapsulates the overarching goal of the product.",
      example:
        'Example: "Empowering users to manage their finances effortlessly and securely from their smartphones."',
      keyPoints: [
        "Serves as the product’s North Star.",
        "Guides decision-making across teams.",
      ],
      quiz: {
        question: "Quiz: The vision statement should:",
        options: [
          { value: "A", text: "Be long and detailed" },
          { value: "B", text: "Concise and inspiring" },
          { value: "C", text: "Exclude customer needs" },
          { value: "D", text: "Focus solely on profits" },
        ],
        correctAnswer: "B",
      },
    },
  ];

  // Data for use case cards
  const useCases = [
    {
      id: "useCase1",
      title: "Use Case: Mobile Banking App",
      icon: <FaMobileAlt />,
      definition:
        "A fintech startup uses a Vision Board to align stakeholders around launching a mobile banking app.",
      example:
        "The board identifies urban millennials as the target audience, highlights their need for a simple, fast, and secure financial management tool, and outlines key features like biometric login and budgeting tools.",
      scenario:
        "During a vision workshop, the PM, along with designers, engineers, and marketing, agrees on a clear value proposition that drives feature prioritization and guides marketing efforts.",
      keyPoints: [
        "Aligns the team on customer needs and strategic goals.",
        "Prioritizes high-impact features like biometric security.",
        "Serves as a reference during product development and launch.",
      ],
      quiz: {
        question: "Quiz: What is the primary impact of using a Vision Board for a mobile banking app?",
        options: [
          { value: "A", text: "It delays the project timeline." },
          { value: "B", text: "It aligns teams and prioritizes high-impact features." },
          { value: "C", text: "It focuses only on design aesthetics." },
          { value: "D", text: "It ignores user feedback." },
        ],
        correctAnswer: "B",
      },
    },
    {
      id: "useCase2",
      title: "Use Case: Professional Networking Platform",
      icon: <FaNetworkWired />,
      definition:
        "A company leverages a Vision Board to launch a networking platform for freelancers and entrepreneurs.",
      example:
        "The board defines the target audience as freelancers and startup founders, emphasizes the need for networking and mentorship, and outlines a solution that integrates job-matching with community features.",
      scenario:
        "The PM uses the Vision Board to set strategic goals—such as reaching 500,000 active users—and to differentiate the platform through intelligent matching algorithms and a community-driven interface.",
      keyPoints: [
        "Clarifies the product’s unique value proposition.",
        "Guides feature prioritization and strategic goals.",
        "Helps communicate the vision to investors and early adopters.",
      ],
      quiz: {
        question: "Quiz: The Vision Board for the networking platform primarily helps to:",
        options: [
          { value: "A", text: "Ignore market trends." },
          { value: "B", text: "Guide strategic feature prioritization." },
          { value: "C", text: "Focus only on short-term gains." },
          { value: "D", text: "Eliminate the need for marketing." },
        ],
        correctAnswer: "B",
      },
    },
  ];

  // Data for simulation slider steps
  const simulationSteps = [
    {
      title: "Identify Target Audience",
      icon: <FaUsers />,
      description:
        "Determine who your product is for by identifying key demographics and user segments.",
    },
    {
      title: "Define User Needs/Problems",
      icon: <FaExclamationTriangle />,
      description:
        "List the main challenges or pain points your target users face.",
    },
    {
      title: "Develop the Product Solution",
      icon: <FaLightbulb />,
      description:
        "Outline how your product addresses the user needs with a unique solution.",
    },
    {
      title: "Set Business Goals",
      icon: <FaBullseye />,
      description:
        "Establish clear, measurable long-term objectives for your product.",
    },
    {
      title: "Determine Key Differentiators",
      icon: <FaStar />,
      description:
        "Identify what makes your product stand out from the competition.",
    },
    {
      title: "Craft the Vision Statement",
      icon: <FaQuoteRight />,
      description:
        "Create a concise statement that captures the product's ultimate goal.",
    },
    {
      title: "Align & Refine the Vision",
      icon: <FaLaptop />,
      description:
        "Review and adjust your Vision Board with feedback from stakeholders to ensure clarity and alignment.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Print Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => window.print()}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          <FaPrint className="mr-2" />
          Print
        </button>
      </div>

      {/* Title and Introduction */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-center mb-4">
          Product Vision Board
        </h1>
        <p className="text-center text-lg">
          A Vision Board in product management is a strategic tool used to
          articulate, visualize, and align the long-term vision and strategy of a
          product. It serves as a "North Star" guiding decisions from development
          to marketing.
        </p>
      </header>

      {/* Core Components Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Core Components</h2>
        {coreComponents.map((component) => (
          <InteractiveCard key={component.id} section={component} />
        ))}
      </section>

      {/* Use Cases & Real-Life Scenarios Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Use Cases &amp; Real-Life Scenarios</h2>
        {useCases.map((useCase) => (
          <InteractiveCard key={useCase.id} section={useCase} />
        ))}
      </section>

      {/* Benefits Section */}
      <section className="mb-10 p-6 bg-gray-100 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Benefits of a Product Vision Board</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Alignment:</strong> Ensures all stakeholders share a common
            understanding of the product’s purpose.
          </li>
          <li>
            <strong>Clarity:</strong> Breaks down complex goals into clear, actionable
            components.
          </li>
          <li>
            <strong>Communication:</strong> Serves as a visual reference for internal and
            external stakeholders.
          </li>
          <li>
            <strong>Decision-Making:</strong> Provides a framework to evaluate new ideas
            against the core vision.
          </li>
        </ul>
      </section>

      {/* Simulation Slider */}
      <SimulationSlider steps={simulationSteps} />

      {/* Final Thoughts */}
      <section className="mt-10 p-6 bg-blue-50 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Final Thoughts</h2>
        <p>
          A Product Vision Board is a dynamic tool that evolves with your product.
          By clearly outlining your target audience, user needs, product solution,
          business goals, and key differentiators, it becomes the cornerstone of your
          product strategy. Use it to stay aligned, make informed decisions, and
          communicate your strategy effectively across teams.
        </p>
    
      </section>
      <VisionDisplay/>
      <VisionBoardCreate/>
    </div>
    
  );
};

export default ProductVisionBoard;
