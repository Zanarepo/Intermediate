import React, { useState } from "react";
import ImpactEffortMatrixCreate from "./ImpactEffortMatrixCreate";
import {
  FaPrint,
  FaBolt,
  FaRocket,
  FaTasks,
  FaHourglassHalf,
  FaList,
  FaCalculator,
  FaChartBar,
  FaTh,
  FaSortAmountDown,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

/* --- Quiz Component --- */
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
    if (selected === correctAnswer) {
      setFeedback("Correct! 🎉");
    } else {
      setFeedback("Incorrect. Try again!");
    }
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

/* --- Interactive Card Component --- */
const InteractiveCard = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded-lg shadow-md mb-6 overflow-hidden transition-all">
      <div
        className="bg-blue-100 hover:bg-blue-200 px-4 py-3 cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="mr-2 text-2xl">{category.icon}</span>
          <h2 className="text-2xl font-bold">{category.title}</h2>
        </div>
        <div className="text-2xl">{isOpen ? "−" : "+"}</div>
      </div>
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          <section className="mb-4">
            <h3 className="font-semibold mb-1">Definition:</h3>
            <p>{category.definition}</p>
          </section>
          <section className="mb-4">
            <h3 className="font-semibold mb-1">Example &amp; Use Case:</h3>
            <p className="mb-1">
              <strong>Example:</strong> {category.example}
            </p>
            <p>
              <strong>Scenario:</strong> {category.scenario}
            </p>
          </section>
          <section className="mb-4">
            <h3 className="font-semibold mb-1">Key Points:</h3>
            <ul className="list-disc ml-6">
              {category.keyPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </section>
          <Quiz
            quizId={category.id}
            question={category.quiz.question}
            options={category.quiz.options}
            correctAnswer={category.quiz.correctAnswer}
          />
        </div>
      )}
    </div>
  );
};

/* --- Simulation Slider Component --- */
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
        Simulation: Mapping &amp; Evaluating Actions
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

/* --- Main Impact Effort Matrix Component --- */
const ImpactEffortMatrix = () => {
  // Data for each category card
  const categories = [
    {
      id: "quickWins",
      title: "Quick Wins",
      icon: <FaBolt />,
      definition:
        "Quick wins are actions that require relatively little effort but provide high value or impact. They are low-cost, fast to implement, and yield immediate benefits.",
      example:
        "Imagine you’re a PM for a mobile app, and customer feedback shows that users are frustrated by a minor bug in the user interface.",
      scenario:
        "Fixing this bug might take only a couple of days and can significantly improve user satisfaction and retention, resulting in a 10% increase in engagement.",
      keyPoints: [
        "Low effort / low cost: Can be done quickly with minimal resources.",
        "High impact: Provides noticeable improvements in the short term.",
        "Builds momentum and boosts team morale.",
      ],
      quiz: {
        question: "Quiz: What best describes Quick Wins?",
        options: [
          { value: "A", text: "High effort and low impact." },
          { value: "B", text: "Low effort and high impact." },
          { value: "C", text: "High effort and high impact." },
          { value: "D", text: "Low effort and low impact." },
        ],
        correctAnswer: "B",
      },
    },
    {
      id: "majorProjects",
      title: "Major Projects",
      icon: <FaRocket />,
      definition:
        "Major projects are initiatives that require significant effort, time, and resources but lead to long-term benefits. They are strategic and often involve multiple teams.",
      example:
        "For a fintech startup, integrating advanced fraud detection into a mobile banking app might take months and require a dedicated team.",
      scenario:
        "Such a project can drastically reduce fraud rates and build long-term customer trust, even though it demands extensive planning.",
      keyPoints: [
        "High effort / high cost: Requires substantial resources and planning.",
        "High long-term impact: Can fundamentally improve the product or market position.",
        "Strategic initiatives often involving cross-functional teams.",
      ],
      quiz: {
        question: "Quiz: Major projects are best characterized by:",
        options: [
          { value: "A", text: "Low effort and high impact." },
          { value: "B", text: "High effort and low impact." },
          { value: "C", text: "High effort and high impact." },
          { value: "D", text: "Low effort and low impact." },
        ],
        correctAnswer: "C",
      },
    },
    {
      id: "fillIns",
      title: "Fill-Ins",
      icon: <FaTasks />,
      definition:
        "Fill-ins are activities that require minimal effort but provide only minimal value. They are often routine tasks that can be completed during spare time.",
      example:
        "Adding an extra FAQ section to a help page requires little time and development effort.",
      scenario:
        "While it might improve the customer experience slightly, it won’t dramatically affect overall usage or revenue.",
      keyPoints: [
        "Low effort / low impact: Easy to implement but don’t significantly move the needle.",
        "Often routine or nice-to-have enhancements.",
        "Useful for keeping teams busy during downtime.",
      ],
      quiz: {
        question: "Quiz: Fill-ins are best used for:",
        options: [
          { value: "A", text: "Major strategic changes." },
          { value: "B", text: "Routine tasks with minimal impact." },
          { value: "C", text: "High-risk innovations." },
          { value: "D", text: "Critical product overhauls." },
        ],
        correctAnswer: "B",
      },
    },
    {
      id: "timeWasters",
      title: "Time-Wasters",
      icon: <FaHourglassHalf />,
      definition:
        "Time-wasters are activities that consume a lot of effort and resources while providing little to no value. They distract from more impactful projects.",
      example:
        "Spending weeks developing a fancy new feature that users don’t care about is a time-waster.",
      scenario:
        "For example, creating a complex animation for a non-critical part of the app may not improve usability or satisfaction enough to justify the time spent.",
      keyPoints: [
        "High effort / low impact: Consumes significant resources with minimal benefit.",
        "Detrimental opportunity cost: Diverts resources from high-impact tasks.",
        "Should be avoided or eliminated.",
      ],
      quiz: {
        question: "Quiz: Time-wasters are characterized by:",
        options: [
          { value: "A", text: "Low effort and high impact." },
          { value: "B", text: "High effort and low impact." },
          { value: "C", text: "High effort and high impact." },
          { value: "D", text: "Low effort and low impact." },
        ],
        correctAnswer: "B",
      },
    },
  ];

  // Data for the simulation slider steps
  const simulationSteps = [
    {
      title: "List Potential Activities",
      icon: <FaList />,
      description:
        "Write down all potential projects, features, or tasks that could add value.",
    },
    {
      title: "Assess Effort/Cost",
      icon: <FaCalculator />,
      description:
        "Evaluate the time, money, and resources required to complete each activity.",
    },
    {
      title: "Evaluate Potential Impact",
      icon: <FaChartBar />,
      description:
        "Determine the expected benefits in both short-term wins and long-term returns.",
    },
    {
      title: "Plot on the Matrix",
      icon: <FaTh />,
      description:
        "Create a two-dimensional grid with Effort/Cost on the X-axis and Impact on the Y-axis.",
    },
    {
      title: "Prioritize",
      icon: <FaSortAmountDown />,
      description:
        "Focus on Quick Wins and Major Projects while scheduling Fill-Ins and eliminating Time-Wasters.",
    },
    {
      title: "Make Decisions",
      icon: <FaCheckCircle />,
      description:
        "Decide which activities to implement based on their position on the matrix.",
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

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Impact Effort Matrix
      </h1>
      <p className="text-center mb-10">
        The Impact Effort Matrix is a strategic tool that helps you evaluate and
        prioritize activities based on the effort required and the potential
        impact. It divides tasks into four categories: Quick Wins, Major
        Projects, Fill-Ins, and Time-Wasters.
      </p>

      {/* Interactive Cards for Each Category */}
      {categories.map((category) => (
        <InteractiveCard key={category.id} category={category} />
      ))}

      {/* Simulation Slider */}
      <SimulationSlider steps={simulationSteps} />

      {/* Mapping and Evaluating Actions Section */}
      <div className="mt-10 p-6 bg-gray-100 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Mapping and Evaluating Actions
        </h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>List Potential Activities:</strong> Write down all possible
            initiatives.
          </li>
          <li>
            <strong>Assess Effort/Cost:</strong> Evaluate the time, money, and
            resources required.
          </li>
          <li>
            <strong>Evaluate Potential Impact:</strong> Consider both short-term
            and long-term benefits.
          </li>
          <li>
            <strong>Plot on the Matrix:</strong> Create a grid with Effort on the
            X-axis and Impact on the Y-axis.
          </li>
          <li>
            <strong>Prioritize:</strong> Focus on Quick Wins and Major Projects,
            use Fill-Ins when you have spare capacity, and avoid Time-Wasters.
          </li>
          <li>
            <strong>Make Decisions:</strong> Decide which actions to implement
            based on their position on the matrix.
          </li>
        </ol>
      </div>

      {/* Final Thoughts */}
      <div className="mt-10 p-6 bg-blue-50 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Final Thoughts</h2>
        <p>
          The Impact Effort Matrix is a powerful tool for prioritizing tasks. It
          helps you quickly see which activities will bring the best return for
          the effort required, allowing you to focus on high-impact tasks while
          avoiding time-wasters. By mapping actions based on effort and impact,
          you can make smarter, data-driven decisions that balance short-term
          wins with long-term strategy.
        </p>
      </div>
      <ImpactEffortMatrixCreate/>
    </div>
  );
};

export default ImpactEffortMatrix;
