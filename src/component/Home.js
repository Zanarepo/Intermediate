import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaChartBar } from 'react-icons/fa';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        <h1>Product Management Mastery</h1>
        <p>
          Dive into the world of product management with our comprehensive lessons. Whether you are just starting out or looking to refine your intermediate skills, mastering these strategies is essential to excel as a product manager. Leverage these insights to drive innovation, optimize processes, and deliver outstanding results.
        </p>
      </header>
      <div className="tiles-container">
        <Link to="/dashboard" className="tile dashboard">
          <FaTachometerAlt size={50} />
          <h3>Introductory Lessons</h3>
        </Link>
        <Link to="/dashboard2" className="tile dashboard2">
          <FaChartBar size={50} />
          <h3>Intermediate Lessons</h3>
        </Link>

        <Link to="/growth" className="tile dashboard3">
          <FaChartBar size={50} />
          <h3>Growth</h3>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
