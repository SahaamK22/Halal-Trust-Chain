// components/GradingPackagingForm.tsx
'use client';

import { useState } from 'react';
import { saveEntry } from '../components/utils/saveEntry';
export default function GradingPackagingForm() {
  const [formData, setFormData] = useState({
    animalId: '',
    gradingType: '',
    meatCutType: '',
    packagingType: '',
    weight: '',
    packagingDate: '',
    expiryDate: '',
    batchCode: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Save to localStorage using the helper
      saveEntry(formData.animalId, 'GradingPackaging', formData);
    
      alert('Farm Entry Saved Successfully!');
    
      // Clear the form after saving
    setFormData({
      animalId: '',
      gradingType: '',
      meatCutType: '',
      packagingType: '',
      weight: '',
      packagingDate: '',
      expiryDate: '',
      batchCode: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Grading & Packaging Entry</h2>

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
        name="gradingType"
        placeholder="Grading Type (A/B/C)"
        value={formData.gradingType}
        onChange={handleChange}
        className="input"
      />

      <input
        type="text"
        name="meatCutType"
        placeholder="Meat Cut Type (e.g., Boneless)"
        value={formData.meatCutType}
        onChange={handleChange}
        className="input"
      />

      <input
        type="text"
        name="packagingType"
        placeholder="Packaging Type (e.g., Vacuum Sealed)"
        value={formData.packagingType}
        onChange={handleChange}
        className="input"
      />

      <input
        type="number"
        name="weight"
        placeholder="Weight (kg)"
        value={formData.weight}
        onChange={handleChange}
        className="input"
      />

      <div>
        <label className="block mb-1 font-medium">Packaging Date</label>
        <input
          type="date"
          name="packagingDate"
          value={formData.packagingDate}
          onChange={handleChange}
          className="input"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Expiry Date</label>
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className="input"
        />
      </div>

      <input
        type="text"
        name="batchCode"
        placeholder="Batch Code"
        value={formData.batchCode}
        onChange={handleChange}
        className="input"
      />

      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
        Save Entry
      </button>
    </form>
  );
}
