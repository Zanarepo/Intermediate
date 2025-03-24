import React, { useState } from "react";
import {
  FaLightbulb,
  FaQuestionCircle,
  FaUsers,
  FaChartBar,
  FaBullseye,
  FaCogs,
  FaClock,
  FaBullhorn,
  FaDollarSign,
  FaCheckCircle,
} from "react-icons/fa";

/* ----------------- Quiz Component ----------------- */
const Quiz = ({ quizId, question, options, correctAnswer }) => {
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleOptionChange = (e) => {
    setSelected(e.target.value);
    setFeedback("");
  };

  const handleSubmit = (e) => {
    e.stopPropagation(); // Prevent parent card from toggling
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
    <div className="bg-gray-50 p-4 rounded mt-4 shadow-inner" onClick={(e) => e.stopPropagation()}>
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      {options.map((option, idx) => (
        <label key={idx} className="block mb-2">
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

/* ----------------- Simulation Card ----------------- */
// Using custom CSS classes for flip effect
const SimulationCard = ({ title, simulationContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleFlip = (e) => {
    e.stopPropagation(); // Prevent parent card click
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={toggleFlip} className="flip-card cursor-pointer w-full">
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="flip-card-front bg-white border rounded p-4 shadow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">Click to see simulation details.</p>
        </div>
        {/* Back Side */}
        <div className="flip-card-back bg-gray-100 border rounded p-4 shadow">
          <h3 className="text-xl font-bold mb-2">{title} Details</h3>
          <p className="text-gray-700">{simulationContent}</p>
          <p className="mt-2 text-sm italic text-gray-500">Click to flip back.</p>
        </div>
      </div>
    </div>
  );
};

/* ----------------- Opportunity Card ----------------- */
// Each card is clickable to expand/collapse. Inside interactive parts stop propagation.
const OpportunityCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="mb-6">
      <div
        className="bg-white border rounded-lg p-4 shadow hover:shadow-xl transition duration-300 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="text-3xl mr-4">{data.icon}</div>
          <h2 className="text-2xl font-bold">{data.title}</h2>
        </div>
        {!isExpanded && <p className="mt-2 text-gray-600">{data.brief}</p>}
        {isExpanded && (
          <div className="mt-4">
            {data.content.map((para, index) => (
              <p key={index} className="mb-2 text-gray-700">
                {para}
              </p>
            ))}
            {data.useCase && (
              <div className="mt-2 p-3 border-l-4 border-green-500 bg-green-50">
                <strong>Use Case: </strong>
                <p className="text-gray-700">{data.useCase}</p>
              </div>
            )}
            {data.quiz && (
              <div onClick={(e) => e.stopPropagation()}>
                <Quiz
                  quizId={data.id}
                  question={data.quiz.question}
                  options={data.quiz.options}
                  correctAnswer={data.quiz.correctAnswer}
                />
              </div>
            )}
            {data.simulation && (
              <div onClick={(e) => e.stopPropagation()} className="mt-4">
                <SimulationCard
                  title={`${data.title} Simulation`}
                  simulationContent={data.simulation}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* ----------------- Main Component ----------------- */
const ProductOpportunityCanvas = () => {
  const cardsData = [
    {
      id: "card1",
      title: "Benefits of Opportunity Assessment",
      icon: <FaLightbulb />,
      brief: "Understand why your product matters and reduce risks.",
      content: [
        "Clarifies the value: It forces you to answer why your product matters.",
        "Reduces risk: Identifying potential pitfalls early can save time and money.",
        "Informs strategy: It guides decisions on market entry, positioning, and resource allocation.",
        "Aligns the team: Everyone understands the 'why' and 'how' behind the idea.",
      ],
      useCase:
        "For example, before launching a new parking app, assessing the opportunity helps determine if the solution genuinely meets a critical need.",
      quiz: {
        question: "What is a primary benefit of opportunity assessment?",
        options: [
          { value: "A", text: "It delays product launch." },
          { value: "B", text: "It clarifies the product's value and reduces risk." },
          { value: "C", text: "It increases development costs." },
          { value: "D", text: "It reduces market size." },
        ],
        correctAnswer: "B",
      },
      simulation:
        "Imagine a dashboard that displays risk factors, potential benefits, and a clear strategy roadmap. Interactive metrics show projected savings and team alignment scores.",
    },
    {
      id: "card2",
      title: "What Problem Will This Solve? (Value Proposition)",
      icon: <FaQuestionCircle />,
      brief: "Define the core promise your product offers.",
      content: [
        "This is the central benefit your product offers—its core promise to customers.",
        "Example: A mobile app that helps users find available parking in crowded cities.",
        "Value Proposition: 'Find parking quickly and easily, reducing stress and saving time.'",
      ],
      useCase:
        "A driver in a busy downtown area uses the app to locate the nearest available spot, saving time compared to circling around looking for parking.",
      quiz: {
        question: "What does a strong value proposition communicate?",
        options: [
          { value: "A", text: "The detailed technical architecture." },
          { value: "B", text: "The core benefit and promise to the customer." },
          { value: "C", text: "The color scheme of the product." },
          { value: "D", text: "The market competitors." },
        ],
        correctAnswer: "B",
      },
      simulation:
        "Visualize a split-screen: one side shows a frustrated driver, and the other displays a streamlined app interface guiding the driver to an available parking spot.",
    },
    {
      id: "card3",
      title: "For Whom Do We Solve That Problem? (Target Market)",
      icon: <FaUsers />,
      brief: "Identify the specific group of people who face this problem.",
      content: [
        "Determine who experiences the problem and would benefit most from your solution.",
        "Example: Urban commuters, event attendees, or residents in high-density areas.",
      ],
      useCase:
        "Marketing campaigns can be tailored to urban professionals who frequently drive in congested city centers.",
      quiz: {
        question: "Who is the target market for a parking app?",
        options: [
          { value: "A", text: "Rural farmers." },
          { value: "B", text: "Urban commuters and event attendees." },
          { value: "C", text: "Retired seniors." },
          { value: "D", text: "None of the above." },
        ],
        correctAnswer: "B",
      },
      simulation:
        "An interactive map highlights urban areas with heavy traffic, pinpointing potential users and their daily routes.",
    },
    {
      id: "card4",
      title: "How Big Is the Opportunity? (Market Size)",
      icon: <FaChartBar />,
      brief: "Estimate potential customers and revenue.",
      content: [
        "Estimate the total number of potential customers and the revenue they could generate.",
        "For instance, if there are 500,000 urban drivers and each saves 15 minutes per day, calculate the potential market value.",
      ],
      useCase:
        "Conduct surveys and analyze traffic data to determine how many drivers face parking challenges and what they'd pay for a solution.",
      quiz: {
        question: "What does market size estimation help you understand?",
        options: [
          { value: "A", text: "User interface design." },
          { value: "B", text: "The total potential revenue and customer base." },
          { value: "C", text: "The technical stack." },
          { value: "D", text: "None of the above." },
        ],
        correctAnswer: "B",
      },
      simulation:
        "See a dynamic chart that adjusts potential market size based on different user adoption rates and pricing models.",
    },
    {
      id: "card5",
      title: "What Alternatives Are Out There? (Competitive Landscape)",
      icon: <FaBullseye />,
      brief: "Identify existing solutions and competitors.",
      content: [
        "Identify current solutions addressing the same problem.",
        "Example: For a parking app, competitors might include traditional parking meters, other parking-finding apps like ParkWhiz, or navigation apps with parking features.",
      ],
      useCase:
        "A competitive analysis reveals gaps in real-time updates or niche focus (e.g., street parking vs. parking garages).",
      quiz: {
        question: "Why is analyzing the competitive landscape important?",
        options: [
          { value: "A", text: "It helps to copy competitor features exactly." },
          { value: "B", text: "It identifies gaps and opportunities for differentiation." },
          { value: "C", text: "It increases product costs." },
          { value: "D", text: "None of the above." },
        ],
        correctAnswer: "B",
      },
      simulation:
        "Interactive competitor matrix where clicking on a competitor shows strengths, weaknesses, and market gaps.",
    },
    {
      id: "card6",
      title: "Why Are We Best Suited to Pursue This? (Our Differentiator)",
      icon: <FaCogs />,
      brief: "Outline your unique competitive edge.",
      content: [
        "Describe what makes your team or product unique.",
        "Example: A proprietary algorithm for accurate parking availability predictions, exclusive partnerships, or deep market understanding.",
      ],
      useCase:
        "Pilot programs demonstrate higher accuracy in predicting parking spots compared to competitors.",
      quiz: {
        question: "What is a key aspect of a strong differentiator?",
        options: [
          { value: "A", text: "Identical features to competitors." },
          { value: "B", text: "Unique strengths that offer a competitive edge." },
          { value: "C", text: "Higher production costs." },
          { value: "D", text: "None of the above." },
        ],
        correctAnswer: "B",
      },
      simulation:
        "A side-by-side comparison chart that visually highlights your unique features versus competitors.",
    },
    {
      id: "card7",
      title: "Why Now? (Market Window)",
      icon: <FaClock />,
      brief: "Explain the timing and external factors.",
      content: [
        "Describe why this is the right moment to launch your product.",
        "Examples: Increased smartphone penetration, urbanization, and demand for contactless services.",
      ],
      useCase:
        "The surge in urban populations and advancements in real-time data make this an ideal time to launch a parking app.",
      quiz: {
        question: "What does the 'Market Window' refer to?",
        options: [
          { value: "A", text: "The product development timeline." },
          { value: "B", text: "The ideal timing to launch based on external trends." },
          { value: "C", text: "The technical infrastructure." },
          { value: "D", text: "None of the above." },
        ],
        correctAnswer: "B",
      },
      simulation:
        "Timeline slider showing key trends and events that make now the right time to launch.",
    },
    {
      id: "card8",
      title: "How Will We Get This Product to Market? (GTM Strategy)",
      icon: <FaBullhorn />,
      brief: "Plan your go-to-market approach.",
      content: [
        "Outline your strategy for launching the product and attracting users.",
        "Example: Digital marketing, strategic partnerships, and promotional incentives.",
      ],
      useCase:
        "A phased rollout in select cities with targeted ads and influencer campaigns.",
      quiz: {
        question: "What is a core element of a GTM strategy?",
        options: [
          { value: "A", text: "Ignoring market feedback." },
          { value: "B", text: "Targeted marketing and strategic partnerships." },
          { value: "C", text: "Focusing only on product development." },
          { value: "D", text: "None of the above." },
        ],
        correctAnswer: "B",
      },
      simulation:
        "Interactive roadmap that shows stages of product launch, from pilot to full-scale rollout.",
    },
    {
      id: "card9",
      title: "How Will We Measure Success/Make Money? (Metrics/Revenue Strategy)",
      icon: <FaDollarSign />,
      brief: "Define KPIs and revenue streams.",
      content: [
        "Identify key performance indicators and revenue models.",
        "Example: User acquisition, retention rates, engagement, subscription fees, or ad revenue.",
      ],
      useCase:
        "Measure success by tracking active users, time saved by drivers, and premium subscriptions.",
      quiz: {
        question: "Which of the following is a key metric for success?",
        options: [
          { value: "A", text: "User acquisition and retention rates." },
          { value: "B", text: "The number of features built." },
          { value: "C", text: "Office location." },
          { value: "D", text: "None of the above." },
        ],
        correctAnswer: "A",
      },
      simulation:
        "Dashboard simulation showing interactive graphs for user growth, retention, and revenue streams.",
    },
    {
      id: "card10",
      title: "What Factors Are Critical to Success? (Solution Requirements)",
      icon: <FaCheckCircle />,
      brief: "Identify essential components for success.",
      content: [
        "List the key requirements your solution must have.",
        "Example: Accurate data, user-friendly interface, and reliable partnerships.",
      ],
      useCase:
        "Success may depend on integrating with city infrastructure for real-time parking data.",
      quiz: {
        question: "What is a critical factor for a parking app's success?",
        options: [
          { value: "A", text: "Complex design." },
          { value: "B", text: "Accurate real-time data." },
          { value: "C", text: "High pricing." },
          { value: "D", text: "None of the above." },
        ],
        correctAnswer: "B",
      },
      simulation:
        "A checklist simulation that users can interact with to mark critical success factors as complete.",
    },
    {
      id: "card11",
      title: "Given the Above, What’s the Recommendation? (Go or No-Go)",
      icon: <FaCheckCircle />,
      brief: "Decide whether to move forward with the product.",
      content: [
        "Based on all the gathered insights, determine if the product should be pursued.",
        "Example: If market size is large, competition is manageable, and you have a clear differentiator, the recommendation might be 'Go'.",
      ],
      useCase:
        "A team uses an Opportunity Canvas to summarize these factors and decides on a 'Go' if the outlook is positive.",
      quiz: {
        question: "What does a 'Go' recommendation indicate?",
        options: [
          { value: "A", text: "The product should be pursued." },
          { value: "B", text: "The product should be shelved." },
          { value: "C", text: "No decision has been made." },
          { value: "D", text: "None of the above." },
        ],
        correctAnswer: "A",
      },
      simulation:
        "An interactive decision matrix that shows a 'Go' or 'No-Go' outcome based on weighted criteria.",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Custom CSS for Flip Card */}
      <style>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Print Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => window.print()}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded inline-flex items-center"
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
      </div>

      <h1 className="text-4xl font-bold text-center mb-8">Framing Product Opportunities</h1>
      <p className="text-center text-gray-700 mb-6">
        Assess product opportunities from all angles to validate your idea and guide your go-to-market strategy.
      </p>

      {/* Render Interactive Opportunity Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {cardsData.map((card) => (
          <OpportunityCard key={card.id} data={card} />
        ))}
      </div>

      {/* Opportunity Canvas Summary */}
      <div className="mt-10 p-6 bg-white border rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">The Opportunity Canvas</h2>
        <p className="mb-2">A one-page tool to summarize your product opportunity:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Problem Statement/Value Proposition:</strong> What problem are you solving and what is your core promise?
          </li>
          <li>
            <strong>Target Market:</strong> Who faces this problem?
          </li>
          <li>
            <strong>Market Size:</strong> How big is the opportunity?
          </li>
          <li>
            <strong>Competitive Landscape:</strong> What alternatives exist?
          </li>
          <li>
            <strong>Differentiators:</strong> Why are you uniquely qualified?
          </li>
          <li>
            <strong>Market Timing:</strong> Why now?
          </li>
          <li>
            <strong>GTM Strategy:</strong> How will you launch the product?
          </li>
          <li>
            <strong>Revenue and Metrics:</strong> How will you measure success?
          </li>
          <li>
            <strong>Critical Success Factors:</strong> What must be in place?
          </li>
          <li>
            <strong>Final Recommendation:</strong> A 'Go' or 'No-Go' decision.
          </li>
        </ul>
        <p className="mt-4 text-gray-600 italic">
          Use this canvas to compare and evaluate multiple product ideas quickly.
        </p>
      </div>

      {/* Real-Life Example: Grocery Delivery App */}
      <div className="mt-10 p-6 bg-white border rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Real-Life Example: Grocery Delivery App</h2>
        <p className="mb-2">
          <strong>Value Proposition:</strong> "Deliver fresh groceries in under 30 minutes, saving time and ensuring quality."
        </p>
        <p className="mb-2">
          <strong>Target Market:</strong> Busy urban professionals and families.
        </p>
        <p className="mb-2">
          <strong>Market Size:</strong> In a metropolitan area with 2 million residents, if 30% are potential customers and each spends $40/month on delivery, the opportunity is significant.
        </p>
        <p className="mb-2">
          <strong>Competitive Landscape:</strong> Existing services like Instacart and Amazon Fresh, but with a focus on hyper-local, artisanal products.
        </p>
        <p className="mb-2">
          <strong>Differentiator:</strong> Leverages partnerships with local farmers and an AI-driven routing system for faster deliveries.
        </p>
        <p className="mb-2">
          <strong>Market Window:</strong> Rising consumer demand for local, sustainable products coupled with improved logistics technology.
        </p>
        <p className="mb-2">
          <strong>GTM Strategy:</strong> Launch in select neighborhoods with targeted digital marketing and promotional discounts.
        </p>
        <p className="mb-2">
          <strong>Revenue & Metrics:</strong> Measured by customer acquisition, retention, and average order value; revenue via delivery fees and partnerships.
        </p>
        <p className="mb-2">
          <strong>Critical Success Factors:</strong> Robust technology, efficient logistics, and reliable supplier relationships.
        </p>
        <p className="mb-2">
          <strong>Recommendation:</strong> A "Go" decision based on strong market demand, competitive edge, and favorable timing.
        </p>
      </div>
    </div>
  );
};

export default ProductOpportunityCanvas;
