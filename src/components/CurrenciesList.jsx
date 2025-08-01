import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const currencies = ["ETH", "Bitcoin", "MyCoin"];

// Example data; replace with actual portfolio values if you have them
const data = {
  labels: currencies,
  datasets: [
    {
      data: [40, 35, 25],
      backgroundColor: [
        "#6366F1", // indigo
        "#10B981", // emerald
        "#F59E0B", // amber
      ],
      borderWidth: 0,
    },
  ],
};

export default function CurrenciesList() {
  return (
    <div>
      <h3 className="text-gray-500 text-sm">Currencies</h3>
      <div className="flex justify-center items-center space-y-3 bg-white shadow p-4 rounded-xl">
        {/* Pie chart */}
        <div className="mx-auto w-32">
          <Pie
            data={data}
            options={{
              plugins: { legend: { display: false } },
              maintainAspectRatio: false,
            }}
          />
        </div>

        {/* Currencies list */}
        <div className="space-y-1">
          {currencies.map((currency) => (
            <button
              key={currency}
              className="hover:bg-gray-100 px-3 py-1 border rounded-lg w-full text-gray-700 text-sm"
            >
              {currency}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
