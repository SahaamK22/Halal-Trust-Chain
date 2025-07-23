// components/FarmEntryForm.tsx
'use client'

import { useState } from 'react';

interface FarmEntryFormProps {
  onNext: (data: Record<string, any>) => void;
  initialData?: Record<string, any>;
}

export default function FarmEntryForm({ onNext, initialData }: FarmEntryFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>(
    initialData || {
      animalId: '',
      farmerName: '',
      breed: '',
      vaccinationStatus: '',
      farmLocation: '',
      dateOfBirth: '',
      feedType: '',
      weight: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    localStorage.setItem('farmData', JSON.stringify(formData));
    onNext(formData); // Pass to parent (SingleEntryForm)
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Farm Entry</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="animalId" placeholder="Animal ID" value={formData.animalId} onChange={handleChange} className="input" />
        <input name="farmerName" placeholder="Farmer Name" value={formData.farmerName} onChange={handleChange} className="input" />
        <input name="breed" placeholder="Breed" value={formData.breed} onChange={handleChange} className="input" />
        <select name="vaccinationStatus" value={formData.vaccinationStatus} onChange={handleChange} className="input">
          <option value="">Vaccination Status</option>
          <option value="Vaccinated">Vaccinated</option>
          <option value="Not Vaccinated">Not Vaccinated</option>
        </select>
        <input name="farmLocation" placeholder="Farm Location" value={formData.farmLocation} onChange={handleChange} className="input" />
        <input type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} className="input" />
        <input name="feedType" placeholder="Feed Type" value={formData.feedType} onChange={handleChange} className="input" />
        <input type="number" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} className="input" />
      </div>
      <button onClick={handleSubmit} className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Save Farm Entry
      </button>
    </div>
  );
}
