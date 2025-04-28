import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ image, category, link, title }) => {
  return (
    <section className="w-full px-4 mt-6 lg:px-8 xl:px-20">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl lg:h-[550px]">
        {/* Background Image */}
        <img
          src={image}
          alt="Banner"
          className="w-full h-[350px] object-cover lg:h-[550px]"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 md:p-10 lg:p-12">
          {/* Tag as link */}
          <Link
            to={link}
            className="inline-block bg-black text-white font-semibold text-sm md:text-base px-4 py-2 rounded-full mb-4 w-fit border border-white hover:bg-gray-200 hover:text-black transition-colors"
          >
            {category}
          </Link>

          {/* Title as link */}
          <Link to={link}>
            <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-tight hover:underline hover:decoration-red-500 hover:decoration-2 transition-all">
              {title}
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
