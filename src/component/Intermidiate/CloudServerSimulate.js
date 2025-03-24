// App.js
import React, { useState, useEffect } from "react";
// Importing icons from react-icons
import { FaNetworkWired, FaServer, FaDatabase, FaArrowRight } from "react-icons/fa";
import "./Cloud.css";
import CloudComputingInfo from "./CloudComputingInfo";
function App() {
  // State variables for each simulation layer:
  // - networkRequests: Represents incoming requests (Networking).
  // - serverQueue: Represents requests being processed (Servers).
  // - storageOperations: Represents completed operations (Storage).
  const [networkRequests, setNetworkRequests] = useState([]);
  const [serverQueue, setServerQueue] = useState([]);
  const [storageOperations, setStorageOperations] = useState([]);

  // -----------------------------
  // Simulate the Networking Layer
  // -----------------------------
  // Every 2 seconds, create a new request and add it to the networkRequests queue.
  useEffect(() => {
    const interval = setInterval(() => {
      const newRequest = {
        id: Date.now(),
        type: Math.random() > 0.5 ? "Read" : "Write",
        timestamp: new Date().toLocaleTimeString()
      };
      setNetworkRequests(prev => [...prev, newRequest]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // ---------------------------
  // Simulate the Servers Layer
  // ---------------------------
  // Every 3 seconds, move one request from the networkRequests queue into the serverQueue,
  // simulating the server picking up a task for processing.
  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkRequests(prevRequests => {
        if (prevRequests.length === 0) return prevRequests;
        const [requestToProcess, ...remainingRequests] = prevRequests;
        setServerQueue(prevQueue => [...prevQueue, requestToProcess]);
        return remainingRequests;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ----------------------------
  // Simulate the Storage Layer
  // ----------------------------
  // Every 4 seconds, move one processed request from the serverQueue to the storageOperations list,
  // simulating the final storage of the processed task.
  useEffect(() => {
    const interval = setInterval(() => {
      setServerQueue(prevQueue => {
        if (prevQueue.length === 0) return prevQueue;
        const [processedRequest, ...remainingQueue] = prevQueue;
        setStorageOperations(prevStorage => [...prevStorage, processedRequest]);
        return remainingQueue;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
        <CloudComputingInfo/>
      <h1>Cloud Infrastructure Simulator</h1>
      <p>
        This simulation demonstrates how three core components in cloud computing work together:
        <strong> Networking, Servers, and Storage</strong>.
      </p>

      {/* Explainer texts for each concept with icons */}
      <div className="explanations">
        <div className="explanation networking-explain">
          <FaNetworkWired className="icon" />
          <h2>Networking</h2>
          <p>Handles incoming requests and routes them to servers.</p>
        </div>
        <div className="explanation servers-explain">
          <FaServer className="icon" />
          <h2>Servers</h2>
          <p>Processes the requests like a busy factory.</p>
        </div>
        <div className="explanation storage-explain">
          <FaDatabase className="icon" />
          <h2>Storage</h2>
          <p>Saves the processed data for future use.</p>
        </div>
      </div>

      {/* Flow container to display panels and arrows */}
      <div className="flow-container">
        {/* Networking Panel */}
        <div className="panel networking">
          <h2>
            <FaNetworkWired className="panel-icon" /> Networking
          </h2>
          <ul>
            {networkRequests.map(req => (
              <li key={req.id}>
                {req.timestamp}: Request {req.id} - {req.type}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Arrow from Networking to Servers */}
        <div className="arrow">
          <FaArrowRight size={40} />
        </div>
        
        {/* Servers Panel */}
        <div className="panel servers">
          <h2>
            <FaServer className="panel-icon" /> Servers
          </h2>
          <ul>
            {serverQueue.map(req => (
              <li key={req.id}>
                {req.timestamp}: Processing Request {req.id} - {req.type}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Arrow from Servers to Storage */}
        <div className="arrow">
          <FaArrowRight size={40} />
        </div>
        
        {/* Storage Panel */}
        <div className="panel storage">
          <h2>
            <FaDatabase className="panel-icon" /> Storage
          </h2>
          <ul>
            {storageOperations.map(req => (
              <li key={req.id}>
                {req.timestamp}: Completed {req.type} for Request {req.id}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
