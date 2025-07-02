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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveEntry(formData.animalId, 'GradingPackaging', formData);
    alert('Grading & Packaging Entry Saved Successfully!');
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
    <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-semibold mb-2">Grading & Packaging Entry</h2>

      <input type="text" name="animalId" placeholder="Animal ID" value={formData.animalId} onChange={handleChange} className="input" required />
      <input type="text" name="gradingType" placeholder="Grading Type (e.g., A/B/C)" value={formData.gradingType} onChange={handleChange} className="input" />
      <input type="text" name="meatCutType" placeholder="Meat Cut Type" value={formData.meatCutType} onChange={handleChange} className="input" />
      <input type="text" name="packagingType" placeholder="Packaging Type" value={formData.packagingType} onChange={handleChange} className="input" />
      <input type="number" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} className="input" />

      <label className="block text-sm font-medium">Packaging Date</label>
      <input type="date" name="packagingDate" value={formData.packagingDate} onChange={handleChange} className="input" />

      <label className="block text-sm font-medium">Expiry Date</label>
      <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} className="input" />

      <input type="text" name="batchCode" placeholder="Batch Code" value={formData.batchCode} onChange={handleChange} className="input" />

      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Save Entry</button>
    </form>
  );
}
