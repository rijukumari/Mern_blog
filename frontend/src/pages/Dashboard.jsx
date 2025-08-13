import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("list");
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
  });
  const [blogs, setBlogs] = useState([]);

  const OnChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      const res = await axios.post("http://localhost:2044/blog/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);
      setFormData({
        title: "",
        category: "",
        description: "",
        image: null,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    const allBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:2044/blog/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(res.data.blogs);
      } catch (error) {
        console.log("Error", error);
      }
    };
    allBlogs();
  }, []);

  const removeBlog = async (blogId) => {
    try {
      const res = await axios.delete(
        `http://localhost:2044/blog/delete/${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.message);
      setBlogs(blogs.filter((blog) => blog._id !== blogId));
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-auto min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-800 text-white p-6 flex md:flex-col flex-row md:space-y-4 space-x-2 md:space-x-0 justify-between md:justify-start">
        <h2 className="text-lg font-semibold mb-6 md:block hidden">
          Dashboard
        </h2>
        <button
          className={`w-full md:w-auto text-left py-2 px-4 rounded ${
            activeTab === "post" ? "bg-orange-500" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("post")}
        >
          Post a Blog
        </button>
        <button
          className={`w-full md:w-auto text-left py-2 px-4 rounded ${
            activeTab === "list" ? "bg-orange-500" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("list")}
        >
          List Blogs
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 bg-white">
        {activeTab === "post" ? (
          <>
            <h2 className="text-xl font-bold mb-4">Post a new blog</h2>
            <form
              onSubmit={submitHandler}
              className="w-full flex flex-col gap-3"
            >
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={OnChangeHandler}
                placeholder="Title"
                className="border border-gray-300 rounded-md p-2 outline-none w-full"
              />
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={OnChangeHandler}
                placeholder="Category"
                className="border border-gray-300 rounded-md p-2 outline-none w-full"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={OnChangeHandler}
                placeholder="Description"
                className="border border-gray-300 rounded-md p-2 outline-none w-full"
              />
              <div>
                <label className="block mb-1">Choose Image</label>
                <input
                  type="file"
                  onChange={fileHandler}
                  accept="image/*"
                  className="border border-gray-300 rounded-md p-2 outline-none w-full"
                />
              </div>
              <button className="bg-black text-white rounded-full w-full py-2 cursor-pointer hover:bg-gray-900">
                Post blog
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-semibold mb-4 text-center">List of Blogs</h2>
            {/* Table for large screens */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">Title</th>
                    <th className="border px-4 py-2">Category</th>
                    <th className="border px-4 py-2">Image</th>
                    <th className="border px-4 py-2">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog._id} className="text-center">
                      <td className="border px-4 py-2">{blog.title}</td>
                      <td className="border px-4 py-2">{blog.category}</td>
                      <td className="border px-4 py-2">
                        <img
                          src={`http://localhost:2044/images/${blog.image}`}
                          alt={blog.title}
                          className="w-16 h-16 object-cover mx-auto"
                        />
                      </td>
                      <td
                        className="border px-4 py-2 cursor-pointer text-red-500 font-bold"
                        onClick={() => removeBlog(blog._id)}
                      >
                        X
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card list for small screens */}
            <div className="sm:hidden grid gap-4">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="border rounded-lg p-4 bg-gray-50 shadow-sm"
                >
                  <h3 className="font-bold text-lg">{blog.title}</h3>
                  <p className="text-sm text-gray-600">{blog.category}</p>
                  <img
                    src={`http://localhost:2044/images/${blog.image}`}
                    alt={blog.title}
                    className="w-full h-40 object-cover mt-2 rounded"
                  />
                  <button
                    onClick={() => removeBlog(blog._id)}
                    className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
