export interface User {
  id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  bloodType: string;
  emergencyContact: string;
  phone: string;
  address: string;
  createdAt: string;
}

export interface Appointment {
  id: string;
  userId: string;
  doctorName: string;
  department: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface MedicalRecord {
  id: string;
  userId: string;
  type: 'visit' | 'test' | 'prescription';
  date: string;
  title: string;
  description: string;
  provider: string;
  result?: string;
  status: string;
}