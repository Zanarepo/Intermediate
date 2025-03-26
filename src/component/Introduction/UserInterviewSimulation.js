import React, { useState, useEffect } from 'react';
import { FaUser, FaComments, FaMicrophone, FaPoll } from 'react-icons/fa';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001'); // Change this if using a real server

const UserInterviewSimulation = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [interviewLog, setInterviewLog] = useState([]);
  const [isCollaborating, setIsCollaborating] = useState(false);

  // Receive real-time updates from other users
  useEffect(() => {
    socket.on('newResponse', (data) => {
      setInterviewLog((prev) => [...prev, data]);
    });

    socket.on('userJoined', () => {
      setIsCollaborating(true);
    });

    return () => {
      socket.off('newResponse');
      socket.off('userJoined');
    };
  }, []);

  // Send response
  const sendResponse = () => {
    if (question && response) {
      const newEntry = { question, response };
      socket.emit('sendResponse', newEntry);
      setInterviewLog((prev) => [...prev, newEntry]);
      setResponse('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-2">
        <FaMicrophone /> User Interview Simulator
      </h1>
      <p className="text-gray-600">Practice conducting user interviews to understand user needs before building a product.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Interview Panel */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaUser className="text-blue-500" /> Ask a Question
          </h2>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-2"
            placeholder="Enter a user research question..."
          />
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-2"
            rows="3"
            placeholder="Enter the user's response..."
          />
          <button
            onClick={sendResponse}
            className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
          >
            Submit Response
          </button>
        </div>

        {/* Live Responses Panel */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaComments className="text-green-500" /> Live Interview Log
          </h2>
          <div className="h-60 overflow-y-auto border border-gray-200 rounded p-4 mt-2">
            {interviewLog.map((log, index) => (
              <div key={index} className="p-3 bg-gray-100 rounded mb-2">
                <strong>Q:</strong> {log.question}
                <p><strong>A:</strong> {log.response}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collaboration Indicator */}
      {isCollaborating && (
        <p className="text-green-500 mt-4">🔗 Someone else is also conducting an interview in this session.</p>
      )}

      {/* Real-World Example */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaPoll className="text-purple-500" /> Real-World Example
        </h2>
        <p className="text-gray-600 mt-2">
          🔹 **Instagram Reels**: Instagram conducted user research and found that users wanted **shorter, engaging videos** similar to TikTok. Based on this feedback, they **built and launched Instagram Reels**, which became a huge success. 🎥
        </p>
      </div>
    </div>
  );
};

export default UserInterviewSimulation;
