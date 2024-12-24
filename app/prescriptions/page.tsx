"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockPrescriptions = [
  {
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    prescribedBy: "Dr. Smith",
    startDate: "2024-01-15",
    endDate: "2024-07-15",
    status: "active",
  },
  {
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    prescribedBy: "Dr. Johnson",
    startDate: "2024-02-01",
    endDate: "2024-08-01",
    status: "active",
  },
];

export default function Prescriptions() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Prescriptions</h1>
      
      <div className="space-y-4">
        {mockPrescriptions.map((prescription, i) => (
          <Card key={i} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{prescription.name}</h2>
                <p className="text-muted-foreground">{prescription.dosage} - {prescription.frequency}</p>
              </div>
              <Badge variant={prescription.status === 'active' ? 'default' : 'secondary'}>
                {prescription.status}
              </Badge>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Prescribed By</p>
                <p className="font-medium">{prescription.prescribedBy}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Start Date</p>
                <p className="font-medium">{prescription.startDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">End Date</p>
                <p className="font-medium">{prescription.endDate}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}