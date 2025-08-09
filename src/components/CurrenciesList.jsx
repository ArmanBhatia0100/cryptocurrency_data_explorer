import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const currencies = [
  { 
    id: "bitcoin", 
    name: "Bitcoin", 
    symbol: "BTC",
    value: 45000,
    change: 5.2,
    amount: 1.5,
    color: "#F7931A"
  },
  { 
    id: "ethereum", 
    name: "Ethereum", 
    symbol: "ETH",
    value: 3200,
    change: -1.8,
    amount: 4.2,
    color: "#627EEA"
  },
  { 
    id: "cardano", 
    name: "Cardano", 
    symbol: "ADA",
    value: 1.2,
    change: 12.5,
    amount: 2500,
    color: "#0033AD"
  },
  { 
    id: "solana", 
    name: "Solana", 
    symbol: "SOL",
    value: 120,
    change: 8.3,
    amount: 15.5,
    color: "#00FFA3"
  },
];

// Calculate total portfolio value
const totalValue = currencies.reduce((sum, coin) => sum + (coin.value * coin.amount), 0);

// Generate chart data
const chartData = {
  labels: currencies.map(coin => coin.name),
  datasets: [
    {
      data: currencies.map(coin => (coin.value * coin.amount) / totalValue * 100),
      backgroundColor: currencies.map(coin => coin.color),
      borderWidth: 0,
      borderRadius: 4,
      spacing: 2,
    },
  ],
};

const chartOptions = {
  plugins: { 
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: function(context) {
          return `${context.label}: ${context.raw.toFixed(1)}%`;
        }
      }
    }
  },
  maintainAspectRatio: false,
  cutout: '70%',
  radius: '90%',
};

export default function CurrenciesList() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].id);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="p-6 card">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-[var(--color-text-primary)] text-lg">Your Portfolio</h3>
        <button className="font-medium text-[var(--color-accent)] text-sm hover:underline">
          View All
        </button>
      </div>

      <div className="gap-8 grid grid-cols-1 xl:grid-cols-2">
        {/* Pie chart */}
        <div className="hidden xl:block relative h-64">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-center">
              <p className="text-[var(--color-text-secondary)] text-sm">Total Value</p>
              <p className="font-bold text-[var(--color-text-primary)] text-2xl">
                {formatCurrency(totalValue)}
              </p>
            </div>
          </div>
          <Pie data={chartData} options={chartOptions} />
        </div>

        {/* Currencies list */}
        <div className="space-y-3">
          {currencies.map((currency) => (
            <button
              key={currency.id}
              onClick={() => setSelectedCurrency(currency.id)}
              className={`w-full p-4 rounded-xl transition-colors text-left ${
                selectedCurrency === currency.id 
                  ? 'bg-[var(--color-accent-light)] border border-[var(--color-accent-border)]' 
                  : 'hover:bg-[var(--color-card-hover)]'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <div 
                    className="flex justify-center items-center mr-3 rounded-full w-8 h-8 text-white"
                    style={{ backgroundColor: currency.color }}
                  >
                    {currency.symbol}
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-text-primary)]">{currency.name}</h4>
                    <p className="text-[var(--color-text-placeholder)] text-xs">{currency.amount} {currency.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[var(--color-text-primary)]">
                    {formatCurrency(currency.value * currency.amount)}
                  </p>
                  <p 
                    className={`text-xs font-medium ${
                      currency.change >= 0 ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'
                    }`}
                  >
                    {currency.change >= 0 ? '↑' : '↓'} {Math.abs(currency.change)}%
                  </p>
                </div>
              </div>
              
              {/* Progress bar showing allocation percentage */}
              <div className="mt-2 bg-[var(--color-card-border)] rounded-full w-full h-1.5 overflow-hidden">
                <div 
                  className="rounded-full h-full"
                  style={{
                    width: `${(currency.value * currency.amount / totalValue) * 100}%`,
                    backgroundColor: currency.color,
                    opacity: 0.7
                  }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
