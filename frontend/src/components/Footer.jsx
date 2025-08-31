import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row py-12 items-start justify-between gap-10">
        
        {/* About Section */}
        <div className="w-full sm:w-1/3 px-2">
          <h1 className="text-xl font-bold text-gray-800 mb-3">About Us</h1>
          <p className="text-gray-600 leading-relaxed mb-3">
            Welcome to <span className="font-semibold">Meta Blog</span> – a community-driven 
            platform where we share ideas, stories, and insights on technology, 
            lifestyle, and learning. Our mission is simple: to make knowledge 
            easy, inspiring, and accessible for everyone.
          </p>
          <p className="text-sm text-gray-500"> Email: riju9314@gmail.com</p>
          <p className="text-sm text-gray-500"> Phone: +91 7880609844</p>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-lg font-bold text-gray-800 mb-3">Quick Links</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><Link to="/" className="hover:text-black">Home</Link></li>
            <li><Link to="/blogs" className="hover:text-black">Blogs</Link></li>
            <li><Link to="/about" className="hover:text-black">About</Link></li>
            <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h1 className="text-lg font-bold text-gray-800 mb-3">Categories</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><Link className="hover:text-black">Weather</Link></li>
            <li><Link className="hover:text-black">Lifestyle</Link></li>
            <li><Link className="hover:text-black">Technology</Link></li>
            <li><Link className="hover:text-black">News</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="h-px bg-gray-300 w-full" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-6 text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <img src={assets.logo} alt="logo" className="w-6 h-6"/>
          <p>
            Meta <span className="font-bold text-lg text-gray-800">Blog</span>
          </p>
        </div>
        <ul className="flex gap-4 mt-4 sm:mt-0">
          <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
