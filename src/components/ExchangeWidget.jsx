import React, { useState, useEffect } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const currencies = [
  { id: 'btc', name: 'Bitcoin', symbol: '₿', rate: 0.000023 },
  { id: 'eth', name: 'Ethereum', symbol: 'Ξ', rate: 0.00032 },
  { id: 'usd', name: 'US Dollar', symbol: '$', rate: 1 },
  { id: 'eur', name: 'Euro', symbol: '€', rate: 0.91 },
  { id: 'gbp', name: 'British Pound', symbol: '£', rate: 0.78 },
];

export default function ExchangeWidget() {
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toCurrency, setToCurrency] = useState(currencies[2]);
  const [fromAmount, setFromAmount] = useState('1');
  const [toAmount, setToAmount] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);

  // Calculate exchange rate and update toAmount when fromAmount or currencies change
  useEffect(() => {
    if (fromAmount === '') {
      setToAmount('');
      return;
    }
    
    const amount = parseFloat(fromAmount);
    if (isNaN(amount)) return;
    
    const exchangeRate = (fromCurrency.rate / toCurrency.rate);
    const result = (amount * exchangeRate).toFixed(6);
    setToAmount(result);
  }, [fromAmount, fromCurrency, toCurrency]);

  const handleFromAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setFromAmount(value);
    }
  };

  const handleCurrencySwap = () => {
    setIsSwapping(true);
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    
    // Reset the swap animation after it completes
    setTimeout(() => setIsSwapping(false), 300);
  };

  const formatCurrency = (amount, currency) => {
    if (currency.id === 'btc' || currency.id === 'eth') {
      return `${currency.symbol}${parseFloat(amount).toFixed(6)}`;
    }
    return `${currency.symbol}${parseFloat(amount).toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })}`;
  };

  const exchangeRate = fromCurrency && toCurrency 
    ? `1 ${fromCurrency.id.toUpperCase()} = ${(fromCurrency.rate / toCurrency.rate).toFixed(6)} ${toCurrency.id.toUpperCase()}`
    : '';

  return (
    <div className="p-6 card">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-[var(--color-text-primary)] text-lg">Exchange</h3>
        <div className="text-[var(--color-text-secondary)] text-sm">
          {exchangeRate}
        </div>
      </div>

      {/* From Currency */}
      <div className="mb-4">
        <label className="block mb-1 font-medium text-[var(--color-text-secondary)] text-sm">
          From
        </label>
        <div className="relative border border-[var(--color-card-border)] rounded-lg overflow-hidden">
          <select
            value={fromCurrency.id}
            onChange={(e) => setFromCurrency(currencies.find(c => c.id === e.target.value) || fromCurrency)}
            className="bg-[var(--color-card-background)] py-3 pr-10 pl-4 focus:border-transparent rounded-lg focus:outline-none focus:ring-[var(--color-accent)] focus:ring-2 w-full text-[var(--color-text-primary)] appearance-none"
          >
            {currencies.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.name} ({currency.id.toUpperCase()})
              </option>
            ))}
          </select>
          <div className="right-0 absolute inset-y-0 flex items-center px-2 text-[var(--color-text-secondary)] pointer-events-none">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="mt-2">
          <input
            type="text"
            value={fromAmount}
            onChange={handleFromAmountChange}
            placeholder="0.0"
            className="bg-transparent p-3 focus:outline-none w-full font-medium text-[var(--color-text-primary)] text-2xl"
          />
        </div>
      </div>

      {/* Swap Button */}
      <div className="z-10 relative flex justify-center -my-2">
        <button
          onClick={handleCurrencySwap}
          className="bg-[var(--color-card-hover)] p-2 hover:bg-[var(--color-card-border)] border-[var(--color-card-background)] border-2 rounded-full transition-colors"
          aria-label="Swap currencies"
        >
          <ArrowPathIcon className={`w-5 h-5 text-[var(--color-text-secondary)] ${isSwapping ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* To Currency */}
      <div className="mt-4">
        <label className="block mb-1 font-medium text-[var(--color-text-secondary)] text-sm">
          To
        </label>
        <div className="relative border border-[var(--color-card-border)] rounded-lg overflow-hidden">
          <select
            value={toCurrency.id}
            onChange={(e) => setToCurrency(currencies.find(c => c.id === e.target.value) || toCurrency)}
            className="bg-[var(--color-card-background)] py-3 pr-10 pl-4 focus:border-transparent rounded-lg focus:outline-none focus:ring-[var(--color-accent)] focus:ring-2 w-full text-[var(--color-text-primary)] appearance-none"
          >
            {currencies.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.name} ({currency.id.toUpperCase()})
              </option>
            ))}
          </select>
          <div className="right-0 absolute inset-y-0 flex items-center px-2 text-[var(--color-text-secondary)] pointer-events-none">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="mt-2">
          <div className="p-3 w-full font-medium text-[var(--color-text-primary)] text-2xl">
            {toAmount ? formatCurrency(toAmount, toCurrency) : '0.00'}
          </div>
        </div>
      </div>

      <button 
        className="mt-6 py-3 w-full btn-primary"
        disabled={!fromAmount || parseFloat(fromAmount) <= 0}
      >
        Exchange
      </button>
    </div>
  );
}
