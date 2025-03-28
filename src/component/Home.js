import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaChartBar, FaLock, FaUnlock } from 'react-icons/fa';
import './Homepage.css';

const PASSWORD = "growth123"; // Set your password here

const Homepage = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem("homepageUnlocked");
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    const userInput = prompt("Enter the password to unlock:");
    if (userInput === PASSWORD) {
      localStorage.setItem("homepageUnlocked", "true");
      setIsUnlocked(true);
      alert("Unlocked successfully!");
    } else {
      alert("Incorrect password. Try again.");
    }
  };

  return (
    <div className="homepage-container">
      <header className="header">
        <h1>Product Management Mastery</h1>
        <p>
          Dive into the world of product management with our comprehensive lessons. Whether you are just starting out or looking to refine your intermediate skills, mastering these strategies is essential to excel as a product manager. Leverage these insights to drive innovation, optimize processes, and deliver outstanding results.
        </p>
      </header>

      <div className="tiles-container">
        {/* Regular Accessible Tiles */}
        <Link to="/dashboard" className="tile dashboard">
          <FaTachometerAlt size={50} />
          <h3>Introductory Lessons</h3>
        </Link>

        <Link to="/dashboard2" className="tile dashboard2">
          <FaChartBar size={50} />
          <h3>Intermediate Lessons</h3>
        </Link>

        {/* Locked Tile for "/all" */}
        {isUnlocked ? (
          <Link to="/all" className="tile dashboard3 unlocked">
            <FaChartBar size={50} />
            <h3>Growth Product</h3>
            <FaUnlock className="mt-2" />
          </Link>
        ) : (
          <div onClick={handleUnlock} className="tile dashboard3 locked">
            <FaLock size={50} />
            <h3>Locked Content</h3>
            <p className="text-sm">(Click to Unlock)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
