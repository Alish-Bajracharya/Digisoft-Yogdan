"use client";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/combined.png'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login Successful!");

        if (data.role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/');
        }

      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };


  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden">
      {/* Left Side - Image */}
      <div className="w-1/3 hidden md:flex items-center justify-center bg-blue-100 p-6">
        <div className="relative w-full">
            <img
            src={Logo}
            alt="Yogdan Welcome"
            className="w-full object-cover rounded-xl shadow-md"
            />
            
        </div>
        </div>

      

      {/* Right Side - Form */}
      <div className="w-full md:w-2/3 p-8 md:p-16 bg-white">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome to Yogdan Consumer Cooperative Pvt Ltd.
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Are you a new user?{" "}
          <a href="/signup" className="text-orange-400 underline">
            Create a New Account
          </a>
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="username" className="block text-left text-gray-700 font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-left text-gray-700 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-green-900 text-white py-3 rounded-lg text-xl font-semibold hover:bg-orange-500 transition duration-300"
          >
            Sign In
          </button>
          
        </form>
      </div>
    </div>
    <a
        href="/"
        className="absolute bottom-36 left-96 ml-16 text-sm text-blue-600 px-4 py-2 rounded shadow hover:bg-blue-100 transition"
        >
        Return to Home
    </a>
  </main>
  
);
};

export default Login;