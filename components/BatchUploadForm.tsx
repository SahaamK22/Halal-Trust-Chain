'use client';
import React, { useState } from 'react';

export default function BatchUploadForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload a file.');
      return;
    }

    // Simulate file processing
    alert(`Batch file "${file.name}" uploaded successfully!`);
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-semibold">Batch Upload</h2>

      <input type="file" accept=".csv,.xlsx" onChange={handleFileChange} className="input" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Upload Batch</button>
    </form>
  );
}
