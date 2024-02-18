import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black py-1">
      <footer className="m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between items:center">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse justify-center sm:justify-start"
            >
              <span className="self-center text-2xl font-thin whitespace-nowrap text-white">
                Trend <span className="font-bold">Campus</span>
              </span>
            </a>
            <div className="flex items-center space-x-4 justify-center sm:justify-end">
              {[
                { icon: <FaFacebook size={12} />, link: "#" },
                { icon: <FaTwitter size={12} />, link: "#" },
                { icon: <FaInstagram size={12} />, link: "#" },
                { icon: <FaLinkedin size={12} />, link: "#" },
                { icon: <FaYoutube size={12} />, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-black hover:text-red-500 rounded-full p-2 bg-gray-200 hover:bg-gray-300 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <hr className="my-6 border-gray-200 mx-auto lg:my-4" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:mb-0">
            <p className="text-white text-center sm:text-left mb-4 sm:mb-0">
              Privacy policy | legal
            </p>
            <span className="block text-xs text-white text-center sm:text-right">
              Copyright © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Trend Micro Incorparated
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
