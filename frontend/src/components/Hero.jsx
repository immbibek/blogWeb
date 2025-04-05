import React from "react";
import { Link } from "react-router-dom"; // or "next/link" if you're using Next.js

const Hero = () => {
  return (
    <section className="w-full px-4 mt-6 ">
      <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          src="/banner.jpg"
          alt="Banner"
          className="w-full h-[350px] object-cover"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
          {/* Tag as link */}
          <Link
            to="/wevdev"
            className="inline-block bg-black text-white font-semibold text-sm px-4 py-2 rounded-full mb-4 w-fit border border-white hover:bg-gray-200 hover:text-black transition-colors"
          >
            Web Development
          </Link>

          {/* Title as link */}
          <Link to="/wevdev">
            <h1 className="text-white text-xl md:text-2xl font-bold leading-tight hover:underline hover:decoration-red-500 hover:decoration-2 transition-all">
              Building Progressive Web Apps: <br />
              Bridging The Gap Between Web And Mobile
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
