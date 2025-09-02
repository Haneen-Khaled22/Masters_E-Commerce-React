// Register code
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../Helper/supabase-client';
import toast from 'react-hot-toast';



function Register() {

    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
     const [loading, setLoading] = useState(false);

    const handleRegister=async(e)=>{
        e.preventDefault();
        setMessage("");
          setLoading(true);

        const {data,error} = await supabase.auth.signUp({
            email:email,
            password:password
        });

        if(error){
          setLoading(false);
            setMessage(error.message);
            toast.error(error.message);
            return;
        }
        if(data){
          setLoading(false);
            setMessage("user account created successfully");
            toast.success("user account created successfully");
            navigate('/login');

        }

    }


    return (
         <div className="container">
      <form className="max-w-sm mx-auto mt-20" onSubmit={handleRegister}>
        <h3 className="mb-8 text-3xl font-bold text-[#2E9C8E]">Register</h3>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {" "}
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button
         
          type="submit"
          className=" text-white bg-[#35AFA0] hover:bg-[#2E9C8E] cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
           {loading? <i className="fas fa-spinner fa-spin"></i>:"Register"}
        </button>
        <span className='ml-4 font-normal text-sm '>already have an account?<span className='font-bold  text-[16px] ml-2'><Link to={'/login'}>Login</Link></span> </span>
      </form>
    </div>
    )
}

export default Register
