"use client";

import React, { useState, useEffect } from "react";

interface GradingPackagingFormProps {
  onNext: (data: Record<string, any>) => void;
  onPrev: () => void;
}

const GradingPackagingForm: React.FC<GradingPackagingFormProps> = ({
  onNext,
  onPrev,
}) => {
  const [formData, setFormData] = useState({
    animalId: "",
    gradingType: "",
    meatCutType: "",
    packagingType: "",
    weight: "",
    packagingDate: "",
    expiryDate: "",
    batchCode: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("gradingPackagingData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    localStorage.setItem("gradingPackagingData", JSON.stringify(formData));
    onNext(formData);
  };

  return (
    <div className="p-4 space-y-4 bg-white shadow rounded-xl">
      <h2 className="text-xl font-semibold">Grading & Packaging</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="animalId"
          value={formData.animalId}
          onChange={handleChange}
          placeholder="Animal ID"
          className="input input-bordered w-full"
        />
        <input
          name="gradingType"
          value={formData.gradingType}
          onChange={handleChange}
          placeholder="Grading Type"
          className="input input-bordered w-full"
        />
        <input
          name="meatCutType"
          value={formData.meatCutType}
          onChange={handleChange}
          placeholder="Meat Cut Type"
          className="input input-bordered w-full"
        />
        <input
          name="packagingType"
          value={formData.packagingType}
          onChange={handleChange}
          placeholder="Packaging Type"
          className="input input-bordered w-full"
        />
        <input
          name="weight"
          type="number"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
          className="input input-bordered w-full"
        />
        <input
          name="packagingDate"
          type="date"
          value={formData.packagingDate}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          name="expiryDate"
          type="date"
          value={formData.expiryDate}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          name="batchCode"
          value={formData.batchCode}
          onChange={handleChange}
          placeholder="Batch Code"
          className="input input-bordered w-full"
        />
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={onPrev} className="btn btn-outline">
          Previous
        </button>
        <button onClick={handleNext} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default GradingPackagingForm;
