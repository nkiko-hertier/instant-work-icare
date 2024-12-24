"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Calendar, ClipboardList, FileText, Home } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Sarah</h1>
          <p className="text-muted-foreground">Manage your health information</p>
        </div>
        <Button asChild>
          <Link href="/appointments">Schedule Appointment</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <h3 className="font-semibold">Next Appointment</h3>
          </div>
          <p className="mt-2 text-2xl font-bold">Mar 28, 2024</p>
          <p className="text-sm text-muted-foreground">Dr. Smith - Cardiology</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <h3 className="font-semibold">Latest Vitals</h3>
          </div>
          <p className="mt-2 text-2xl font-bold">120/80</p>
          <p className="text-sm text-muted-foreground">Blood Pressure</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4 text-primary" />
            <h3 className="font-semibold">Active Medications</h3>
          </div>
          <p className="mt-2 text-2xl font-bold">4</p>
          <p className="text-sm text-muted-foreground">Prescriptions</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <h3 className="font-semibold">Recent Reports</h3>
          </div>
          <p className="mt-2 text-2xl font-bold">2</p>
          <p className="text-sm text-muted-foreground">New test results</p>
        </Card>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
          <div className="space-y-4">
            {[
              {
                date: "Mar 28, 2024",
                time: "10:00 AM",
                doctor: "Dr. Smith",
                department: "Cardiology",
              },
              {
                date: "Apr 15, 2024",
                time: "2:30 PM",
                doctor: "Dr. Johnson",
                department: "General Medicine",
              },
            ].map((appointment, i) => (
              <div key={i} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{appointment.doctor}</p>
                  <p className="text-sm text-muted-foreground">
                    {appointment.department}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{appointment.date}</p>
                  <p className="text-sm text-muted-foreground">
                    {appointment.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              {
                title: "Blood Test Results",
                date: "Mar 15, 2024",
                type: "Lab Report",
              },
              {
                title: "Prescription Updated",
                date: "Mar 10, 2024",
                type: "Medication",
              },
              {
                title: "Vital Signs Recorded",
                date: "Mar 5, 2024",
                type: "Check-up",
              },
            ].map((activity, i) => (
              <div key={i} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.type}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{activity.date}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}