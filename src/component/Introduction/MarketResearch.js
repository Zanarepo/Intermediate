import React, { useState } from "react";
import {
  FaPrint,
  FaChartLine,
  FaRocket,
  FaGlobe,
  FaLightbulb,
  FaExclamationTriangle,
  FaDollarSign,
  FaUserTie,
  FaMoneyBill,
  FaChartBar,
  FaArrowLeft,
  FaArrowRight,
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

/* Interactive Card Component for each stage */
const InteractiveCard = ({ stage }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded-lg shadow-md mb-6 overflow-hidden transition-all">
      <div
        className="bg-blue-100 hover:bg-blue-200 px-4 py-3 cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="mr-2 text-2xl">{stage.icon}</span>
          <h2 className="text-2xl font-bold">{stage.title}</h2>
        </div>
        <div className="text-xl">{isOpen ? "−" : "+"}</div>
      </div>
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          <div className="mb-4">
            <h3 className="font-semibold">Definition:</h3>
            <p>{stage.definition}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Example &amp; Use Case:</h3>
            <p className="mb-1">
              <strong>Example:</strong> {stage.example}
            </p>
            <p>
              <strong>Scenario:</strong> {stage.scenario}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Key Points:</h3>
            <ul className="list-disc ml-6">
              {stage.keyPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          {/* Quiz for the stage */}
          <Quiz
            quizId={stage.id}
            question={stage.quiz.question}
            options={stage.quiz.options}
            correctAnswer={stage.quiz.correctAnswer}
          />
        </div>
      )}
    </div>
  );
};

/* Simulation Slider Component */
const SimulationSlider = ({ stages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < stages.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const currentStage = stages[currentIndex];

  return (
    <div className="mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Simulation: Market Research Stages
      </h2>
      <div className="p-4 border rounded mb-4">
        <div className="flex items-center mb-2">
          <span className="mr-2 text-2xl">{currentStage.icon}</span>
          <span className="text-xl font-semibold">
            {currentStage.title}
          </span>
        </div>
        <p>{currentStage.summary}</p>
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
          disabled={currentIndex === stages.length - 1}
          className="flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

/* Main Market Research Component */
const MarketResearch = () => {
  // Data for each stage (9 stages)
  const stages = [
    {
      id: "stage1",
      title: "What Is the Market Size?",
      icon: <FaChartLine />,
      definition:
        "Market size is an estimate of the total number of potential customers or the total revenue opportunity available for a product or service within a specific market. It tells you how big the opportunity is.",
      example:
        "If you are developing a new mobile banking app, the market size might be estimated by the number of smartphone users in your target region who have or need banking services.",
      scenario:
        "A PM for a fintech startup might analyze data from government statistics, industry reports, and smartphone penetration rates to estimate that there are 50 million potential customers in a region.",
      keyPoints: [
        "Provides an overview of the revenue potential.",
        "Helps in setting realistic sales and growth targets.",
        "Often segmented by demographics, geography, or user behavior.",
      ],
      quiz: {
        question:
          "Quiz: What does market size estimate?",
        options: [
          {
            value: "A",
            text: "The number of potential customers and revenue opportunity.",
          },
          {
            value: "B",
            text: "Future growth trends.",
          },
          {
            value: "C",
            text: "Geographical demand only.",
          },
          {
            value: "D",
            text: "Competitor performance.",
          },
        ],
        correctAnswer: "A",
      },
      summary:
        "An estimate of potential customers and revenue opportunity in the market.",
    },
    {
      id: "stage2",
      title: "What Is the Market Forecast?",
      icon: <FaRocket />,
      definition:
        "Market forecast involves predicting how a market will evolve over a future period. It includes estimating future growth rates, trends, and potential changes in market size based on historical data and current trends.",
      example:
        "A report might forecast that the mobile banking market will grow at a compound annual growth rate (CAGR) of 10% over the next five years.",
      scenario:
        "A PM planning a product roadmap might use this forecast to justify prioritizing features that support scalability and long-term user engagement, anticipating that the market will continue to expand.",
      keyPoints: [
        "Helps in strategic planning and resource allocation.",
        "Informs decisions about scaling, marketing, and product feature development.",
        "Often derived from industry reports, market surveys, and economic indicators.",
      ],
      quiz: {
        question:
          "Quiz: What is one key benefit of a market forecast?",
        options: [
          {
            value: "A",
            text: "It supports strategic planning and resource allocation.",
          },
          {
            value: "B",
            text: "It determines the exact market size.",
          },
          {
            value: "C",
            text: "It replaces competitor analysis.",
          },
          {
            value: "D",
            text: "It sets product pricing without further analysis.",
          },
        ],
        correctAnswer: "A",
      },
      summary:
        "A prediction of future market growth rates and trends.",
    },
    {
      id: "stage3",
      title: "Which Countries Drive the Most Demand?",
      icon: <FaGlobe />,
      definition:
        "This term refers to identifying the geographical regions or countries where demand for a product or service is highest. It can be based on current sales, user interest, or market trends.",
      example:
        "For a mobile banking app, countries like the United States, India, and Brazil might drive the most demand due to high smartphone penetration and a growing need for digital financial services.",
      scenario:
        "A PM might use regional sales data and user behavior analytics to decide to launch localized features or marketing campaigns in these high-demand countries, tailoring the product to local needs and regulatory requirements.",
      keyPoints: [
        "Helps in prioritizing market entry strategies.",
        "Informs localization and customization efforts.",
        "Supports decisions on where to invest in customer acquisition.",
      ],
      quiz: {
        question:
          "Quiz: Why is it important to identify which countries drive the most demand?",
        options: [
          {
            value: "A",
            text: "To prioritize market entry strategies and tailor offerings.",
          },
          {
            value: "B",
            text: "To set universal pricing for all regions.",
          },
          {
            value: "C",
            text: "To ignore regional preferences.",
          },
          {
            value: "D",
            text: "To focus solely on domestic markets.",
          },
        ],
        correctAnswer: "A",
      },
      summary:
        "Identify regions with the highest demand to guide market entry and localization.",
    },
    {
      id: "stage4",
      title: "What Are the Opportunities?",
      icon: <FaLightbulb />,
      definition:
        "Opportunities refer to favorable market conditions or unmet needs that a product can address. These could be gaps in current offerings, emerging trends, or new customer segments that are not being fully served.",
      example:
        "An opportunity for a mobile banking app might be the large unbanked or underbanked population in emerging markets.",
      scenario:
        "A PM might identify that small business owners in developing countries need easier access to credit and financial management tools, leading to features like micro-loans or budgeting tools.",
      keyPoints: [
        "Drives innovation and product differentiation.",
        "Can be uncovered through customer feedback, competitive analysis, and market research.",
        "Directly influences the product roadmap and feature prioritization.",
      ],
      quiz: {
        question:
          "Quiz: Opportunities in market research help to:",
        options: [
          {
            value: "A",
            text: "Drive innovation and product differentiation.",
          },
          {
            value: "B",
            text: "Only focus on technical limitations.",
          },
          {
            value: "C",
            text: "Increase the product price arbitrarily.",
          },
          {
            value: "D",
            text: "Ignore customer feedback.",
          },
        ],
        correctAnswer: "A",
      },
      summary:
        "Unmet market needs and gaps that can drive innovation.",
    },
    {
      id: "stage5",
      title: "What Are the Challenges?",
      icon: <FaExclamationTriangle />,
      definition:
        "Challenges are the obstacles or issues that may hinder the product's success in the market. They can include regulatory hurdles, technical limitations, intense competition, or shifting consumer preferences.",
      example:
        "A major challenge for a mobile banking app might be ensuring robust cybersecurity measures to protect user data and meet compliance standards.",
      scenario:
        "During planning, a PM discovers that integrating with legacy banking systems poses technical challenges, requiring additional time and resources. This shapes a realistic timeline and risk mitigation strategy.",
      keyPoints: [
        "Identifying challenges early allows for proactive planning.",
        "Helps in risk management and contingency planning.",
        "Informs necessary trade-offs during product development.",
      ],
      quiz: {
        question:
          "Quiz: Early identification of challenges helps in:",
        options: [
          {
            value: "A",
            text: "Proactive planning and risk management.",
          },
          {
            value: "B",
            text: "Ignoring technical limitations.",
          },
          {
            value: "C",
            text: "Reducing market research.",
          },
          {
            value: "D",
            text: "Increasing product price.",
          },
        ],
        correctAnswer: "A",
      },
      summary:
        "The obstacles that may hinder a product’s success and need proactive planning.",
    },
    {
      id: "stage6",
      title: "What Are the Price Points?",
      icon: <FaDollarSign />,
      definition:
        "Price points refer to the typical price levels at which products or services are offered in the market. They help determine how much customers are willing to pay and how competitors price their offerings.",
      example:
        "For a subscription-based mobile app, price points might range from $5 to $20 per month depending on the features and value offered.",
      scenario:
        "A PM conducts surveys and competitor analysis to decide the optimal price point—possibly leading to a freemium model with tiered subscriptions.",
      keyPoints: [
        "Affects revenue generation and market competitiveness.",
        "Influences marketing strategies and customer segmentation.",
        "Helps balance between affordability and profitability.",
      ],
      quiz: {
        question:
          "Quiz: Price points influence:",
        options: [
          {
            value: "A",
            text: "Revenue generation and market competitiveness.",
          },
          {
            value: "B",
            text: "Only the technical specifications.",
          },
          {
            value: "C",
            text: "Market growth exclusively.",
          },
          {
            value: "D",
            text: "None of the above.",
          },
        ],
        correctAnswer: "A",
      },
      summary:
        "Understanding customer willingness to pay and how competitors price their offerings.",
    },
    {
      id: "stage7",
      title: "Who Are the Main Competitors?",
      icon: <FaUserTie />,
      definition:
        "This term involves identifying the key players in the market who offer similar products or services. Competitor analysis helps understand the strengths and weaknesses of others and informs differentiation strategies.",
      example:
        "In the mobile banking space, competitors might include established banks with digital services, fintech startups, and large tech companies entering the financial arena.",
      scenario:
        "A PM creates a competitive matrix comparing features, pricing, and customer satisfaction. This analysis highlights gaps in user experience that the product could fill.",
      keyPoints: [
        "Enables strategic positioning and differentiation.",
        "Provides insights into market trends and customer expectations.",
        "Informs feature development and marketing messaging.",
      ],
      quiz: {
        question:
          "Quiz: Competitor analysis primarily helps in:",
        options: [
          {
            value: "A",
            text: "Strategic positioning and differentiation.",
          },
          {
            value: "B",
            text: "Determining the internal tech stack only.",
          },
          {
            value: "C",
            text: "Setting subscription fees exclusively.",
          },
          {
            value: "D",
            text: "Ignoring market trends.",
          },
        ],
        correctAnswer: "A",
      },
      summary:
        "Identify key market players to shape competitive differentiation.",
    },
    {
      id: "stage8",
      title: "What Type of Revenue Do These Products Bring In?",
      icon: <FaMoneyBill />,
      definition:
        "This term refers to the revenue model used by products in the market. It might include subscription fees, one-time purchases, freemium models, in-app purchases, or advertising revenue.",
      example:
        "A mobile banking app might generate revenue through subscription fees, transaction fees, or partnerships with financial institutions.",
      scenario:
        "A PM analyzes competitor revenue models to decide whether to offer a free version with premium features (freemium) or charge a flat monthly fee, influencing the overall business model.",
      keyPoints: [
        "Influences product design and feature prioritization.",
        "Helps forecast financial performance and profitability.",
        "Critical for investor presentations and business planning.",
      ],
      quiz: {
        question:
          "Quiz: Revenue models primarily affect:",
        options: [
          {
            value: "A",
            text: "Product design and feature prioritization.",
          },
          {
            value: "B",
            text: "Only technical constraints.",
          },
          {
            value: "C",
            text: "Market segmentation alone.",
          },
          {
            value: "D",
            text: "None of the above.",
          },
        ],
        correctAnswer: "A",
      },
      summary:
        "Describes how the product generates income and its monetization model.",
    },
    {
      id: "stage9",
      title: "How Fast Are the Industries Growing?",
      icon: <FaChartBar />,
      definition:
        "This term measures the rate at which a market or industry is expanding, usually expressed as a Compound Annual Growth Rate (CAGR) or YoY growth metrics.",
      example:
        "The digital payments industry might be growing at a CAGR of 15%, indicating rapid adoption and increasing potential.",
      scenario:
        "A PM for a mobile banking app uses industry growth data to justify aggressive feature development and scaling investments to handle future demand.",
      keyPoints: [
        "Indicates market momentum and future potential.",
        "Helps prioritize investments and scaling strategies.",
        "Informs long-term product roadmap and resource allocation.",
      ],
      quiz: {
        question:
          "Quiz: Industry growth rates help signal:",
        options: [
          {
            value: "A",
            text: "Market momentum and future potential.",
          },
          {
            value: "B",
            text: "Only current customer satisfaction.",
          },
          {
            value: "C",
            text: "Exclusive competitor weaknesses.",
          },
          {
            value: "D",
            text: "None of the above.",
          },
        ],
        correctAnswer: "A",
      },
      summary:
        "A measure of how quickly the market or industry is expanding.",
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
        Market Research Methods
      </h1>

      {/* Interactive Cards for Each Stage */}
      {stages.map((stage) => (
        <InteractiveCard key={stage.id} stage={stage} />
      ))}

      {/* Simulation Slider */}
      <SimulationSlider stages={stages} />

      {/* Final Thoughts */}
      <div className="mt-10 p-6 bg-gray-100 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Final Thoughts
        </h2>
        <p>
          Understanding market research terms is crucial for Product Managers.
          These insights help evaluate opportunities, identify challenges, and
          make informed decisions about product strategy, pricing, and
          competitive positioning. Whether analyzing a new digital product like
          a mobile banking app or assessing an established market, these concepts
          guide you toward building a successful, user-centric product in a
          competitive landscape.
        </p>
      </div>
    </div>
  );
};

export default MarketResearch;
