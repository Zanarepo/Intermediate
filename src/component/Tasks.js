import React from 'react';

const PRDComponent = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-b from-blue-50 to-gray-50 min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3 flex items-center justify-center">
          <svg className="w-8 h-8 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Creating a Product Requirements Document (PRD)
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A step-by-step guide to help interns craft a PRD for a meal delivery platform addressing food insecurity and poor nutrition among elderly Nigerians.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Step 1: Understand the Project Scope
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-medium text-gray-700 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Problem
          </h3>
          <p className="text-gray-600 mb-3">Elderly Nigerians face food insecurity and poor nutrition due to financial constraints and lack of support for meal preparation, leading to health issues like malnutrition and weakened immunity.</p>
          <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Tip:</strong> Start your PRD with a clear problem statement. Identify the target users (e.g., elderly Nigerians) and their specific challenges (e.g., financial constraints). This sets the foundation for your solution.
            <br />
            <strong>Example:</strong> "Many elderly Nigerians cannot afford nutritious meals, and those living alone struggle to cook, increasing risks of malnutrition."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Solution
          </h3>
          <p className="text-gray-600 mb-3">A web, mobile, and USSD-based meal delivery and nutrition tracking platform, partnering with local vendors to provide affordable, nutritious meals tailored to elderly dietary needs, with subsidies for low-income users.</p>
          <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Tip:</strong> Describe how your product solves the problem. Highlight key features (e.g., USSD access for non-smartphone users) and ensure they align with user needs.
            <br />
            <strong>Example:</strong> "Our platform offers USSD ordering to ensure accessibility for rural elderly users without smartphones."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 9.143M15 3v4m4-2h4"></path>
            </svg>
            Extra Feature
          </h3>
          <p className="text-gray-600 mb-3">AI-driven meal planning that customizes menus based on health conditions (e.g., diabetes, hypertension) and dietary preferences, ensuring optimal nutrition.</p>
          <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Tip:</strong> Include a unique feature that sets your product apart. Explain how it enhances the user experience.
            <br />
            <strong>Example:</strong> "AI meal planning adjusts menus for diabetic users, reducing health risks by recommending low-sugar meals."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            Objective
          </h3>
          <p className="text-gray-600 mb-3">Develop a platform to ensure elderly Nigerians have access to affordable, nutritious meals and personalized nutrition tracking, with web, mobile, and USSD options to maximize accessibility across urban and rural areas.</p>
          <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Tip:</strong> Write a concise objective that summarizes the product’s purpose and scope. Make it measurable and user-focused.
            <br />
            <strong>Example:</strong> "Ensure 80% of elderly users in rural areas can order meals via USSD within 6 months of launch."
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          Step 2: Conduct Research and Analysis
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-medium text-gray-700 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            Market Research
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Research elderly dietary needs, financial barriers to nutritious food, and challenges in meal preparation, particularly for those living alone or with mobility issues.</li>
            <li>Study competitor platforms like FoodCo, local meal delivery services, or international apps like Meals on Wheels, identifying gaps in affordability, elderly focus, and nutritional customization.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Tip:</strong> Use market research to validate the problem and find gaps. Surveys or interviews with elderly users can reveal specific needs.
            <br />
            <strong>Example:</strong> "Research showed 60% of elderly Nigerians lack access to affordable meal delivery, highlighting a gap in elderly-focused services."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Industry Analysis
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Analyze trends in food delivery, nutrition tech, and elderly care, focusing on the growing demand for affordable meal solutions and AI-driven health tools in Nigeria.</li>
            <li>Identify potential partners (e.g., local food vendors, healthcare providers, or NGOs like Senior Citizens Care Nigeria) to integrate with the platform for meal subsidies and delivery logistics.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Tip:</strong> Look at industry trends and partnerships to strengthen your product. Partnerships can reduce costs or expand reach.
            <br />
            <strong>Example:</strong> "Partnering with Senior Citizens Care Nigeria can provide subsidies, making meals affordable for low-income users."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Demand for Digital Solutions
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Conduct user research to understand elderly needs, such as affordable meal options, easy-to-use ordering systems, and nutrition tracking, as well as barriers like low tech literacy or limited internet access.</li>
            <li>Identify demand for services like subsidized meal plans, real-time delivery tracking, and AI-guided dietary recommendations tailored to chronic conditions.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Tip:</strong> Focus on user needs and barriers. For example, low tech literacy requires simple interfaces like USSD.
            <br />
            <strong>Example:</strong> "User interviews revealed 70% of elderly users prefer USSD over apps due to limited smartphone access."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Market Gaps
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Identify gaps such as lack of elderly-focused meal delivery services, high costs of nutritious food, or inadequate dietary personalization, and propose solutions (e.g., AI meal planning, USSD ordering for non-smartphone users).</li>
            <li>Assess the need for features like caregiver coordination, nutritional education, and community meal programs to create a comprehensive nutrition solution.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Tip:</strong> Highlight gaps that competitors miss and propose targeted solutions.
            <br />
            <strong>Example:</strong> "No competitor offers caregiver coordination, which our platform includes to support elderly users with mobility issues."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Revenue Model Exploration
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Explore revenue options, such as low transaction fees for meal orders, subscription plans for premium features (e.g., AI-customized meal plans), or partnerships with healthcare providers and NGOs for subsidized meals.</li>
            <li>Consider a freemium model, with free basic meal ordering and tracking, and premium options (e.g., priority delivery, advanced nutrition insights) at a low cost.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Tip:</strong> Balance accessibility and revenue. A freemium model ensures inclusivity while generating income.
            <br />
            <strong>Example:</strong> "A $1/month premium subscription for AI meal plans can fund free basic services for low-income users."
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0h2a2 2 0 012 2v12a2 2 0 01-2 2H7"></path>
          </svg>
          Step 3: Define Deliverables
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
          <p className="text-gray-600 mb-4">Submit your completed PRD document with the following:</p>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>A clear and engaging product name (e.g., "NutriCare Nigeria").</li>
            <li>A well-organized and detailed PRD following the template provided.</li>
            <li>A brief reflection (2-3 sentences) on why this platform is impactful and how your PRD addresses the key aspects of a successful product.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Tip:</strong> Ensure deliverables are specific and actionable. A catchy product name and a concise reflection make your PRD memorable.
            <br />
            <strong>Example:</strong> "NutriCare Nigeria reflects care and nutrition, and the reflection summarizes how the platform improves elderly health."
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Step 4: Understand Evaluation Criteria
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li><span className="font-medium">Clarity:</span> Is the PRD easy to understand?</li>
            <li><span className="font-medium">Completeness:</span> Does the PRD cover all key aspects (problem statement, target users, core features, user flow, success metrics)?</li>
            <li><span className="font-medium">Relevance:</span> Are the features and goals aligned with the problem statement?</li>
            <li><span className="font-medium">Creativity:</span> Does the PRD propose innovative solutions or ideas?</li>
            <li><span className="font-medium">Presentation:</span> Is the document well-organized and visually appealing?</li>
          </ul>
          <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Tip:</strong> Review your PRD against these criteria to ensure it meets expectations. Clear language and visuals enhance presentation.
            <br />
            <strong>Example:</strong> "Using bullet points and visuals in the PRD ensures clarity and makes it easier for stakeholders to review."
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          Step 5: Tips for Success
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Focus on clarity and brevity; make sure each section is easily understood.</li>
            <li>Link features to user pain points (e.g., AI meal planning tied to chronic health conditions) to emphasize their importance.</li>
            <li>Use bullet points and headings to improve readability.</li>
            <li>Collaborate with peers to refine and enhance the document.</li>
            <li>Collaborate with Data Analysts to leverage their research on competitors and nutrition trends.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Tip:</strong> Collaboration and clear structure are key. Peer reviews can catch gaps in your PRD.
            <br />
            <strong>Example:</strong> "Linking AI meal planning to diabetic needs shows stakeholders the feature’s direct impact on user health."
          </p>
        </div>
      </section>

      <footer className="text-center mt-12 text-gray-600 bg-white py-6 rounded-lg shadow-md">
        <p className="text-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Follow these steps to create a compelling PRD! Use this guide as a template to structure your document and address elderly Nigerians’ nutrition needs.
        </p>
      </footer>
    </div>
  );
};

export default PRDComponent;