import React, { useState } from "react";
import { FaCogs, FaBriefcase, FaEye, FaCoffee } from "react-icons/fa";

export default function About() {
  const faqData = [
    {
      question: "Technology",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, ",
    },
    {
      question: "Business",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, ",
    },
    {
      question: "Visionary",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, ",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="bg-black text-white py-16"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/premium-vector/beautiful-abstract-background-blurry-gradient-theme_322384-2942.jpg?w=1060")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4 mx-auto max-w-4xl ">
          Stirring Up Great Conversation About Coffee!
        </h1>
        <p className="text-sm mb-6 mx-auto max-w-2xl sm:text-sm">
          From a variety of topics to choose from, every talk in the series
          corresponds to a flavor and an intensity. Blend the flavor with the
          intensity you enjoy and get the conversation of your choice.
        </p>
      </div>

      <div className="flex flex-col max-w-screen-xl mx-auto sm:flex-row w-4/5">
        <div className="sm:w-1/2 lg:w-1/2 ">
          <div className="p-4 rounded-lg">
            <section className="">
              <div className="container max-w-4xl px-6 mx-auto">
                <h1 className="text-2xl font-semibold lg:text-4xl text-left">
                  Flavour
                </h1>

                <div className="mt-2">
                  {faqData.map((faq, index) => (
                    <div key={index} className="">
                      <div
                        className={`${
                          openIndex === index ? "bg-red-700" : ""
                        } rounded-lg`}
                      >
                        <button
                          className="flex items-center w-full p-4 sm:p-8 focus:outline-none"
                          onClick={() => toggleAccordion(index)}
                        >
                          <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                            {faq.question === "Technology" && (
                              <FaCogs className="text-red-500" />
                            )}
                            {faq.question === "Business" && (
                              <FaBriefcase className="text-red-500" />
                            )}
                            {faq.question === "Visionary" && (
                              <FaEye className="text-red-500" />
                            )}
                          </div>
                          <h1 className="flex-1 font-semibold text-white text-left px-2 text-2xl">
                            {faq.question}
                          </h1>
                          <span
                            className={`text-red-500 bg-red-500 rounded-full  ${
                              openIndex === index ? "transform rotate-90" : ""
                            }`}
                          ></span>
                        </button>
                        {openIndex === index && (
                          <>
                            <div className="sm:px-6">
                              <p className="text-sm text-white px-12 -mt-6 py-2">
                                {faq.answer}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="sm:w-1/2 lg:w-1/2 p-4">
          <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9 h-96">
            <video
              className="w-full h-96 object-cover"
              controls
              poster="https://media.istockphoto.com/id/1303583671/photo/cup-glass-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=2048x2048&w=is&k=20&c=AciAb9kboOwwr2Rfu5QjRfuBi5ypK-kHznoo5sCcZWg="
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mt-12 max-w-screen-xl mx-auto justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/5 p-4 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold text-white">Intensity</h2>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/5 p-4 bg-red-700 rounded-lg mb-4 mr-4">
          <div className="text-white mb-4">
            <FaCoffee className="text-white w-16 h-16" />
          </div>
          <h2 className="text-lg font-semibold text-white">Mocha</h2>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            eaque nobis,.
          </p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/5 p-4 bg-red-700 rounded-lg mb-4 mr-4">
          <div className="text-white mb-4">
            <FaCoffee className="text-white w-16 h-16" />
          </div>
          <h2 className="text-lg font-semibold text-white">Americana</h2>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            eaque nobis,
          </p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/5 p-4 bg-red-700 rounded-lg mb-4 mr-4">
          <div className="text-white mb-4">
            <FaCoffee className="text-white w-16 h-16" />
          </div>
          <h2 className="text-lg font-semibold text-white">Espresso</h2>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            eaque nobis,
          </p>
        </div>
      </div>
    </div>
  );
}
