import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Singup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });
  const navigate = useNavigate();
  const [setLoading] = useState(false);
  const OnChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("image", formData.image);

      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/register`, data); // No manual headers
      console.log("RES",res)
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  return (
    <div className="w-full bg-pink-200 py-12 mx-auto flex items-center justify-center">
      <div className="w-full bg-white max-w-md p-5 mx-auto py-6 border-1 border-gray-200 shadow-md">
        <h1 className="text-lg font-bold text-center text-gray-700">
          Create your account!
        </h1>
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5 mt-5 w-full"
        >
          <input
            name="name"
            onChange={OnChangeHandler}
            value={formData.name}
            className="w-full p-2 border border-gray-300 rounded outline-none"
            type="text"
            placeholder="Your name"
            required
          />
          <input
            name="email"
            onChange={OnChangeHandler}
            value={formData.email}
            className="w-full p-2 border border-gray-300 rounded outline-none"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={OnChangeHandler}
            value={formData.password}
            className="w-full p-2 border border-gray-300 rounded outline-none"
            type="password"
            placeholder="Your password"
            required
          />
          <input
            onChange={fileHandler}
            accept="image/*"
            value={formData.file}
            className="w-full p-2 border border-gray-300 rounded outline-none"
            type="file"
            required
          />
          <button className="bg-orange-600 text-white px-6 py-2 w-full cursor-pointer rounded-md">
            Singup
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to={"/login"} className="text-orange-600 cursor-pointer">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Singup;
