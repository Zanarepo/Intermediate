
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaChartBar, FaLock, FaUnlock } from 'react-icons/fa';

const PASSWORD = "growth123";

const Homepage = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  useEffect(() => {
    const unlocked = localStorage.getItem("homepageUnlocked");
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    if (passwordInput === PASSWORD) {
      localStorage.setItem("homepageUnlocked", "true");
      setIsUnlocked(true);
      setShowModal(false);
      alert("Unlocked successfully!");
    } else {
      alert("Incorrect password. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-2 xs:p-3 bg-gradient-to-b from-gray-100 to-gray-200 w-full max-w-full overflow-x-hidden">
      <header className="text-center mb-4 xs:mb-6 sm:mb-8 w-full max-w-full" role="banner">
        <h1 className="text-base xs:text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 break-all tracking-tight">
          Product Management Mastery
        </h1>
        <p className="text-xs xs:text-sm sm:text-base text-gray-700 mt-1.5 max-w-full px-1 sm:px-0 break-all leading-relaxed">
          Dive into the world of product management with our comprehensive lessons. Whether you are just starting out or looking to refine your intermediate skills, mastering these strategies is essential to excel as a product manager. Leverage these insights to drive innovation, optimize processes, and deliver outstanding results.
        </p>
      </header>

      <div className="flex flex-col gap-2 xs:gap-3 w-full max-w-full px-1 sm:flex-row sm:gap-4 sm:justify-center" role="navigation">
        <Link
          to="/dashboard"
          className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-200 text-cyan-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out w-full max-w-full min-h-[90px] sm:w-48"
          aria-label="Go to Introductory Lessons"
        >
          <FaTachometerAlt size={24} className="mb-1 xs:mb-2" />
          <h3 className="text-sm xs:text-base sm:text-lg font-semibold">Introductory Lessons</h3>
        </Link>

        <Link
          to="/dashboard2"
          className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 text-pink-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out w-full max-w-full min-h-[90px] sm:w-48"
          aria-label="Go to Intermediate Lessons"
        >
          <FaChartBar size={24} className="mb-1 xs:mb-2" />
          <h3 className="text-sm xs:text-base sm:text-lg font-semibold">Intermediate Lessons</h3>
        </Link>

        {isUnlocked ? (
          <Link
            to="/all"
            className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 text-teal-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out w-full max-w-full min-h-[90px] sm:w-48"
            aria-label="Go to Growth Product"
          >
            <FaChartBar size={24} className="mb-1 xs:mb-2" />
            <h3 className="text-sm xs:text-base sm:text-lg font-semibold">Growth Product</h3>
            <FaUnlock className="mt-1 xs:mt-2" />
          </Link>
        ) : (
          <>
            <button
              onClick={() => setShowModal(true)}
              className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 text-white opacity-90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out w-full max-w-full min-h-[90px] sm:w-48"
              aria-label="Unlock Growth Product Content"
            >
              <FaLock size={24} className="mb-1 xs:mb-2" />
              <h3 className="text-sm xs:text-base sm:text-lg font-semibold">Locked Content</h3>
              <p className="text-xs sm:text-sm text-gray-200 mt-1">Tap to Unlock</p>
            </button>
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                <div className="bg-white p-3 xs:p-4 rounded-xl w-11/12 max-w-[280px] flex flex-col gap-2 shadow-xl">
                  <h2 className="text-sm xs:text-base font-semibold text-gray-800">Unlock Content</h2>
                  <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter password"
                    className="w-full p-2 border border-gray-300 rounded-lg text-xs xs:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleUnlock}
                      className="bg-blue-500 text-white p-2 rounded-lg w-full text-xs xs:text-sm hover:bg-blue-600 transition-colors"
                    >
                      Submit
                    </button>
                    <button
                      onClick={() => setShowModal(false)}
                      className="bg-gray-300 p-2 rounded-lg w-full text-xs xs:text-sm hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Homepage;
