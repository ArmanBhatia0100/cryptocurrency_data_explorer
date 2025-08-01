import React from "react";

export default function SignupPage() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <div className="font-bold text-indigo-600 text-2xl">YourLogo</div>
        <button className="font-medium text-indigo-600 hover:underline">
          Login
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-1 justify-center items-center">
        <div className="space-y-6 bg-white shadow-lg p-8 rounded-2xl w-full max-w-md">
          <h2 className="font-semibold text-gray-800 text-2xl text-center">
            Create your account
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700 text-sm">Name</label>
              <input
                type="text"
                required
                className="px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 text-sm">Email</label>
              <input
                type="email"
                required
                className="px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 text-sm">Password</label>
              <input
                type="password"
                required
                className="px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                placeholder="********"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 text-sm">Phone</label>
              <input
                type="tel"
                required
                className="px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                placeholder="+1 234 567 890"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 py-2 rounded-xl w-full text-white transition"
            >
              Sign Up
            </button>
          </form>

          <div className="flex justify-between items-center">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <span className="text-gray-500 text-xs uppercase">or signup with</span>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>

          <button className="flex justify-center items-center hover:bg-gray-100 py-2 border rounded-xl w-full transition">
            <svg
              className="mr-2 w-5 h-5"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.17 0 6.02 1.1 8.27 2.9l6.17-6.17C34.9 2.5 29.78 0 24 0 14.82 0 7.15 5.4 3.6 13.2l7.42 5.74C12.7 12.07 17.9 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.1 24.5c0-1.58-.14-3.1-.4-4.58H24v9.05h12.4c-.54 2.8-2.12 5.15-4.52 6.74l7.16 5.56c4.2-3.88 6.56-9.6 6.56-16.77z"
              />
              <path
                fill="#FBBC05"
                d="M10.98 28.94a14.43 14.43 0 0 1 0-9.88l-7.42-5.74a23.95 23.95 0 0 0 0 21.36l7.42-5.74z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.9-2.14 15.88-5.8l-7.16-5.56c-2 1.4-4.56 2.23-8.72 2.23-6.1 0-11.3-3.57-13.58-8.56l-7.42 5.74C7.14 42.6 14.8 48 24 48z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
