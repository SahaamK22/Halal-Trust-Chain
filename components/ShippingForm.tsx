"use client";

import React, { useState } from "react";

type Props = {
  onNext: (data: any) => void;
  onPrev: () => void;
};

const ShippingForm = ({ onNext, onPrev }: Props) => {
  const [shippingCompany, setShippingCompany] = useState("");
  const [departurePort, setDeparturePort] = useState("");
  const [arrivalPort, setArrivalPort] = useState("");
  const [shippingDate, setShippingDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [shippingConditions, setShippingConditions] = useState("");

  const handleNext = () => {
    onNext({
      shippingCompany,
      departurePort,
      arrivalPort,
      shippingDate,
      arrivalDate,
      shippingConditions,
    });
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

      <input
        type="text"
        placeholder="Shipping Company"
        value={shippingCompany}
        onChange={(e) => setShippingCompany(e.target.value)}
        className="mb-3 p-2 border rounded w-full"
      />

      <input
        type="text"
        placeholder="Departure Port / Location"
        value={departurePort}
        onChange={(e) => setDeparturePort(e.target.value)}
        className="mb-3 p-2 border rounded w-full"
      />

      <input
        type="text"
        placeholder="Arrival Port / Destination"
        value={arrivalPort}
        onChange={(e) => setArrivalPort(e.target.value)}
        className="mb-3 p-2 border rounded w-full"
      />

      <input
        type="date"
        placeholder="Shipping Date"
        value={shippingDate}
        onChange={(e) => setShippingDate(e.target.value)}
        className="mb-3 p-2 border rounded w-full"
      />

      <input
        type="date"
        placeholder="Arrival Date"
        value={arrivalDate}
        onChange={(e) => setArrivalDate(e.target.value)}
        className="mb-3 p-2 border rounded w-full"
      />

      <textarea
        placeholder="Shipping Conditions (e.g. refrigerated, halal-certified transport)"
        value={shippingConditions}
        onChange={(e) => setShippingConditions(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
        rows={3}
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
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShippingForm;
