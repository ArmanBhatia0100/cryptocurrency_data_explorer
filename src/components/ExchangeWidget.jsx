import React from "react";

export default function ExchangeWidget() {
  return (
    <div className="space-y-4 bg-gray-900 p-4 rounded-xl w-60 text-white">
      <h3 className="text-gray-300 text-sm">Exchange</h3>
      <div className="flex justify-between items-center">
        <span>1 NTC</span>
        <span>$102.89 USD</span>
      </div>
      <input className="bg-gray-800 px-3 py-1 rounded w-full text-white" defaultValue="10" />
      <input className="bg-gray-800 px-3 py-1 rounded w-full text-white" defaultValue="1028.9" />
      <button className="bg-green-600 hover:bg-green-700 py-1 rounded w-full">EXCHANGE</button>
    </div>
  );
}
