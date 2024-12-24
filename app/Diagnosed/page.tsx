"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";

export default function Appointments() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const appointments = [
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
  ];

  const selectedDateAppointments = appointments.filter(
    (apt) => apt.date.toDateString() === date?.toDateString()
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Appointments</h1>
          <p className="text-muted-foreground">
            Manage your upcoming appointments
          </p>
        </div>
        <Button>Schedule New Appointment</Button>
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
            {date ? (
              <>Appointments for {date.toLocaleDateString()}</>
            ) : (
              "Select a date"
            )}
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
                    <p className="text-sm text-muted-foreground">
                      {apt.department}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {apt.location}
                    </p>
                  </div>
                </Card>
              ))
            ) : (
              <p className="text-muted-foreground">
                No appointments scheduled for this date
              </p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}