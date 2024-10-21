"use client";
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Add login logic here
    alert("Login clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="text-center mb-6">
          <img src="/icons/logo.svg" alt="Logo" className="w-14 h-14 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-blue-900">Welcome back!</h1>
          <p className="text-gray-600 mt-2">Invoice Data Extractor</p>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            placeholder="Enter your mail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label className="block font-semibold text-gray-700 mb-2">Password <span className="text-red-500">*</span></label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          {/* Password visibility toggle */}
          <button
            className="absolute inset-y-0 right-3 text-gray-400 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showPassword ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12l4-4m0 0l-4 4m0-4l-4 4"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.5l-8 6 8 6 8-6-8-6zm0 0v6"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex justify-between items-center mb-6">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-900" />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-blue-900 hover:underline">Forgot your password?</a>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-900 text-white rounded-lg text-lg font-semibold hover:bg-blue-800 transition duration-300"
        >
          Log In
        </button>

        {/* Or login with */}
        <div className="mt-6 text-center text-gray-500">
          <div className="mb-4">Or</div>
          <button className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-300">
            <img src="/icons/google-icon.svg" alt="Google" className="w-6 h-6 mr-2" />
            Sign up with Google
          </button>
        </div>

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-500">
          Don't have an account? <a href="#" className="text-blue-900 hover:underline">Register here</a>
        </p>
      </div>
    </div>
  );
}
