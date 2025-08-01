import React from "react";
import { Sparklines, SparklinesCurve, SparklinesSpots } from "react-sparklines";

export default function FavCoinChart() {
  // Example data; replace with real price history or state later
  const data = [50, 55, 53, 58, 60, 62, 65];

  return (
    <div className="bg-white shadow mt-4 p-2 rounded-xl">
      <h3 className="mb-2 font-semibold text-gray-500 text-sm">Fav Coin</h3>
      <div className="flex justify-center items-center">
        <Sparklines data={data} margin={5}>
          <SparklinesCurve color="blue" style={{ strokeWidth: 1, strokeLinecap: "round" }} />
          <SparklinesSpots size={4} style={{ stroke: "#6366F1", strokeWidth: 1, fill: "white" }} />
          <SparklinesCurve color="rgba(99,102,241,0.3)" style={{ strokeWidth: 1, strokeOpacity: 0.3 }} />
        </Sparklines>
      </div>
    </div>
  );
}
