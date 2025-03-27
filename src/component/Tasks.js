import React from 'react';

function PRDTemplate() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded">
        <h1 className="text-3xl font-bold mb-6">ExportSafe Escrow PRD</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Problem</h2>
          <p>
            Nigerian exporters face payment fraud and delayed payments from international buyers, leading to financial losses and distrust in cross-border trade.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Solution</h2>
          <p>
            A secure escrow system where payments are held in a digital wallet until buyers confirm delivery, ensuring trust and timely payouts.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Extra Feature</h2>
          <p>
            AI-powered fraud detection to flag risky transactions before exporters ship goods, reducing the risk of fraud.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Objective</h2>
          <p>
            Develop a platform dedicated to secure payment escrow for international exports, providing Nigerian exporters with tools to safely manage transactions, verify buyer payments, and mitigate fraud risks. The platform should offer both mobile and web-based options to maximize accessibility.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Tasks for Product Managers</h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Market Research:</strong> Research the preferences and pain points of Nigerian exporters, identify common export categories, key international markets, and fraud-related challenges. Study competitor platforms to pinpoint gaps in pricing, user experience, and fraud prevention.
            </li>
            <li>
              <strong>Industry Analysis:</strong> Analyze trends in international trade and fintech, focusing on secure payment solutions, escrow services, and AI-driven fraud detection. Identify potential partners (e.g., banks, logistics companies, or trade associations).
            </li>
            <li>
              <strong>Demand for Digital Solutions:</strong> Conduct user research to understand needs like secure payment guarantees, fast dispute resolution, and fraud risk assessment, while considering barriers such as limited tech adoption.
            </li>
            <li>
              <strong>Market Gaps:</strong> Identify deficiencies like the lack of localized escrow solutions, slow payment processes, or inadequate fraud protection, and propose effective solutions.
            </li>
            <li>
              <strong>Revenue Model Exploration:</strong> Explore revenue options (e.g., transaction fees, subscription plans, or partnerships), and consider a freemium model that offers basic escrow and tracking for free with premium features at a cost.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Deliverable</h2>
          <p>Submit your completed PRD document including:</p>
          <ul className="list-disc ml-6">
            <li>A clear and engaging product name (e.g., "ExportSafe Escrow").</li>
            <li>A well-organized and detailed PRD following this template.</li>
            <li>A brief reflection (2-3 sentences) on why this platform is impactful and how your PRD addresses key success aspects.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Evaluation Criteria</h2>
          <ul className="list-disc ml-6">
            <li><strong>Clarity:</strong> Is the PRD easy to understand?</li>
            <li><strong>Completeness:</strong> Does the PRD cover all key aspects (problem statement, target users, core features, user flow, success metrics)?</li>
            <li><strong>Relevance:</strong> Are the features and goals aligned with the problem statement?</li>
            <li><strong>Creativity:</strong> Does the PRD propose innovative solutions or ideas?</li>
            <li><strong>Presentation:</strong> Is the document well-organized and visually appealing?</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default PRDTemplate;
