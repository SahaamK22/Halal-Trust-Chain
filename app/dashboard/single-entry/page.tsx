'use client';

import SingleEntryForm from '@/components/SingleEntryForm';

export default function SingleEntryPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Single Animal Entry</h1>
      <p className="text-sm text-gray-600 mb-6">
        Please fill out the details below for a single animal in the supply chain.
      </p>

      <SingleEntryForm />
    </main>
  );
}
