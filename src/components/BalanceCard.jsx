import React from "react";
import { Sparklines, SparklinesCurve, SparklinesSpots } from "react-sparklines";

export default function BalanceCard() {
  // Example data; replace with actual balance trend or historical data as needed
  const data = [58000, 59000, 60000, 60500, 61000, 60234];

  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <h3 className="mb-1 text-gray-500 text-sm">Balance</h3>
      <p className="mb-3 font-semibold text-gray-800 text-2xl">$60,234</p>

      {/* Mini sparkline chart */}
      <Sparklines data={data} width={100} height={30} margin={5}>
        <SparklinesCurve color="#6366F1" style={{ strokeWidth: 1, strokeLinecap: "round" }} />
        <SparklinesSpots size={4} style={{ stroke: "#6366F1", strokeWidth: 1, fill: "white" }} />
        <SparklinesCurve color="rgba(99,102,241,0.3)" style={{ strokeWidth: 1, strokeOpacity: 0.3 }} />
      </Sparklines>
    </div>
  );
}
