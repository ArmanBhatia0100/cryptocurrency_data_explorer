import React, { useState, useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from "react-sparklines";
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

// Mock data for top cryptocurrencies
const mockCoins = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    current_price: 50123.45,
    price_change_percentage_24h: 2.34,
    price_change_percentage_7d: -1.23,
    market_cap: 956_789_123_456,
    total_volume: 34_567_890_123,
    sparkline_in_7d: {
      price: Array.from({ length: 24 }, (_, i) => 48000 + Math.sin(i / 2) * 3000 + Math.random() * 1000)
    },
    isFavorite: true
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    current_price: 2987.65,
    price_change_percentage_24h: 1.89,
    price_change_percentage_7d: 3.45,
    market_cap: 358_123_456_789,
    total_volume: 23_456_789_012,
    sparkline_in_7d: {
      price: Array.from({ length: 24 }, (_, i) => 2800 + Math.sin(i / 2) * 300 + Math.random() * 400)
    },
    isFavorite: false
  },
  {
    id: "binancecoin",
    name: "BNB",
    symbol: "BNB",
    image: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    current_price: 423.21,
    price_change_percentage_24h: -0.75,
    price_change_percentage_7d: 2.12,
    market_cap: 68_901_234_567,
    total_volume: 1_234_567_890,
    sparkline_in_7d: {
      price: Array.from({ length: 24 }, (_, i) => 400 + Math.sin(i / 2) * 30 + Math.random() * 40)
    },
    isFavorite: false
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    image: "https://cryptologos.cc/logos/solana-sol-logo.png",
    current_price: 145.67,
    price_change_percentage_24h: 5.23,
    price_change_percentage_7d: 12.34,
    market_cap: 45_678_901_234,
    total_volume: 3_456_789_012,
    sparkline_in_7d: {
      price: Array.from({ length: 24 }, (_, i) => 120 + Math.sin(i / 2) * 30 + Math.random() * 20)
    },
    isFavorite: true
  },
  {
    id: "ripple",
    name: "XRP",
    symbol: "XRP",
    image: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    current_price: 0.5678,
    price_change_percentage_24h: 0.45,
    price_change_percentage_7d: -2.34,
    market_cap: 27_345_678_901,
    total_volume: 2_345_678_901,
    sparkline_in_7d: {
      price: Array.from({ length: 24 }, (_, i) => 0.5 + Math.sin(i / 2) * 0.1 + Math.random() * 0.05)
    },
    isFavorite: false
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    image: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    current_price: 0.6789,
    price_change_percentage_24h: -1.23,
    price_change_percentage_7d: 3.45,
    market_cap: 23_456_789_012,
    total_volume: 1_234_567_890,
    sparkline_in_7d: {
      price: Array.from({ length: 24 }, (_, i) => 0.6 + Math.sin(i / 2) * 0.1 + Math.random() * 0.05)
    },
    isFavorite: false
  }
];

export default function TopCoins() {
  const [timeRange, setTimeRange] = useState('24h');
  const [coins, setCoins] = useState(mockCoins);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [timeRange]);
  
  const toggleFavorite = (id) => {
    setCoins(coins.map(coin => 
      coin.id === id ? { ...coin, isFavorite: !coin.isFavorite } : coin
    ));
  };
  
  const formatCurrency = (value, isCrypto = false) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: isCrypto ? 4 : 2,
      maximumFractionDigits: isCrypto ? 4 : 2
    });
    return formatter.format(value);
  };
  
  const formatLargeNumber = (num) => {
    if (num >= 1_000_000_000) {
      return `${(num / 1_000_000_000).toFixed(2)}B`;
    }
    if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(2)}M`;
    }
    return num.toLocaleString();
  };
  
  const getPriceChangeClass = (value) => {
    if (value > 0) return 'text-green-500';
    if (value < 0) return 'text-red-500';
    return 'text-gray-500';
  };
  
  const getPriceChangeIcon = (value) => {
    if (value > 0) return <ArrowTrendingUpIcon className="w-4 h-4" />;
    if (value < 0) return <ArrowTrendingDownIcon className="w-4 h-4" />;
    return null;
  };
  
  const timeRangeLabel = () => {
    switch(timeRange) {
      case '1h': return '1H';
      case '24h': return '24H';
      case '7d': return '7D';
      case '30d': return '1M';
      case '1y': return '1Y';
      default: return '24H';
    }
  };
  
  return (
    <div className="p-6 card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-[var(--color-text-primary)] text-xl">Top Cryptocurrencies</h2>
        <div className="flex space-x-1 bg-[var(--color-card-hover)] p-1 rounded-lg">
          {['1h', '24h', '7d', '30d', '1y'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                timeRange === range 
                  ? 'bg-[var(--color-accent)] text-white' 
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-card-border)]'
              }`}
            >
              {timeRangeLabel()}
            </button>
          ))}
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center animate-pulse">
            <div className="bg-[var(--color-card-hover)] mb-4 rounded-full w-12 h-12"></div>
            <div className="bg-[var(--color-card-hover)] mb-2 rounded w-32 h-4"></div>
            <div className="bg-[var(--color-card-hover)] rounded w-24 h-3"></div>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-[var(--color-card-border)] border-b text-[var(--color-text-secondary)] text-sm text-left">
                <th className="pb-3 font-medium">#</th>
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Symbol</th>
                <th className="pb-3 font-medium">Price</th>
                <th className="pb-3 font-medium">24h Change</th>
                <th className="pb-3 font-medium">Market Cap</th>
                <th className="pb-3 font-medium">Volume (24h)</th>
                <th className="pb-3 font-medium">Favorite</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, index) => (
                <tr key={coin.id} className="border-[var(--color-card-border)] border-b text-[var(--color-text-primary)] text-sm">
                  <td className="py-3 font-medium">{index + 1}</td>
                  <td className="py-3 font-medium">
                    <div className="flex items-center space-x-2">
                      <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                      <span>{coin.name}</span>
                    </div>
                  </td>
                  <td className="py-3 font-medium">{coin.symbol}</td>
                  <td className="py-3 font-medium">{formatCurrency(coin.current_price, true)}</td>
                  <td className="py-3 font-medium">
                    <div className={`flex items-center ${getPriceChangeClass(coin.price_change_percentage_24h)}`}>
                      {getPriceChangeIcon(coin.price_change_percentage_24h)}
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  </td>
                  <td className="py-3 font-medium">{formatLargeNumber(coin.market_cap)}</td>
                  <td className="py-3 font-medium">{formatLargeNumber(coin.total_volume)}</td>
                  <td className="py-3 font-medium">
                    <button
                      onClick={() => toggleFavorite(coin.id)}
                      className={`p-2 rounded-full transition-colors ${coin.isFavorite ? 'bg-[var(--color-accent)] text-white' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-card-border)]'}`}
                    >
                      {coin.isFavorite ? <StarIconSolid className="w-5 h-5" /> : <StarIconOutline className="w-5 h-5" />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
