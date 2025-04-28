import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <section className="w-full px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 lg:ml-6">
        Featured Posts
      </h1>

      {/* Top Feature Card */}
      <div className="lg:flex lg:gap-3 lg:ml-6 lg:mr-6 lg:p-5">
        <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl max-w-4xl mb-10 group">
          {/* Image wrapper to apply hover */}
          <div className="overflow-hidden">
            <img
              src="/feature.jpg"
              alt="featurejpg"
              className="w-full h-[350px] md:h-[400px] object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 md:p-10">
            <Link
              to="/wevdev"
              className="inline-block bg-black text-white font-semibold px-4 py-2 rounded-full border border-white mb-4 w-fit hover:bg-white hover:text-black transition-colors"
            >
              JavaScript
            </Link>

            <Link to="/wevdev">
              <h1 className="text-white text-lg md:text-2xl lg:text-3xl font-bold leading-snug hover:underline hover:decoration-red-500 hover:decoration-2 transition-all">
                The Power of JavaScript Frameworks: <br />
                Angular vs. React vs. Vue.js
              </h1>
            </Link>
          </div>
        </div>

        {/* Two Side Boxes */}
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
          {/* Left Box */}
          <div className="flex-1 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src="/f2.jpg"
              alt=""
              className="w-full h-56 object-cover hover:scale-105 transition-all ease duration-300"
            />
            <div className="p-5 space-y-2">
              <p className="text-sm font-medium text-blue-600">Productivity</p>
              <h2 className="text-lg font-semibold hover:underline hover:decoration-red-500 transition-all">
                Automating Repetitive Tasks: <br />
                Productivity Hacks for Developers
              </h2>
              <p className="text-gray-500 text-sm">April 05, 2025</p>
            </div>
          </div>

          {/* Right Box */}
          <div className="flex-1 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src="/f3.jpg"
              alt=""
              className="w-full h-56 object-cover hover:scale-105 transition-all ease duration-300"
            />
            <div className="p-5 space-y-2">
              <p className="text-sm font-medium text-green-600">Code Quality</p>
              <h2 className="text-lg font-semibold hover:underline hover:decoration-red-500">
                Best Practices for Writing Clean and Maintainable Code
              </h2>
              <p className="text-gray-500 text-sm">May 08, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
