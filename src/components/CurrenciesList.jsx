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
    <div className="card p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Your Portfolio</h3>
        <button className="text-sm font-medium text-[var(--color-accent)] hover:underline">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie chart */}
        <div className="relative h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">Total Value</p>
              <p className="text-2xl font-bold text-[var(--color-text-primary)]">
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
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white mr-3"
                    style={{ backgroundColor: currency.color }}
                  >
                    {currency.symbol}
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-text-primary)]">{currency.name}</h4>
                    <p className="text-xs text-[var(--color-text-placeholder)]">{currency.amount} {currency.symbol}</p>
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
              <div className="w-full h-1.5 bg-[var(--color-card-border)] rounded-full overflow-hidden mt-2">
                <div 
                  className="h-full rounded-full"
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
