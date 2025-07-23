// components/SlaughterhouseForm.tsx
'use client';

import { useEffect, useState } from 'react';

interface SlaughterhouseFormProps {
  onNext: () => void;
  onBack: () => void;
  animalId: string;
}

const STORAGE_KEY = 'slaughterhouseEntry';

export default function SlaughterhouseForm({ onNext, onBack, animalId }: SlaughterhouseFormProps) {
  const [formData, setFormData] = useState({
    animalId: animalId || '',
    slaughterhouseName: '',
    slaughterDate: '',
    slaughterMethod: '',
    halalCertificationId: '',
    slaughtermanName: '',
    veterinaryApproval: '',
  });

  // Load saved data from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setFormData(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever form data changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Slaughterhouse Entry</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Animal ID</label>
          <input
            type="text"
            name="animalId"
            value={formData.animalId}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Slaughterhouse Name</label>
          <input
            type="text"
            name="slaughterhouseName"
            value={formData.slaughterhouseName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Slaughter Date</label>
          <input
            type="date"
            name="slaughterDate"
            value={formData.slaughterDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Slaughter Method</label>
          <input
            type="text"
            name="slaughterMethod"
            value={formData.slaughterMethod}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Halal Certification ID</label>
          <input
            type="text"
            name="halalCertificationId"
            value={formData.halalCertificationId}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Slaughterman Name</label>
          <input
            type="text"
            name="slaughtermanName"
            value={formData.slaughtermanName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Veterinary Approval</label>
          <input
            type="text"
            name="veterinaryApproval"
            value={formData.veterinaryApproval}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
