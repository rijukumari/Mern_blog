import Blog from "../models/blog.model.js";
import fs from "fs";

export const allBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ blogs, success: true, message: "All blogs" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// createBlog....

export const createBlog = async (req, res) => {
  try {
    const { title, category, description } = req.body;

    // Check if user is authenticated
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }

    // Handle missing file
    const image_filename = req.file ? req.file.filename : null;

    const blog = await Blog.create({
      title,
      category,
      description,
      image: image_filename,
      author: {
        id: req.user._id,
        name: req.user.name,
        image: req.user.image,
      },
    });

    return res
      .status(201)
      .json({ message: "Blog created successfully", success: true, blog });
  } catch (error) {
    console.error("Create Blog Error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// deleteBlog .....

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    console.log("Blog Author ID:", blog.author.id.toString());
console.log("Logged in User ID:", req.user._id.toString());


    if (!blog) {
      return res
        .status(404)
        .json({ message: "Blog not found", success: false });
    }

    // Author verification
    if (blog.author.id.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized to delete this blog",
        success: false,
      });
    }

    // Delete image file
    if (blog.image) {
      fs.unlink(`uploads/${blog.image}`, (err) => {
        if (err) console.log("Image deletion error:", err);
      });
    }

    await blog.deleteOne();
    return res
      .status(200)
      .json({ message: "Blog deleted successfully", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// singleBlog...

export const singleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    return res.status(200).json({ message: "Blog found", success: true, blog });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// userBlogs...

export const userBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ "author.id": req.user._id }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error("User blogs fetch error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
