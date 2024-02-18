import React from "react";

export default function Events() {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto text-center text-white ">
        <h1 className="text-4xl font-semibold mb-4 mx-auto max-w-4xl">
          Upcoming Events
        </h1>
        <p className="text-sm mb-6 mx-auto max-w-2xl">
          Attend a live webinar with industry stalwarts sharing their views,
          tips and vision on trends that are reinventing the way we work, live
          and function. Register for the upcoming webinar or choose as per your
          preference
        </p>
      </div>

      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div class="bg-black flex flex-col justify-between leading-normal">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="w-full mb-3 rounded-lg"
            />
            <div class="p-4  w-4/5">
              <div class="mb-8">
                <p className="text-white inline-block border border-white p-1">
                  Trend cloud one
                </p>

                <h2 class="text-white font-bold text-xl mb-2">
                  Workload security demo
                </h2>
                <p class="text-white text-xs mb-2 font-thin">
                  January 1, 2022 | 14:3 - 15:30 (GST)
                </p>
                <p class="text-white text-sm font-bold ">
                  Speaker: <br /> <span className="font-thin"> John Doe</span>
                </p>
                <p class="text-red-600 text-sm mb-2">
                  Technical sales engineer ,Trend Micro
                </p>
                <p class="text-white text-sm mb-2 font-bold">Episode 01</p>
                <button class="bg-red-500 text-white py-2 px-4 ">
                  Register Now
                </button>
              </div>
            </div>
          </div>

          <div class="bg-black flex flex-col justify-between leading-normal">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="w-full mb-3"
            />
            <div class="p-4 pt-2 w-4/5">
              <div class="mb-8">
                <p className="text-white inline-block border border-white p-1">
                  Trend cloud one
                </p>

                <h2 class="text-white font-bold text-xl mb-2">
                  Workload security demo
                </h2>
                <p class="text-white text-xs mb-2 font-thin">
                  January 1, 2022 | 14:3 - 15:30 (GST)
                </p>
                <p class="text-white text-sm font-bold ">
                  Speaker: <br /> <span className="font-thin"> John Doe</span>
                </p>
                <p class="text-red-600 text-sm mb-2">
                  Technical sales engineer ,Trend Micro
                </p>
                <p class="text-white text-sm mb-2 font-bold">Episode 01</p>
                <button class="bg-red-500 text-white py-2 px-4 rounded-sm ">
                  Register Now
                </button>
              </div>
            </div>
          </div>

          <div class="bg-black flex flex-col justify-between leading-normal">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="w-full mb-3"
            />
            <div class="p-4 pt-2 w-4/5">
              <div class="mb-8">
                <p className="text-white inline-block border border-white p-1">
                  Trend cloud one
                </p>

                <h2 class="text-white font-bold text-xl mb-2">
                  Workload security demo
                </h2>
                <p class="text-white text-xs mb-2 font-thin">
                  January 1, 2022 | 14:3 - 15:30 (GST)
                </p>
                <p class="text-white text-sm font-bold ">
                  Speaker: <br /> <span className="font-thin"> John Doe</span>
                </p>
                <p class="text-red-600 text-sm mb-2">
                  Technical sales engineer ,Trend Micro
                </p>
                <p class="text-white text-sm mb-2 font-bold">Episode 01</p>
                <button class="bg-red-500 text-white py-2 px-4 ">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
