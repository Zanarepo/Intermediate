import React from 'react';
import { FaMoneyBillWave, FaBrain, FaFire } from 'react-icons/fa';
import SDKFramework from './SDKFramework';

const ApiPlatformsInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">API Platforms</h1>
      <p className="text-lg text-gray-700 mb-8">
        API platforms provide well-defined interfaces that let different software systems interact with each other over the internet. They expose functionalities or data from one system so that developers can integrate these features into their own applications without building everything from scratch.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Plaid Card */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <FaMoneyBillWave className="text-green-500 text-4xl mr-3" />
            <h2 className="text-xl font-semibold">Plaid</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p>
              <span className="font-semibold">Purpose:</span> Plaid is a financial API platform that connects apps with users’ bank accounts.
            </p>
            <p>
              <span className="font-semibold">Usage:</span> Commonly used for building budgeting apps, payment solutions, or any financial service that needs secure access to banking information.
            </p>
            <p>
              <span className="font-semibold">Key Feature:</span> Secure data aggregation from multiple banks, simplifying developers’ work with financial data.
            </p>
          </div>
        </div>

        {/* OpenAI API Card */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <FaBrain className="text-blue-500 text-4xl mr-3" />
            <h2 className="text-xl font-semibold">OpenAI API</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p>
              <span className="font-semibold">Purpose:</span> Gives developers access to advanced AI models developed by OpenAI.
            </p>
            <p>
              <span className="font-semibold">Usage:</span> Used for generating text, creating chatbots, or powering creative applications like story generation or code assistance.
            </p>
            <p>
              <span className="font-semibold">Key Feature:</span> Provides state-of-the-art natural language processing (NLP) capabilities without the need to train complex models in-house.
            </p>
          </div>
        </div>

        {/* Firebase Card */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <FaFire className="text-red-500 text-4xl mr-3" />
            <h2 className="text-xl font-semibold">Firebase</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p>
              <span className="font-semibold">Purpose:</span> A platform by Google offering various backend services for mobile and web applications.
            </p>
            <p>
              <span className="font-semibold">Usage:</span> Provides real-time databases, authentication, cloud messaging, and analytics, making it easier to build scalable apps.
            </p>
            <p>
              <span className="font-semibold">Key Feature:</span> Simplifies development with ready-to-use services that integrate smoothly into apps, reducing the need for custom backend code.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-lg text-blue-800">
          <span className="font-semibold">Why They’re Valuable:</span> For product managers and developers, API platforms accelerate development by providing ready-made, reliable functionalities. They reduce time-to-market, allow for rapid prototyping, and enable teams to focus on creating unique value rather than reinventing common services.
        </p>
      </div>
      <SDKFramework/>
    </div>
  );
};

export default ApiPlatformsInfo;
