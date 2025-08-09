import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const cryptocurrencies = [
  { name: "Bitcoin", price: 62000, change: 2.5, symbol: "BTC" },
  { name: "Ethereum", price: 2700, change: -1.2, symbol: "ETH" },
  { name: "Cardano", price: 0.35, change: 0.8, symbol: "ADA" },
  { name: "Solana", price: 150, change: 3.1, symbol: "SOL" },
  { name: "Ripple", price: 0.6, change: -0.4, symbol: "XRP" },
  { name: "Polkadot", price: 4.8, change: 1.7, symbol: "DOT" },
];

export default function CoinsPage() {
  return (
    <div className="flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <Main />
      </div>
    </div>
  );
}

function Main() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredCryptos = cryptocurrencies.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // Trigger search (already handled by state, but button can be used for additional logic if needed)
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search by name or symbol..."
              className="bg-gray-800 shadow-lg p-4 pr-12 border border-gray-700 focus:border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white transition-all duration-300 placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="top-1/2 right-2 absolute bg-blue-600 hover:bg-blue-700 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all -translate-y-1/2 duration-300 transform"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Crypto Cards Grid */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCryptos.length > 0 ? (
            filteredCryptos.map((crypto, index) => (
              <div
                key={index}
                className="bg-gray-800 shadow-xl hover:shadow-2xl p-6 border border-gray-700 rounded-xl text-white transition-all hover:-translate-y-1 duration-300 transform"
              >
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-blue-300 text-2xl">{crypto.name}</h2>
                  <span className="font-medium text-gray-400 text-sm">{crypto.symbol}</span>
                </div>
                <p className="mt-4 text-gray-300 text-lg">
                  Price: <span className="font-semibold">${crypto.price.toLocaleString()}</span>
                </p>
                <p
                  className={`text-lg mt-2 font-medium ${
                    crypto.change >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  Change: {crypto.change >= 0 ? "+" : ""}
                  {crypto.change}%
                </p>
                <div className="bg-gray-700 mt-4 rounded-full h-1 overflow-hidden">
                  <div
                    className={`h-full ${
                      crypto.change >= 0 ? "bg-green-500" : "bg-red-500"
                    }`}
                    style={{ width: `${Math.min(Math.abs(crypto.change) * 10, 100)}%` }}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-400 text-lg text-center">
              No cryptocurrencies found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}