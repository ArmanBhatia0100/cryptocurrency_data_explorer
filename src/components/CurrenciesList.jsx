import React from "react";

const currencies = ["eth", "Bitcoin", "MyCoin"];

export default function CurrenciesList() {
  return (
    <div className="space-y-2 bg-white shadow p-4 rounded-xl">
      <h3 className="text-gray-500 text-sm">Currencies</h3>
      {/* pie chart */}
      <div className="space-y-1">
        {/* Currencies list as clickable cards */}
        {currencies.map((currency) => (
          <button key={currency} className="hover:bg-gray-100 px-3 py-1 border rounded-lg w-full text-gray-700">
            {currency}
          </button>
        ))}
      </div>
    </div>
  );
}
