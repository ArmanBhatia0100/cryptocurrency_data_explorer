import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="font-semibold text-gray-800 text-xl">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
          </svg>
        </button>
      </div>
    </header>
  );
}
