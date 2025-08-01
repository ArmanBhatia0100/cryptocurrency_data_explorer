import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6">
          <h2 className="font-semibold text-gray-800 text-xl">Portfolio Page</h2>
          <p className="mt-2 text-gray-600">This is where your portfolio overview would appear.</p>
        </main>
      </div>
    </div>
  );
}
