"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  
import Nav from '../Components/Header/Nav';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', { email, password });
    router.push('/'); 
  };

  return (
    <>
    <Nav />
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white text-black  shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
