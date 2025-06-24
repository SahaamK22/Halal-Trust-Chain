// components/navbar.js
import Link from 'next/link';

export default function navbar() {
  return (
    <nav className="bg-white shadow py-4 px-6 flex flex-wrap justify-between items-center">
      <div className="flex flex-wrap gap-4 text-lg font-medium text-gray-800">
        <Link href="/" className="hover:text-green-600">Home</Link>
        <Link href="/about-us" className="hover:text-green-600">About Us</Link>
        <Link href="/how-it-works" className="hover:text-green-600">How It Works</Link>
        <Link href="/contact-us" className="hover:text-green-600">Contact</Link>
        <Link href="/dashboard/batch-entry" className="hover:text-green-600">Batch Entry</Link>
      </div>
    </nav>
  );
}