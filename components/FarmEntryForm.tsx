'use client';

import * as React from 'react';
import { useState } from 'react';
import { saveEntry } from '../components/utils/saveEntry';

export default function FarmEntryForm() {
  if (typeof window === 'undefined') return null;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveEntry(formData.animalId, 'farm', formData);
    alert('Farm Entry Saved Successfully!');
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

  const fields: Array<{ label: string; name: keyof typeof formData; type?: string }> = [
    { label: 'Animal ID', name: 'animalId' },
    { label: 'Farmer Name', name: 'farmerName' },
    { label: 'Breed', name: 'breed' },
    { label: 'Vaccination Status', name: 'vaccinationStatus' },
    { label: 'Farm Location', name: 'farmLocation' },
    { label: 'Date of Birth', name: 'dateOfBirth', type: 'date' },
    { label: 'Feed Type', name: 'feedType' },
    { label: 'Weight (kg)', name: 'weight', type: 'number' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Farm Entry</h2>

      {fields.map(({ label, name, type }) => (
        <div key={name}>
          <label className="block text-sm font-medium">{label}</label>
          <input
            type={type || 'text'}
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
