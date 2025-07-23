'use client';

import { useState, useEffect } from 'react';

interface ShippingFormProps {
  animalId: string;
  onSave: (data: Record<string, any>) => void;
  onNext: (data: Record<string, any>) => void;
  onPrev: () => void;
}

const ShippingForm = ({ animalId, onSave, onNext, onPrev }: ShippingFormProps) => {
  const [shippingData, setShippingData] = useState({
    animalId,
    shippingCompany: '',
    shippingMethod: '',
    departureDate: '',
    arrivalDate: '',
    trackingNumber: '',
    destination: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem(`shippingData-${animalId}`);
    if (savedData) {
      setShippingData(JSON.parse(savedData));
    }
  }, [animalId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem(`shippingData-${animalId}`, JSON.stringify(shippingData));
    onSave(shippingData);
    onNext(shippingData);
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-semibold">Shipping Entry</h2>
      <input
        type="text"
        name="shippingCompany"
        placeholder="Shipping Company"
        value={shippingData.shippingCompany}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="shippingMethod"
        placeholder="Shipping Method"
        value={shippingData.shippingMethod}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="date"
        name="departureDate"
        placeholder="Departure Date"
        value={shippingData.departureDate}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="date"
        name="arrivalDate"
        placeholder="Arrival Date"
        value={shippingData.arrivalDate}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="trackingNumber"
        placeholder="Tracking Number"
        value={shippingData.trackingNumber}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="destination"
        placeholder="Destination"
        value={shippingData.destination}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <div className="flex justify-between pt-4">
        <button onClick={onPrev} className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default ShippingForm;
