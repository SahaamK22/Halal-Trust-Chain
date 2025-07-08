"use client";

import React, { useState } from "react";

const LandTransportForm = () => {
  const [animalId, setAnimalId] = useState("");
  const [transporterName, setTransporterName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [pickupDateTime, setPickupDateTime] = useState("");
  const [dropoffDateTime, setDropoffDateTime] = useState("");
  const [transportConditions, setTransportConditions] = useState("");

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Land Transport Entry</h2>
      <input
        type="text"
        placeholder="Animal ID"
        value={animalId}
        onChange={(e) => setAnimalId(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder="Transporter Name"
        value={transporterName}
        onChange={(e) => setTransporterName(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder="Vehicle Number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="datetime-local"
        placeholder="Pickup Date & Time"
        value={pickupDateTime}
        onChange={(e) => setPickupDateTime(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="datetime-local"
        placeholder="Drop-off Date & Time"
        value={dropoffDateTime}
        onChange={(e) => setDropoffDateTime(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <textarea
        placeholder="Transport Conditions"
        value={transportConditions}
        onChange={(e) => setTransportConditions(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
    </div>
  );
};

export default LandTransportForm;
