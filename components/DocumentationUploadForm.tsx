"use client";

import React, { useState } from "react";

type Props = {
  onNext: (data: any) => void;
  onPrev: () => void;
};

const DocumentationUploadForm = ({ onNext, onPrev }: Props) => {
  const [halalCert, setHalalCert] = useState<File | null>(null);
  const [shippingDocs, setShippingDocs] = useState<File | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setter(e.target.files[0]);
    }
  };

  const handleNext = () => {
    onNext({
      halalCertificate: halalCert,
      shippingDocuments: shippingDocs,
    });
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Upload Documentation (Optional but recommended)
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Halal Certificate</label>
        <input
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={(e) => handleFileChange(e, setHalalCert)}
          className="p-2 border rounded w-full"
        />
        {halalCert && (
          <p className="mt-2 text-green-700 text-sm">
            Selected: {halalCert.name}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Shipping Documents</label>
        <input
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={(e) => handleFileChange(e, setShippingDocs)}
          className="p-2 border rounded w-full"
        />
        {shippingDocs && (
          <p className="mt-2 text-green-700 text-sm">
            Selected: {shippingDocs.name}
          </p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default DocumentationUploadForm;
