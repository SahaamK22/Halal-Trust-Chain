// components/FarmEntryForm.js
'use client';
import { saveEntry } from '../components/utils/saveEntry';
import { useState } from 'react';

export default function FarmEntryForm() {
  const [formData, setFormData] = useState({
    animalId: '',
    farmerName: '',
    breed: '',
    vaccinationStatus: '',
    farmLocation: '',
    dateOfBirth: '',
    feedType: '',
    weight: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Save to localStorage using the helper
  saveEntry(formData.animalId, 'farm', formData);

  alert('Farm Entry Saved Successfully!');

  // Clear the form after saving
  setFormData({
    animalId: '',
    farmerName: '',
    breed: '',
    vaccinationStatus: '',
    farmLocation: '',
    dateOfBirth: '',
    feedType: '',
    weight: '',
  });
};


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        { label: 'Animal ID', name: 'animalId' },
        { label: 'Farmer Name', name: 'farmerName' },
        { label: 'Breed', name: 'breed' },
        { label: 'Vaccination Status', name: 'vaccinationStatus' },
        { label: 'Farm Location', name: 'farmLocation' },
        { label: 'Date of Birth', name: 'dateOfBirth', type: 'date' },
        { label: 'Feed Type', name: 'feedType' },
        { label: 'Weight (kg)', name: 'weight', type: 'number' },
      ].map(({ label, name, type = 'text' }) => (
        <div key={name}>
          <label className="block text-sm font-medium">{label}</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
      ))}
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Save Farm Entry
      </button>
    </form>
  );
}
