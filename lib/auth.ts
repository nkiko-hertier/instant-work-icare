import { cookies } from 'next/headers';

export function getUser() {
  // In a real app, validate token and fetch user data
  // For demo, return mock user
  return {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    dateOfBirth: '1990-05-15',
    bloodType: 'A+',
    emergencyContact: 'John Johnson (Spouse) - 555-0123',
  };
}

export function isAuthenticated() {
  const cookieStore = cookies();
  return cookieStore.has('auth_token');
}