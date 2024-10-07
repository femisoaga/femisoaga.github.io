import React from "react";
import { MdOutlineLinearScale } from "react-icons/md";

const BlogDetails = () => {
  return (
    <section className="mb-8 bg-white rounded-lg shadow-md sm:p-16 p-6">
    <header className="mb-4">
      <h2 className="text-3xl font-bold">Blog</h2>
      <div className="mb-4">
        <MdOutlineLinearScale className="w-12 h-12 text-gray-600" />
      </div>
    </header>
    <h2 className="text-xl mb-4">Work In Progress.....</h2>
    </section>

  
  );
};

export default BlogDetails;
