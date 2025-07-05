'use client';

import React from 'react';

export default function UploadHistory() {
  if (typeof window === 'undefined') return null;
  // Example placeholder history data
  const historyData = [
    { batchId: 'BATCH001', date: '2025-06-14', totalAnimals: 12 },
    { batchId: 'BATCH002', date: '2025-06-13', totalAnimals: 8 },
  ];

  return (
    <div className="space-y-4 border p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-semibold">Upload History</h2>

      <table className="w-full border border-gray-300 rounded text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Batch ID</th>
            <th className="p-2 border">Upload Date</th>
            <th className="p-2 border">Total Animals</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((entry, index) => (
            <tr key={index}>
              <td className="p-2 border text-center">{entry.batchId}</td>
              <td className="p-2 border text-center">{entry.date}</td>
              <td className="p-2 border text-center">{entry.totalAnimals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
