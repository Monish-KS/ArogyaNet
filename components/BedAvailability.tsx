'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BedDouble } from 'lucide-react';

interface BedAvailabilityProps {
  bedAvailability: {
    available: number;
    total: number;
    occupied: number;
  };
}

const BedAvailability: React.FC<BedAvailabilityProps> = ({ bedAvailability }) => {
  const { available, total, occupied } = bedAvailability;
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">Bed Availability</CardTitle>
        <BedDouble className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">{available} / {total}</div>
            <p className="text-xs text-muted-foreground">Available Beds</p>
          </div>
          <div className="w-1/2">
            <Progress
              value={(occupied / total) * 100}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground mt-2 text-right">
              {occupied} beds occupied
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BedAvailability;
