import React from "react";
import { Link } from "react-router-dom";

function BlogCard({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
      <Link to={`/blog/${id}`}>
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/images/${image}`}
          alt="blog"
          className="w-full h-56 object-cover transform transition duration-500 hover:scale-105"
        />
      </Link>

      <div className="p-5">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
          {category}
        </span>

        <h1 className="mt-3 text-xl font-bold text-gray-900 hover:text-blue-600 transition duration-200">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h1>

        <div className="flex items-center gap-3 mt-5">
          <img
            className="w-10 h-10 rounded-full border"
            src={`${import.meta.env.VITE_BACKEND_URL}/images/${author_image}`}
            alt="author"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">{author_name}</p>
            <p className="text-xs text-gray-500">
              {new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
