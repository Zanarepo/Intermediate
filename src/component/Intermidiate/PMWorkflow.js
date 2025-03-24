import React, { useState } from "react";
import {
  FaPrint,
  FaUsers,
  FaCogs,
  FaComments,
  FaFileAlt,
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

/* --- Simulation Component --- */
const Simulation = () => {
  const stages = [
    {
      title: "Working with Engineering & Design Teams",
      icon: <FaUsers className="inline-block mr-2 text-blue-500" />,
      summary:
        "Bridge business goals and technical execution. Collaborate with design on mockups and with engineering on feasibility and API requirements.",
    },
    {
      title: "Understanding Technical Constraints",
      icon: <FaCogs className="inline-block mr-2 text-red-500" />,
      summary:
        "Identify limits such as legacy code, scalability issues, and security requirements. Adjust scope or plan upgrades accordingly.",
    },
    {
      title: "Collaboration Best Practices",
      icon: <FaComments className="inline-block mr-2 text-green-500" />,
      summary:
        "Hold regular meetings (standups, sprint planning), maintain clear documentation, encourage open communication, and have feedback loops.",
    },
    {
      title: "Writing PRDs",
      icon: <FaFileAlt className="inline-block mr-2 text-purple-500" />,
      summary:
        "Create a detailed blueprint including objectives, user stories, specifications, acceptance criteria, and dependencies.",
    },
  ];

  const [currentStage, setCurrentStage] = useState(0);

  const handleNext = () => {
    setCurrentStage((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentStage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="mt-8 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Interactive Simulation
      </h2>
      <div className="p-4 border rounded mb-4">
        <div className="flex items-center mb-2">
          {stages[currentStage].icon}
          <span className="text-xl font-semibold">
            {stages[currentStage].title}
          </span>
        </div>
        <p>{stages[currentStage].summary}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          disabled={currentStage === 0}
          className="flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
        >
          <FaArrowLeft className="mr-2" />
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStage === stages.length - 1}
          className="flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

/* --- Main Component --- */
const PMWorkflow = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
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

      {/* Section 1: Working with Engineering & Design Teams */}
      <section className="mb-10 border-b pb-6">
        <h2 className="text-3xl font-bold flex items-center mb-4">
          <FaUsers className="mr-2 text-blue-500" />
          Working with Engineering &amp; Design Teams
        </h2>
        <div className="space-y-4">
          <p>
            <strong>What It Means:</strong> As a PM, you serve as the bridge
            between business goals and technical execution. You work closely
            with both engineering and design teams to ensure the product meets
            customer needs, is technically feasible, and looks and feels great.
          </p>
          <div>
            <h3 className="text-xl font-semibold">Key Responsibilities:</h3>
            <ul className="list-disc ml-6">
              <li>
                <strong>Translating Requirements:</strong> Explain customer
                needs and business goals in a way that technical teams can build
                and designers can visualize.
              </li>
              <li>
                <strong>Facilitating Communication:</strong> Organize meetings,
                stand-ups, and review sessions so everyone stays on the same page.
              </li>
              <li>
                <strong>Prioritizing Tasks:</strong> Help teams understand which
                features are most important and need to be built first.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Real-World Example:</h3>
            <p>
              Imagine you’re working on a new mobile banking app. Customer
              feedback shows that users want an easier way to check their
              account balances. You collaborate with the Design Team to sketch
              clear, simple dashboard mockups and with the Engineering Team to
              discuss backend API changes and security considerations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Use-Case Scenario:</h3>
            <p>
              You set up a workshop where designers present layout ideas and
              engineers explain potential technical constraints. Together, you
              reach a consensus on a solution that is both user-friendly and
              feasible.
            </p>
          </div>
        </div>
        <Quiz
          quizId="quiz1"
          question="Quiz: What is one key responsibility when working with engineering and design teams?"
          options={[
            { value: "A", text: "Translating customer needs into technical requirements." },
            { value: "B", text: "Working independently without team input." },
            { value: "C", text: "Avoiding meetings to save time." },
            { value: "D", text: "Prioritizing personal ideas over customer needs." },
          ]}
          correctAnswer="A"
        />
      </section>

      {/* Section 2: Understanding Technical Constraints */}
      <section className="mb-10 border-b pb-6">
        <h2 className="text-3xl font-bold flex items-center mb-4">
          <FaCogs className="mr-2 text-red-500" />
          Understanding Technical Constraints
        </h2>
        <div className="space-y-4">
          <p>
            <strong>What It Means:</strong> Technical constraints are the
            limitations imposed by technology, infrastructure, or existing
            systems. They can include hardware limitations, legacy code issues,
            performance bottlenecks, or integration challenges.
          </p>
          <div>
            <h3 className="text-xl font-semibold">Key Points:</h3>
            <ul className="list-disc ml-6">
              <li>
                <strong>Feasibility:</strong> Not every idea can be built as
                envisioned.
              </li>
              <li>
                <strong>Scalability:</strong> Can the solution handle growth?
              </li>
              <li>
                <strong>Security &amp; Compliance:</strong> Some features must
                meet strict regulations.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Real-World Example:</h3>
            <p>
              When planning a video conferencing feature, engineers might note
              that current servers can’t support high-resolution streams for
              thousands of users—forcing the team to optimize video compression
              or phase the rollout.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Use-Case Scenario:</h3>
            <p>
              In a planning session for a real-time chat feature, engineers
              reveal that the database isn’t optimized for high-frequency writes.
              The PM then collaborates with the team to adjust the feature scope
              or plan for a backend upgrade.
            </p>
          </div>
        </div>
        <Quiz
          quizId="quiz2"
          question="Quiz: What is a critical aspect to consider regarding technical constraints?"
          options={[
            { value: "A", text: "Only design aesthetics matter." },
            { value: "B", text: "Feasibility, scalability, and security." },
            { value: "C", text: "Avoiding any change to existing systems." },
            { value: "D", text: "Prioritizing speed over quality." },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* Section 3: Collaboration Best Practices */}
      <section className="mb-10 border-b pb-6">
        <h2 className="text-3xl font-bold flex items-center mb-4">
          <FaComments className="mr-2 text-green-500" />
          Collaboration Best Practices
        </h2>
        <div className="space-y-4">
          <p>
            <strong>What It Means:</strong> Collaboration best practices help
            teams work together efficiently, avoid misunderstandings, and
            deliver successful products.
          </p>
          <div>
            <h3 className="text-xl font-semibold">Key Best Practices:</h3>
            <ul className="list-disc ml-6">
              <li>
                <strong>Regular Meetings:</strong> Daily standups, sprint
                planning, and “Show &amp; Tell” sessions.
              </li>
              <li>
                <strong>Clear Documentation:</strong> Keep project documents,
                design specs, and requirements updated and accessible.
              </li>
              <li>
                <strong>Open Communication:</strong> Use channels (Slack, Teams)
                and project management tools (Jira, Trello) for transparency.
              </li>
              <li>
                <strong>Feedback Loops:</strong> Regular retrospectives to refine
                processes.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Real-World Example:</h3>
            <p>
              A startup PM holds biweekly “Show &amp; Tell” sessions where
              engineers and designers share recent work. This boosts transparency
              and sparks collaborative innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Use-Case Scenario:</h3>
            <p>
              During a sprint, a designer spots an inconsistent button style.
              They raise the issue in the daily standup, and the team quickly
              agrees to update the style guide—keeping the project on track.
            </p>
          </div>
        </div>
        <Quiz
          quizId="quiz3"
          question="Quiz: Which of the following is a collaboration best practice?"
          options={[
            { value: "A", text: "Avoid regular meetings to save time." },
            { value: "B", text: "Keep documentation updated and hold daily standups." },
            { value: "C", text: "Work in isolation." },
            { value: "D", text: "Skip feedback sessions." },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* Section 4: Writing PRDs */}
      <section className="mb-10 border-b pb-6">
        <h2 className="text-3xl font-bold flex items-center mb-4">
          <FaFileAlt className="mr-2 text-purple-500" />
          Writing PRDs (Product Requirement Documents)
        </h2>
        <div className="space-y-4">
          <p>
            <strong>What It Means:</strong> A PRD is a detailed document that
            outlines the product’s purpose, features, functionality, and success
            criteria. It serves as the blueprint for what needs to be built.
          </p>
          <div>
            <h3 className="text-xl font-semibold">Key Components:</h3>
            <ul className="list-disc ml-6">
              <li>
                <strong>Objective:</strong> Explain why the product or feature is
                needed.
              </li>
              <li>
                <strong>User Stories:</strong> Short descriptions from the user’s
                perspective.
              </li>
              <li>
                <strong>Specifications:</strong> Detailed requirements,
                design guidelines, and technical constraints.
              </li>
              <li>
                <strong>Acceptance Criteria:</strong> Conditions that must be met
                for the feature to be complete.
              </li>
              <li>
                <strong>Dependencies:</strong> Any external factors or assumptions.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Real-World Example:</h3>
            <p>
              For an e-commerce app feature that filters products by price,
              the PRD would include the objective, user story (e.g., “As a shopper,
              I want to filter by price so I can find items within my budget”),
              detailed specs, and acceptance criteria ensuring smooth performance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Use-Case Scenario:</h3>
            <p>
              A PM writes a PRD for a new notification system, incorporating user
              stories, design wireframes, and technical notes. During sprint planning,
              the PRD becomes the central reference, ensuring alignment across the team.
            </p>
          </div>
        </div>
        <Quiz
          quizId="quiz4"
          question="Quiz: What is a key component of an effective PRD?"
          options={[
            { value: "A", text: "Vague feature ideas with no user context." },
            { value: "B", text: "Clear objectives, user stories, and acceptance criteria." },
            { value: "C", text: "Only technical specifications." },
            { value: "D", text: "A list of features without any details." },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* --- Simulation of the Stages --- */}
      <Simulation />

      {/* Final Thoughts */}
      <div className="mt-10 p-6 bg-gray-100 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Final Thoughts
        </h2>
        <p>
          Working with engineering and design teams, understanding technical constraints,
          following collaboration best practices, and writing clear PRDs are essential
          to delivering products that truly resonate with users while being technically
          feasible and on schedule.
        </p>
      </div>
    </div>
  );
};

export default PMWorkflow;
