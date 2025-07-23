'use client';

import { useState, useEffect } from 'react';

interface LandTransportFormProps {
  animalId: string;
  onSave: (data: any) => void;
}

const LandTransportForm = ({ animalId, onSave }: LandTransportFormProps) => {
  const [formData, setFormData] = useState({
    animalId: animalId || '',
    transporterName: '',
    vehicleNumber: '',
    pickupDateTime: '',
    dropoffDateTime: '',
    transportConditions: '',
  });

  useEffect(() => {
    // Load saved data from localStorage
    const saved = localStorage.getItem(`landTransport-${animalId}`);
    if (saved) setFormData(JSON.parse(saved));
  }, [animalId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem(`landTransport-${animalId}`, JSON.stringify(formData));
    onSave(formData);
  };

  return (
    <div className="p-4 bg-white shadow rounded-xl mb-6">
      <h2 className="text-xl font-bold mb-4">Land Transport Entry</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Transporter Name</label>
          <input
            type="text"
            name="transporterName"
            value={formData.transporterName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold">Vehicle Number</label>
          <input
            type="text"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold">Pickup Date & Time</label>
          <input
            type="datetime-local"
            name="pickupDateTime"
            value={formData.pickupDateTime}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold">Drop-off Date & Time</label>
          <input
            type="datetime-local"
            name="dropoffDateTime"
            value={formData.dropoffDateTime}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block font-semibold">Transport Conditions</label>
          <textarea
            name="transportConditions"
            value={formData.transportConditions}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>
      </div>
      <button
        onClick={handleSave}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Save Land Transport Entry
      </button>
    </div>
  );
};

export default LandTransportForm;
