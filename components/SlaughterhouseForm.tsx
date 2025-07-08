"use client";

import React, { useState } from "react";

const SlaughterhouseForm = () => {
  const [animalId, setAnimalId] = useState("");
  const [slaughterhouseName, setSlaughterhouseName] = useState("");
  const [slaughterDate, setSlaughterDate] = useState("");
  const [slaughterMethod, setSlaughterMethod] = useState("");
  const [halalCertId, setHalalCertId] = useState("");
  const [slaughtermanName, setSlaughtermanName] = useState("");
  const [vetApproval, setVetApproval] = useState("");

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Slaughterhouse Entry</h2>
      <input
        type="text"
        placeholder="Animal ID"
        value={animalId}
        onChange={(e) => setAnimalId(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder="Slaughterhouse Name"
        value={slaughterhouseName}
        onChange={(e) => setSlaughterhouseName(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="date"
        placeholder="Slaughter Date"
        value={slaughterDate}
        onChange={(e) => setSlaughterDate(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder="Slaughter Method"
        value={slaughterMethod}
        onChange={(e) => setSlaughterMethod(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder="Halal Certification ID"
        value={halalCertId}
        onChange={(e) => setHalalCertId(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder="Slaughterman Name"
        value={slaughtermanName}
        onChange={(e) => setSlaughtermanName(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder="Veterinary Approval"
        value={vetApproval}
        onChange={(e) => setVetApproval(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
    </div>
  );
};

export default SlaughterhouseForm;
