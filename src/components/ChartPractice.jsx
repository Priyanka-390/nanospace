import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
const data = [
  {
    name: "07.09",
    Winterthur: 0.2,
    Bahnhof: 0.2,
    Hohlstrasse: 0.2,
    GreenLine: 0.2,
  },
  {
    name: "08.09",
    Winterthur: 0.64,
    Bahnhof: 0.12,
    Hohlstrasse: 0.4,
    GreenLine: 0.67,
  },
  {
    name: "10.09",
    Winterthur: 0.27,
    Bahnhof: 0.3,
    Hohlstrasse: 0.2,
    GreenLine: 0.25,
  },
  {
    name: "15.09",
    Winterthur: 0.7,
    Bahnhof: 0.1,
    Hohlstrasse: 0.55,
    GreenLine: 0.12,
  },
  {
    name: "20.09",
    Winterthur: 0.5,
    Bahnhof: 0.6,
    Hohlstrasse: 0.74,
    GreenLine: 0.3,
  },
  {
    name: "2.10",
    Winterthur: 0.8,
    Bahnhof: 0.7,
    Hohlstrasse: 0.8,
    GreenLine: 0.6,
  },
  {
    name: "05.10",
    Winterthur: 0.75,
    Bahnhof: 0.5,
    Hohlstrasse: 0.6,
    GreenLine: 0.65,
  },
];
const CustomXAxisTick = ({ x, y, payload }) => {
  const opacity = payload.index < 4 ? 0 : 1;
  return (
    <text
      x={x}
      y={y - -20}
      textAnchor="middle"
      fill="#666666"
      opacity={opacity}
    >
      {payload.value}
    </text>
  );
};
const ChartPractice = () => {
  // Function to find the intersection point for a given x value
  const findDataPoint = (xValue) => {
    const point = data.find((d) => d.name === xValue);
    return point
      ? point
      : { Winterthur: 0, Bahnhof: 0, Hohlstrasse: 0, GreenLine: 0 };
  };
  return (
    <div
      className="max-w-[1300px] bg-white mx-auto"
      style={{ width: "100%", height: 500 }}
    >
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="winterthurGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFC658" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#FFC658" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="bahnhofGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF6347" stopOpacity={0} />
              <stop offset="100%" stopColor="#FF6347" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="hohlstrasseGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#8A2BE2" stopOpacity={0} />
              <stop offset="100%" stopColor="#8A2BE2" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="greenLineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#32CD32" stopOpacity={0} />
              <stop offset="100%" stopColor="#32CD32" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#E9E9EC" vertical={false} />
          <XAxis tickLine={false} dataKey="name" tick={<CustomXAxisTick />} />
          <YAxis
            domain={[0, 1]}
            tickFormatter={(tick) => tick.toFixed(2)}
            ticks={[0, 0.2, 0.4, 0.6]} // Display only three points: 0, 0.5, and 1
          />
          <Tooltip />
          <Legend />
          {/* Vertical Reference Lines */}
          <ReferenceLine
            x="08.09"
            stroke="green"
            strokeDasharray="10 10"
            strokeWidth={2}
            label={{
              value: "2 Round",
              position: "right",
              angle: 90,
              offset: 20,
              fontSize: 14,
              fill: "#020202",
              fontWeight: "600",
            }}
          />
          <ReferenceLine
            x="20.09"
            stroke="red"
            strokeWidth={2}
            label={{
              value: "Today",
              position: "right",
              angle: 90,
              offset: 20,
              fontSize: 16,
              fill: "#020202",
              fontWeight: "700",
            }}
          />
          <ReferenceLine
            x="05.10"
            stroke="orange"
            strokeWidth={2}
            label={{
              value: "Start 1 Round",
              position: "right",
              angle: 90,
              offset: 20,
              fontSize: 14,
              fill: "#020202",
              fontWeight: "600",
            }}
          />
          <ReferenceLine
            x="2.10"
            stroke="purple"
            strokeWidth={2}
            label={{
              value: "End 1 Round",
              position: "right",
              angle: 90,
              offset: 20,
              fontSize: 14,
              fontWeight: "600",
              fill: "#020202",
            }}
          />
          {/* Circles at the intersection points */}
          {["08.09"].map((refLine) => {
            const point = findDataPoint(refLine);
            const xIndex = data.findIndex((d) => d.name === refLine);
            return (
              <g key={refLine}>
                <circle
                  cx={xIndex * (1300 / data.length) + 1084}
                  cy={500 - point.Winterthur * 585}
                  r={5}
                  fill="#FFC658"
                />
                <circle
                  cx={xIndex * (1300 / data.length) + 688}
                  cy={500 - point.Bahnhof * 2580}
                  r={5}
                  fill="#FF6347"
                />
                <circle
                  cx={xIndex * (1300 / data.length) + 886}
                  cy={500 - point.Hohlstrasse * 991}
                  r={5}
                  fill="#8A2BE2"
                />
                <circle
                  cx={xIndex * (1300 / data.length) + 92}
                  cy={500 - point.GreenLine * 508}
                  r={5}
                  fill="#32CD32"
                />
              </g>
            );
          })}
          {/* Area Components */}
          <Area
            type="monotone"
            dataKey="Winterthur"
            stroke="#FFC658"
            fill="url(#winterthurGradient)"
            fillOpacity={1}
            strokeWidth={3}
          />
          <Area
            type="monotone"
            dataKey="Bahnhof"
            stroke="#FF6347"
            fill="url(#bahnhofGradient)"
            fillOpacity={1}
            strokeWidth={3}
          />
          <Area
            type="monotone"
            dataKey="Hohlstrasse"
            stroke="#8A2BE2"
            fill="url(#hohlstrasseGradient)"
            fillOpacity={1}
            strokeWidth={3}
          />
          <Area
            type="monotone"
            dataKey="GreenLine"
            stroke="#32CD32"
            fill="url(#greenLineGradient)"
            fillOpacity={1}
            strokeDasharray="15 15"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default ChartPractice;
