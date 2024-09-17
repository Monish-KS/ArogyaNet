'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from 'lucide-react';

type Queue = {
  name: string;
  patients: number;
  averageWaitTime: string;
};

interface QueueStatusProps {
  queueStatuses: Queue[];
}

const QueueStatus: React.FC<QueueStatusProps> = ({ queueStatuses }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Queue Statuses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {queueStatuses.map((queue, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{queue.name}</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{queue.patients}</div>
                <p className="text-xs text-muted-foreground">
                  Avg. Wait: {queue.averageWaitTime}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QueueStatus;
