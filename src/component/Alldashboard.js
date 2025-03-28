import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaChartLine, FaFire, FaCogs, FaUsers, 
  FaDollarSign, FaGlobe, FaBullhorn, FaShoppingCart 
} from "react-icons/fa";

const PASSWORDS = {
  "/growthdb": "growth123",
  "/growthdashboard": "experiment456",
  "/viraldashboard": "viral789",
  "/automationdashboard": "auto101",
  "/Collabodashboard": "collab202",
  "/moneydashboard": "money303",
  "/localizationdashboard": "local404",
  "/marketingdashboard": "market505",
  "/marketdashboard": "digital606",
};

const dashboards = [
  { route: "/growthdb", label: "Growth PM", icon: <FaChartLine />, color: "bg-blue-500" },
  { route: "/growthdashboard", label: "Experimentation for Growth", icon: <FaChartLine />, color: "bg-green-500" },
  { route: "/viraldashboard", label: "Designing for Virality", icon: <FaFire />, color: "bg-red-500" },
  { route: "/automationdashboard", label: "Scalability & Automation", icon: <FaCogs />, color: "bg-yellow-500" },
  { route: "/Collabodashboard", label: "Cross-Functional Collaboration", icon: <FaUsers />, color: "bg-purple-500" },
  { route: "/moneydashboard", label: "Monetization & Alignment", icon: <FaDollarSign />, color: "bg-orange-500" },
  { route: "/localizationdashboard", label: "Localization & Expansion", icon: <FaGlobe />, color: "bg-indigo-500" },
  { route: "/marketingdashboard", label: "Marketing Exploration Process", icon: <FaBullhorn />, color: "bg-teal-500" },
  { route: "/marketdashboard", label: "Digital Marketing for Growth", icon: <FaShoppingCart />, color: "bg-pink-500" },
];

const GridDashboard = () => {
  const [unlockedTiles, setUnlockedTiles] = useState({});

  useEffect(() => {
    const storedUnlocks = JSON.parse(localStorage.getItem("unlockedDashboards")) || {};
    setUnlockedTiles(storedUnlocks);
  }, []);

  const handleUnlock = (route) => {
    const userInput = prompt("Enter the password to unlock:");
    if (userInput === PASSWORDS[route]) {
      const updatedUnlocks = { ...unlockedTiles, [route]: true };
      setUnlockedTiles(updatedUnlocks);
      localStorage.setItem("unlockedDashboards", JSON.stringify(updatedUnlocks));
      alert("Unlocked successfully!");
    } else {
      alert("Incorrect password. Try again.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
        {dashboards.map((item, index) => (
          unlockedTiles[item.route] ? (
            <Link
              key={index}
              to={item.route}
              className={`${item.color} flex flex-col items-center justify-center rounded-lg shadow-lg p-6 text-white text-center hover:opacity-80 transition-all`}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="text-lg font-semibold">{item.label}</div>
            </Link>
          ) : (
            <div
              key={index}
              onClick={() => handleUnlock(item.route)}
              className={`bg-gray-500 flex flex-col items-center justify-center rounded-lg shadow-lg p-6 text-white text-center cursor-pointer hover:opacity-80 transition-all`}
            >
              <FaCogs className="text-4xl mb-2" />
              <h3 className="text-lg font-semibold">Locked</h3>
              <p className="text-sm">(Click to Unlock)</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default GridDashboard;
