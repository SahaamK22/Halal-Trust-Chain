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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage using the helper
      saveEntry(formData.animalId, 'ColdStorage', formData);
    
      alert('Farm Entry Saved Successfully!');
    
      // Clear the form after saving
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Cold Storage Entry</h2>

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
        name="storageFacilityName"
        placeholder="Storage Facility Name"
        value={formData.storageFacilityName}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="text"
        name="temperature"
        placeholder="Temperature (e.g., 2°C)"
        value={formData.temperature}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="text"
        name="humidity"
        placeholder="Humidity (e.g., 70%)"
        value={formData.humidity}
        onChange={handleChange}
        className="input"
      />

      <label className="block text-sm font-medium">Entry Date</label>
      <input
        type="date"
        name="entryDate"
        value={formData.entryDate}
        onChange={handleChange}
        className="input"
      />

      <label className="block text-sm font-medium">Exit Date</label>
      <input
        type="date"
        name="exitDate"
        value={formData.exitDate}
        onChange={handleChange}
        className="input"
      />

      <textarea
        name="storageConditions"
        placeholder="Storage Conditions (Optional)"
        value={formData.storageConditions}
        onChange={handleChange}
        className="input"
      />

      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
        Save Entry
      </button>
    </form>
  );
}
