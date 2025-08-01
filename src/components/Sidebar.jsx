import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between bg-white border-r w-48">
      <div>
        <div className="p-4 font-bold text-indigo-600 text-2xl">Logo</div>
        <nav className="space-y-2 mt-4">
          <Link to="/" className="block hover:bg-gray-100 px-4 py-2 text-gray-700">Dashboard</Link>
          <Link to="/coins" className="block hover:bg-gray-100 px-4 py-2 text-gray-700">Coins</Link>
          <Link to="/portfolio" className="block hover:bg-gray-100 px-4 py-2 text-gray-700">Portfolio</Link>
        </nav>
      </div>
    </aside>
  );
}
