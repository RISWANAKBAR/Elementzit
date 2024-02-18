import React, { useState } from "react";
import { AiOutlineSemicolon } from "react-icons/ai";

export default function Success() {
  const slides = [
    {
      icon: (
        <svg
          className="w-16 h-16 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 4C6 3.44772 6.44772 3 7 3H17C17.5523 3 18 3.44772 18 4V14C18 14.5523 17.5523 15 17 15H7C6.44772 15 6 14.5523 6 14V4ZM7 2C5.34315 2 4 3.34315 4 5V15C4 16.6569 5.34315 18 7 18H17C18.6569 18 20 16.6569 20 15V5C20 3.34315 18.6569 2 17 2H7Z"
            fill="currentColor"
          />
          <path
            d="M9 20C9.27614 20 9.5 20.2239 9.5 20.5C9.5 20.7761 9.27614 21 9 21C8.72386 21 8.5 20.7761 8.5 20.5C8.5 20.2239 8.72386 20 9 20Z"
            fill="currentColor"
          />
          <path
            d="M15 20C15.2761 20 15.5 20.2239 15.5 20.5C15.5 20.7761 15.2761 21 15 21C14.7239 21 14.5 20.7761 14.5 20.5C14.5 20.2239 14.7239 20 15 20Z"
            fill="currentColor"
          />
        </svg>
      ),
      heading: "Brewing Success",
      subheading: "Partner Testimonials that perk us up!",
      message: "Message for Slide 1",
      name: "Name 1",
      company: "company",
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="8" />
        </svg>
      ),
      heading: "Support Success",
      subheading: "Partner Testimonials that perk us up!",
      message: "Message for Slide 2",
      name: "Name 2",
      company: "company",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  return (
    <div
      id="custom-carousel"
      className=" max-w-screen-xl mx-auto relative w-full bg-white text-red-500 p-8 rounded-lg"
    >
      <div className="flex flex-col items-center ">
        {/* Display the current slide */}

        <h2 className="text-2xl font-bold">{slides[currentSlide].heading}</h2>
        <h3 className="text-lg font-medium mb-4">
          {slides[currentSlide].subheading}
        </h3>
        <span className="mb-24"> {slides[currentSlide].icon}</span>
        <p className="text-base text-black italic text-xs">
          {slides[currentSlide].message}
        </p>
        <p className="text-sm font-bold">{slides[currentSlide].name}</p>
        <p className="text-sm">{slides[currentSlide].company}</p>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {/* Add the necessary indicators for the carousel slides here */}
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-12 h-1 bg-red-500 rounded-full ${
              index === currentSlide ? "bg-red-500" : "bg-red-500/30"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/30 group-hover:bg-red-500/50 group-focus:ring-4 group-focus:ring-red-500 group-focus:outline-none">
          &lt;
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNextSlide}
      >
        {/* Include the next button content here */}
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/30 group-hover:bg-red-500/50 group-focus:ring-4 group-focus:ring-red-500 group-focus:outline-none">
          {/* Add your next arrow icon or content */}
          &gt;
        </span>
      </button>
    </div>
  );
}
