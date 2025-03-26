import React, { useState, useEffect } from "react";
import { FaChartBar } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LemonadeSimulation = () => {
  const [strawberrySales, setStrawberrySales] = useState(300);
  const [classicSales, setClassicSales] = useState(150);
  const [profit, setProfit] = useState(0);
  const [recommendation, setRecommendation] = useState("");

  // Simulate real-time sales updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStrawberrySales((prev) => prev + Math.floor(Math.random() * 20));
      setClassicSales((prev) => prev + Math.floor(Math.random() * 10));
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Determine best-selling lemonade & update recommendation
  useEffect(() => {
    if (strawberrySales > classicSales) {
      setRecommendation("Increase production of Strawberry Lemonade 🍓");
    } else {
      setRecommendation("Increase production of Classic Lemonade 🍋");
    }
    setProfit(strawberrySales * 2 + classicSales * 1.5); // Profit calculation
  }, [strawberrySales, classicSales]);

  // Chart Data
  const data = {
    labels: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
    datasets: [
      {
        label: "Strawberry Lemonade Sales",
        data: [100, 200, 250, strawberrySales - 50, strawberrySales],
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "Classic Lemonade Sales",
        data: [80, 120, 130, classicSales - 50, classicSales],
        borderColor: "#FFD700",
        backgroundColor: "rgba(255, 215, 0, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl font-bold text-indigo-600 flex items-center gap-2">
        <FaChartBar /> Lemonade Sales Simulation 🍋🍓
      </h1>
      <p className="text-gray-600 mt-2">Use real data to make business decisions!</p>

      {/* Chart Section */}
      <div className="w-full md:w-2/3 mt-6 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-700">Sales Data 📊</h2>
        <Line data={data} />
      </div>

      {/* Sales Numbers & Decisions */}
      <div className="mt-6 flex gap-8">
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-red-500">Strawberry 🍓</h3>
          <p className="text-gray-700 text-lg font-bold">{strawberrySales} cups sold</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-yellow-500">Classic 🍋</h3>
          <p className="text-gray-700 text-lg font-bold">{classicSales} cups sold</p>
        </div>
      </div>

      {/* Insights & Actions */}
      <div className="mt-6 p-6 bg-white rounded-lg shadow-lg w-full md:w-2/3">
        <h2 className="text-lg font-semibold text-gray-800">Insights & Recommendations</h2>
        <p className="mt-2 text-gray-700">{recommendation}</p>
        <p className="mt-2 text-green-600 font-semibold">Total Profit: ${profit.toFixed(2)}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setStrawberrySales(strawberrySales + 50)}
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          Produce More 🍓
        </button>
        <button
          onClick={() => setClassicSales(classicSales + 50)}
          className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600"
        >
          Produce More 🍋
        </button>
      </div>
    </div>
  );
};

export default LemonadeSimulation;
