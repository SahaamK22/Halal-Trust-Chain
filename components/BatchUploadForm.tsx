"use client";

import React, { useState } from "react";

const BatchUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewData, setPreviewData] = useState<any[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setError(null);
      // Add parsing logic here
    } else {
      setFile(null);
      setError("No file selected.");
    }
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Batch Upload</h2>
      <input
        type="file"
        accept=".csv, .xlsx"
        onChange={handleFileChange}
        className="mb-4"
      />
      {error && <p className="text-red-600">{error}</p>}
      {/* Add preview table rendering here if needed */}
    </div>
  );
};

export default BatchUploadForm;
