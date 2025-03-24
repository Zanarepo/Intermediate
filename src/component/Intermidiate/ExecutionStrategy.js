import React, { useState } from "react";

/* ------------------- Quiz Component ------------------- */
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
            feedback.startsWith("Correct")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {feedback}
        </div>
      )}
    </div>
  );
};

/* ------------------- Simulation Component ------------------- */
const RoadmapSimulation = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const current = steps[currentStep];

  return (
    <div className="mt-10 p-4 border-t pt-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span className="mr-2">🚦</span>Interactive Roadmap Simulation
      </h2>
      {/* Navigation Timeline */}
      <div className="flex justify-around items-center mb-6 overflow-x-auto">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`flex flex-col items-center p-3 m-1 rounded-full transition-colors
              ${
                index === currentStep
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-blue-300"
              }`}
          >
            <span className="text-3xl">{step.icon}</span>
            <span className="mt-1 text-sm font-medium">{step.title}</span>
          </button>
        ))}
      </div>
      {/* Simulation Details */}
      <div className="bg-white shadow rounded p-6">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">{current.icon}</span>
          <h3 className="text-2xl font-bold">{current.title}</h3>
        </div>
        <p className="mb-3">{current.description}</p>
        <table className="min-w-full border-collapse mb-3">
          <thead>
            <tr className="bg-gray-100">
              {current.tableHeaders &&
                current.tableHeaders.map((header, idx) => (
                  <th key={idx} className="border px-4 py-2 text-left">
                    {header}
                  </th>
                ))}
            </tr>
          </thead>
          {current.tableData && (
            <tbody>
              {current.tableData.map((row, idx) => (
                <tr key={idx}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="border px-4 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
        <div className="flex justify-between mt-4">
          <button
            onClick={() =>
              setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev))
            }
            disabled={currentStep === 0}
            className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentStep((prev) =>
                prev < steps.length - 1 ? prev + 1 : prev
              )
            }
            disabled={currentStep === steps.length - 1}
            className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

/* ------------------- Main Execution & Strategy Component ------------------- */
const ExecutionStrategy = () => {
  // Data for simulation steps
  const simulationSteps = [
    {
      title: "Vision",
      icon: "🏞️",
      description:
        "Your vision is the destination—the long-term, inspiring goal. For example, Instagram’s vision is to empower people to share the world’s moments beautifully.",
      tableHeaders: ["Aspect", "Description"],
      tableData: [
        ["What It Is", "The ultimate picture of success"],
        [
          "Everyday Analogy",
          "The destination on your travel map"
        ],
        [
          "Example",
          '“To empower people to capture and share moments in a creative way.”'
        ],
      ],
    },
    {
      title: "Strategy",
      icon: "🗺️",
      description:
        "Your strategy is your map—the plan outlining how to reach your vision. It defines focus areas and competitive advantages. Instagram’s strategy, for instance, is built around a mobile-first design and simple, engaging features.",
      tableHeaders: ["Aspect", "Description"],
      tableData: [
        ["What It Is", "The plan or guidelines to achieve the vision"],
        [
          "Everyday Analogy",
          "The route and stops on your journey"
        ],
        [
          "Example",
          "Focus on mobile-first experience, filters, and community building."
        ],
      ],
    },
    {
      title: "Execution",
      icon: "🚗",
      description:
        "Execution is the journey—the day-to-day tasks and projects that bring your strategy to life. It involves building the product, running campaigns, and iterating based on feedback.",
      tableHeaders: ["Aspect", "Description"],
      tableData: [
        ["What It Is", "The daily work that makes the strategy real"],
        [
          "Everyday Analogy",
          "Driving along your planned route"
        ],
        [
          "Example",
          "Developing Instagram’s app, adding features like Stories and filters."
        ],
      ],
    },
    {
      title: "Roadmap",
      icon: "🗓️",
      description:
        "A product roadmap is your strategic itinerary. It outlines the themes, epics, features, timelines, and milestones that guide your team. Think of it as planning your road trip step by step.",
      tableHeaders: ["Component", "Example"],
      tableData: [
        ["Themes/Objectives", "Enhance User Engagement"],
        ["Epics/Features", "Develop Stories, In-App Messaging"],
        ["Timeline", "Organized by quarter or sprint"],
        ["Milestones", "MVP Launch, Beta Testing"],
      ],
    },
    {
      title: "Stakeholder Alignment",
      icon: "🤝",
      description:
        "Aligning stakeholders means ensuring that everyone—from executives to team members—is on the same page. This involves clear communication, realistic goal setting, and regular feedback.",
      tableHeaders: ["Tip", "Action"],
      tableData: [
        ["Regular Communication", "Hold meetings and share updates"],
        ["Clear Documentation", "Use visual roadmaps and reports"],
        [
          "Feedback Loops",
          "Encourage input and adjust plans as needed"
        ],
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Print Button */}
      <button
        onClick={() => window.print()}
        className="mb-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded inline-flex items-center"
      >
        <svg
          className="w-5 h-5 mr-2 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 8h-1V3H6v5H5c-1.1 0-2 .9-2 2v5h4v4h10v-4h4v-5c0-1.1-.9-2-2-2zm-8 11H8v-4h3v4zm5 0h-3v-4h3v4zM17 6V4h-2v2H9V4H7v2H5v2h14V6h-2z" />
        </svg>
        Print
      </button>

      {/* Header & Objective */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Execution &amp; Strategy</h1>
        <p className="text-lg text-gray-700">
          Objective: Equip yourself with the ability to create a clear product vision, develop a strategy to get there, and execute your plans through an actionable product roadmap. Learn how to bring all stakeholders together and manage their expectations as you move forward.
        </p>
      </header>

      {/* ================== 1. Product Strategy & Roadmapping ================== */}
      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <span className="mr-2">📊</span>Product Strategy &amp; Roadmapping
        </h2>

        {/* A. Vision vs. Strategy vs. Execution */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 flex items-center">
            <span className="mr-2">🚦</span>Vision vs. Strategy vs. Execution
          </h3>
          <p className="mb-4">
            Understanding these differences is like planning a long road trip. Your vision is the destination, your strategy is the map, and execution is the journey.
          </p>
          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Concept</th>
                  <th className="border px-4 py-2">Description</th>
                  <th className="border px-4 py-2">Everyday Analogy</th>
                  <th className="border px-4 py-2">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Vision</td>
                  <td className="border px-4 py-2">
                    The long-term, inspiring goal that defines why you’re building the product.
                  </td>
                  <td className="border px-4 py-2">The destination on your map.</td>
                  <td className="border px-4 py-2">
                    “To empower people to capture and share moments creatively.” (Instagram)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Strategy</td>
                  <td className="border px-4 py-2">
                    The plan or guidelines that outline how you’ll reach your vision.
                  </td>
                  <td className="border px-4 py-2">The map with roads and stops.</td>
                  <td className="border px-4 py-2">
                    Focus on mobile-first design and community building.
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Execution</td>
                  <td className="border px-4 py-2">
                    The day-to-day work that turns the strategy into reality.
                  </td>
                  <td className="border px-4 py-2">Driving the route and handling detours.</td>
                  <td className="border px-4 py-2">
                    Building the app, launching features like Stories and filters.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Quiz for Vision vs. Strategy vs. Execution */}
          <Quiz
            quizId="quiz-vision-strategy-execution"
            question="What does 'Strategy' represent in the road trip analogy?"
            options={[
              { value: "A", text: "The destination." },
              { value: "B", text: "The map with the planned route." },
              { value: "C", text: "The journey along the route." },
              { value: "D", text: "The vehicle used for travel." },
            ]}
            correctAnswer="B"
          />
        </div>

        {/* B. Creating a Product Roadmap */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 flex items-center">
            <span className="mr-2">🗓️</span>Creating a Product Roadmap
          </h3>
          <p className="mb-4">
            A product roadmap is your strategic itinerary—it shows where your product is headed, what features will be built, and when you expect to deliver them.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Themes/Objectives:</strong> Broad areas of focus (e.g., “Enhance User Engagement”).
            </li>
            <li>
              <strong>Epics/Features:</strong> Large pieces of work broken into smaller functionalities (e.g., “Develop Stories feature”).
            </li>
            <li>
              <strong>Timeline:</strong> When work will begin and end (organized by quarter, month, or sprint).
            </li>
            <li>
              <strong>Milestones:</strong> Important progress markers (e.g., “MVP Launch”, “Beta Testing Begins”).
            </li>
          </ul>
          {/* Example Table for a Fitness App Roadmap */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Quarter</th>
                  <th className="border px-4 py-2">Focus</th>
                  <th className="border px-4 py-2">Key Activities</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Q1</td>
                  <td className="border px-4 py-2">Define Vision &amp; Core Features</td>
                  <td className="border px-4 py-2">Build the MVP</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Q2</td>
                  <td className="border px-4 py-2">Launch &amp; Feedback</td>
                  <td className="border px-4 py-2">Launch MVP, gather feedback, iterate</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Q3</td>
                  <td className="border px-4 py-2">Introduce Premium Features</td>
                  <td className="border px-4 py-2">Develop personalized training plans</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Q4</td>
                  <td className="border px-4 py-2">Expand &amp; Refine</td>
                  <td className="border px-4 py-2">Launch on additional platforms, refine UX</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Quiz for Product Roadmap */}
          <Quiz
            quizId="quiz-roadmap"
            question="What is the main purpose of a product roadmap?"
            options={[
              { value: "A", text: "To detail every single task for developers." },
              { value: "B", text: "To outline the strategic itinerary with themes, features, timelines, and milestones." },
              { value: "C", text: "To list all marketing activities for the product launch." },
              { value: "D", text: "To present the final product design only." },
            ]}
            correctAnswer="B"
          />
        </div>

        {/* C. Aligning Stakeholders & Managing Expectations */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 flex items-center">
            <span className="mr-2">🤝</span>Aligning Stakeholders &amp; Managing Expectations
          </h3>
          <p className="mb-4">
            For a product to succeed, everyone involved must be on the same page. This means regular communication, clear documentation, and transparent feedback loops.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Who Are Stakeholders?</strong> Company leadership, team members, investors, customers, and partners.
            </li>
            <li>
              <strong>How to Align Them:</strong> Regular meetings, updates, shared roadmaps, and collaborative tools.
            </li>
            <li>
              <strong>Managing Expectations:</strong> Set realistic goals, be transparent about challenges, and show progress with demos or reports.
            </li>
          </ul>
          {/* Quiz for Stakeholder Alignment */}
          <Quiz
            quizId="quiz-stakeholders"
            question="Which of the following is a key method for aligning stakeholders?"
            options={[
              { value: "A", text: "Avoiding regular communication." },
              { value: "B", text: "Using clear documentation and frequent updates." },
              { value: "C", text: "Keeping plans secret until launch." },
              { value: "D", text: "Only updating once a year." },
            ]}
            correctAnswer="B"
          />
        </div>
      </section>

      {/* ================== Interactive Simulation: Roadmap Journey ================== */}
      <RoadmapSimulation steps={simulationSteps} />

      {/* ================== Final Thoughts ================== */}
      <section className="mt-10 pt-6 border-t">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <span className="mr-2">💡</span>Final Thoughts
        </h2>
        <p className="text-lg">
          By understanding the difference between vision, strategy, and execution, you lay the foundation for a successful product. A well-crafted product roadmap guides your team and aligns everyone toward the same goal, while clear stakeholder communication prevents misunderstandings. Digital giants like Instagram use these frameworks to build products that evolve and captivate millions.
        </p>
      </section>
    </div>
  );
};

export default ExecutionStrategy;
