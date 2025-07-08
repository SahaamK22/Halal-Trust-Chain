"use client";

import React, { useState } from "react";

const ColdStorageForm = () => {
  const [storageTemp, setStorageTemp] = useState("");
  const [storageDate, setStorageDate] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Cold Storage Entry</h2>
      <input
        type="text"
        placeholder="Storage Temperature"
        value={storageTemp}
        onChange={(e) => setStorageTemp(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="date"
        value={storageDate}
        onChange={(e) => setStorageDate(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
    </div>
  );
};

export default ColdStorageForm;
