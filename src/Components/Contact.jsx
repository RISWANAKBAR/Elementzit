import React from "react";

export default function Contact() {
  return (
    <div
      className="bg-black"
      style={{
        backgroundImage:
          'url("https://www.shutterstock.com/shutterstock/videos/1080456098/thumb/11.jpg?ip=x480")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-lg mx-auto p-8  shadow-md rounded-md text-center text-white">
        <h2 className="text-2xl font-semibold mb-6">Talk to Us</h2>
        <div className="mb-4 flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-4">
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              name="firstName"
              className="mt-1 p-2 w-full border rounded-md text-black"
              required
            />
          </div>
          <div className="w-full sm:w-1/2">
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              name="lastName"
              className="mt-1 p-2 w-full border rounded-md text-black"
              required
            />
          </div>
        </div>

        <div className="mb-4 flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md text-black"
              required
            />
          </div>

          <div className="w-full sm:w-1/2">
            <select
              id="topic"
              name="topic"
              className="mt-1 p-2 w-full border rounded-md text-black"
              required
            >
              <option value="">Choose a topic</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="py-1 px-8 bg-red-600 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
