import React from 'react';

const PRDComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Creating a Product Requirements Document (PRD)</h1>
        <p className="text-lg text-gray-600">A guide for interns to develop a PRD for a meal delivery platform addressing food insecurity and poor nutrition among elderly Nigerians.</p>
      </header>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview: Food Insecurity and Poor Nutrition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium text-gray-700">Problem</h3>
            <p className="text-gray-600">Elderly Nigerians face food insecurity and poor nutrition due to financial constraints and lack of support for meal preparation, leading to health issues like malnutrition and weakened immunity.</p>
            <p className="text-sm text-gray-500 italic mt-2">Example: A clear problem statement identifies the target user (elderly Nigerians) and their pain points (financial constraints, lack of meal prep support). Always define who is affected and why it matters.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700">Solution</h3>
            <p className="text-gray-600">A web, mobile, and USSD-based meal delivery and nutrition tracking platform, partnering with local vendors to provide affordable, nutritious meals tailored to elderly dietary needs, with subsidies for low-income users.</p>
            <p className="text-sm text-gray-500 italic mt-2">Example: The solution outlines the product (meal delivery platform) and its key features (web/mobile/USSD, partnerships, subsidies). Tie the solution directly to the problem.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700">Extra Feature</h3>
            <p className="text-gray-600">AI-driven meal planning that customizes menus based on health conditions (e.g., diabetes, hypertension) and dietary preferences, ensuring optimal nutrition.</p>
            <p className="text-sm text-gray-500 italic mt-2">Example: Highlight a unique feature (AI meal planning) that differentiates your product. Explain how it addresses user needs (health conditions).</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700">Objective</h3>
            <p className="text-gray-600">Develop a platform to ensure elderly Nigerians have access to affordable, nutritious meals and personalized nutrition tracking, with web, mobile, and USSD options to maximize accessibility across urban and rural areas.</p>
            <p className="text-sm text-gray-500 italic mt-2">Example: The objective is a concise goal statement that summarizes the product’s purpose and scope. Keep it measurable and user-focused.</p>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tasks for Product Managers</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium text-gray-700">Market Research</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Research elderly dietary needs, financial barriers to nutritious food, and challenges in meal preparation, particularly for those living alone or with mobility issues.</li>
              <li>Study competitor platforms like FoodCo, local meal delivery services, or international apps like Meals on Wheels, identifying gaps in affordability, elderly focus, and nutritional customization.</li>
            </ul>
            <p className="text-sm text-gray-500 italic mt-2">Example: Market research helps validate the problem and identify gaps. For instance, finding that no competitor offers USSD-based ordering for non-smartphone users highlights a unique opportunity.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700">Industry Analysis</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Analyze trends in food delivery, nutrition tech, and elderly care, focusing on the growing demand for affordable meal solutions and AI-driven health tools in Nigeria.</li>
              <li>Identify potential partners (e.g., local food vendors, healthcare providers, or NGOs like Senior Citizens Care Nigeria) to integrate with the platform for meal subsidies and delivery logistics.</li>
            </ul>
            <p className="text-sm text-gray-500 italic mt-2">Example: Industry analysis informs partnerships and trends. For example, partnering with NGOs can enable subsidies, making meals more affordable.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700">Demand for Digital Solutions</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Conduct user research to understand elderly needs, such as affordable meal options, easy-to-use ordering systems, and nutrition tracking, as well as barriers like low tech literacy or limited internet access.</li>
              <li>Identify demand for services like subsidized meal plans, real-time delivery tracking, and AI-guided dietary recommendations tailored to chronic conditions.</li>
            </ul>
            <p className="text-sm text-gray-500 italic mt-2">Example: User research reveals specific needs, like USSD for low-tech users, ensuring the platform is accessible to all elderly users.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700">Market Gaps</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Identify gaps such as lack of elderly-focused meal delivery services, high costs of nutritious food, or inadequate dietary personalization, and propose solutions (e.g., AI meal planning, USSD ordering for non-smartphone users).</li>
              <li>Assess the need for features like caregiver coordination, nutritional education, and community meal programs to create a comprehensive nutrition solution.</li>
            </ul>
            <p className="text-sm text-gray-500 italic mt-2">Example: Addressing market gaps, like offering caregiver coordination, ensures the platform meets unmet needs and stands out.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700">Revenue Model Exploration</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Explore revenue options, such as low transaction fees for meal orders, subscription plans for premium features (e.g., AI-customized meal plans), or partnerships with healthcare providers and NGOs for subsidized meals.</li>
              <li>Consider a freemium model, with free basic meal ordering and tracking, and premium options (e.g., priority delivery, advanced nutrition insights) at a low cost.</li>
            </ul>
            <p className="text-sm text-gray-500 italic mt-2">Example: A freemium model balances accessibility (free basic features) with revenue (premium subscriptions), ensuring sustainability.</p>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Deliverable</h2>
        <p className="text-gray-600 mb-4">Submit your completed PRD document with the following:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>A clear and engaging product name (e.g., "NutriCare Nigeria").</li>
          <li>A well-organized and detailed PRD following the template provided.</li>
          <li>A brief reflection (2-3 sentences) on why this platform is impactful and how your PRD addresses the key aspects of a successful product.</li>
        </ul>
        <p className="text-sm text-gray-500 italic mt-2">Example: A product name like "NutriCare Nigeria" is memorable and reflects the platform’s focus on nutrition and care for elderly users.</p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Evaluation Criteria</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><span className="font-medium">Clarity:</span> Is the PRD easy to understand?</li>
          <li><span className="font-medium">Completeness:</span> Does the PRD cover all key aspects (problem statement, target users, core features, user flow, success metrics)?</li>
          <li><span className="font-medium">Relevance:</span> Are the features and goals aligned with the problem statement?</li>
          <li><span className="font-medium">Creativity:</span> Does the PRD propose innovative solutions or ideas?</li>
          <li><span className="font-medium">Presentation:</span> Is the document well-organized and visually appealing?</li>
        </ul>
        <p className="text-sm text-gray-500 italic mt-2">Example: A clear PRD uses simple language and structured sections, making it easy for stakeholders to follow and act on.</p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Success</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Focus on clarity and brevity; make sure each section is easily understood.</li>
          <li>Link features to user pain points (e.g., AI meal planning tied to chronic health conditions) to emphasize their importance.</li>
          <li>Use bullet points and headings to improve readability.</li>
          <li>Collaborate with peers to refine and enhance the document.</li>
          <li>Collaborate with Data Analysts to leverage their research on competitors and nutrition trends.</li>
        </ul>
        <p className="text-sm text-gray-500 italic mt-2">Example: Linking AI meal planning to chronic conditions shows how the feature directly addresses elderly users’ health needs, making the PRD compelling.</p>
      </section>

      <footer className="text-center mt-8 text-gray-500">
        <p>Designed to help interns learn PRD creation with a real-world example. Start building your PRD by following the structure and tips above!</p>
      </footer>
    </div>
  );
};

export default PRDComponent;