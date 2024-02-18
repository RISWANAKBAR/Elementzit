import React, { useState } from "react";

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/business-silhouettes_1098-18436.jpg?size=626&ext=jpg&ga=GA1.1.1953163554.1665137541&semt=ais",
      heading: "Partner webinar series",
      subheading: "Cofee conversation for thought leaders",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/silhouette-people-city_23-2149211283.jpg?size=626&ext=jpg&ga=GA1.1.1953163554.1665137541&semt=ais",
      heading: "Partner webinar series",
      subheading: "Cofee conversation for thought leaders",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/before-conference_1098-637.jpg?size=626&ext=jpg&ga=GA1.1.1953163554.1665137541&semt=ais",
      heading: "Partner webinar series",
      subheading: "Cofee conversation for thought leaders",
    },
  ];

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const handlePrevSlide = () => {
    const newIndex = (activeSlide - 1 + slides.length) % slides.length;
    handleSlideChange(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = (activeSlide + 1) % slides.length;
    handleSlideChange(newIndex);
  };

  return (
    <div className="relative w-full">
      <div className="relative h-screen sm:h-screen md:h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === activeSlide ? "block" : "hidden"
            } transition-transform duration-700 ease-in-out`}
            data-carousel-item
          >
            <div
              className="absolute w-full h-full"
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "50vh"
              }}
            />
            <div className="absolute top-0 left-0 h-full w-full md:w-1/2 flex flex-col justify-center p-6 text-white md:ml-24">
              <h2 className="text-4xl md:text-6xl font-bold mb-2">
                {slide.heading}
              </h2>
              <p className="text-white text-md md:text-xl">
                {slide.subheading}
              </p>
              <button className="mt-4 bg-red-500 text-white px-2 py-1 rounded text-sm md:text-md w-full w-1/5 md:w-1/5">
                Know more
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 ml-4 md:ml-48 transform -translate-x-1/2 flex space-x-2 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 md:w-12 h-1 rounded-full ${
              index === activeSlide ? "bg-white" : "bg-gray-400"
            } focus:outline-none`}
            aria-current={index === activeSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSlideChange(index)}
            data-carousel-slide-to={index}
          ></div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-2 z-30 flex items-center justify-center h-8 w-8 rounded-full bg-white text-red-500 focus:outline-none ml-2 md:ml-8"
        data-carousel-prev
        onClick={handlePrevSlide}
      >
        &lt;
      </button>

      <button
        type="button"
        className="absolute top-1/2 right-2 z-30 flex items-center justify-center h-8 w-8 rounded-full bg-white text-red-500 focus:outline-none mr-2 md:mr-8"
        data-carousel-next
        onClick={handleNextSlide}
      >
        &gt;
      </button>
    </div>
  );
}
