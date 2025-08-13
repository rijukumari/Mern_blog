import React, { useContext } from "react";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import { StoreContext } from "../context/StoreContext";

function Blogs() {
  const {blogData} = useContext(StoreContext)
  return (
    <div>
      <Hero />
      <h1 className="text-3xl text-center  font-bold my-6">All Blogs</h1>
      <p className=" text-base px-3 sm:text-lg leading-6 max-w-2xl mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odio
        aperiam veniam ad rerum repellat dignissimos quisquam atque quasi
        excepturi illum, molestias blanditiis quod sunt pariatur error, eveniet
        ab perferendis.
      </p>
      <div className="grid my-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 sm:px-4">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            id={blog._id}
            title={blog.title}
            image={blog.image}
            category={blog.category}
            author_name={blog.author.name}
            author_image={blog.author.image}
            date={blog.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
