"use client";

import { Card } from "@/components/ui/card";
import { VitalsChart } from "@/components/charts/VitalsChart";

const mockData = [
  { date: '2024-03-01', bp: '120/80', weight: 150, heartRate: 72 },
  { date: '2024-03-08', bp: '118/79', weight: 149, heartRate: 70 },
  { date: '2024-03-15', bp: '122/82', weight: 151, heartRate: 74 },
  { date: '2024-03-22', bp: '119/78', weight: 148, heartRate: 71 },
];

export default function Vitals() {
  const heartRateData = mockData.map(d => ({
    date: d.date,
    value: d.heartRate
  }));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Vital Signs</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Heart Rate History</h2>
          <div className="h-[300px]">
            <VitalsChart 
              data={heartRateData}
              yAxisLabel="BPM"
              stroke="#8884d8"
            />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Latest Readings</h2>
          <div className="space-y-4">
            {mockData.slice(0, 1).map((reading, i) => (
              <div key={i} className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Blood Pressure</p>
                  <p className="text-xl font-semibold">{reading.bp}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Weight (lbs)</p>
                  <p className="text-xl font-semibold">{reading.weight}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Heart Rate</p>
                  <p className="text-xl font-semibold">{reading.heartRate}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}