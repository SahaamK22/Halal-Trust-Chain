'use client';
import { useState } from 'react';
import { saveEntry } from '../components/utils/saveEntry';

export default function ColdStorageForm() {
  const [formData, setFormData] = useState({
    animalId: '',
    storageFacilityName: '',
    temperature: '',
    humidity: '',
    entryDate: '',
    exitDate: '',
    storageConditions: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    saveEntry(formData.animalId, 'ColdStorage', formData);
    alert('Cold Storage Entry Saved Successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-semibold">Cold Storage Entry</h2>
      {[
        ['Animal ID', 'animalId'],
        ['Storage Facility Name', 'storageFacilityName'],
        ['Temperature (e.g., 2°C)', 'temperature'],
        ['Humidity (e.g., 70%)', 'humidity'],
        ['Storage Conditions (Optional)', 'storageConditions'],
      ].map(([placeholder, name]) => (
        <input
          key={name}
          type="text"
          name={name}
          placeholder={placeholder}
          value={formData[name as keyof typeof formData]}
          onChange={handleChange}
          className="input"
          required={name !== 'storageConditions'}
        />
      ))}

      <label className="block text-sm font-medium">Entry Date</label>
      <input type="date" name="entryDate" value={formData.entryDate} onChange={handleChange} className="input" />

      <label className="block text-sm font-medium">Exit Date</label>
      <input type="date" name="exitDate" value={formData.exitDate} onChange={handleChange} className="input" />

      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
        Save Entry
      </button>
    </form>
  );
}
