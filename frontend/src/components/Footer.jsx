import React from "react";
import { Link } from "react-router-dom";
import {assets} from '../assets/assets'

function Footer() {
  return (
    <>
    <div className="flex flex-col py-12 md:flex-row items-center justify-between">
      <div className="w-full items-center flex flex-col justify-center px-2 sm:w-1/3">
        <h1 className="text-xl font-bold text-gray-700">About</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore odit
          accusamus eum maxime ipsum pariatur porro hic animi consequuntur
          maiores accusantium quos id eaque sequi deleniti ?
        </p>
        <h4 className="text-lg font-normal">Email: riju9314@gmail.com</h4>
        <h4 className="text-lg font-normal">Phone: 7880609844</h4>
      </div>
      <div>
        <h1 className="text-lg font-bold text-gray-700">Quick Links</h1>
        <ul className="flex flex-col gap-2">
            <Link to='/' className="cursor-pointer hover:text-black text-gray-700">Home</Link>
            <Link to='/blogs' className="cursor-pointer hover:text-black text-gray-700">Blogs</Link>
            <Link to='/about' className="cursor-pointer hover:text-black text-gray-700">About</Link>
            <Link to='/contact' className="cursor-pointer hover:text-black text-gray-700">Contact</Link>
        </ul>
      </div>
      <div>
        <h1 className="text-lg font-bold text-gray-700">Categories</h1>
        <ul className="flex flex-col gap-2">
            <Link className="cursor-pointer hover:text-black text-gray-700">Weather</Link>
            <Link  className="cursor-pointer hover:text-black text-gray-700">Lifestyle</Link>
            <Link  className="cursor-pointer hover:text-black text-gray-700">Technology</Link>
            <Link  className="cursor-pointer hover:text-black text-gray-700">News</Link>
        </ul>


      </div>
    </div>

    <hr className="h-0.5 text-gray-600 bg-gray-700 w-full"/>
    <div className="flex flex-col sm:flex-row justify-between items-center my-6">
      <div className="flex  gap-2 items-center justify-center">
        <img src={assets.logo} alt=""/>
        <p>
          Meta <span className="font-bold text-xl">Blog</span>
        </p>
      </div>
      <ul className="flex gap-3 flex-col sm:flex-row items-center">
        <li>Privacy Policy</li>
        <li>Terms and conditions</li>
        <li>copyright @code bless me</li>
        <li></li>
      </ul>
    </div>
    
    </>
  );
}

export default Footer;
