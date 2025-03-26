import React, { useState } from "react";


/* ------------------- Quiz Component ------------------- */
const Quiz = ({ quizId, quiz }) => {
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
    if (selected === quiz.correctAnswer) {
      setFeedback("Correct! 🎉");
    } else {
      setFeedback("Incorrect. Try again!");
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded border mt-4">
      <h3 className="text-lg font-semibold mb-2">{quiz.question}</h3>
      {quiz.options.map((option, index) => (
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

/* ------------------- Lifecycle Simulation Component ------------------- */
const LifecycleSimulation = ({ stages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentStage = stages[currentIndex];

  return (
    <div className="mt-10 p-4 border-t pt-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span className="mr-2">🔄</span>Interactive Lifecycle Simulation
      </h2>
      {/* Timeline Navigation */}
      <div className="flex justify-between items-center mb-6 overflow-x-auto">
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            onClick={() => setCurrentIndex(index)}
            className={`flex flex-col items-center p-2 m-1 rounded-full transition-colors 
            ${
              index === currentIndex
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-800 hover:bg-blue-300"
            }`}
          >
            <span className="text-2xl">{stage.icon}</span>
            <span className="mt-1 text-sm font-medium">
              {stage.stage.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Detailed Simulation Card */}
      <div className="bg-white shadow rounded p-6">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">{currentStage.icon}</span>
          <h3 className="text-2xl font-bold">{currentStage.stage}</h3>
        </div>
        <p className="mb-3">
          <strong>What Happens:</strong> {currentStage.whatHappens}
        </p>
        <p className="mb-3">
          <strong>{currentStage.exampleTitle}</strong>
          <br />
          {currentStage.example}
        </p>
        <div className="mb-3">
          <strong>Key Strategies:</strong>
          <ul className="list-disc ml-6 mt-1">
            {currentStage.keyStrategies.map((strategy, i) => (
              <li key={i}>{strategy}</li>
            ))}
          </ul>
        </div>
        {/* Navigation buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
            }
            disabled={currentIndex === 0}
            className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev < stages.length - 1 ? prev + 1 : prev
              )
            }
            disabled={currentIndex === stages.length - 1}
            className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

/* ------------------- Main Product Lifecycle Component ------------------- */
const ProductLifecycle = () => {
  // Data for each lifecycle stage
  const stages = [
    {
      id: 1,
      stage: "Introduction Stage",
      icon: "🎉",
      whatHappens:
        "The product is newly launched in the market. Awareness is low, and sales are slow. Heavy marketing and advertising are needed to attract early users. High costs (R&D, production, distribution) make this stage unprofitable.",
      exampleTitle: "Example: Instagram in 2010",
      example:
        "Launched as a simple photo-sharing app with filters. Focused on getting early adopters (tech lovers, bloggers). No ads or monetization—just user growth.",
      keyStrategies: [
        "Marketing & Awareness – Invest in ads, influencer partnerships, and PR.",
        "Pricing Strategy – May offer free trials or discounts to attract users.",
        "Feedback Loop – Gather early feedback to improve the product.",
      ],
      quiz: {
        question:
          "In the Introduction Stage, what is the primary focus?",
        options: [
          { value: "A", text: "Maximizing profits immediately." },
          {
            value: "B",
            text: "Gaining user awareness and early adoption.",
          },
          { value: "C", text: "Reducing operational costs." },
          {
            value: "D",
            text: "Retaining existing customers.",
          },
        ],
        correctAnswer: "B",
      },
    },
    {
      id: 2,
      stage: "Growth Stage",
      icon: "🚀",
      whatHappens:
        "The product gains traction and demand increases. Sales and revenue grow rapidly. More competitors enter the market. Scaling operations becomes a priority.",
      exampleTitle: "Example: Instagram (2011-2013)",
      example:
        "Millions of users joined after celebrities like Justin Bieber used the app. Instagram was acquired by Facebook for $1 billion (2012). Introduced new features like hashtags, explore tab, and videos to drive engagement.",
      keyStrategies: [
        "Market Expansion – Target new audiences (e.g., international markets).",
        "Feature Enhancements – Improve the product based on feedback.",
        "Competitive Differentiation – Stand out from competitors with unique features.",
      ],
      quiz: {
        question:
          "What is a key focus during the Growth Stage?",
        options: [
          { value: "A", text: "Cutting costs significantly." },
          {
            value: "B",
            text: "Expanding the market and enhancing features.",
          },
          {
            value: "C",
            text: "Preparing for product retirement.",
          },
          {
            value: "D",
            text: "Reducing advertising.",
          },
        ],
        correctAnswer: "B",
      },
    },
    {
      id: 3,
      stage: "Maturity Stage",
      icon: "💰",
      whatHappens:
        "Growth slows down as the product reaches market saturation. The focus shifts from acquiring new customers to retaining existing users. The business aims to maximize profits. Competition is high, and differentiation is key.",
      exampleTitle: "Example: Instagram (2014-Present)",
      example:
        "Became the #1 photo-sharing app globally. Introduced monetization (ads, influencer partnerships). Added features like Stories, IGTV, Reels to compete with Snapchat & TikTok.",
      keyStrategies: [
        "Customer Retention – Improve user experience to keep users engaged.",
        "New Revenue Streams – Ads, subscriptions, or premium features.",
        "Cost Optimization – Reduce operational costs while maintaining quality.",
      ],
      quiz: {
        question:
          "During the Maturity Stage, what is the main focus?",
        options: [
          {
            value: "A",
            text: "Acquiring new users at all costs.",
          },
          {
            value: "B",
            text: "Retaining existing users and maximizing profits.",
          },
          {
            value: "C",
            text: "Expanding into new markets.",
          },
          {
            value: "D",
            text: "Reducing marketing efforts.",
          },
        ],
        correctAnswer: "B",
      },
    },
    {
      id: 4,
      stage: "Decline Stage",
      icon: "📉",
      whatHappens:
        "Sales and revenue start dropping. The market is saturated, or new technologies replace the product. Fewer new users, and existing users move to competitors. Businesses must decide whether to reinvent, pivot, or retire the product.",
      exampleTitle: "Example: Facebook (Declining Since 2019)",
      example:
        "Younger audiences moved to Instagram, Snapchat, and TikTok. Engagement dropped, and Facebook rebranded to Meta to focus on the metaverse. Introduced AI-driven recommendations and reels to keep users engaged.",
      keyStrategies: [
        "Product Refresh – Introduce new features to stay relevant.",
        "Target a Niche Market – Focus on a specific audience (e.g., LinkedIn for professionals).",
        "Cost-Cutting – Reduce expenses to maintain profitability.",
      ],
      quiz: {
        question:
          "What challenge is faced during the Decline Stage?",
        options: [
          {
            value: "A",
            text: "Low user acquisition cost.",
          },
          {
            value: "B",
            text: "Market saturation and user migration to competitors.",
          },
          {
            value: "C",
            text: "Excessive growth in revenue.",
          },
          {
            value: "D",
            text: "Increased brand loyalty.",
          },
        ],
        correctAnswer: "B",
      },
    },
    {
      id: 5,
      stage: "Retirement / Exit Stage",
      icon: "☠️",
      whatHappens:
        "The product is discontinued due to lack of demand, high costs, or outdated technology. The company may replace it with a new product or sell it to another company. Users may transition to an alternative product.",
      exampleTitle: "Example: Google+ (Shut Down in 2019)",
      example:
        "Google+ failed to compete with Facebook & Twitter. Low user engagement and security issues led to its shutdown. Google focused on other successful products like YouTube & Google Meet.",
      keyStrategies: [
        "Sell the Product – If profitable, sell to another company.",
        "Rebrand or Merge – Integrate features into another product.",
        "Gradual Shutdown – Give users time to transition to alternatives.",
      ],
      quiz: {
        question:
          "What is the common approach during the Retirement Stage?",
        options: [
          {
            value: "A",
            text: "Aggressively invest in new features.",
          },
          {
            value: "B",
            text: "Replace, sell, or gradually shut down the product.",
          },
          {
            value: "C",
            text: "Focus solely on user growth.",
          },
          {
            value: "D",
            text: "Expand market reach.",
          },
        ],
        correctAnswer: "B",
      },
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

      {/* Render each lifecycle stage section */}
      {stages.map((stage) => (
        <section
          key={stage.id}
          className="mb-10 pb-6 border-b last:border-0 last:pb-0"
        >
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">{stage.icon}</span>
            <h2 className="text-2xl font-bold">{stage.stage}</h2>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">What Happens?</h3>
            <p>{stage.whatHappens}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{stage.exampleTitle}</h3>
            <p>{stage.example}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Key Strategies:</h3>
            <ul className="list-disc ml-6">
              {stage.keyStrategies.map((strategy, index) => (
                <li key={index}>{strategy}</li>
              ))}
            </ul>
          </div>
          {/* Quiz for this stage */}
          <Quiz quizId={`quiz${stage.id}`} quiz={stage.quiz} />
        </section>
      ))}

      {/* Interactive Simulation */}
      <LifecycleSimulation stages={stages} />

      {/* Final Thoughts */}
      <section className="mt-10 pt-6 border-t">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="mr-2">💡</span>Final Thoughts
        </h2>
        <p>
          The Product Lifecycle helps businesses make strategic decisions at each stage. Knowing when to invest, expand, monetize, or pivot is crucial to long‑term success. A successful product – like Instagram – continually reinvents itself (for example, launching Reels to compete with TikTok) to avoid decline.
        </p>
      </section> <br/>

    </div>
  );
};

export default ProductLifecycle;
