import React, { useState } from "react";
import {
  FaPrint,
  FaHome,
  FaBookOpen,
  FaTasks,
  FaSearch,
  FaChartLine,
  FaLightbulb,
  FaCogs,
  FaRocket,
  FaClipboardCheck,
  FaUserAlt,
  FaArrowLeft,
} from "react-icons/fa";

// Import your PM lesson components
import Introduction from "./Introduction";
import PDLC from "./PDLC";
import ProductDevProcess from "./ProductDevProcess";
import CustomerMarketResearch from "./CustomerMarketResearch";
import ProductLifecycle from "./ProductLifecycle";
import PrioritizationTechniques from "./PrioritizationTechniques";
import ProductMetricsInteractive from "./ProductMetricsInteractive";
import FramingProductOpportunity from "./FramingProductOpportunity";
import MarketResearch from "./MarketResearch";
import UserResearch from "./UserResearch";

// Define your lesson data with colorful icons
const lessons = [
  {
    id: 1,
    title: "Introduction",
    component: Introduction,
    icon: <FaHome className="text-indigo-500" />,
  },

  {
    id: 2,
    title: "Product Development Lifecycle (PDLC)",
    component: ProductDevProcess,
    icon: <FaTasks className="text-orange-500" />,
  },

  {
    id: 3,
    title: "Product Development Lifecycle (PDLC)",
    component: PDLC,
    icon: <FaBookOpen className="text-green-500" />,
  },


  {
    id: 4,
    title: "Customer & Market Research",
    component: CustomerMarketResearch,
    icon: <FaSearch className="text-purple-500" />,
  },
  {
    id: 5,
    title: "Product Lifecycle",
    component: ProductLifecycle,
    icon: <FaChartLine className="text-red-500" />,
  },
  {
    id: 6,
    title: "Prioritization Techniques",
    component: PrioritizationTechniques,
    icon: <FaLightbulb className="text-yellow-500" />,
  },
  {
    id: 7,
    title: "Product Metrics Interactive",
    component: ProductMetricsInteractive,
    icon: <FaCogs className="text-pink-500" />,
  },
  {
    id: 8,
    title: "Framing Product Opportunity",
    component: FramingProductOpportunity,
    icon: <FaRocket className="text-blue-500" />,
  },
  {
    id: 9,
    title: "Market Research",
    component: MarketResearch,
    icon: <FaClipboardCheck className="text-teal-500" />,
  },

  {
    id: 10,
    title: "User Research",
    component: UserResearch,
    icon: <FaUserAlt className="text-green-500" />,

  },
];

const DashboardBasic = () => {
  // Local state to track the currently active lesson.
  // When activeLesson is null, show the dashboard home view.
  const [activeLesson, setActiveLesson] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Title and Print Button */}
      <header className="flex justify-between items-center bg-white shadow px-4 py-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Product Management Lessons Dashboard
        </h1>
        <button
          onClick={() => window.print()}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          <FaPrint className="mr-2" /> Print Dashboard
        </button>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {activeLesson === null ? (
          // Dashboard Home: Display a grid of lesson cards.
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome to the PM Lessons Dashboard
              </h2>
              <p className="text-gray-600">
                Please select a lesson below to view its content.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  onClick={() => setActiveLesson(lesson)}
                  className="cursor-pointer border rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 flex items-center"
                >
                  <div className="mr-4 text-3xl">{lesson.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-700">
                      Lesson {lesson.id}: {lesson.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Lesson View: Render the selected lesson component with a Back button.
          <>
            <button
              onClick={() => setActiveLesson(null)}
              className="flex items-center mb-4 text-blue-600 hover:text-blue-800"
            >
              <FaArrowLeft className="mr-2" /> Back to Dashboard Home
            </button>
            <div className="border rounded-lg shadow-lg p-6 bg-white">
              <activeLesson.component />
            </div>
          </>
        )}
      </div>
     
    </div>
  );
};

export default DashboardBasic;
