'use client';
import { useState } from 'react';
import { saveEntry } from '../components/utils/saveEntry';

export default function LandTransportForm() {
  const [formData, setFormData] = useState({
    animalId: '',
    transporterName: '',
    vehicleNumber: '',
    pickupDateTime: '',
    dropoffDateTime: '',
    transportConditions: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveEntry(formData.animalId, 'LandTransport', formData);
    alert('Land Transport Entry Saved Successfully!');
    setFormData({
      animalId: '',
      transporterName: '',
      vehicleNumber: '',
      pickupDateTime: '',
      dropoffDateTime: '',
      transportConditions: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-semibold mb-4">Land Transport Entry</h2>

      <input
        type="text"
        name="animalId"
        placeholder="Animal ID"
        value={formData.animalId}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="text"
        name="transporterName"
        placeholder="Transporter Name"
        value={formData.transporterName}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="text"
        name="vehicleNumber"
        placeholder="Vehicle Number"
        value={formData.vehicleNumber}
        onChange={handleChange}
        className="input"
        required
      />

      <label className="block text-sm font-medium">Pickup Date & Time</label>
      <input
        type="datetime-local"
        name="pickupDateTime"
        value={formData.pickupDateTime}
        onChange={handleChange}
        className="input"
        required
      />

      <label className="block text-sm font-medium">Drop-off Date & Time</label>
      <input
        type="datetime-local"
        name="dropoffDateTime"
        value={formData.dropoffDateTime}
        onChange={handleChange}
        className="input"
        required
      />

      <textarea
        name="transportConditions"
        placeholder="Transport Conditions (e.g., A/C, Covered)"
        value={formData.transportConditions}
        onChange={handleChange}
        className="input"
        required
      />

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Save Entry
      </button>
    </form>
  );
}
