"use client";

import { Line } from 'recharts';

interface LineGraphProps {
  dataKey?: string;
  stroke?: string;
}

export function LineGraph({ 
  dataKey = "value",
  stroke = "#8884d8"
}: LineGraphProps) {
  return (
    <Line
      type="monotone"
      dataKey={dataKey}
      stroke={stroke}
      strokeWidth={2}
      dot={{ strokeWidth: 2 }}
    />
  );
}