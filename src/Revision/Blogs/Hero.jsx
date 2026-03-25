import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">

      <div className="text-center max-w-2xl">

        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-500">MiniBlogs</span>
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Share your ideas, read amazing stories, and connect with writers around the world.
        </p>

        <div className="flex justify-center gap-4">

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Read Blogs
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white">
            Add Blog
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;