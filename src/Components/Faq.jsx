import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";


export default function Faq() {
  const faqData = [
    {
      question: "How can I pay for my appointment?",
      answer: "Answer 1 for How can I pay for my appointment?",
    },
    {
      question: "What can I expect?",
      answer: "Answer 2 for What can I expect at my first consultation?",
    },
    {
      question: "What are your opening hours?",
      answer: "Answer 3 for What are your opening hours?",
    },
    {
      question: "Do I need a referral?",
      answer: "Answer 4 for Do I need a referral?",
    },
    {
      question: "what time is the webinar",
      answer:
        "Answer 5 for Is the cost of the appointment covered by private health insurance?",
    },
  ];
  const [showContent, setShowContent] = useState(Array(5).fill(false));

  const toggleContent = (index) => {
    const newShowContent = [...showContent];
    newShowContent[index] = !newShowContent[index];
    setShowContent(newShowContent);
  };

  return (
    <div
      className="mx-auto  text-white py-6 "
      style={{
        backgroundImage:
          'url("https://img.freepik.com/premium-vector/beautiful-abstract-background-blurry-gradient-theme_322384-2942.jpg?w=1060")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-semibold text-center mb-8">FAQ's</h1>
      <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto">
        <div className="w-full lg:w-1/2 px-4">
          <section className="container mx-auto">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  showContent[index] ? "bg-white p-4 rounded-lg" : ""
                }`}
              >
                <button
                  className="flex items-center focus:outline-none"
                  onClick={() => toggleContent(index)}
                >
                  <span
                    className={`flex items-center justify-center text-lg mr-4 bg-white rounded-full h-10 w-10 text-red-500 ${
                      showContent[index]
                        ? "text-black border border-red-500"
                        : ""
                    }`}
                  >
                    {showContent[index] ? <FaMinus /> : <FaPlus />}
                  </span>

                  <h1
                    className={`text-sm text-left  ${
                      showContent[index] ? "text-black" : ""
                    }`}
                  >
                    {item.question}
                  </h1>
                </button>

                {showContent[index] && (
                  <div className="flex mt-2">
                    <p className="max-w-3xl px-4 text-black rounded-lg py-2 px-16">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </section>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto"
            src="https://images.unsplash.com/photo-1520261714703-84c0762360ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHR3byUyMGNvZmZlZSUyMGN1cHN8ZW58MHx8MHx8fDA%3D"
            alt="Your Image"
          />
        </div>
      </div>
    </div>
  );
}
