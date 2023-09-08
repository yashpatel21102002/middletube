"use client"
import React, { useRef } from 'react';

const LoginPage: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleLogin = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full max-sm:mx-2">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            ref={emailRef}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password:</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            ref={passwordRef}
          />
        </div>
        <button
          type="button"
          className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
