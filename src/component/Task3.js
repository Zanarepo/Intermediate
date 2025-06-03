import React from 'react';

const ExportPRDComponent = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-b from-green-50 to-gray-50 min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Creating a PRD for Secure Payment Escrow
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A step-by-step guide to help interns craft a PRD for a secure escrow platform addressing payment fraud and delays for Nigerian exporters.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Step 1: Define the Project Scope
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-medium text-gray-700 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Problem
          </h3>
          <p className="text-gray-600 mb-3">Nigerian exporters face payment fraud and delayed payments from international buyers, leading to financial losses and distrust in cross-border trade.</p>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Start with a clear problem statement. Identify the target users (e.g., Nigerian exporters) and their challenges (e.g., payment fraud). This sets the stage for your solution.
            <br />
            <strong>Example:</strong> "Nigerian exporters lose 20% of revenue annually due to fraudulent buyers who fail to pay after receiving goods."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Solution
          </h3>
          <p className="text-gray-600 mb-3">A secure escrow system where payments are held in a digital wallet until buyers confirm delivery, ensuring trust and timely payouts.</p>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Clearly outline how the product addresses the problem. Highlight key features (e.g., digital wallet, delivery confirmation) and their benefits.
            <br />
            <strong>Example:</strong> "Our escrow system holds payments until delivery is confirmed, ensuring exporters receive funds within 24 hours of buyer approval."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 9.143M15 3v4m4-2h4"></path>
            </svg>
            Extra Feature
          </h3>
          <p className="text-gray-600 mb-3">AI-powered fraud detection to flag risky transactions before exporters ship goods, reducing the risk of fraud.</p>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Include a standout feature that differentiates your product. Explain its value to users.
            <br />
            <strong>Example:</strong> "AI fraud detection flags 95% of risky buyers, preventing exporters from shipping to unverified parties."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            Objective
          </h3>
          <p className="text-gray-600 mb-3">Develop a platform dedicated to secure payment escrow for international exports, providing Nigerian exporters with tools to safely manage transactions, verify buyer payments, and mitigate fraud risks. The platform should offer both mobile and web-based options to maximize accessibility.</p>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Write a concise, measurable objective that captures the product’s purpose and scope.
            <br />
            <strong>Example:</strong> "Enable 90% of Nigerian exporters to use secure escrow for international transactions within one year of launch."
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          Step 2: Conduct Research and Analysis
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-medium text-gray-700 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            Market Research
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Research the preferences and pain points of Nigerian exporters, identifying common export categories (e.g., agriculture, textiles), key international markets, and fraud-related challenges.</li>
            <li>Study competitor platforms, such as Trade Assurance (Alibaba), Escrow.com, or Payoneer Escrow, to identify gaps in pricing, user experience, and fraud prevention features tailored to Nigerian exporters.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Use surveys or interviews to understand user pain points. Compare competitors to find unmet needs.
            <br />
            <strong>Example:</strong> "Research revealed 70% of Nigerian exporters face delayed payments, and competitors lack localized escrow for African markets."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Industry Analysis
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Analyze trends in the international trade and fintech industry, focusing on the growing demand for secure payment solutions, escrow services, and AI-driven fraud detection in cross-border transactions.</li>
            <li>Identify potential partners (e.g., banks, logistics companies, or trade associations like the Nigerian Export Promotion Council) who could integrate with the platform to enhance trust and delivery verification.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Explore industry trends and partnerships to strengthen your product. Partners can add credibility and functionality.
            <br />
            <strong>Example:</strong> "Partnering with the Nigerian Export Promotion Council can streamline export documentation, boosting user trust."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Demand for Digital Solutions
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Conduct user research to understand Nigerian exporters’ needs, such as secure payment guarantees, fast dispute resolution, and fraud risk assessment, as well as barriers like limited tech adoption or high transaction fees.</li>
            <li>Identify demand for services like real-time payment tracking, automated buyer verification, and AI-powered fraud alerts tailored to international trade.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Focus on user needs and barriers. Simple interfaces and low fees can drive adoption.
            <br />
            <strong>Example:</strong> "80% of exporters want real-time payment tracking to monitor international transactions securely."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Market Gaps
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Identify gaps such as lack of localized escrow solutions for Nigerian exporters, slow payment release processes, or inadequate fraud protection, and propose solutions (e.g., AI fraud detection, instant payment release upon delivery confirmation).</li>
            <li>Assess the need for features like transaction dashboards, export documentation support, and buyer reputation scoring to create a comprehensive escrow experience.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Propose solutions that address specific gaps to make your product stand out.
            <br />
            <strong>Example:</strong> "Unlike Escrow.com, our platform offers buyer reputation scoring, helping exporters avoid risky transactions."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Revenue Model Exploration
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Explore revenue options, such as transaction fees for escrow services (e.g., a percentage of each deal), subscription plans for premium features (e.g., advanced fraud detection), or partnerships with banks and logistics providers.</li>
            <li>Consider a freemium model, with basic escrow and tracking for free, and premium options (like AI fraud analysis or priority support) at a cost.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Ensure revenue models balance accessibility and profitability. A freemium approach can attract users while generating income.
            <br />
            <strong>Example:</strong> "A 1% transaction fee for escrow services funds free basic features, while premium AI fraud alerts cost $5/month."
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0h2a2 2 0 012 2v12a2 2 0 01-2 2H7"></path>
          </svg>
          Step 3: Define Deliverables
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
          <p className="text-gray-600 mb-4">Submit your completed PRD document with the following:</p>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>A clear and engaging product name (e.g., "ExportSafe Escrow").</li>
            <li>A well-organized and detailed PRD following the template provided.</li>
            <li>A brief reflection (2-3 sentences) on why this platform is impactful and how your PRD addresses the key aspects of a successful product.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Choose a memorable product name and ensure deliverables are specific. The reflection should tie the PRD to user impact.
            <br />
            <strong>Example:</strong> "ExportSafe Escrow reflects security and trade, and the reflection explains how it builds trust for exporters."
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Step 4: Understand Evaluation Criteria
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li><span className="font-medium">Clarity:</span> Is the PRD easy to understand?</li>
            <li><span className="font-medium">Completeness:</span> Does the PRD cover all key aspects (problem statement, target users, core features, user flow, success metrics)?</li>
            <li><span className="font-medium">Relevance:</span> Are the features and goals aligned with the problem statement?</li>
            <li><span className="font-medium">Creativity:</span> Does the PRD propose innovative solutions or ideas?</li>
            <li><span className="font-medium">Presentation:</span> Is the document well-organized and visually appealing?</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Check your PRD against these criteria to ensure quality. Use visuals and clear language to enhance presentation.
            <br />
            <strong>Example:</strong> "A clear PRD with a transaction dashboard visual helps stakeholders understand the user flow."
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          Step 5: Tips for Success
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Focus on clarity and brevity; make sure each section is easily understood.</li>
            <li>Link features to user pain points (e.g., fraud prevention tied to payment security) to emphasize their importance.</li>
            <li>Use bullet points and headings to improve readability.</li>
            <li>Collaborate with peers to refine and enhance the document.</li>
            <li>Collaborate with Data Analysts to leverage their research on competitors and market trends.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Collaboration and structured formatting make your PRD stronger. Peer feedback can refine your approach.
            <br />
            <strong>Example:</strong> "Linking AI fraud detection to payment security shows how the feature protects exporters’ revenue."
          </p>
        </div>
      </section>

      <footer className="text-center mt-12 text-gray-600 bg-white py-6 rounded-lg shadow-md">
        <p className="text-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Follow these steps to create a compelling PRD! Use this guide as a template to address Nigerian exporters’ payment security needs.
        </p>
      </footer>
    </div>
  );
};

export default ExportPRDComponent;