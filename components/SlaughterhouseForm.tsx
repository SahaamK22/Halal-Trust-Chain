// components/SlaughterhouseForm.tsx

import React, { useState } from 'react';

interface SlaughterhouseFormProps {
  onNext: (data: Record<string, any>) => void;
  onPrev: () => void;
}

const SlaughterhouseForm: React.FC<SlaughterhouseFormProps> = ({ onNext, onPrev }) => {
  const [formData, setFormData] = useState({
    animalId: '',
    slaughterhouseName: '',
    slaughterDate: '',
    slaughterMethod: '',
    halalCertificationId: '',
    slaughtermanName: '',
    veterinaryApproval: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onNext(formData);
  };

  return (
    <div className="p-4 space-y-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Slaughterhouse Entry</h2>
      {Object.keys(formData).map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field}
          value={(formData as any)[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      ))}
      <div className="flex justify-between">
        <button onClick={onPrev} className="px-4 py-2 bg-gray-300 rounded">Previous</button>
        <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default SlaughterhouseForm;
