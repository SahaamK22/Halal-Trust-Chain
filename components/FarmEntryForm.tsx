"use client";

import React, { useState } from "react";

const FarmEntryForm = () => {
  const [animalId, setAnimalId] = useState("");
  const [breed, setBreed] = useState("");
  const [farmerName, setFarmerName] = useState("");

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Farm Entry</h2>
      <input
        type="text"
        placeholder="Animal ID"
        value={animalId}
        onChange={(e) => setAnimalId(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder="Farmer Name"
        value={farmerName}
        onChange={(e) => setFarmerName(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
    </div>
  );
};

export default FarmEntryForm;
