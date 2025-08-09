import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-[var(--color-card-border)] bg-[var(--color-card-background)]">
      <h1 className="heading-2">Crypto Explorer</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search coins..."
            className="form-input pl-10 pr-4 py-2 rounded-full text-sm"
          />
          <svg
            className="w-5 h-5 text-[var(--color-text-placeholder)] absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button className="relative p-2 rounded-full hover:bg-[var(--color-card-border)] transition-colors">
          <svg
            className="w-5 h-5 text-[var(--color-text-secondary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"
            />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
          </svg>
        </button>
        <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-medium">
          U
        </div>
      </div>
    </header>
  );
}
