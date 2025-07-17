'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/dashboard/single-entry">
          <div className="p-6 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
            <h2 className="text-xl font-semibold">Single Entry Form</h2>
            <p className="text-sm mt-2">Enter details of one animal’s supply chain.</p>
          </div>
        </Link>

        <Link href="/dashboard/batch-entry">
          <div className="p-6 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            <h2 className="text-xl font-semibold">Batch Entry Upload</h2>
            <p className="text-sm mt-2">Upload CSV/Excel file for multiple animals.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
