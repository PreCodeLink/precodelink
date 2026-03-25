import React from "react";

const Blogs = () => {

  const blogs = [
    {
      id: 1,
      title: "Learning React",
      desc: "React makes building UI easier and faster."
    },
    {
      id: 2,
      title: "Tailwind CSS",
      desc: "Tailwind helps you style your apps quickly."
    },
    {
      id: 3,
      title: "JavaScript Tips",
      desc: "Understanding JS deeply improves your coding."
    },
    {
      id: 4,
      title: "Learning React",
      desc: "React makes building UI easier and faster."
    },
    {
      id: 5,
      title: "Tailwind CSS",
      desc: "Tailwind helps you style your apps quickly."
    },
    {
      id: 6,
      title: "JavaScript Tips",
      desc: "Understanding JS deeply improves your coding."
    }
  ];

  return (
    <section className="py-16">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Latest Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border p-6 rounded-lg shadow hover:shadow-lg transition"
            >

              <h3 className="text-xl font-semibold mb-2">
                {blog.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {blog.desc}
              </p>

              <button className="text-blue-600 hover:underline">
                Read More
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Blogs;