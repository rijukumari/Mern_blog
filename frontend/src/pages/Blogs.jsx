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
       
      Welcome to <span className="font-semibold">Meta Blog</span> – your space to
  explore ideas, stories, and insights that matter. From the latest in 
  technology and lifestyle trends to weather updates and current news, 
  we aim to make knowledge simple, engaging, and accessible for everyone. 
  Here, learning meets inspiration and curiosity finds a home.
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
