import React from "react";

const Posts = () => {
  return (
    <section className="w-full px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 lg:ml-6">
        Recent Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6 max-w-6xl mx-auto ">
        {/* Post 1 */}
        <div className="rounded-2xl shadow-lg overflow-hidden">
          <img
            src="/p1.jpg"
            alt="Post"
            className="w-full h-[220px] object-cover hover:scale-105 transition-all ease duration-300 "
          />
          <div className="p-4 flex flex-col gap-2">
            <p className="text-sm font-medium text-blue-600">Productivity</p>
            <h2 className="text-lg md:text-xl font-semibold hover:underline hover:decoration-red-500">
              Mindfulness and Meditation Techniques for Developers: <br />
              Improving Focus and Clarity
            </h2>
            <p className="text-gray-500 text-sm">April 6, 2025</p>
          </div>
        </div>

        {/* Post 2 */}
        <div className="rounded-2xl shadow-lg overflow-hidden">
          <img
            src="/p2.jpg"
            alt="Post"
            className="w-full h-[220px] object-cover hover:scale-105 transition-all ease duration-300"
          />
          <div className="p-4 flex flex-col gap-2">
            <p className="text-sm font-medium text-green-600">Code Quality</p>
            <h2 className="text-lg md:text-xl font-semibold hover:underline hover:decoration-red-300">
              Writing Clean & Maintainable Code <br />
              Best Practices and Patterns
            </h2>
            <p className="text-gray-500 text-sm">April 10, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
