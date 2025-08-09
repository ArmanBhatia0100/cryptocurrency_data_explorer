import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ), label: "Dashboard" },
    { path: "/coins", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ), label: "Coins" },
    { path: "/portfolio", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ), label: "Portfolio" },
  ];

  return (
    <div className="relative min-w-65 wrapper">
    <aside className="top-0 fixed flex flex-col bg-[var(--color-card-background)] border-[var(--color-card-border)] border-r w-64 h-screen">
      <div className="p-6">
        <h1 className="font-bold text-[var(--color-text-primary)] text-2xl">
          <span className="text-[var(--color-accent)]">Crypto</span>Explorer
        </h1>
      </div>
      
      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
              isActive(item.path)
                ? 'bg-[var(--color-accent)] text-white'
                : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-card-border)]'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-[var(--color-card-border)] border-t">
        <div className="flex items-center p-3 bg-[var(--color-card-border)] rounded-lg">
          <div className="flex justify-center items-center bg-[var(--color-accent)] mr-3 rounded-full w-10 h-10 font-medium text-white">
            U
          </div>
          <div>
            <p className="font-medium text-[var(--color-text-primary)] text-sm">User Name</p>
            <p className="text-[var(--color-text-placeholder)] text-xs">user@example.com</p>
          </div>
        </div>
      </div>
    </aside>
    </div>
  );
}
