import React from "react";
import { Inter } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hospital Management System',
  description: 'Manage hospital queues and resources efficiently',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${inter.className}`}>
        <div className="min-h-screen">
          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
  