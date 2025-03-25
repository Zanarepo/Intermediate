import React, { useState } from "react";
import AgileCreate from "./AgileCreate";

/* Reusable Quiz Component */
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

/* Interactive Simulation Component */
const AgileSprintSimulation = () => {
  const stages = [
    {
      title: "Sprint Planning",
      icon: (
        <svg
          className="w-6 h-6 inline-block mr-2 text-indigo-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16v2H4V6zm0 4h16v2H4v-2zm0 4h10v2H4v-2z" />
        </svg>
      ),
      description:
        "The team meets to review the product backlog, decide what will be worked on during the sprint, and break tasks down.",
    },
    {
      title: "Backlog Grooming",
      icon: (
        <svg
          className="w-6 h-6 inline-block mr-2 text-purple-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l4 4H8l4-4zm0 20l-4-4h8l-4 4zM2 12l4-4v8l-4-4zm20 0l-4 4V8l4 4z" />
        </svg>
      ),
      description:
        "The product owner and team review and reprioritize the backlog, breaking down large items and ensuring the most valuable work is ready.",
    },
    {
      title: "Daily Standup",
      icon: (
        <svg
          className="w-6 h-6 inline-block mr-2 text-green-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V11h3l-4-4-4 4h3v5.93c2.39-.49 4-2.64 4-5.43 0-.66-.1-1.29-.28-1.88l1.46-1.46c.21.73.32 1.5.32 2.34 0 3.31-2.69 6-6 6-1.45 0-2.77-.53-3.81-1.41l1.42-1.42C8.7 15.27 10.27 16 12 16c1.66 0 3-1.34 3-3 0-.83-.34-1.58-.88-2.12l1.42-1.42A4.96 4.96 0 0117 10c0 2.76-2.24 5-5 5z" />
        </svg>
      ),
      description:
        "A short daily meeting where team members share what they did, what they'll do next, and any blockers they're facing.",
    },
  ];

  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  const nextStage = () => {
    setCurrentStageIndex((prev) => (prev + 1) % stages.length);
  };

  const prevStage = () => {
    setCurrentStageIndex((prev) =>
      prev === 0 ? stages.length - 1 : prev - 1
    );
  };

  const currentStage = stages[currentStageIndex];

  return (
    <div className="border rounded p-6 bg-white shadow mt-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span className="mr-2">{currentStage.icon}</span>
        {currentStage.title}
      </h2>
      <p className="mb-4">{currentStage.description}</p>
      {/* Simple progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-indigo-600 h-2.5 rounded-full"
          style={{
            width: `${((currentStageIndex + 1) / stages.length) * 100}%`,
          }}
        ></div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStage}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={nextStage}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

/* Main Component for Agile & Scrum Content */
const AgileScrumComponent = () => {
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

      {/* 1. Agile & Scrum in Product Management */}
      <section className="mb-12 border-b pb-6">
        <h2 className="text-3xl font-bold flex items-center mb-4">
          <span className="mr-2">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.76 9h-3.52L12 5.84zM2 13h20v9H2v-9z" />
            </svg>
          </span>
          1. Agile &amp; Scrum in Product Management
        </h2>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">What is Agile?</h3>
          <p className="mb-2">
            Agile is an approach to product management and development that focuses on:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Flexibility:</strong> Teams work in short iterations and adapt quickly.
            </li>
            <li>
              <strong>Collaboration:</strong> Cross-functional teams work closely together.
            </li>
            <li>
              <strong>Continuous Improvement:</strong> Regular feedback from users and stakeholders is used to make improvements.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Use Case:</strong> Imagine you’re building a mobile app. Instead of waiting for a full version to test with users, you release a basic version and then improve it based on user feedback.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">What is Scrum?</h3>
          <p className="mb-2">
            Scrum is a popular Agile framework that helps teams work together more effectively. It breaks work into small, manageable pieces and organizes it into fixed-length cycles called <em>sprints</em> (usually 1–4 weeks).
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Sprint Planning:</strong> Deciding what work will be done during the sprint.
            </li>
            <li>
              <strong>Backlog Grooming:</strong> Regularly updating and prioritizing the product backlog.
            </li>
            <li>
              <strong>Daily Standups:</strong> Short daily meetings to discuss progress and obstacles.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Real-Life Example:</strong> Companies like Spotify and Microsoft use Scrum to keep their development process agile—holding sprint planning meetings, daily standups, and constantly refining their product backlog.
          </p>
        </div>
        <Quiz
          quizId="quiz1"
          question="Which of the following is a key characteristic of Agile?"
          options={[
            { value: "A", text: "Rigid planning with no room for change." },
            { value: "B", text: "Iterative development with regular feedback." },
            { value: "C", text: "No collaboration among team members." },
            { value: "D", text: "Delivering a complete product only at the end." },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* 2. Agile vs. Waterfall Methodologies */}
      <section className="mb-12 border-b pb-6">
        <h2 className="text-3xl font-bold flex items-center mb-4">
          <span className="mr-2">
            <svg
              className="w-8 h-8 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.44L8.34 7h7.32L12 4.44zM4 9v2h16V9H4zm0 4v6h16v-6H4z" />
            </svg>
          </span>
          2. Agile vs. Waterfall Methodologies
        </h2>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Agile Methodology</h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Iterative &amp; Incremental:</strong> Work is divided into sprints and delivered in iterations.
            </li>
            <li>
              <strong>Flexible &amp; Adaptive:</strong> Changes can be made at any time based on user feedback.
            </li>
            <li>
              <strong>Collaborative:</strong> Continuous communication and feedback among team members.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Analogy:</strong> Agile is like gardening—you plant seeds (ideas) and regularly adjust based on how the plants are growing.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Waterfall Methodology</h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Linear &amp; Sequential:</strong> The project is divided into distinct phases that are completed one after the other.
            </li>
            <li>
              <strong>Rigid:</strong> Changes later in the process are difficult and costly.
            </li>
            <li>
              <strong>Less Feedback-Oriented:</strong> The final product is delivered only after all phases are complete.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Analogy:</strong> Waterfall is like following a recipe exactly from start to finish without tasting or adjusting as you go.
          </p>
          <p className="mt-2">
            <strong>Use Case Comparison:</strong> Agile is ideal for projects with evolving requirements (like a startup app), whereas Waterfall is suited for projects with well-defined requirements (like building a bridge).
          </p>
        </div>
        <Quiz
          quizId="quiz2"
          question="Which methodology is best suited for projects where requirements are likely to change?"
          options={[
            { value: "A", text: "Waterfall" },
            { value: "B", text: "Agile" },
            { value: "C", text: "Both are equally suited" },
            { value: "D", text: "Neither" },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* 3. Scrum Framework: Key Practices */}
      <section className="mb-12 border-b pb-6">
        <h2 className="text-3xl font-bold flex items-center mb-4">
          <span className="mr-2">
            <svg
              className="w-8 h-8 text-indigo-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" />
            </svg>
          </span>
          3. Scrum Framework: Key Practices
        </h2>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">A. Sprint Planning</h3>
          <p>
            At the start of each sprint, the team reviews the product backlog, selects the items to work on, and breaks them into tasks.
          </p>
          <p className="mt-2">
            <strong>Example:</strong> A team plans to add a “share” button to a social media app—design, code, and testing are scheduled during the sprint.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">B. Backlog Grooming (Refinement)</h3>
          <p>
            Regular sessions where the product owner and team review and reprioritize the product backlog, break down large items, and remove outdated features.
          </p>
          <p className="mt-2">
            <strong>Example:</strong> Based on user feedback, a feature might be de-prioritized or split into smaller, manageable user stories.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">C. Daily Standups</h3>
          <p>
            A quick, daily meeting where each team member shares what they did yesterday, what they plan to do today, and any blockers.
          </p>
          <p className="mt-2">
            <strong>Example:</strong> A developer might mention a bug during the standup, prompting the team to reassign or offer help to resolve it.
          </p>
        </div>
        <Quiz
          quizId="quiz3"
          question="What is the primary purpose of a daily standup?"
          options={[
            { value: "A", text: "To have a long meeting about project details." },
            { value: "B", text: "To quickly sync up, share progress, and identify blockers." },
            { value: "C", text: "To plan the entire project for the next month." },
            { value: "D", text: "To review past work in detail." },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* 4. Writing Effective User Stories */}
      <section className="mb-12 border-b pb-6">
        <h2 className="text-3xl font-bold flex items-center mb-4">
          <span className="mr-2">
            <svg
              className="w-8 h-8 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-3.8-11.7 8.38 8.38 0 013.8.9L21 3l-1.5 4.5L21 11.5z" />
            </svg>
          </span>
          4. Writing Effective User Stories
        </h2>
        <div className="mb-4">
          <p className="mb-2">
            User Stories are short, simple descriptions of a feature told from the end user's perspective. They help the team understand user needs and the value a feature brings.
          </p>
          <p className="mb-2">
            A common format for a user story is: <br />
            <em>"As a [type of user], I want [an action] so that [a benefit]."</em>
          </p>
          <p>
            <strong>Example:</strong> "As an online shopper, I want to filter products by price range so that I can quickly find items within my budget."
          </p>
        </div>
        <Quiz
          quizId="quiz4"
          question="Which is the correct format for a user story?"
          options={[
            { value: "A", text: '"I want a feature that is awesome."' },
            { value: "B", text: '"As a [user], I want [action] so that [benefit]."' },
            { value: "C", text: '"The system should do this and that."' },
            { value: "D", text: '"User stories are long and detailed descriptions."' },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* Final Thoughts */}
      <section className="mb-12 border-b pb-6">
        <h2 className="text-3xl font-bold flex items-center mb-4">
          <span className="mr-2">
            <svg
              className="w-8 h-8 text-teal-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.76 9h-3.52L12 5.84zM2 13h20v9H2v-9z" />
            </svg>
          </span>
          Final Thoughts
        </h2>
        <p>
          Agile and Scrum emphasize iterative work, continuous feedback, and collaboration. By using practices like sprint planning, backlog grooming, daily standups, and writing effective user stories, teams can remain flexible and responsive to change.
        </p>
      </section>

      {/* Interactive Simulation of an Agile Sprint */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold flex items-center mb-4">
          <span className="mr-2">
            <svg
              className="w-8 h-8 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15H7v-2h6v2zm4-4H7v-2h10v2z" />
            </svg>
          </span>
          Agile Sprint Simulation
        </h2>
        <p className="mb-4">
          Experience an interactive simulation of a sprint: move through Sprint Planning, Backlog Grooming, and Daily Standups. Click “Next” and “Previous” to navigate through the stages.
        </p>
        <AgileSprintSimulation />
        <AgileCreate/>
      </section>
    </div>
  );
};

export default AgileScrumComponent;
