'use client'

import { useEffect, useState } from 'react'

interface UploadRecord {
  batchId: string
  timestamp: string
  summary: Record<string, any>
}

export default function UploadHistory() {
  const [uploadHistory, setUploadHistory] = useState<UploadRecord[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('uploadHistory')
    if (saved) {
      setUploadHistory(JSON.parse(saved))
    }
  }, [])

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload History</h2>
      {uploadHistory.length === 0 ? (
        <p className="text-gray-500">No uploads found.</p>
      ) : (
        <ul className="space-y-4">
          {uploadHistory.map((record, index) => (
            <li
              key={index}
              className="border p-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <p><strong>Batch ID:</strong> {record.batchId}</p>
              <p><strong>Uploaded:</strong> {new Date(record.timestamp).toLocaleString()}</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600">View Summary</summary>
                <pre className="mt-2 bg-gray-100 p-2 rounded overflow-x-auto text-sm">
                  {JSON.stringify(record.summary, null, 2)}
                </pre>
              </details>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
