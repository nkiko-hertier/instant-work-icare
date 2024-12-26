"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, USA",
    emergencyContact: "John Johnson (Spouse) - (555) 987-6543",
    bloodType: "A+",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, save to backend
  };

  return (
    <div className="p-8 bg-slate-50  text-black h-screen">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <Input value={profile.name} readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input value={profile.email} readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input value={profile.phone} readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Blood Type</label>
              <Input value={profile.bloodType} readOnly />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Address</label>
              <Input value={profile.address} readOnly />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Emergency Contact</label>
              <Input value={profile.emergencyContact} readOnly />
            </div>
          </div>
          <Button type="submit">Update Profile</Button>
        </form>
      </Card>
    </div>
  );
}