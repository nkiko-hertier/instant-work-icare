
"use client"; // Make sure to include this if you're using Next.js with React 18
import React, { useState } from "react";

interface HealthProgram {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string; // Add an image property
}

const healthPrograms: HealthProgram[] = [
  {
    id: 1,
    title: "Weight Management Program",
    description: "A comprehensive program to help you manage your weight effectively.",
    details: "This program includes personalized meal plans, workout routines, and ongoing support from health professionals.",
    image: "weight.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    title: "Diabetes Care Program",
    description: "Manage your diabetes with our specialized care program.",
    details: "Our program offers education on nutrition, blood sugar monitoring, and regular check-ups.",
    image: "diabetes.jpg", // Replace with actual image paths
  },
  {
    id: 3,
    title: "Heart Health Program",
    description: "A program designed to improve your heart health.",
    details: "Includes dietary guidance, exercise plans, and stress management techniques.",
    image: "heart.jpg", // Replace with actual image paths
  },
  {
    id: 4,
    title: "Mental Wellness Program",
    description: "Support for mental health through counseling and resources.",
    details: "This program provides access to therapy, support groups, and wellness activities.",
    image: "mental.jpg", // Replace with actual image paths
  },
];

const faqs = [
  {
    question: "Am I getting enough exercise?",
    answer: "Most adults need at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity each week.",
  },
  {
    question: "What should I eat to maintain a healthy diet?",
    answer: "A balanced diet includes fruits, vegetables, whole grains, lean proteins, and healthy fats.",
  },
  {
    question: "How can I manage stress effectively?",
    answer: "Techniques include regular exercise, mindfulness meditation, and talking to a therapist.",
  },
  {
    question: "What are the signs of a health issue I should be aware of?",
    answer: "Common signs include persistent fatigue, unexplained weight changes, and chronic pain.",
  },
  {
    question: "How often should I have health check-ups?",
    answer: "It's recommended to have a check-up at least once a year, but it may vary based on individual health needs.",
  },
];

const HealthProgramsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-black">Health Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthPrograms.map((program) => (
          <div key={program.id} className="bg-gray-100 rounded-lg shadow-md p-6">
            <img src={program.image} alt={program.title} className="w-full h-32 object-cover rounded-md" />
            <h2 className="text-xl font-semibold text-black mt-4">{program.title}</h2>
            <p className="mt-2 text-gray-700">{program.description}</p>
            <a href={`/programs/${program.id}`} className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
              Read More
            </a>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-10 mb-4 text-center text-black">Frequently Asked Questions</h2>
      <div className="space-y-4 flex flex-col items-center text-center">
        {faqs.map((faq, index) => {
          const [isOpen, setIsOpen] = useState(false); // State to manage visibility of the answer
          return (
            <div key={index} className="flex flex-col items-center w-full max-w-md">
              <div
                className="flex items-center cursor-pointer text-lg text-gray-700"
                onClick={() => setIsOpen(!isOpen)} // Toggle the answer visibility
              >
                <span className="text-lg text-gray-700 mr-2">+</span>
                <span className="text-gray-700">{faq.question}</span>
              </div>
              <div
                className={`mt-2 text-gray-600 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{ maxHeight: isOpen ? '100px' : '0', overflow: 'hidden' }}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HealthProgramsPage;