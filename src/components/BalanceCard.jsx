import React from "react";
import { Sparklines, SparklinesCurve, SparklinesSpots } from "react-sparklines";

export default function BalanceCard() {
  // Example data; replace with actual balance trend or historical data as needed
  const data = [58000, 59000, 60000, 60500, 61000, 60234];
  const percentageChange = 2.7; // Example percentage change
  const isPositive = percentageChange >= 0;

  return (
    <div className="card p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-[var(--color-text-secondary)] text-sm font-medium mb-1">Total Balance</h3>
          <p className="text-2xl font-bold text-[var(--color-text-primary)]">$60,234.00</p>
          <div className={`flex items-center mt-1 ${isPositive ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}>
            <svg 
              className={`w-4 h-4 mr-1 ${isPositive ? 'rotate-0' : 'rotate-180'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            <span className="text-sm font-medium">{percentageChange}% this month</span>
          </div>
        </div>
        <div className="p-2 rounded-lg bg-[var(--color-accent-light)]">
          <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-[var(--color-card-border)]">
        <div className="text-center">
          <p className="text-sm text-[var(--color-text-secondary)]">Income</p>
          <p className="font-medium text-[var(--color-text-primary)]">$5,234.00</p>
        </div>
        <div className="h-8 w-px bg-[var(--color-card-border)]"></div>
        <div className="text-center">
          <p className="text-sm text-[var(--color-text-secondary)]">Expense</p>
          <p className="font-medium text-[var(--color-text-primary)]">$1,200.00</p>
        </div>
        <div className="h-8 w-px bg-[var(--color-card-border)]"></div>
        <div className="text-center">
          <p className="text-sm text-[var(--color-text-secondary)]">Profit</p>
          <p className="font-medium text-[var(--color-success)]">+$4,034.00</p>
        </div>
      </div>

      {/* Mini sparkline chart */}
      <div className="mt-4 h-16 -mx-6 -mb-6 overflow-hidden rounded-b-xl">
        <Sparklines data={data} width={400} height={80} margin={0}>
          <SparklinesCurve 
            color="var(--color-accent)" 
            style={{ 
              strokeWidth: 2, 
              strokeLinecap: "round",
              fill: "url(#sparkline-gradient)" 
            }} 
          />
          <defs>
            <linearGradient id="sparkline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </Sparklines>
      </div>
    </div>
  );
}
