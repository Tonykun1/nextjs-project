"use client"; 

import React, { useState } from 'react';
import Nav from '../Components/Header/Nav';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [nickname, setNickname] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleCreateAccount = async (event) => {
    event.preventDefault();

    const userData = {
        name,
        email,
        password,
        age,
        city,
        nickname,
        hobbies,
        role
    };

    try {
        const response = await fetch('/api/createUser', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData), 
        });

        const data = await response.json();

        if (response.ok) {
            console.log('User created:', data);
        } else {
            console.error('Error creating user:', data.error);
        }
    } catch (error) {
        console.error('Error creating user:', error);
    }
};


  return (
    <>
      <Nav />
      <div className=" min-h-screen flex items-center justify-center bg-gray-50">
        <div className="m-2 p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-black text-center">Create Account</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleCreateAccount}>
            <div className="mb-4">
              <label className="block text-black">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border  text-black border-black-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-black border border-black-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Nickname</label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
                className="w-full px-3 py-2 text-black border border-black-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <label className="block text-black">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 text-black border border-black-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
