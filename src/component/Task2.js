import React from 'react';

const AgriConPRDComponent = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-b from-green-100 to-gray-50 min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Creating a PRD for AgriCon Nigeria
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A step-by-step guide to help interns craft a PRD for a shared agricultural infrastructure platform addressing post-harvest losses for Nigerian farmers.
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
          <p className="text-gray-600 mb-3">Nigerian farmers, particularly smallholders, face significant post-harvest losses (up to 40% for crops like tomatoes and yams) due to limited access to dryers, cold rooms, and processing plants. High costs, unreliable electricity, and fragmented supply chains hinder their ability to process crops, access markets, and maximize income, exacerbating poverty and food insecurity.</p>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Start with a clear problem statement. Identify the target users (smallholder farmers) and their challenges (post-harvest losses, high costs). Quantify the issue to emphasize urgency.
            <br />
            <strong>Example:</strong> "Smallholder farmers lose 40% of tomato crops due to lack of cold storage, reducing income by $200 per harvest season."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Solution
          </h3>
          <p className="text-gray-600 mb-3">AgriCon Nigeria is a mobile-first platform that connects farmers to shared agricultural infrastructure (dryers, cold rooms, processing plants) using AI, IoT, and USSD technology. It enables affordable access through cooperative bookings, real-time availability tracking, and market linkages, reducing losses and boosting profitability.</p>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Describe how the product solves the problem. Highlight key features (e.g., USSD access, IoT tracking) and their benefits for users.
            <br />
            <strong>Example:</strong> "AgriCon Nigeria’s USSD interface allows rural farmers to book cold storage without internet, reducing tomato spoilage by 30%."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 9.143M15 3v4m4-2h4"></path>
            </svg>
            Extra Feature
          </h3>
          <p className="text-gray-600 mb-3">AI-driven market analytics and price forecasting, leveraging data from X posts and web sources to guide farmers on optimal processing times and market prices for value-added products (e.g., dried yam chips, packaged tomato paste).</p>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Include a unique feature that sets your product apart. Explain how it adds value to users.
            <br />
            <strong>Example:</strong> "AI analytics predict yam prices, helping farmers process crops into chips when prices are 20% higher."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            Objective
          </h3>
          <p className="text-gray-600 mb-3">Develop a scalable, accessible platform that empowers Nigerian farmers to access shared agricultural infrastructure, reduce post-harvest losses, and connect to markets. The platform will offer mobile and USSD-based interfaces to ensure inclusivity for rural farmers with limited internet access, while integrating AI and IoT for efficiency and trust.</p>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Write a measurable objective that captures the product’s purpose and scope. Focus on user impact and inclusivity.
            <br />
            <strong>Example:</strong> "Reduce post-harvest losses by 25% for 10,000 smallholder farmers within 18 months using AgriCon Nigeria."
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
            <li>Research the needs of Nigerian smallholder and commercial farmers, focusing on key crops (e.g., yam, cassava, tomatoes), regional infrastructure gaps (e.g., North vs. South), and challenges like power outages or transport costs.</li>
            <li>Study competitor platforms (e.g., FarmCrowdy, ThriveAgric, or Hello Tractor) to identify gaps in infrastructure access, pricing models, and user experience for rural farmers.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Use surveys or focus groups to uncover farmer needs. Compare competitors to identify unique opportunities.
            <br />
            <strong>Example:</strong> "Research showed 65% of yam farmers in the North lack access to dryers, and competitors don’t offer USSD booking."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Industry Analysis
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Analyze trends in Nigeria’s agritech and logistics sectors, emphasizing the growing demand for post-harvest solutions, mobile money integration, and IoT-enabled infrastructure in agriculture.</li>
            <li>Identify potential partners (e.g., Nigerian Export Promotion Council, MTN for USSD, or logistics startups like Kobo360) to enhance infrastructure deployment and market access.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Explore industry trends and partnerships to strengthen your product. Partners can improve scalability and trust.
            <br />
            <strong>Example:</strong> "Partnering with MTN for USSD access ensures 80% of rural farmers can book facilities without internet."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Demand for Digital Solutions
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Conduct user research to understand farmers’ pain points, such as high infrastructure costs, lack of processing facilities, or limited market access, and barriers like low tech literacy or unreliable internet.</li>
            <li>Assess demand for features like cooperative booking, offline access via USSD, and AI-driven market insights to ensure relevance and adoption.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Focus on user barriers like low tech literacy. Features like USSD ensure inclusivity.
            <br />
            <strong>Example:</strong> "75% of rural farmers prefer USSD for booking due to unreliable internet, increasing platform adoption."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Market Gaps
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Identify gaps such as lack of localized, affordable infrastructure access platforms, limited real-time facility monitoring, or weak market linkages for processed goods.</li>
            <li>Propose solutions like IoT-enabled facility tracking, USSD-based booking for low-tech users, and AI market analytics to bridge these gaps.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Address specific gaps with targeted solutions to differentiate your product.
            <br />
            <strong>Example:</strong> "Unlike FarmCrowdy, AgriCon Nigeria offers IoT monitoring of cold rooms, ensuring reliable storage for tomatoes."
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2 flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Revenue Model Exploration
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-2">
            <li>Explore revenue streams, such as transaction fees for facility bookings (e.g., 2–5% per use), subscription plans for premium features (e.g., AI market forecasts or priority bookings), or partnerships with agritech firms and telecoms.</li>
            <li>Consider a freemium model with free basic access (e.g., facility locator) and paid features like advanced analytics or logistics coordination.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Balance affordability and revenue. A freemium model ensures access for smallholders while generating income.
            <br />
            <strong>Example:</strong> "A 3% booking fee funds free facility locators, while a $2/month subscription offers AI price forecasts."
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
            <li>A clear and engaging product name: AgriCon Nigeria.</li>
            <li>A well-organized and detailed PRD following the template provided.</li>
            <li>A brief reflection (2-3 sentences): AgriCon Nigeria addresses critical post-harvest losses and market access challenges for Nigerian farmers by providing an inclusive, tech-driven platform. The PRD ensures accessibility through USSD and mobile interfaces, leveraging AI and IoT to empower smallholders and boost agricultural profitability.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Use a memorable product name and ensure deliverables are actionable. The reflection should highlight user impact.
            <br />
            <strong>Example:</strong> "AgriCon Nigeria’s name reflects agricultural connectivity, and the reflection shows how it reduces losses for farmers."
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
            <li><span className="font-medium">Clarity:</span> Is the PRD concise and easy to understand for stakeholders?</li>
            <li><span className="font-medium">Completeness:</span> Does the PRD cover problem statement, target users (smallholder and commercial farmers), core features (AI matching, IoT monitoring, USfiltrationSD access), user flow, and success metrics (e.g., reduced post-harvest losses, increased farmer income)?</li>
            <li><span className="font-medium">Relevance:</span> Are features aligned with Nigerian farmers’ needs, such as affordability, offline access, and market linkages?</li>
            <li><span className="font-medium">Creativity:</span> Does the PRD propose innovative solutions like AI market analytics or solar-powered IoT integration?</li>
            <li><span className="font-medium">Presentation:</span> Is the document well-structured, with clear headings, bullet points, and a professional layout?</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Review your PRD against these criteria to ensure quality. Use visuals and concise language for better presentation.
            <br />
            <strong>Example:</strong> "A PRD with a clear user flow diagram for USSD booking improves stakeholder understanding and clarity."
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
            <li>Emphasize user-centric design, linking features like USSD access to rural farmers’ low-tech environments.</li>
            <li>Highlight how AI and IoT address Nigeria-specific challenges like power outages and market inefficiencies.</li>
            <li>Use clear, concise language and bullet points for readability.</li>
            <li>Collaborate with peers to refine features and ensure alignment with user needs.</li>
            <li>Work with Data Analysts to leverage insights on agritech competitors and market trends.</li>
          </ul>
          <p className="text-sm text-gray-500 bg-green-50 p-3 rounded-md">
            <strong>Tip:</strong> Collaboration and clear formatting strengthen your PRD. Link features to specific user needs for impact.
            <br />
            <strong>Example:</strong> "Linking IoT monitoring to power outage solutions shows how AgriCon Nigeria ensures reliable storage for farmers."
          </p>
        </div>
      </section>

      <footer className="text-center mt-12 text-gray-600 bg-white py-6 rounded-lg shadow-md">
        <p className="text-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Follow these steps to create a compelling PRD! Use AgriCon Nigeria as a template to address post-harvest losses and empower Nigerian farmers.
        </p>
      </footer>
    </div>
  );
};

export default AgriConPRDComponent;