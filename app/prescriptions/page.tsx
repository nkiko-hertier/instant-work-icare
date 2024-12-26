"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Mock data for prescriptions
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

// Modal Component for dropping a prescription
const DropPrescriptionModal = ({ isOpen, onClose, onConfirm }) => {
  const [approval, setApproval] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed bg-slate-50  text-black h-screen inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-lg font-semibold mb-4">Drop Prescription</h2>
        <p className="mb-4 ">Ask for doctor approval:</p>
        <div className="flex items-center mb-4">
          <label className="mr-2">Status:</label>
          <select
            value={approval}
            onChange={(e) => setApproval(e.target.value)}
            className="border rounded-md p-2"
          >
            <option value="">Select approval status</option>
            <option value="approved">Approved</option>
            <option value="not approved">Not Approved</option>
          </select>
        </div>
        <div className="flex justify-end">
          <Button onClick={() => onConfirm(approval)} className="mr-2">Confirm</Button>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default function Prescriptions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPrescription, setCurrentPrescription] = useState(null);

  const handleDropPrescription = (prescription) => {
    setCurrentPrescription(prescription);
    setIsModalOpen(true);
  };

  const handleConfirmDrop = (approvalStatus) => {
    // Handle the drop prescription logic here
    console.log(`Dropped prescription: ${currentPrescription.name}, Status: ${approvalStatus}`);
    setIsModalOpen(false);
  };

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
            <Button 
              variant="destructive" 
              onClick={() => handleDropPrescription(prescription)} 
              className="mt-4"
            >
              Drop Prescription
            </Button>
          </Card>
        ))}
      </div>

      {/* Modal for dropping a prescription */}
      <DropPrescriptionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleConfirmDrop} 
      />
    </div>
  );
}