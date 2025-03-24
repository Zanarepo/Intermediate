import React, { useState } from 'react';
import {
  FaLightbulb,
  FaSearch,
  FaCode,
  FaRocket,
} from 'react-icons/fa';

const ProductDevelopmentLifecycle = () => {
  // Define the four stages as tabs
  const tabs = [
    { id: 1, title: 'Idea Generation & Market Research', icon: <FaLightbulb /> },
    { id: 2, title: 'Product Discovery & Validation', icon: <FaSearch /> },
    { id: 3, title: 'Building an MVP', icon: <FaCode /> },
    { id: 4, title: 'Product Launch & GTM Strategy', icon: <FaRocket /> },
  ];

  const [activeTab, setActiveTab] = useState(1);

  /*** Tab 1: Idea Generation Simulator ***/
  const [ideaInput, setIdeaInput] = useState('');
  const [ideas, setIdeas] = useState([]);
  const handleIdeaSubmit = (e) => {
    e.preventDefault();
    if (ideaInput.trim() !== '') {
      setIdeas([...ideas, ideaInput]);
      setIdeaInput('');
    }
  };

  /*** Tab 2: Landing Page Test Simulator ***/
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  /*** Tab 3: MVP Builder Simulator ***/
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [mvpBuilt, setMvpBuilt] = useState(false);
  const handleFeatureToggle = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };
  const buildMVP = () => {
    if (selectedFeatures.length > 0) {
      setMvpBuilt(true);
    }
  };

  /*** Tab 4: Product Launch Simulator ***/
  const [launched, setLaunched] = useState(false);
  const launchProduct = () => {
    setLaunched(true);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Development Lifecycle</h1>
      <div className="flex flex-wrap mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center p-2 m-1 border rounded transition-colors duration-300 ${
              activeTab === tab.id ? 'bg-gray-300 font-bold' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="border p-6 bg-white rounded shadow">
        {/* --- Tab 1: Idea Generation & Market Research --- */}
        {activeTab === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{tabs[0].title}</h2>
            <p className="mb-4">
              In this stage, you generate new ideas by identifying customer pain points, analyzing competitor gaps, and spotting industry trends.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Customer Pain Points:</strong> What problems are users facing?</li>
              <li><strong>Competitor Gaps:</strong> What is missing in current solutions?</li>
              <li><strong>Industry Trends:</strong> What’s the new trend?</li>
            </ul>
            <div className="border border-dashed border-gray-400 p-4 bg-gray-50 rounded">
              <h3 className="text-xl font-semibold mb-3">Idea Generation Simulator</h3>
              <form onSubmit={handleIdeaSubmit} className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Enter your product idea..."
                  value={ideaInput}
                  onChange={(e) => setIdeaInput(e.target.value)}
                  className="p-2 border border-gray-300 rounded w-3/4 mr-2"
                />
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Submit Idea
                </button>
              </form>
              {ideas.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold">Submitted Ideas:</h4>
                  <ul className="list-disc list-inside">
                    {ideas.map((idea, index) => (
                      <li key={index}>{idea}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- Tab 2: Product Discovery & Validation --- */}
        {activeTab === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{tabs[1].title}</h2>
            <p className="mb-4">
              This stage focuses on understanding the problem deeply and validating your idea through user interviews, surveys, prototypes, and landing page tests.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>User Interviews & Surveys:</strong> Gather feedback directly from potential users.</li>
              <li><strong>Prototypes & Wireframes:</strong> Visualize your idea.</li>
              <li><strong>Landing Page Tests:</strong> Gauge market interest.</li>
            </ul>
            <div className="border border-dashed border-gray-400 p-4 bg-gray-50 rounded">
              <h3 className="text-xl font-semibold mb-3">Landing Page Test Simulator</h3>
              {!submitted ? (
                <form onSubmit={handleEmailSubmit} className="flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email for early access"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-3/4 mr-2"
                  />
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Sign Up
                  </button>
                </form>
              ) : (
                <div className="p-3 bg-green-100 border border-green-300 text-green-800 rounded">
                  <p>Thank you! {email} is registered for early access.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- Tab 3: Building an MVP --- */}
        {activeTab === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{tabs[2].title}</h2>
            <p className="mb-4">
              In the MVP stage, you build a basic version of your product with core functionalities only. Focus on essentials to quickly gather user feedback.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Core User Interactions</strong></li>
              <li><strong>Basic Design & Functionality</strong></li>
              <li><strong>Feedback Mechanisms</strong></li>
            </ul>
            <div className="border border-dashed border-gray-400 p-4 bg-gray-50 rounded">
              <h3 className="text-xl font-semibold mb-3">MVP Builder Simulator</h3>
              {!mvpBuilt ? (
                <div>
                  <p className="mb-2">Select the core features for your MVP:</p>
                  <div className="mb-3">
                    <label className="block mb-1">
                      <input
                        type="checkbox"
                        value="Task Addition"
                        onChange={() => handleFeatureToggle('Task Addition')}
                        checked={selectedFeatures.includes('Task Addition')}
                        className="mr-2"
                      />
                      Task Addition
                    </label>
                    <label className="block mb-1">
                      <input
                        type="checkbox"
                        value="Deadline Reminders"
                        onChange={() => handleFeatureToggle('Deadline Reminders')}
                        checked={selectedFeatures.includes('Deadline Reminders')}
                        className="mr-2"
                      />
                      Deadline Reminders
                    </label>
                    <label className="block mb-1">
                      <input
                        type="checkbox"
                        value="Notifications"
                        onChange={() => handleFeatureToggle('Notifications')}
                        checked={selectedFeatures.includes('Notifications')}
                        className="mr-2"
                      />
                      Notifications
                    </label>
                  </div>
                  <button onClick={buildMVP} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Build MVP
                  </button>
                </div>
              ) : (
                <div>
                  <p className="mb-2">Your MVP has been built with the following features:</p>
                  <ul className="list-disc list-inside">
                    {selectedFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- Tab 4: Product Launch & GTM Strategy --- */}
        {activeTab === 4 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{tabs[3].title}</h2>
            <p className="mb-4">
              In the launch stage, you finalize testing, execute a go-to-market strategy, and start acquiring users.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Final Testing & Bug Fixes</strong></li>
              <li><strong>Go-To-Market Strategy</strong></li>
              <li><strong>Marketing & User Acquisition</strong></li>
            </ul>
            <div className="border border-dashed border-gray-400 p-4 bg-gray-50 rounded">
              <h3 className="text-xl font-semibold mb-3">Product Launch Simulator</h3>
              {!launched ? (
                <button onClick={launchProduct} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Launch Product
                </button>
              ) : (
                <div className="p-3 bg-green-100 border border-green-300 text-green-800 rounded">
                  <p>Congratulations! Your product has been launched successfully!</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDevelopmentLifecycle;
