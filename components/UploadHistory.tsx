import React from 'react';

export default function UploadHistory() {
  // Dummy data to simulate history
  const historyData = [
    { batchId: 'BATCH001', date: '2025-06-14', totalAnimals: 12 },
    { batchId: 'BATCH002', date: '2025-06-13', totalAnimals: 8 },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Upload History</h2>
      <table className="w-full border border-gray-300 rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Batch ID</th>
            <th className="p-2 border">Upload Date</th>
            <th className="p-2 border">Total Animals</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((entry, index) => (
            <tr key={index}>
              <td className="p-2 border">{entry.batchId}</td>
              <td className="p-2 border">{entry.date}</td>
              <td className="p-2 border">{entry.totalAnimals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
