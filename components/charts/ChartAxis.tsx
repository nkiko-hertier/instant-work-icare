"use client";

import { XAxis as RechartsXAxis, YAxis as RechartsYAxis } from 'recharts';

interface AxisProps {
  dataKey?: string;
  label?: string;
}

export function XAxis({ dataKey = "date" }: AxisProps) {
  return (
    <RechartsXAxis
      dataKey={dataKey}
      tick={{ fontSize: 12 }}
      padding={{ left: 10, right: 10 }}
    />
  );
}

export function YAxis({ label }: AxisProps) {
  return (
    <RechartsYAxis
      tick={{ fontSize: 12 }}
      label={label ? {
        value: label,
        angle: -90,
        position: 'insideLeft',
        style: { textAnchor: 'middle' }
      } : undefined}
    />
  );
}