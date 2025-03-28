import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaFire, FaCogs, FaUsers, FaDollarSign, FaGlobe, FaBullhorn, FaShoppingCart } from "react-icons/fa";

const dashboards = [
  { route: "/growthdb", label: "Growth DB", icon: <FaChartLine />, color: "bg-blue-500" },
  { route: "/growthdashboard", label: "Growth", icon: <FaChartLine />, color: "bg-green-500" },
  { route: "/viraldashboard", label: "Viral", icon: <FaFire />, color: "bg-red-500" },
  { route: "/automationdashboard", label: "Automation", icon: <FaCogs />, color: "bg-yellow-500" },
  { route: "/Collabodashboard", label: "Collaboration", icon: <FaUsers />, color: "bg-purple-500" },
  { route: "/moneydashboard", label: "Money", icon: <FaDollarSign />, color: "bg-orange-500" },
  { route: "/localizationdashboard", label: "Localization", icon: <FaGlobe />, color: "bg-indigo-500" },
  { route: "/marketingdashboard", label: "Marketing", icon: <FaBullhorn />, color: "bg-teal-500" },
  { route: "/marketdashboard", label: "Market", icon: <FaShoppingCart />, color: "bg-pink-500" },
];

const GridDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
        {dashboards.map((item, index) => (
          <Link
            key={index}
            to={item.route}
            className={`${item.color} flex flex-col items-center justify-center rounded-lg shadow-lg p-6 text-white text-center hover:opacity-80 transition-all`}
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <div className="text-lg font-semibold">{item.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GridDashboard;
