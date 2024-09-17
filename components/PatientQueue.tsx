'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Patient = {
  id: string;
  name: string;
  age: number;
  condition: string;
  waitTime: string;
};

interface PatientQueueProps {
  patientQueue: Patient[];
}

const PatientQueue: React.FC<PatientQueueProps> = ({ patientQueue }) => {
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Patient Queue</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Wait Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientQueue.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.id}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.condition}</TableCell>
                <TableCell>{patient.waitTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PatientQueue;
