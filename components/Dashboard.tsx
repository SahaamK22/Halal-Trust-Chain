'use client';

import React, { useEffect, useState } from 'react';

export default function QRCodeSummary() {
  const [summary, setSummary] = useState<Record<string, any>>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('yeshalal-summary');
      if (stored) {
        try {
          setSummary(JSON.parse(stored));
        } catch (e) {
          console.error('Failed to parse summary', e);
        }
      }
    }
  }, []);

  if (!summary || Object.keys(summary).length === 0) {
    return <p className="text-gray-400 italic">No summary data found.</p>;
  }

  const readableSummary = Object.entries(summary).reduce((acc, [section, data]) => {
    if (typeof data === 'object' && data !== null) {
      Object.entries(data).forEach(([key, val]) => {
        acc[`${section}-${key}`] = val;
      });
    } else {
      acc[section] = data;
    }
    return acc;
  }, {} as Record<string, any>);

  return (
    <div className="p-4 border bg-gray-50 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Journey Summary</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {Object.entries(readableSummary).map(([key, val]) => (
          <p key={key} className="capitalize">
            <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {String(val)}
          </p>
        ))}
      </div>
    </div>
  );
}
