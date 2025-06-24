'use client';
import { saveEntry } from '../components/utils/saveEntry';

import React, { useState } from 'react';

export default function SlaughterhouseForm() {
  const [formData, setFormData] = useState({
    animalId: '',
    slaughterhouseName: '',
    slaughterDate: '',
    slaughterMethod: '',
    halalCertificationId: '',
    slaughtermanName: '',
    veterinaryApproval: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Save to localStorage using the helper
    saveEntry(formData.animalId, 'farmSlaughterhouse', formData);
  
    alert('Farm Entry Saved Successfully!');
  
    // Clear the form after saving
};


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Slaughterhouse Entry</h2>

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
        name="slaughterhouseName"
        placeholder="Slaughterhouse Name"
        value={formData.slaughterhouseName}
        onChange={handleChange}
        className="input"
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Slaughtering Date</label>
        <input
          type="date"
          name="slaughterDate"
          value={formData.slaughterDate}
          onChange={handleChange}
          className="input"
          required
        />
      </div>

      <input
        type="text"
        name="slaughterMethod"
        placeholder="Slaughter Method (e.g., Manual)"
        value={formData.slaughterMethod}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="text"
        name="halalCertificationId"
        placeholder="Halal Certification ID"
        value={formData.halalCertificationId}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="text"
        name="slaughtermanName"
        placeholder="Slaughterman Name"
        value={formData.slaughtermanName}
        onChange={handleChange}
        className="input"
        required
      />

      <select
        name="veterinaryApproval"
        value={formData.veterinaryApproval}
        onChange={handleChange}
        className="input"
        required
      >
        <option value="">Veterinary Approval?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <button
        type="submit"
        className="bg-green-700 text-white px-4 py-2 rounded">
        Save Entry
      </button>
    </form>
  );
}
