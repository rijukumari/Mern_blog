import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { StoreContext } from "../context/StoreContext";

function LatestBlogs() {
  const {blogData} = useContext(StoreContext)
  return (
    <div>
      <h1 className="text-3xl font-bold text-ceenter sm:text-start">
        Latest Blogs
      </h1>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 sm:px-4">
        {blogData.slice(-6).reverse().map((blog, index) => (
          <BlogCard
            key={index}
            id={blog.id}
            title={blog.title}
            image={blog.image}
            category={blog.category}
            author_name={blog.author_name}
            author_image={blog.author_image}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestBlogs;
