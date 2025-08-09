import React, { useState, useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from "react-sparklines";
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, ArrowsRightLeftIcon, ClockIcon, ChartBarIcon } from "@heroicons/react/24/outline";

// Mock data generator for the chart
const generateMockData = (points = 24, volatility = 0.5) => {
  let lastValue = 100 + Math.random() * 100;
  const data = [lastValue];
  
  for (let i = 1; i < points; i++) {
    const changePercent = (Math.random() - 0.5) * volatility * 2;
    lastValue = lastValue * (1 + changePercent / 100);
    data.push(Number(lastValue.toFixed(2)));
  }
  
  return data;
};

const timeRanges = [
  { label: '24H', value: '24h' },
  { label: '1W', value: '1w' },
  { label: '1M', value: '1m' },
  { label: '1Y', value: '1y' },
  { label: 'ALL', value: 'all' },
];

export default function FavCoinChart({ coin = 'Bitcoin', symbol = 'BTC' }) {
  const [timeRange, setTimeRange] = useState('1w');
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Generate or fetch chart data when time range changes
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    const timer = setTimeout(() => {
      // In a real app, you would fetch this data from an API
      // For now, we'll generate mock data
      const points = timeRange === '24h' ? 24 : 
                    timeRange === '1w' ? 7 : 
                    timeRange === '1m' ? 30 : 
                    timeRange === '1y' ? 12 : 60;
      
      setChartData(generateMockData(points));
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [timeRange]);
  
  // Calculate price change and other metrics
  const currentPrice = chartData.length > 0 ? chartData[chartData.length - 1] : 0;
  const previousPrice = chartData.length > 1 ? chartData[0] : currentPrice;
  const priceChange = currentPrice - previousPrice;
  const priceChangePercent = previousPrice !== 0 ? ((priceChange / previousPrice) * 100).toFixed(2) : 0;
  const isPositive = priceChange >= 0;
  
  // Format price with proper currency formatting
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className="p-6 card">
      <div className="flex flex-col space-y-4">
        {/* Header with coin info and price */}
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center bg-[var(--color-accent)] rounded-full w-8 h-8">
                <span className="font-medium text-white text-sm">{symbol[0]}</span>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text-primary)] text-lg">{coin}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">{symbol}/USD</p>
              </div>
            </div>
            
            <div className="mt-2">
              <p className="font-bold text-[var(--color-text-primary)] text-2xl">
                {formatPrice(currentPrice)}
              </p>
              <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? (
                  <ArrowTrendingUpIcon className="mr-1 w-4 h-4" />
                ) : (
                  <ArrowTrendingDownIcon className="mr-1 w-4 h-4" />
                )}
                <span className="font-medium text-sm">
                  {isPositive ? '+' : ''}{priceChangePercent}% ({isPositive ? '+' : ''}{formatPrice(priceChange)})
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-1 bg-[var(--color-card-hover)] p-1 rounded-lg">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`px-2 py-1 text-xs rounded-md transition-colors ${
                  timeRange === range.value 
                    ? 'bg-[var(--color-accent)] text-white' 
                    : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-card-border)]'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Chart */}
        <div className="-mx-2 -mb-2 h-40 object-contain overflow-hidden">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="flex flex-col items-center animate-pulse">
                <ChartBarIcon className="mb-2 w-8 h-8 text-[var(--color-text-secondary)]" />
                <p className="text-[var(--color-text-secondary)] text-sm">Loading chart...</p>
              </div>
            </div>
          ) : (
            <Sparklines 
              data={chartData} 
              width={400} 
              height={55}
              margin={5}
            
            >
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={isPositive ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'} />
                  <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                </linearGradient>
              </defs>
              <SparklinesLine 
                style={{
                  stroke: isPositive ? 'rgba(16, 185, 129, 1)' : 'rgba(239, 68, 68, 1)',
                  fill: 'url(#chartGradient)',
                  strokeWidth: 2,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round'
                }} 
              />
              <SparklinesSpots 
                size={4} 
                style={{ 
                  fill: isPositive ? 'rgba(16, 185, 129, 1)' : 'rgba(239, 68, 68, 1)',
                  stroke: 'white',
                  strokeWidth: 2
                }} 
              />
              {/* <SparklinesReferenceLine type="avg" /> */}
            </Sparklines>
          )}
        </div>
        
        {/* Additional info */}
        <div className="gap-4 grid grid-cols-3 mt-2 text-center">
          <div className="bg-[var(--color-card-hover)] p-2 rounded-lg">
            <p className="text-[var(--color-text-secondary)] text-xs">24h High</p>
            <p className="font-medium text-[var(--color-text-primary)]">
              {formatPrice(currentPrice * 1.03)}
            </p>
          </div>
          <div className="bg-[var(--color-card-hover)] p-2 rounded-lg">
            <p className="text-[var(--color-text-secondary)] text-xs">24h Low</p>
            <p className="font-medium text-[var(--color-text-primary)]">
              {formatPrice(currentPrice * 0.97)}
            </p>
          </div>
          <div className="bg-[var(--color-card-hover)] p-2 rounded-lg">
            <p className="text-[var(--color-text-secondary)] text-xs">24h Volume</p>
            <p className="font-medium text-[var(--color-text-primary)]">
              ${(currentPrice * 10000).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
