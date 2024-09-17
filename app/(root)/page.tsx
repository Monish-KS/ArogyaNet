import React from "react";
import DoctorAvailability from "../../components/DoctorAvailability";
import PatientQueue from "../../components/PatientQueue";
import QueueStatus from "../../components/QueueStatus";
import BedAvailability from "../../components/BedAvailability";
import dynamic from 'next/dynamic';

const HospCard = dynamic(() => import('../../components/HospCard'), {
  ssr: false
});

const Page = () => {
  const patientQueue = [
    {
      id: "P001",
      name: "John Doe",
      age: 45,
      condition: "Chest Pain",
      waitTime: "20 mins"
    },
    {
      id: "P002",
      name: "Jane Smith",
      age: 32,
      condition: "Broken Arm",
      waitTime: "35 mins"
    },
    {
      id: "P003",
      name: "Bob Johnson",
      age: 58,
      condition: "High Fever",
      waitTime: "15 mins"
    },
    {
      id: "P004",
      name: "Alice Brown",
      age: 27,
      condition: "Allergic Reaction",
      waitTime: "10 mins"
    },
    {
      id: "P005",
      name: "Charlie Davis",
      age: 70,
      condition: "Shortness of Breath",
      waitTime: "5 mins"
    }
  ];

  const queueStatuses = [
    { name: "Emergency", patients: 5, averageWaitTime: "10 mins" },
    { name: "Urgent Care", patients: 12, averageWaitTime: "30 mins" },
    { name: "General Consultation", patients: 20, averageWaitTime: "1 hour" },
    { name: "Pharmacy", patients: 8, averageWaitTime: "15 mins" },
    { name: "Laboratory", patients: 15, averageWaitTime: "45 mins" }
  ];

  const doctorAvailability = [
    { name: "Dr. Smith", status: "Available", specialty: "General Medicine" },
    { name: "Dr. Johnson", status: "In Surgery", specialty: "Cardiology" },
    { name: "Dr. Williams", status: "With Patient", specialty: "Pediatrics" },
    { name: "Dr. Brown", status: "On Break", specialty: "Orthopedics" },
    { name: "Dr. Jones", status: "Available", specialty: "Neurology" }
  ];

  const bedAvailability = {
    total: 200,
    occupied: 165,
    available: 35
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-4">
        <HospCard />
        
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <PatientQueue patientQueue={patientQueue} />
          </div>
          <div className="md:col-span-1">
            <DoctorAvailability doctorAvailability={doctorAvailability} />
          </div>
        </div>
        
        <QueueStatus queueStatuses={queueStatuses} />
        <BedAvailability bedAvailability={bedAvailability} />
      </div>
    </div>
  );
};

export default Page;