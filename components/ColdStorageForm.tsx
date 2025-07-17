"use client";

import React, { useState } from "react";

type Props = {
  onNext: (data: any) => void;
  onPrev: () => void;
};

const ColdStorageForm = ({ onNext, onPrev }: Props) => {
  const [facility, setFacility] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [exitDate, setExitDate] = useState("");

  const handleNext = () => {
    onNext({
      facility,
      temperature,
      humidity,
      entryDate,
      exitDate,
    });
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Cold Storage</h2>

      <input
        type="text"
        placeholder="Storage Facility"
        value={facility}
        onChange={(e) => setFacility(e.target.value)}
        className="mb-3 p-2 border rounded w-full"
      />

      <input
        type="text"
        placeholder="Temperature (°C)"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        className="mb-3 p-2 border rounded w-full"
      />

      <input
        type="text"
        placeholder="Humidity (%)"
        value={humidity}
        onChange={(e) => setHumidity(e.target.value)}
        className="mb-3 p-2 border rounded w-full"
      />

      <input
        type="date"
        placeholder="Entry Date"
        value={entryDate}
        onChange={(e) => setEntryDate(e.target.value)}
        className="mb-3 p-2 border rounded w-full"
      />

      <input
        type="date"
        placeholder="Exit Date"
        value={exitDate}
        onChange={(e) => setExitDate(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ColdStorageForm;
