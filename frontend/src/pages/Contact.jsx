import React from 'react';
import { assets } from '../assets/assets';

function Contact() {
  return (
    <div>
        <h1 className="text-center text-3xl uppercase font-bold my-8">Contact</h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto my-6">
              Welcome to <span className="text-blue-600 font-semibold">MyBlog</span>, your go-to platform for insightful
              articles on technology , lifestyle, and beyond.Our mission is to share
              knowledge and inspire creativity through engaing and well-resarched
              content. Whether you're a tech enthusiast,a passionate writer , or
              someone looking for inspiration, we've got something for you.
            </p>
            <div>
              <img src={assets.contact} alt="" className="w-[80%] h-[75vh] mx-auto"/>
            </div>
    </div>
  )
}

export default Contact
