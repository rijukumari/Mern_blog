import express from 'express';
import { login, register } from '../controller/user.controller.js';
import upload from '../middlewares/multer.js'
import { allBlogs, createBlog, deleteBlog, userBlogs } from '../controller/blog.controller.js';
import {isAuthenticated} from "../middlewares/isAuthenticated.js"
const router = express.Router();


router.post('/create',isAuthenticated,upload.single('image'),createBlog);
router.get('/all',allBlogs)
router.delete('/delete/:id',isAuthenticated,deleteBlog);
router.get("/user/blogs",isAuthenticated,userBlogs)

export default router;