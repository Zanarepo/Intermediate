import React, { useState } from "react";
import {
  FaPrint,
  FaRocket,
  FaTasks,
  FaPencilAlt,
  FaClipboardCheck,
  FaQuoteRight,
  FaArrowLeft,
} from "react-icons/fa";

// Import your intermediate lesson components
import ExecutionStrategy from "./ExecutionStrategy";
import Agile from "./Agile";
import WireframePrototypeUsability from "./WireframePrototypeUsability";
import PMWorkflow from "./PMWorkflow";
import ImpactEffortMatrix from './ImpactEffortMatrix'
import VisionBoard from "./VisionBoard";
import CDN from "./CDN";
import CloudServerSimulate from "./CloudServerSimulate";
import ASF from "./ASF";
import APITypesInfo from "./APITypesInfo";

// Array of lessons with id, title, component, and a colorful icon.
const lessons = [
  {
    id: 1,
    title: "Execution Strategy",
    component: ExecutionStrategy,
    icon: <FaRocket className="text-blue-500" />,
  },
  {
    id: 2,
    title: "Agile",
    component: Agile,
    icon: <FaTasks className="text-green-500" />,
  },
  {
    id: 3,
    title: "Wireframe Prototype & Usability",
    component: WireframePrototypeUsability,
    icon: <FaPencilAlt className="text-orange-500" />,
  },
  {
    id: 4,
    title: "PM Workflow",
    component: PMWorkflow,
    icon: <FaClipboardCheck className="text-indigo-500" />,
  },
 
  {
    id: 5,
    title: "Vision Board",
    component: VisionBoard,
    icon: <FaQuoteRight className="text-pink-500" />,
  },

  
  {
    id: 6,
    title: "Impact Effort Matrix",
    component: ImpactEffortMatrix
    ,
    icon: <FaClipboardCheck className="text-pink-500" />,
  },


  {
    id: 7,
    title: "CDN",
    component: CDN,
    icon: <FaClipboardCheck className="text-pink-500" />,
  },

  {
    id: 8,
    title: "Cloud-Server-Storage",
    component: CloudServerSimulate,
    icon: <FaClipboardCheck className="text-pink-500" />,
  },

  {
    id: 9,
    title: "ASF",
    component: ASF,
    icon: <FaClipboardCheck className="text-pink-500" />,
  },


  {
    id: 10,
    title: "API Types",
    component: APITypesInfo,
    icon: <FaClipboardCheck className="text-pink-500" />,
  },
];


const Dashboard2 = () => {
  // Local state to track which lesson is currently active.
  // When activeLesson is null, we show the Dashboard home view.
  const [activeLesson, setActiveLesson] = useState(null);

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson);
  };

  const handleBack = () => {
    setActiveLesson(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Title and Print Button */}
      <header className="flex justify-between items-center bg-white shadow px-4 py-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Intermediate PM Lessons Dashboard
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
                Welcome to the Intermediate Lessons Dashboard
              </h2>
              <p className="text-gray-600">
                Please select a lesson below to view its content.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  onClick={() => handleLessonClick(lesson)}
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
              onClick={handleBack}
              className="flex items-center mb-4 text-blue-600 hover:text-blue-800"
            >
              <FaArrowLeft className="mr-2" /> Back to Dashboard Home
            </button>
            <div className="border rounded-lg shadow-lg p-6 bg-white">
              {/* Render the active lesson's component */}
              <activeLesson.component />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard2;
