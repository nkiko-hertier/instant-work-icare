"use client"; // Make sure to include this if you're using Next.js with React 18
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";

// Modal Component
const Modal = ({ isOpen, onClose, onSchedule }) => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("10:00 AM"); // Default time
  const [paymentDetails, setPaymentDetails] = useState("");

  const handleSchedule = () => {
    onSchedule({ selectedDoctor, selectedDate, selectedTime, paymentDetails });
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed bg-slate-50 text-black h-screen inset-0 z-50 flex items-center justify-center">
      <div className="bg-black rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-lg font-semibold mb-4">Schedule New Checkup</h2>
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Select Doctor</label>
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="w-full border rounded-md p-2"
            >
              <option value="">Select a doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              {/* Add more doctors as needed */}
            </select>
          </div>
          <div>
            <label className="block font-medium">Select Date</label>
            <input
              type="date"
              value={selectedDate.toISOString().split("T")[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Select Time</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full border rounded-md p-2"
            >
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              {/* Add more time options as needed */}
            </select>
          </div>
          <div>
            <label className="block font-medium">Payment Details</label>
            <input
              type="text"
              value={paymentDetails}
              onChange={(e) => setPaymentDetails(e.target.value)}
              placeholder="Enter payment details"
              className="w-full border rounded-md p-2"
            />
          </div>
          <Button onClick={handleSchedule} className="w-full">Schedule</Button>
          <Button variant="outline" onClick={onClose} className="mt-2 w-full">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default function Appointments() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState([
    {
      date: new Date(2024, 2, 28),
      time: "10:00 AM",
      doctor: "Dr. Smith",
      department: "Cardiology",
      type: "Check-up",
      location: "Main Building, Room 305",
    },
    {
      date: new Date(2024, 3, 15),
      time: "2:30 PM",
      doctor: "Dr. Johnson",
      department: "General Medicine",
      type: "Follow-up",
      location: "West Wing, Room 210",
    },
  ]);

  const selectedDateAppointments = appointments.filter(
    (apt) => apt.date.toDateString() === date?.toDateString()
  );

  const handleSchedule = (newAppointment) => {
    const appointment = {
      date: newAppointment.selectedDate,
      time: newAppointment.selectedTime,
      doctor: newAppointment.selectedDoctor,
      department: "General Medicine", // You can modify this as needed
      type: "Check-up", // Modify as needed
      location: "TBD", // Modify as needed
    };
    setAppointments((prev) => [...prev, appointment]);
  };

  // Sample diseases
  const diseases = [
    {
      name: "Hypertension",
      hospital: "General Hospital",
      doctor: "Dr. Smith",
      prescriptions: [
        { name: "Lisinopril", status: "Active" },
        { name: "Atenolol", status: "Not Active" },
        { name: "Hydrochlorothiazide", status: "Active" },
      ],
    },
    {
      name: "Diabetes",
      hospital: "General Hospital",
      doctor: "Dr. Johnson",
      prescriptions: [
        { name: "Metformin", status: "Active" },
        { name: "Insulin", status: "Active" },
        { name: "Glyburide", status: "Not Active" },
      ],
    },
    {
      name: "Asthma",
      hospital: "General Hospital",
      doctor: "Dr. Lee",
      prescriptions: [
        { name: "Albuterol", status: "Active" },
        { name: "Fluticasone", status: "Active" },
        { name: "Montelukast", status: "Not Active" },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen p-4 md:p-8">
      {/* Diagnosis Details Section */}
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl text-black font-semibold">Diagnosis Details</h2>
        {diseases.map((disease, index) => (
          <div key={index} className="mt-4 border-b pb-4">
            <h3 className="font-medium text-black">{disease.name}</h3>
            <p className="mt-2 text-black"><strong>Hospital:</strong> {disease.hospital}</p>
            <p className="mt-2 text-black"><strong>Doctor in Charge:</strong> {disease.doctor}</p>
            <div className="mt-2">
              <h4 className="font-medium text-black">Prescriptions:</h4>
              <ul className="list-disc list-inside text-black">
                {disease.prescriptions.map((med, medIndex) => (
                  <li key={medIndex}>{med.name} - {med.status}</li>
                ))}
              </ul>
            </div>
            <Button onClick={() => alert(`Consulting doctor for ${disease.name}...`)} className="mt-4 bg-black text-white">Consult Doctor</Button>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Diagnosis Review</h1>
          <p className="text-muted-foreground">Manage your upcoming checkups</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="mt-4 md:mt-0 bg-black text-white">Schedule New Checkup</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <CalendarIcon className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Calendar</h2>
          </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">
            {date ? <>Checkups for {date.toLocaleDateString()}</> : "Select a date"}
          </h2>
          <div className="space-y-4">
            {selectedDateAppointments.length > 0 ? (
              selectedDateAppointments.map((apt, i) => (
                <Card key={i} className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="font-medium">{apt.time}</p>
                      <p className="text-muted-foreground">{apt.type}</p>
                    </div>
                    <p className="font-medium">{apt.doctor}</p>
                    <p className="text-sm text-muted-foreground">{apt.department}</p>
                    <p className="text-sm text-muted-foreground">{apt.location}</p>
                  </div>
                </Card>
              ))
            ) : (
              <p className="text-muted-foreground">No checkups scheduled for this date</p>
            )}
          </div>
        </Card>
      </div>
      {/* Modal for scheduling a new checkup */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSchedule={handleSchedule} />
    </div>
  );
}