import React, { useState } from "react";
import {
  FaPrint,
  FaLightbulb,
  FaBullseye,
  FaSearch,
  FaClipboardCheck,
  FaChartBar,
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

/* --- Interactive Card Component --- */
const InteractiveCard = ({ step }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg shadow-md mb-6 overflow-hidden transition-all">
      <div
        className="bg-purple-100 hover:bg-purple-200 px-4 py-3 cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="mr-2 text-2xl">{step.icon}</span>
          <h2 className="text-2xl font-bold">{step.title}</h2>
        </div>
        <div className="text-2xl">{isOpen ? "−" : "+"}</div>
      </div>
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          {/* Definition */}
          <section className="mb-4">
            <h3 className="font-semibold mb-1">Definition:</h3>
            <p>{step.definition}</p>
          </section>
          {/* What It Means */}
          <section className="mb-4">
            <h3 className="font-semibold mb-1">What It Means:</h3>
            <ul className="list-disc ml-6">
              {step.meaning.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
          {/* Example & Use Case */}
          <section className="mb-4">
            <h3 className="font-semibold mb-1">Example &amp; Use Case:</h3>
            <p>
              <strong>Example:</strong> {step.example}
            </p>
            <p>
              <strong>Use Case:</strong> {step.useCase}
            </p>
          </section>
          {/* Scenario */}
          <section className="mb-4">
            <h3 className="font-semibold mb-1">Scenario:</h3>
            <p>{step.scenario}</p>
          </section>
          {/* Quiz */}
          {step.quiz && (
            <Quiz
              quizId={step.id}
              question={step.quiz.question}
              options={step.quiz.options}
              correctAnswer={step.quiz.correctAnswer}
            />
          )}
        </div>
      )}
    </div>
  );
};

/* --- Simulation Slider Component --- */
const SimulationSlider = ({ steps }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));

  const currentStep = steps[currentIndex];

  return (
    <div className="mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        User Research Process Simulation
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
          <FaArrowLeft className="mr-2" /> Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === steps.length - 1}
          className="flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
        >
          Next <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

/* --- Main User Research Process Component --- */
const UserResearchProcess = () => {
  // Data for each step card
  const researchSteps = [
    {
      id: "stateHypothesis",
      title: "State Hypothesis",
      icon: <FaLightbulb />,
      definition:
        "This step involves stating your assumptions—what you believe you understand about your users and their behaviors, as well as your ideas for potential solutions to their needs. These assumptions are unproven and need validation.",
      meaning: [
        "Assumptions About Users: What you think users do, how they behave, and the challenges they face.",
        "Assumptions About Solutions: Your initial ideas on how your product might solve those challenges.",
      ],
      example:
        'Hypothesis: "We believe that young professionals are frustrated by the complexity of our current mobile banking interface, which causes them to abandon transactions."',
      useCase:
        "A fintech startup planning a redesign hypothesizes that simplifying the interface will improve conversion rates and reduce transaction abandonment.",
      scenario:
        'Imagine your team is preparing to launch a new feature. The PM documents: "Our research suggests that users aged 25–35 struggle with finding the bill pay function because the navigation is not intuitive. Simplifying the menu structure should decrease support calls and increase feature usage."',
      quiz: {
        question: "Quiz: What does 'State Hypothesis' involve?",
        options: [
          {
            value: "A",
            text: "Stating assumptions about users and potential solutions.",
          },
          { value: "B", text: "Setting product pricing." },
          { value: "C", text: "Designing the interface." },
          { value: "D", text: "Determining technical requirements." },
        ],
        correctAnswer: "A",
      },
    },
    {
      id: "defineObjectives",
      title: "Define Objectives",
      icon: <FaBullseye />,
      definition:
        "This step involves setting clear goals for your research. You determine the specific questions you need to answer and the knowledge gaps you want to fill.",
      meaning: [
        "Clarify the Questions: Identify what you want to learn about your users and product.",
        "Outline Research Goals: Define the insights needed to make informed decisions.",
      ],
      example:
        'Objective: "Understand why users are abandoning transactions in the mobile banking app."',
      useCase:
        "When planning a redesign, the PM sets objectives such as identifying friction points in the user journey and understanding overall user satisfaction.",
      scenario:
        'The PM writes objectives like: "Our research aims to determine which steps in the transaction process cause confusion, how users navigate the app, and what improvements can enhance the experience."',
      quiz: {
        question: "Quiz: What is the primary purpose of defining objectives?",
        options: [
          { value: "A", text: "To set clear research goals." },
          { value: "B", text: "To design the user interface." },
          { value: "C", text: "To choose technology platforms." },
          { value: "D", text: "To hire more staff." },
        ],
        correctAnswer: "A",
      },
    },
    {
      id: "selectResearchMethod",
      title: "Select User Research Method",
      icon: <FaSearch />,
      definition:
        "In this step, you choose the research method(s) that best match the insights you need. Your choice depends on the kind of data you want (qualitative vs. quantitative), the time available, and the resources you have.",
      meaning: [
        "Qualitative Methods: Interviews, focus groups, usability tests for in-depth insights.",
        "Quantitative Methods: Surveys, analytics for numerical data.",
        "Mixed-Methods: Combining both for a comprehensive view.",
      ],
      example: 'Method: "Conduct usability tests and follow up with a survey."',
      useCase:
        "If the objective is to understand user frustration, the PM conducts one-on-one usability tests and then distributes surveys to gather broader quantitative data.",
      scenario:
        'A PM opts for remote usability testing to observe user interactions, paired with an online survey to quantify difficulties at specific points.',
      quiz: {
        question:
          "Quiz: Which best describes the process of selecting a research method?",
        options: [
          {
            value: "A",
            text: "Choosing based on available time, resources, and the type of data needed.",
          },
          { value: "B", text: "Randomly selecting a method." },
          { value: "C", text: "Using only qualitative methods." },
          { value: "D", text: "Relying solely on competitor analysis." },
        ],
        correctAnswer: "A",
      },
    },
    {
      id: "conductResearch",
      title: "Conduct Research",
      icon: <FaClipboardCheck />,
      definition:
        "This step is about executing your research plan. It involves recruiting participants, running interviews or tests, distributing surveys, and collecting data.",
      meaning: [
        "Gather Data: Actively engage with users through the chosen methods.",
        "Record Observations: Collect qualitative insights (interviews, tests) and quantitative data (surveys, analytics).",
      ],
      example:
        'Example: "Conduct 10 remote usability testing sessions and follow up with an online survey sent to 500 users."',
      useCase:
        "A PM schedules remote tests using video conferencing tools and prepares a detailed survey to capture comprehensive data.",
      scenario:
        'Imagine your team conducts a series of usability tests where users complete tasks in the app while being observed. The sessions are recorded, and users later complete a survey rating their experience.',
      quiz: {
        question: "Quiz: What does 'Conduct Research' involve?",
        options: [
          {
            value: "A",
            text: "Executing the research plan to collect data.",
          },
          { value: "B", text: "Drafting the product roadmap." },
          { value: "C", text: "Developing new features." },
          { value: "D", text: "Analyzing competitor products." },
        ],
        correctAnswer: "A",
      },
    },
    {
      id: "synthesizeResults",
      title: "Synthesize the Results",
      icon: <FaChartBar />,
      definition:
        "This final step involves analyzing the collected data to answer your research questions and determine whether your initial hypotheses are valid. You derive actionable insights from the data.",
      meaning: [
        "Data Analysis: Organize and review both qualitative and quantitative data.",
        "Identify Patterns: Look for recurring themes, pain points, and trends.",
        "Validate Hypotheses: Determine which assumptions were correct and adjust those that weren’t.",
      ],
      example:
        'Example: "After analyzing data, 70% of users struggle with the navigation menu, confirming our hypothesis that it is too complex."',
      useCase:
        "A PM synthesizes feedback from usability tests and surveys to find that users are overwhelmed by too many options, leading to a recommendation to simplify the menu.",
      scenario:
        'After research, the PM summarizes: "Data from 10 usability tests and 500 survey responses reveal consistent navigation issues. The insights confirm our hypothesis and indicate a need to streamline the interface, potentially improving task completion rates by 20%."',
      quiz: {
        question: "Quiz: What is the goal of synthesizing the research results?",
        options: [
          {
            value: "A",
            text: "To derive actionable insights and validate hypotheses.",
          },
          { value: "B", text: "To design a new interface immediately." },
          { value: "C", text: "To ignore user feedback." },
          { value: "D", text: "To determine the product pricing." },
        ],
        correctAnswer: "A",
      },
    },
  ];

  // Data for simulation slider steps
  const simulationSteps = [
    {
      title: "State Hypothesis",
      icon: <FaLightbulb />,
      description:
        "Document your assumptions about user behavior and potential solutions. For example, young professionals might struggle with complex navigation in a mobile banking app.",
    },
    {
      title: "Define Objectives",
      icon: <FaBullseye />,
      description:
        "Set clear research goals and identify the specific questions and knowledge gaps you need to address.",
    },
    {
      title: "Select Research Method",
      icon: <FaSearch />,
      description:
        "Choose the appropriate research methods (qualitative, quantitative, or mixed) based on the insights you need and the resources available.",
    },
    {
      title: "Conduct Research",
      icon: <FaClipboardCheck />,
      description:
        "Execute your research plan by recruiting participants, conducting tests or interviews, and collecting data through surveys and observations.",
    },
    {
      title: "Synthesize the Results",
      icon: <FaChartBar />,
      description:
        "Analyze the collected data to identify patterns, validate your hypotheses, and derive actionable insights for product decisions.",
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
          <FaPrint className="mr-2" /> Print
        </button>
      </div>

      {/* Title & Introduction */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-center mb-4">User Research Process</h1>
        <p className="text-center text-lg">
          Follow these steps to validate assumptions, fill knowledge gaps, and drive data-informed product decisions.
        </p>
      </header>

      {/* Interactive Cards for Each Step */}
      <section className="mb-10">
        {researchSteps.map((step) => (
          <InteractiveCard key={step.id} step={step} />
        ))}
      </section>

      {/* Simulation Slider */}
      <SimulationSlider steps={simulationSteps} />

      {/* Final Thoughts */}
      <section className="mt-10 p-6 bg-blue-50 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Final Thoughts</h2>
        <p>
          By following these steps—State Hypothesis, Define Objectives, Select a Research Method, Conduct Research, and Synthesize the Results—Product Managers can systematically validate assumptions, gain critical insights, and make data-informed decisions to create products that truly resonate with users.
        </p>
      </section>
    </div>
  );
};

export default UserResearchProcess;
