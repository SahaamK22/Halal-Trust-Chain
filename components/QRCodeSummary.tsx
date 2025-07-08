"use client";

import React from "react";

interface QRCodeSummaryProps {
  summary: Record<string, any>;
}

const QRCodeSummary: React.FC<QRCodeSummaryProps> = ({ summary }) => {
  const grouped = Object.entries(summary).reduce<Record<string, Record<string, string>>>((acc, [key, value]) => {
    const [section, field] = key.split("-");
    if (!acc[section]) acc[section] = {};
    acc[section][field] = value;
    return acc;
  }, {});

  return (
    <div className="p-4 border rounded bg-white">
      <h2 className="text-xl font-bold mb-4">QR Code Summary</h2>
      {Object.entries(grouped).map(([section, fields]) => (
        <div key={section} className="mb-4">
          <h3 className="text-lg font-semibold capitalize mb-2">{section}</h3>
          {Object.entries(fields).map(([field, val]) => (
            <p key={field}>
              <strong>{field.replace(/([A-Z])/g, " $1")}: </strong>
              {val}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QRCodeSummary;
