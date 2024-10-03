import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Dot,
} from "recharts";

const data = [
  {
    name: "1",
    red: 450000,
    Winterthur: 450000,
    Bahnhof: 450000,
    Hohlstrasse: 450000,
  },
  {
    name: "2",
    red: 57000,
    Winterthur: 1500000,
    Bahnhof: 1400000,
    Hohlstrasse: 900000,
  },
  {
    name: "2.4",
    red: 450000,
    Winterthur: 1500000,
    Bahnhof: 1400000,
    Hohlstrasse: 900000,
  },
  {
    name: "3.6",
    red: 490000,
    Winterthur: 200000,
    Bahnhof: 200000,
    Hohlstrasse: 1150000,
  },
  {
    name: "07.09",
    red: 890000,
    Winterthur: 890000,
    Bahnhof: 1750000,
    Hohlstrasse: 0,
  },
  {
    name: "15.09",
    red: 890000,
    Winterthur: 1450000,
    Bahnhof: 1750000,
    Hohlstrasse: 1150000,
  },
  {
    name: "2.10",
    red: 890000,
    Winterthur: 1500000,
    Bahnhof: 1500000,
    Hohlstrasse: 1200000,
  },
];

// const CustomDot = (props) => {
//   const { cx, cy, label } = props;
//   return (
//     <g>
//       <circle cx={cx} cy={cy} r={6} stroke="none" fill={props.stroke} />
//       {label && (
//         <text
//           x={cx}
//           y={cy - 10}
//           fill={props.stroke}
//           textAnchor="middle"
//           dy={-10}
//         >
//           {label}
//         </text>
//       )}
//     </g>
//   );
// };

const PracticeGraph = () => {
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
  const findDataPoint = (xValue) => {
    const point = data.find((d) => d.name === xValue);
    return point
      ? point
      : { Winterthur: 0, Bahnhof: 0, Hohlstrasse: 0, GreenLine: 0 };
  };
  return (
    <div className="bg-white py-14">
      <ResponsiveContainer
        width="100%"
        className=" max-w-[1000px] mx-auto"
        height={307}
      >
        <AreaChart
          width={700}
          data={data}
          margin={{
            top: 20,
            right: 40,
            left: 20,
            bottom: 0,
          }}
        >
          {/* Grid and axes */}
          <CartesianGrid vertical={false} stroke="#E9E9EC" strokearray="3 3" />
          {/* X Axis with padding */}
          <XAxis
            tickLine={false}
            tick={<CustomXAxisTick />}
            dataKey="name"
            domain={["auto", "dataMax"]}
            label={{
              value: "Time",
              position: "insideBottomRight",
              fontSize: "16px",
              fill: "black",
              fontWeight: "bold",
            }}
            padding={{ right: 93 }}
          />
          {/* Y Axis */}
          <YAxis
            label={{
              fontSize: "16px",
              fill: "black",
              fontWeight: "bold",
              value: "CHF",
              position: "top",
              offset: 10,
            }}
            domain={[0, 2000000]} // Adjust domain as per your data
            ticks={[0, 500000, 1000000, 1500000]} // Only 4 points plus 0
          />
          {/* Tooltip for data on hover */}
          <Tooltip />
          {/* Legend */}
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="top"
            iconType="rect" // Change the icon type, options: 'line', 'rect', 'circle', etc.
            wrapperStyle={{
              right: -20, // Adjust this value to move it further to the right outside the chart
              paddingLeft: 10, // Optional padding for spacing
              backgroundColor: "#f0f0f0", // Add a background color
              padding: "10px", // Optional padding around the legend
              borderRadius: "5px", // Add rounded corners to the background
            }}
          />

          {/* Reference Lines */}
          <ReferenceLine
            x="07.09"
            stroke="red"
            label={{
              value: "Today",
              fontWeight: "bolder",
              position: "right",
              fill: "black",
              fontSize: 16,
              angle: 90,
              offset: 20,
            }}
          />
          <ReferenceLine
            x="2"
            stroke="green"
            strokeDasharray=" 9 9"
            label={{
              value: "2 round",
              fontWeight: "bolder",
              position: "right",
              fill: "black",
              fontSize: 16,
              angle: 90,
              offset: 20,
            }}
          />
          <ReferenceLine
            x="15.09"
            stroke="#B741E1"
            label={{
              value: "End 1 Round",
              fontWeight: "bolder",
              position: "right",
              fill: "#635454",
              fontSize: 16,
              angle: 90,
              offset: 20,
            }}
          />
          <ReferenceLine
            x="2.10"
            stroke="orange"
            label={{
              value: "Start 1 Round",
              fontWeight: "bolder",
              position: "right",
              fill: "#635454",
              fontSize: 16,
              angle: 90,
              offset: 20,
            }}
          />
          {/* Circles at the intersection points */}
          {["2"].map((refLine) => {
            const point = findDataPoint(refLine);
            const xIndex = data.findIndex((d) => d.name === refLine);
            return (
              <g key={refLine}>
                <circle
                  cx={xIndex * (1200 / data.length) + 600}
                  cy={400 - point.Bahnhof * 500}
                  r={5}
                  fill="#FFC658"
                />
                <circle
                  cx={xIndex * (1300 / data.length) + 688}
                  cy={400 - point.red * 2580}
                  r={5}
                  fill="#FF6347"
                />
                <circle
                  cx={xIndex * (1300 / data.length) + 886}
                  cy={400 - point.Hohlstrasse * 991}
                  r={5}
                  fill="#8A2BE2"
                />
                <circle
                  cx={xIndex * (1300 / data.length) + 92}
                  cy={400 - point.Winterthur * 508}
                  r={5}
                  fill="#32CD32"
                />
              </g>
            );
          })}
          {/* Dashed Line (for Winterthur) */}
          <Area
            type="basis"
            strokeDasharray="13 13"
            dataKey="Winterthur"
            stroke="#14AD5B"
            strokeWidth={2}
            fill="none"
            // dot={<CustomDot stroke="#82ca9d" label="2nd Round" />}
          />
          {/* Solid Line (for Bahnhof) */}
          <Area
            type="basis"
            dataKey="Bahnhof"
            strokeWidth={3}
            stroke="#F2C01B"
            fill="#FCF3D6"
            // dot={<CustomDot stroke="#ffc658" />}
          />
          <Area
            type="basis"
            dataKey="red"
            strokeWidth={2}
            stroke="red"
            fill="none"
            // dot={<CustomDot stroke="#ffc658" />}
          />
          {/* Solid Line (for Hohlstrasse) */}
          <Area
            type="basis"
            dataKey="Hohlstrasse"
            strokeWidth={2}
            stroke="#B741E1"
            fill="none"
            // dot={<CustomDot stroke="#8884d8" />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PracticeGraph;
