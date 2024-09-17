'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { User } from 'lucide-react';

type Doctor = {
  name: string;
  status: string;
  specialty: string;
};

interface DoctorAvailabilityProps {
  doctorAvailability: Doctor[];
}

const DoctorAvailability: React.FC<DoctorAvailabilityProps> = ({ doctorAvailability }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Doctor Availability</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {doctorAvailability.map((doctor, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="font-medium">{doctor.name}</span>
              </div>
              <div className="ml-6 text-sm text-muted-foreground">
                {doctor.specialty}
              </div>
              <div className="ml-6 mt-1">
                <Badge 
                  variant={doctor.status === "Available" ? "default" : "secondary"}
                >
                  {doctor.status}
                </Badge>
              </div>
              {index < doctorAvailability.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default DoctorAvailability;
