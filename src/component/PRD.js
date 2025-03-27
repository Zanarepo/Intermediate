import React from 'react';
import Tasks from './Tasks';

const PRDTemplate = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
        <Tasks/>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded">
        {/* Product Requirements Document (PRD) */}
        <h1 className="text-3xl font-bold mb-6">Product Requirements Document (PRD)</h1>

        {/* Overview Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
          <p className="mb-2">
            Provide a high-level summary of the product. What is the product? Who is it for? Why does it exist?
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter a brief product overview..."
            rows="3"
          ></textarea>
        </section>

        {/* Problem Statement Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Problem Statement</h2>
          <p className="mb-2">
            Describe the problem that the product is solving. Why is this problem important? What pain points are being addressed?
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Describe the problem..."
            rows="3"
          ></textarea>
        </section>

        {/* Objectives & Goals Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Objectives & Goals</h2>
          <p className="mb-2">
            List clear, measurable objectives and goals for the product. What does success look like?
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Define objectives and success metrics..."
            rows="3"
          ></textarea>
        </section>

        {/* User Personas & Use Cases Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. User Personas & Use Cases</h2>
          <p className="mb-2">
            Identify the target users and describe typical use cases or user scenarios.
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Describe user personas and use cases..."
            rows="4"
          ></textarea>
        </section>

        {/* Features & Requirements Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Features & Requirements</h2>
          <p className="mb-2">
            List all product features, both functional (what the product does) and non-functional (performance, security, etc.).
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Detail the product features and requirements..."
            rows="4"
          ></textarea>
        </section>

        {/* User Flow & Wireframes Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. User Flow & Wireframes</h2>
          <p className="mb-2">
            Explain how users will navigate through the product. Include sketches or wireframes if available.
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Outline the user flow or add wireframes..."
            rows="4"
          ></textarea>
        </section>

        {/* Success Metrics Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Success Metrics</h2>
          <p className="mb-2">
            Define the key performance indicators (KPIs) that will measure the success of the product.
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter success metrics..."
            rows="3"
          ></textarea>
        </section>

        {/* Timeline & Milestones Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Timeline & Milestones</h2>
          <p className="mb-2">
            Provide a project timeline and highlight key milestones. When should key features be completed?
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Outline the timeline and major milestones..."
            rows="3"
          ></textarea>
        </section>

        {/* Risks & Assumptions Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Risks & Assumptions</h2>
          <p className="mb-2">
            Identify potential risks and assumptions. What are the challenges, and what assumptions are you making about the market or technology?
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="List risks and assumptions..."
            rows="3"
          ></textarea>
        </section>

        {/* Deliverables Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">10. Deliverables</h2>
          <p className="mb-2">
            Specify the final outputs and documentation required for this project.
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Define deliverables for the project..."
            rows="3"
          ></textarea>
        </section>

        {/* Additional Notes */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Additional Notes</h2>
          <p className="mb-2">
            Use this section to include any extra information or context that may be helpful.
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Any additional notes..."
            rows="2"
          ></textarea>
        </section>

        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Save PRD Template
        </button>
      </div>
    </div>
  );
};

export default PRDTemplate;
