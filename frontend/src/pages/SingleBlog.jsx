import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

function SingleBlog() {
  const { id } = useParams();
  const { blogData } = useContext(StoreContext);

  // Blog find karo
  const blog = blogData?.find((b) => b._id === id);

  // Agar abhi blog nahi mila (loading state)
  if (!blog) {
    return (
      <div className="text-center py-10">
        <p className="text-lg font-semibold">Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="rounded-md shadow-lg p-5 max-w-lg mt-4 flex flex-col gap-3 items-center justify-center mx-auto py-8">
      <img
        src={`http://localhost:2044/images/${blog.image}`}
        className=" w-full transition-transform duration-300 hover:scale-105"
        alt={blog.title}
      />
      <p className="text-2xl font-bold">{blog.title}</p>
      <p className="text-[#4B6BFB]">{blog.category}</p>
      <p>{blog.description}</p>
      <div className="flex gap-2 items-center justify-center">
        <p className="text-lg font-bold">Author: {blog.author?.name}</p>
        <img
          src={`http://localhost:2044/images/${blog.author?.image}`}
          className="w-12 h-11 rounded-full"
          alt={blog.author?.name}
        />
      </div>
      <p className="text-lg font-bold text-gray-600">
        {new Date(blog.createdAt).toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })}
      </p>
    </div>
  );
}

export default SingleBlog;
