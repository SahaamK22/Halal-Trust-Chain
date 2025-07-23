'use client';

import { useState, useEffect } from 'react';

interface DocumentationUploadFormProps {
  animalId: string;
  onSave: (data: Record<string, any>) => void;
  onNext: (data: Record<string, any>) => void;
  onPrev: () => void;
}

const DocumentationUploadForm = ({
  animalId,
  onSave,
  onNext,
  onPrev,
}: DocumentationUploadFormProps) => {
  const [docData, setDocData] = useState({
    animalId,
    halalCertificate: '',
    inspectionReport: '',
    customsClearance: '',
    healthCertificate: '',
  });

  const [fileNames, setFileNames] = useState<Record<string, string>>({});

  useEffect(() => {
    const savedData = localStorage.getItem(`docData-${animalId}`);
    if (savedData) {
      setDocData(JSON.parse(savedData));
    }
  }, [animalId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const newFileName = files[0].name;
      setDocData((prev) => ({ ...prev, [name]: newFileName }));
      setFileNames((prev) => ({ ...prev, [name]: newFileName }));
    }
  };

  const handleSubmit = () => {
    localStorage.setItem(`docData-${animalId}`, JSON.stringify(docData));
    onSave(docData);
    onNext(docData);
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-semibold">Documentation Upload</h2>

      <div>
        <label className="block mb-1 font-medium">Halal Certificate</label>
        <input
          type="file"
          name="halalCertificate"
          onChange={handleFileChange}
          className="w-full border p-2 rounded"
        />
        {fileNames.halalCertificate && <p className="text-sm text-green-600">Uploaded: {fileNames.halalCertificate}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Inspection Report</label>
        <input
          type="file"
          name="inspectionReport"
          onChange={handleFileChange}
          className="w-full border p-2 rounded"
        />
        {fileNames.inspectionReport && <p className="text-sm text-green-600">Uploaded: {fileNames.inspectionReport}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Customs Clearance</label>
        <input
          type="file"
          name="customsClearance"
          onChange={handleFileChange}
          className="w-full border p-2 rounded"
        />
        {fileNames.customsClearance && <p className="text-sm text-green-600">Uploaded: {fileNames.customsClearance}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Health Certificate</label>
        <input
          type="file"
          name="healthCertificate"
          onChange={handleFileChange}
          className="w-full border p-2 rounded"
        />
        {fileNames.healthCertificate && <p className="text-sm text-green-600">Uploaded: {fileNames.healthCertificate}</p>}
      </div>

      <div className="flex justify-between pt-4">
        <button onClick={onPrev} className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default DocumentationUploadForm;
