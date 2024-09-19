import React from "react";
import DoctorAvailability from "../../components/DoctorAvailability";
import PatientQueue from "../../components/PatientQueue";
import QueueStatus from "../../components/QueueStatus";
import BedAvailability from "../../components/BedAvailability";
import dynamic from 'next/dynamic';

// Dynamically import HospCard component
const HospCard = dynamic(() => import('../../components/HospCard'), {
  ssr: false
});

const Page: React.FC = () => {
  const patientQueue = [
    { id: "P001", name: "John Doe", age: 45, condition: "Chest Pain", waitTime: "20 mins" },
    { id: "P002", name: "Jane Smith", age: 32, condition: "Broken Arm", waitTime: "35 mins" },
    { id: "P003", name: "Bob Johnson", age: 58, condition: "High Fever", waitTime: "15 mins" },
    { id: "P004", name: "Alice Brown", age: 27, condition: "Allergic Reaction", waitTime: "10 mins" },
    { id: "P005", name: "Charlie Davis", age: 70, condition: "Shortness of Breath", waitTime: "5 mins" }
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

        {/* Grid Layout for Patient Queue and Doctor Availability */}
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 h-full">
          {/* Left: Patient Queue (2/3 of width) */}
          <div className="lg:col-span-2 flex flex-col h-full">
            <div className="flex-grow p-4 bg-white rounded-lg shadow-md h-full">
              <PatientQueue patientQueue={patientQueue} />
            </div>
          </div>

          {/* Right: Doctor Availability (1/3 of width) */}
          <div className="lg:col-span-1 flex flex-col h-full">
            <div className="flex-grow p-4 bg-white rounded-lg shadow-md h-full">
              <DoctorAvailability doctorAvailability={doctorAvailability} />
            </div>
          </div>
        </div>

        {/* Queue Statuses */}
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          {/* Column 1: Emergency, Urgent Care, General Consultation */}
          <div className="space-y-4">
            <QueueStatus queueStatuses={queueStatuses.filter(
              status => ["Emergency", "Urgent Care", "General Consultation"].includes(status.name)
            )} />
          </div>

          {/* Column 2: Pharmacy, Laboratory */}
          <div className="space-y-4">
            <QueueStatus queueStatuses={queueStatuses.filter(
              status => ["Pharmacy", "Laboratory"].includes(status.name)
            )} />
          </div>
        </div>

        {/* Bed Availability */}
        <div>
          <BedAvailability bedAvailability={bedAvailability} />
        </div>
      </div>
    </div>
  );
};

// Ensure the page is exported as a default export
export default Page;
