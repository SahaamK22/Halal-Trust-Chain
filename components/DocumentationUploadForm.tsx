"use client";

import React, { useState } from "react";

const DocumentationUploadForm = () => {
  const [docFile, setDocFile] = useState<File | null>(null);
  const [docType, setDocType] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    setDocFile(selected ?? null);
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Upload Documentation</h2>
      <select
        value={docType}
        onChange={(e) => setDocType(e.target.value)}
        className="mb-2 p-2 border w-full"
      >
        <option value="">Select Document Type</option>
        <option value="halal-cert">Halal Certification</option>
        <option value="vet-cert">Veterinary Approval</option>
        <option value="others">Other</option>
      </select>
      <input
        type="file"
        accept=".pdf,.jpg,.png"
        onChange={handleFileChange}
        className="mb-2 p-2 border w-full"
      />
      <textarea
        placeholder="Remarks"
        value={remarks}
        onChange={(e) => setRemarks(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
    </div>
  );
};

export default DocumentationUploadForm;
