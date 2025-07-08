"use client";

import React, { useState } from "react";

const GradingPackagingForm = () => {
  const [grade, setGrade] = useState("");
  const [cutType, setCutType] = useState("");
  const [packaging, setPackaging] = useState("");

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Grading & Packaging</h2>
      <input
        type="text"
        placeholder="Grading"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder="Meat Cut Type"
        value={cutType}
        onChange={(e) => setCutType(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
      <input
        type="text"
        placeholder="Packaging Type"
        value={packaging}
        onChange={(e) => setPackaging(e.target.value)}
        className="mb-2 p-2 border w-full"
      />
    </div>
  );
};

export default GradingPackagingForm;
