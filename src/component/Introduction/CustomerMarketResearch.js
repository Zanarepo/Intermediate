import React, { useState } from "react";

/* Quiz Component */
const Quiz = ({ quizId, question, options, correctAnswer }) => {
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleOptionChange = (e) => {
    setSelected(e.target.value);
    setFeedback(""); // Reset feedback when option changes
  };

  const handleSubmit = () => {
    if (!selected) {
      setFeedback("Please select an answer.");
      return;
    }
    if (selected === correctAnswer) {
      setFeedback("Correct! 🎉");
    } else {
      setFeedback("Incorrect. Try again!");
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded border mt-4">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      {options.map((option, index) => (
        <label key={index} className="block mb-2 cursor-pointer">
          <input
            type="radio"
            name={quizId}
            value={option.value}
            onChange={handleOptionChange}
            className="mr-2"
          />
          {option.text}
        </label>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
      >
        Submit Answer
      </button>
      {feedback && (
        <div
          className={`mt-2 font-bold ${
            feedback.startsWith("Correct") ? "text-green-500" : "text-red-500"
          }`}
        >
          {feedback}
        </div>
      )}
    </div>
  );
};

/* Main PM Concepts Component */
const PMConcepts = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 my-10">
      {/* Print Button */}
      <button
        onClick={() => window.print()}
        className="mb-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded inline-flex items-center"
      >
        <svg
          className="w-5 h-5 mr-2 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 8h-1V3H6v5H5c-1.1 0-2 .9-2 2v5h4v4h10v-4h4v-5c0-1.1-.9-2-2-2zm-8 11H8v-4h3v4zm5 0h-3v-4h3v4zM17 6V4h-2v2H9V4H7v2H5v2h14V6h-2z" />
        </svg>
        Print
      </button>

      {/* Section 1: Customer & Market Research */}
      <section className="mb-10 border-b pb-6">
        <h2 className="text-2xl font-bold flex items-center mb-4">
          <span className="mr-2">1️⃣</span>
          <svg
            className="w-6 h-6 text-green-500 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 5V3H3v2h18zm0 4V7H3v2h18zm0 4v-2H3v2h18zm0 4v-2H3v2h18z" />
          </svg>
          Customer &amp; Market Research
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">What is it?</h3>
          <p className="mb-2">
            Imagine you want to open a lemonade stand. 🍋🚀 But before you start, you need to know:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Who wants lemonade? (Your customers)</li>
            <li>Where do people buy lemonade now? (Your market)</li>
            <li>What flavors do they like? (Customer preferences)</li>
          </ul>
          <p>
            This is called <strong>Customer &amp; Market Research</strong>—it helps you understand who your customers are and what they need.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Why is it important?</h3>
          <p>
            If you don’t do research, you might sell hot soup on a sunny day! 🥵🍲 Instead, you learn what people actually want so you can create something useful.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Example:</h3>
          <p>🔸 A company like Netflix studies what people watch before deciding which shows to make. 🎥</p>
        </div>
        <Quiz
          quizId="quiz1"
          question="Quiz: What does Customer & Market Research help you understand?"
          options={[
            { value: "A", text: "How to build a product." },
            { value: "B", text: "Who your customers are and their preferences." },
            { value: "C", text: "The exact price to sell your product." },
            { value: "D", text: "How to design your product logo." },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* Section 2: Understanding Users & Their Pain Points */}
      <section className="mb-10 border-b pb-6">
        <h2 className="text-2xl font-bold flex items-center mb-4">
          <span className="mr-2">2️⃣</span>
          <svg
            className="w-6 h-6 text-yellow-500 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.1 2 5 5.1 5 9c0 3.9 7 13 7 13s7-9.1 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
          </svg>
          Understanding Users &amp; Their Pain Points
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">What is it?</h3>
          <p className="mb-2">
            Imagine you sell shoes. 👟 But one customer says, "These shoes hurt my feet!" That’s a <strong>pain point</strong>—a problem they experience.
          </p>
          <p className="mb-2">Understanding users means:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Listening to their complaints. 👂</li>
            <li>Finding out what frustrates them. 😤</li>
            <li>Creating something that solves their problems. ✅</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Why is it important?</h3>
          <p>If you don’t know what bothers people, you might build something no one needs!</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Example:</h3>
          <p>🔸 Uber realized people hated waiting for taxis 🚕, so they created an app to order rides instantly.</p>
        </div>
        <Quiz
          quizId="quiz2"
          question="Quiz: What does understanding users help you solve?"
          options={[
            { value: "A", text: "Designing flashy graphics." },
            { value: "B", text: "Creating products that solve user problems." },
            { value: "C", text: "Deciding on product pricing." },
            { value: "D", text: "Determining market share." },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* Section 3: Competitive Analysis & Benchmarking */}
      <section className="mb-10 border-b pb-6">
        <h2 className="text-2xl font-bold flex items-center mb-4">
          <span className="mr-2">3️⃣</span>
          <svg
            className="w-6 h-6 text-blue-500 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l2.7 8.6H23l-6.9 5 2.7 8.6L12 18.2l-7.8 5 2.7-8.6L1 10.6h8.3L12 2z" />
          </svg>
          Competitive Analysis &amp; Benchmarking
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">What is it?</h3>
          <p className="mb-2">
            Imagine you and your friend both sell lemonade. 🍋 But their lemonade stand gets twice as many customers! 😲
          </p>
          <p className="mb-2">Competitive analysis means:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Looking at what your competitors do well. 👀</li>
            <li>Figuring out how to be even better. 🚀</li>
            <li>Learning from their mistakes. ❌</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Why is it important?</h3>
          <p>If your competitor makes amazing lemonade, but you don’t improve yours, they will always win.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Example:</h3>
          <p>🔸 Samsung looks at Apple’s iPhones 📱 to make sure they create better Android phones.</p>
        </div>
        <Quiz
          quizId="quiz3"
          question="Quiz: What is the goal of competitive analysis?"
          options={[
            { value: "A", text: "To copy exactly what competitors do." },
            { value: "B", text: "To understand competitors and improve your own offering." },
            { value: "C", text: "To focus only on your own product." },
            { value: "D", text: "To lower your product price." },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* Section 4: User Interviews & Surveys */}
      <section className="mb-10 border-b pb-6">
        <h2 className="text-2xl font-bold flex items-center mb-4">
          <span className="mr-2">4️⃣</span>
          <svg
            className="w-6 h-6 text-purple-500 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 6h-2v9H5v-9H3v11h18V6zM7 8h10v2H7V8zm0 4h7v2H7v-2z" />
          </svg>
          User Interviews &amp; Surveys
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">What is it?</h3>
          <p className="mb-2">
            Let’s say you want to make a new video game. 🎮 Instead of guessing what people like, you ask them:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>“What’s your favorite part of a game?”</li>
            <li>“What annoys you in games?”</li>
            <li>“What would make a game more fun?”</li>
          </ul>
          <p>Interviews (talking to people) and surveys (asking them questions) help you build the right thing.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Why is it important?</h3>
          <p>You don’t build products based on your opinion. You listen to real users to understand what they actually want.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Example:</h3>
          <p>🔸 Instagram added Reels after users said they wanted shorter videos like TikTok. 🎥</p>
        </div>
        <Quiz
          quizId="quiz4"
          question="Quiz: Why are user interviews and surveys valuable?"
          options={[
            { value: "A", text: "They replace the need for market research." },
            { value: "B", text: "They provide insights into user preferences and problems." },
            { value: "C", text: "They guarantee product success." },
            { value: "D", text: "They help in creating catchy slogans." },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* Section 5: Data-Driven Decision Making */}
      <section className="mb-10 border-b pb-6">
        <h2 className="text-2xl font-bold flex items-center mb-4">
          <span className="mr-2">5️⃣</span>
          <svg
            className="w-6 h-6 text-red-500 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z" />
          </svg>
          Data-Driven Decision Making
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">What is it?</h3>
          <p className="mb-2">
            Imagine you have two lemonade flavors: 🍋🍓
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Strawberry Lemonade</li>
            <li>Classic Lemonade</li>
          </ul>
          <p className="mb-2">
            You check the sales numbers:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>✅ Strawberry Lemonade sells 500 cups a day.</li>
            <li>❌ Classic Lemonade sells only 50 cups.</li>
          </ul>
          <p>That means you should make more Strawberry Lemonade! 🎉</p>
          <p className="mt-2">Data-driven decision-making means you:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Look at real numbers. 🔢</li>
            <li>Stop guessing. ❌</li>
            <li>Make smart decisions. ✅</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Why is it important?</h3>
          <p>If you ignore the numbers, you might keep making Classic Lemonade and lose money.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Example:</h3>
          <p>🔸 Spotify tracks what songs people listen to so they can recommend similar music. 🎵</p>
        </div>
        <Quiz
          quizId="quiz5"
          question="Quiz: What is the key benefit of data-driven decision making?"
          options={[
            { value: "A", text: "It replaces the need for user research." },
            { value: "B", text: "It helps you make decisions based on real evidence rather than guesses." },
            { value: "C", text: "It ensures you will always be correct." },
            { value: "D", text: "It increases the production cost." },
          ]}
          correctAnswer="B"
        />
      </section>

      {/* Final Takeaway */}
      <section className="mt-10 pt-6 border-t">
        <h2 className="text-2xl font-bold flex items-center mb-4">
          <span className="mr-2">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11 3L1 9l10 6 10-6-10-6zM1 17l10 6 10-6" />
            </svg>
          </span>
          Final Takeaway 💡
        </h2>
        <p className="mb-2">PM is like running a lemonade stand 🍋:</p>
        <ul className="list-disc list-inside">
          <li>✅ Know your customers (Market Research)</li>
          <li>✅ Fix their problems (Pain Points)</li>
          <li>✅ Learn from competitors (Competitive Analysis)</li>
          <li>✅ Ask them what they want (User Interviews)</li>
          <li>✅ Use data, not guesses (Data-Driven Decisions)</li>
        </ul>
      </section>
    </div>
  );
};

export default PMConcepts;
