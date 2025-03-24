import React, { useState } from 'react';
import {
  FaPrint,
  FaSearch,
  FaTools,
  FaClipboardList,
  FaPencilRuler,
  FaMobileAlt,
  FaLightbulb,
  FaUserCheck
} from 'react-icons/fa';

/* ------------------ Print Button Component ------------------ */
const PrintButton = () => {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-6"
    >
      <FaPrint className="mr-2" />
      Print
    </button>
  );
};

/* ------------------ Quiz Component ------------------ */
const Quiz = ({ quizId, question, options, correctAnswer }) => {
  const [selected, setSelected] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleOptionChange = (e) => {
    setSelected(e.target.value);
    setFeedback(''); // Reset feedback when option changes
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

/* ------------------ Simulation Component ------------------ */
const Simulation = () => {
  const steps = [
    {
      title: "Wireframing",
      description:
        "Sketch a basic layout of your digital product. Imagine drawing boxes for headers, images, buttons, and text. This is your first step—getting the structure down.",
      icon: <FaPencilRuler className="text-3xl" />,
    },
    {
      title: "Prototyping",
      description:
        "Turn your wireframe into an interactive model. Simulate user interactions by clicking through screens. This helps you test the flow and design decisions.",
      icon: <FaMobileAlt className="text-3xl" />,
    },
    {
      title: "Usability Testing",
      description:
        "Test your prototype with real users. Observe how they interact with your design and gather feedback to identify pain points.",
      icon: <FaTools className="text-3xl" />,
    },
    {
      title: "Iteration & Feedback",
      description:
        "Based on the feedback from usability testing, implement changes to improve the design. This iterative process ensures your product meets user needs.",
      icon: <FaLightbulb className="text-3xl" />,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="bg-white p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaClipboardList className="mr-2" />
        Simulation: From Wireframe to Usability Testing
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center mb-4">
          {steps[currentStep].icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{steps[currentStep].title}</h3>
        <p className="mb-4 text-center">{steps[currentStep].description}</p>
        <div className="flex space-x-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

/* ------------------ Main Component ------------------ */
const WireframePrototypeUsability = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <PrintButton />

      {/* Section 1: Wireframing & Prototyping Basics */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          <FaSearch className="mr-2 text-blue-500" />
          Wireframing & Prototyping Basics
        </h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">What Is a Wireframe?</h2>
          <p className="mb-2">
            <strong>Definition:</strong> A wireframe is a simple, visual blueprint of a digital product (like a website or mobile app). Think of it as a rough sketch or a map that shows the layout, structure, and key elements without focusing on colors, fonts, or detailed graphics.
          </p>
          <p className="mb-2">
            <strong>Purpose:</strong>
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Structure First:</strong> Decide where elements (buttons, images, text, menus) will go.
            </li>
            <li>
              <strong>Communication Tool:</strong> Discuss ideas with stakeholders early on without getting distracted by design details.
            </li>
          </ul>
          <p className="mb-2">
            <strong>Example:</strong> Imagine you’re designing a shopping app. A wireframe for the homepage might show a header, a search bar, product listings arranged in a grid, and a footer. There are no colors or real images—just boxes and placeholder text.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">What Is a Prototype?</h2>
          <p className="mb-2">
            <strong>Definition:</strong> A prototype is an early, working model of your product that simulates how the final version will work. It can be interactive—allowing you to click through different screens and experience transitions and animations.
          </p>
          <p className="mb-2">
            <strong>Purpose:</strong>
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Test Interactions:</strong> Simulate user interactions to see how users navigate the product.
            </li>
            <li>
              <strong>Iterative Feedback:</strong> Gather feedback on functionality, usability, and overall flow before full development.
            </li>
          </ul>
          <p className="mb-2">
            <strong>Example:</strong> In our shopping app example, a prototype might let a user click a product to view details, add it to a cart, and then proceed to checkout—demonstrating the intended user journey.
          </p>
        </div>
        <Quiz
          quizId="quiz1"
          question="Quiz: What is the primary purpose of a wireframe?"
          options={[
            { value: "A", text: "To determine the color palette." },
            { value: "B", text: "To define layout and structure." },
            { value: "C", text: "To implement the final design." },
            { value: "D", text: "To test server performance." },
          ]}
          correctAnswer="B"
        />
        <Quiz
          quizId="quiz2"
          question="Quiz: What is the main difference between a wireframe and a prototype?"
          options={[
            { value: "A", text: "Wireframes are interactive." },
            { value: "B", text: "Prototypes simulate user interactions." },
            { value: "C", text: "Wireframes include detailed visuals." },
            { value: "D", text: "There is no difference." },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* Section 2: Tools for Wireframing & Prototyping */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          <FaTools className="mr-2 text-green-500" />
          Tools for Wireframing & Prototyping
        </h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Figma</h2>
          <p className="mb-2">
            <strong>What It Is:</strong> A cloud-based design tool used for both wireframing and high-fidelity prototyping.
          </p>
          <p className="mb-2">
            <strong>Key Features:</strong> Real-time collaboration, interactive prototypes with clickable elements, and extensive libraries of components.
          </p>
          <p className="mb-2">
            <strong>Use Case:</strong> A product team working on a new social media app can use Figma to create detailed, interactive prototypes while collaborating in real time.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Balsamiq</h2>
          <p className="mb-2">
            <strong>What It Is:</strong> A dedicated wireframing tool that gives designs a “hand-drawn” look—emphasizing that the designs are early drafts.
          </p>
          <p className="mb-2">
            <strong>Key Features:</strong> Quick, low-fidelity sketches that focus on layout and functionality.
          </p>
          <p className="mb-2">
            <strong>Use Case:</strong> Brainstorming a new dashboard layout for an analytics platform.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Miro</h2>
          <p className="mb-2">
            <strong>What It Is:</strong> An online collaborative whiteboard platform ideal for brainstorming, mind mapping, and creating initial wireframes.
          </p>
          <p className="mb-2">
            <strong>Key Features:</strong> Real-time collaboration, sticky notes, sketches, and integrations with other tools.
          </p>
          <p className="mb-2">
            <strong>Use Case:</strong> During a remote design sprint, team members use Miro to outline the user journey and sketch basic wireframes.
          </p>
        </div>
        <Quiz
          quizId="quiz3"
          question="Quiz: Which tool gives a hand-drawn, low-fidelity sketch look?"
          options={[
            { value: "A", text: "Figma" },
            { value: "B", text: "Miro" },
            { value: "C", text: "Balsamiq" },
            { value: "D", text: "Adobe XD" },
          ]}
          correctAnswer="C"
        />
      </section>

      {/* Section 3: Low-Fidelity vs. High-Fidelity Prototypes */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          <FaClipboardList className="mr-2 text-purple-500" />
          Low-Fidelity vs. High-Fidelity Prototypes
        </h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Low-Fidelity Prototypes</h2>
          <p className="mb-2">
            <strong>Definition:</strong> Basic representations (often sketches or wireframes) that focus on structure and user flow—without detailed design elements.
          </p>
          <p className="mb-2">
            <strong>Characteristics:</strong>
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Simple and quick to create.</li>
            <li>Focus on functionality and navigation.</li>
            <li>Ideal for early-stage feedback.</li>
          </ul>
          <p className="mb-2">
            <strong>Example:</strong> A paper sketch or a digital wireframe showing where buttons, menus, and text will be placed.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">High-Fidelity Prototypes</h2>
          <p className="mb-2">
            <strong>Definition:</strong> Detailed, interactive models that closely resemble the final product in terms of visual design and functionality.
          </p>
          <p className="mb-2">
            <strong>Characteristics:</strong>
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Includes realistic visuals, typography, and color schemes.</li>
            <li>Interactive elements simulate real user interactions.</li>
            <li>Often built with tools like Figma or Adobe XD.</li>
          </ul>
          <p className="mb-2">
            <strong>Example:</strong> A fully interactive prototype of an e-commerce website where users can click through product pages and simulate a checkout process.
          </p>
        </div>
        <Quiz
          quizId="quiz4"
          question="Quiz: Which prototype is best for early-stage feedback?"
          options={[
            { value: "A", text: "High-fidelity prototype" },
            { value: "B", text: "Low-fidelity prototype" },
            { value: "C", text: "Both equally" },
            { value: "D", text: "None" },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* Section 4: Conducting Usability Testing */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          <FaUserCheck className="mr-2 text-red-500" />
          Conducting Usability Testing
        </h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">What Is Usability Testing?</h2>
          <p className="mb-2">
            <strong>Definition:</strong> A method to evaluate a product by testing it with representative users. The goal is to identify usability issues and gather feedback.
          </p>
          <p className="mb-2">
            <strong>Purpose:</strong>
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Observe real user interactions.</li>
            <li>Identify pain points and obstacles in the user flow.</li>
            <li>Gather both qualitative and quantitative data.</li>
          </ul>
          <p className="mb-2">
            <strong>Example:</strong> Testing a mobile banking app by having users perform tasks like logging in, checking their balance, and transferring money.
          </p>
        </div>
        <Quiz
          quizId="quiz5"
          question="Quiz: What is a primary goal of usability testing?"
          options={[
            { value: "A", text: "To evaluate user interaction and gather feedback." },
            { value: "B", text: "To finalize visual design." },
            { value: "C", text: "To improve server performance." },
            { value: "D", text: "To determine cost structure." },
          ]}
          correctAnswer="A"
        />
      </section>

      {/* Section 5: Final Thoughts */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Final Thoughts</h1>
        <p className="mb-2">
          Understanding the basics of wireframing, prototyping, and usability testing is essential for building effective digital products. By starting with a simple wireframe, creating interactive prototypes, and testing usability with real users, product teams can iterate and refine their designs to create products that truly meet user needs.
        </p>
        <p className="mb-2">
          Use tools like <strong>Figma</strong>, <strong>Balsamiq</strong>, and <strong>Miro</strong> to streamline your design process, and remember that early feedback is crucial for success.
        </p>
      </section>

      {/* Interactive Simulation */}
      <Simulation />
    </div>
  );
};

export default WireframePrototypeUsability;
