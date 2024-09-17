// root/layout.tsx
import React from "react";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        <main className="flex h-screen w-full">
          <aside className="w-64 bg-gray-200">
            {/* Sidebar content */}
          </aside>
          <div className="flex-grow p-6 bg-gray-100">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
