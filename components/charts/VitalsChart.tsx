"use client";

import { LineChart, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Line, XAxis, YAxis } from 'recharts';

interface VitalsChartProps {
  data: Array<{
    date: string;
    value: number;
  }>;
  yAxisLabel?: string;
  stroke?: string;
}

export function VitalsChart({ 
  data, 
  yAxisLabel = "Value",
  stroke = "#8884d8" 
}: VitalsChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="date"
          tick={{ fontSize: 12 }}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis
          tick={{ fontSize: 12 }}
          label={{ 
            value: yAxisLabel,
            angle: -90,
            position: 'insideLeft',
            style: { textAnchor: 'middle' }
          }}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke={stroke}
          strokeWidth={2}
          dot={{ strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}