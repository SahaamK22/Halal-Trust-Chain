"use client";

import React from "react";
import { QRCodeCanvas } from "qrcode.react";

interface QRCodeSummaryProps {
  data: Record<string, any>;
}

const QRCodeSummary: React.FC<QRCodeSummaryProps> = ({ data }) => {
  const qrValue = JSON.stringify(data);

  return (
    <div className="space-y-4 p-4 rounded shadow bg-white">
      <h2 className="text-xl font-bold text-gray-800">QR Code Summary</h2>
      <QRCodeCanvas value={qrValue} size={200} />
      <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto whitespace-pre-wrap">
        {qrValue}
      </pre>
    </div>
  );
};

export default QRCodeSummary;
