'use client';

import { useState, useEffect } from 'react';

interface ColdStorageFormProps {
  animalId: string;
  onSave: (data: Record<string, any>) => void;
  onNext: (data: Record<string, any>) => void;
  onPrev: () => void;
}

const ColdStorageForm = ({ animalId, onSave, onNext, onPrev }: ColdStorageFormProps) => {
  const [storageData, setStorageData] = useState({
    animalId,
    storageFacilityName: '',
    temperature: '',
    humidity: '',
    storageStartDate: '',
    storageEndDate: '',
    handlingStaff: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem(`coldStorageData-${animalId}`);
    if (savedData) {
      setStorageData(JSON.parse(savedData));
    }
  }, [animalId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStorageData({ ...storageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem(`coldStorageData-${animalId}`, JSON.stringify(storageData));
    onSave(storageData);
    onNext(storageData);
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-semibold">Cold Storage Entry</h2>
      <input
        type="text"
        name="storageFacilityName"
        placeholder="Storage Facility Name"
        value={storageData.storageFacilityName}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="temperature"
        placeholder="Temperature (°C)"
        value={storageData.temperature}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="humidity"
        placeholder="Humidity (%)"
        value={storageData.humidity}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="date"
        name="storageStartDate"
        placeholder="Storage Start Date"
        value={storageData.storageStartDate}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="date"
        name="storageEndDate"
        placeholder="Storage End Date"
        value={storageData.storageEndDate}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="handlingStaff"
        placeholder="Handled By"
        value={storageData.handlingStaff}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

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

export default ColdStorageForm;
