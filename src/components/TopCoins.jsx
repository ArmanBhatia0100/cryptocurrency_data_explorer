import React from "react";
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesCurve } from "react-sparklines";

const coins = [
  {
    id: "btc",
    name: "Bitcoin",
    ticker: "BTC",
    img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=024",
    data: [40, 45, 50, 48, 52, 55, 53],
  },
  {
    id: "eth",
    name: "Ethereum",
    ticker: "ETH",
    img: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024",
    data: [30, 35, 33, 37, 40, 42, 41],
  },
  {
    id: "bnb",
    name: "Binance Coin",
    ticker: "BNB",
    img: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=024",
    data: [20, 22, 21, 23, 25, 24, 26],
  },
];

export default function TopCoins() {
  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-600 text-sm">Top Coins</h3>
      <div className="gap-4 grid grid-cols-3">
        {coins.map(({ id, name, ticker, img, data }) => (
          <div
            key={id}
            className="flex flex-col items-center bg-white shadow-md p-4 rounded-xl"
          >
            {/* Coin image and ticker + name */}
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={img}
                alt={name}
                className="rounded-full w-12 h-12 object-cover"
              />
              <div>
                <div className="font-semibold text-base">{name}</div>
                <div className="font-mono text-indigo-600 text-sm">{ticker}</div>
              </div>
            </div>

            {/* Sparkline chart */}
            <Sparklines data={data} width={100} height={40} margin={5}>
              <SparklinesCurve color="#6366F1" style={{ strokeWidth: 1, strokeLinecap: "round" }} />
              <SparklinesSpots
                size={2}
                style={{ stroke: "#6366F1", strokeWidth: 1, fill: "white" }}
              />
              <SparklinesLine color="rgba(99, 102, 241, 0.3)" style={{ strokeWidth: 2, strokeLinecap: "round", strokeOpacity: 0.3 }} />
            </Sparklines>
          </div>
        ))}
      </div>
    </div>
  );
}
