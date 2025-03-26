import React, { useState } from 'react';
import APISimulation from './APISimulation';
import {
  FaNetworkWired,
  FaDesktop,
  FaCode,
  FaDatabase,
  FaMicrochip,
  FaCloud,
  FaCreditCard,
  FaShareAlt,
  FaWifi,
} from 'react-icons/fa';

const apiData = [
  {
    id: 1,
    title: "Web APIs",
    icon: <FaNetworkWired className="text-3xl text-blue-500" />,
    shortDescription:
      "Interfaces for web and mobile apps using standard HTTP methods.",
    details:
      "Web APIs include RESTful APIs (e.g., Twitter, Google Maps), SOAP APIs (used in banking and enterprise), GraphQL APIs (fetch exactly what you need), and gRPC APIs (for efficient microservices communication).",
  },
  {
    id: 2,
    title: "Operating System APIs",
    icon: <FaDesktop className="text-3xl text-green-500" />,
    shortDescription:
      "APIs to interact with the operating system, managing files and hardware.",
    details:
      "These APIs help in building desktop applications, system utilities, and device drivers. Examples include the Windows API and POSIX.",
  },
  {
    id: 3,
    title: "Library/Framework APIs",
    icon: <FaCode className="text-3xl text-purple-500" />,
    shortDescription:
      "APIs provided by libraries or frameworks to speed up development.",
    details:
      "They offer pre-built code to build features faster. Examples include React for UI, TensorFlow for machine learning, and Stripe SDK for payment processing.",
  },
  {
    id: 4,
    title: "Database APIs",
    icon: <FaDatabase className="text-3xl text-indigo-500" />,
    shortDescription:
      "APIs for interacting with databases to perform CRUD operations.",
    details:
      "Database APIs allow applications to connect, query, and manipulate data in relational and NoSQL databases like MongoDB.",
  },
  {
    id: 5,
    title: "Hardware APIs",
    icon: <FaMicrochip className="text-3xl text-red-500" />,
    shortDescription:
      "Interfaces for communication between software and hardware devices.",
    details:
      "They allow access to device sensors, cameras, and peripherals. Common in mobile apps to access features like GPS, camera, or accelerometer.",
  },
  {
    id: 6,
    title: "Cloud Service APIs",
    icon: <FaCloud className="text-3xl text-sky-500" />,
    shortDescription:
      "APIs provided by cloud providers to manage computing resources.",
    details:
      "These APIs help automate tasks like provisioning servers, managing storage, and configuring networks. Examples include AWS, Google Cloud, and Azure APIs.",
  },
  {
    id: 7,
    title: "Payment APIs",
    icon: <FaCreditCard className="text-3xl text-yellow-500" />,
    shortDescription: "APIs that enable secure payment processing.",
    details:
      "Payment APIs allow apps to handle transactions securely without managing sensitive data directly. Examples include Stripe and PayPal.",
  },
  {
    id: 8,
    title: "Social Media APIs",
    icon: <FaShareAlt className="text-3xl text-pink-500" />,
    shortDescription:
      "APIs to interact with social media platforms and their data.",
    details:
      "They are used to fetch profiles, posts, or analytics data. Examples include the Facebook Graph API and Twitter API.",
  },
  {
    id: 9,
    title: "IoT APIs",
    icon: <FaWifi className="text-3xl text-teal-500" />,
    shortDescription:
      "APIs for connecting and controlling Internet of Things devices.",
    details:
      "IoT APIs enable real-time data collection and automation for smart devices like sensors and home automation systems.",
  },
];

const APITypesInfo = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleActive = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Different Types of APIs & Their Use Cases
      </h1>
      <div className="space-y-4">
        {apiData.map((api) => (
          <div key={api.id} className="border rounded-lg shadow-md">
            <button
              onClick={() => toggleActive(api.id)}
              className="flex items-center justify-between w-full p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
              <div className="flex items-center space-x-4">
                {api.icon}
                <div>
                  <h2 className="text-xl font-semibold">{api.title}</h2>
                  <p className="text-gray-600">{api.shortDescription}</p>
                </div>
              </div>
              <div>
                {activeId === api.id ? (
                  <svg
                    className="w-6 h-6 transform rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
            </button>
            {activeId === api.id && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">{api.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <APISimulation />
    </div>
  );
};

export default APITypesInfo;
