import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import BalanceCard from "../components/BalanceCard";
import CurrenciesList from "../components/CurrenciesList";
import TopCoins from "../components/TopCoins";
import FavCoinChart from "../components/FavCoinChart";
import ExchangeWidget from "../components/ExchangeWidget";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="gap-4 grid grid-cols-1 lg:grid-cols-2 p-6">
          <div className="space-y-4 md:col-span-2 lg:col-span-3">
            <div className="gap-4 grid grid-cols-2">
              <BalanceCard />
              <CurrenciesList />
            </div>
            <TopCoins />
            <FavCoinChart />
          </div>
         
        </main>
      </div>
    </div>
  );
}
