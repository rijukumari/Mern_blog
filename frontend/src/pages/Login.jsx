import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../context/StoreContext';

function Login() {
  const [formData,setFormData] = useState({
    email:'',
    password:''
  })

  const {loginUser} = useContext(StoreContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false);

  const OnChangeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const submitHandler = async(e)=>{
    e.preventDefault();
    try{
      setLoading(true)
      const res = await axios.post("http://localhost:2044/user/login",formData,{
        headers:{
          "Content-Type":"application/json"
        }
      })
      if(res.data.success){
        const {user,token} = res.data;
        loginUser(user,token);
        toast.success(res.data.message)
        navigate('/')
      }


    }catch(error){
      toast.error(error.message)

    } finally{
      setLoading(false)
    }

  }
  return (
    <div className="w-full bg-pink-200 py-12 mx-auto flex items-center justify-center">
      <div className="w-full bg-white max-w-md p-5 mx-auto py-6 border-1 border-gray-200 shadow-md">
        <h1 className="text-lg font-bold text-center text-gray-700">
          Login into your account!
        </h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-5 mt-5 w-full">
          
          <input
          name='email'
          onChange={OnChangeHandler}
          value={formData.email}
            className="w-full p-2 border border-gray-300 rounded outline-none"
            type="email"
            placeholder="Your email"
            required
          />
          <input
          name='password'
          onChange={OnChangeHandler}
        value={formData.password}
            className="w-full p-2 border border-gray-300 rounded outline-none"
            type="password"
            placeholder="Your password"
            required
          />
         
          <button className="bg-orange-600 text-white px-6 py-2 w-full cursor-pointer rounded-md">Singin</button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <Link to={"/register"} className="text-orange-600 cursor-pointer">Register Here</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
