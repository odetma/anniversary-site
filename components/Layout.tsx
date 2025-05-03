import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Made with ❤️ for my amazing boyfriend</p>
          <p className="mt-2 text-sm">8 Years and Counting...</p>
        </div>
      </footer>
    </div>
  );
} 