'use client';
import React, { useState } from 'react';
import { saveEntry } from '../components/utils/saveEntry';

export default function SlaughterhouseForm() {
  if (typeof window === 'undefined') return null;
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveEntry(formData.animalId, 'Slaughterhouse', formData);
    alert('Slaughterhouse Entry Saved Successfully!');
    setFormData({
      animalId: '',
      slaughterhouseName: '',
      slaughterDate: '',
      slaughterMethod: '',
      halalCertificationId: '',
      slaughtermanName: '',
      veterinaryApproval: '',
    });
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

      <label className="block text-sm font-medium">Slaughter Date</label>
      <input
        type="date"
        name="slaughterDate"
        value={formData.slaughterDate}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="text"
        name="slaughterMethod"
        placeholder="Slaughter Method"
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

      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
        Save Entry
      </button>
    </form>
  );
}
