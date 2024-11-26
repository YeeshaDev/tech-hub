'use client'
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/navbar';
import { SessionProvider } from 'next-auth/react';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div>
        <Toaster />
        <main className="container mx-auto px-4 py-12">
          {children}
        </main>
      </div>
    </SessionProvider>
  );
}