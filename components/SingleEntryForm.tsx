// components/SingleEntryForm.tsx
"use client";

import { useState } from "react";
import FarmEntryForm from "./FarmEntryForm";
import LandTransportForm from "./LandTransportForm";
import SlaughterhouseForm from "./SlaughterhouseForm";
import GradingPackagingForm from "./GradingPackagingForm";
import DocumentationUploadForm from "./DocumentationUploadForm";
import ColdStorageForm from "./ColdStorageForm";
import ShippingForm from "./ShippingForm";
import ReceiverEntryForm from "./ReceiverEntryForm";
import QRCodeSummary from "./QRCodeSummary";

export default function SingleEntryForm() {
  const [stage, setStage] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleNext = (data: Record<string, any>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStage((prevStage) => prevStage + 1);
  };

  const handlePrev = () => setStage((prevStage) => prevStage - 1);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Single Entry Form (Farm to Fork)</h2>

      {stage === 1 && <FarmEntryForm onNext={handleNext} />}
      {stage === 2 && <LandTransportForm onNext={handleNext} onPrev={handlePrev} />}
      {stage === 3 && <SlaughterhouseForm onNext={handleNext} onPrev={handlePrev} />}
      {stage === 4 && <GradingPackagingForm onNext={handleNext} onPrev={handlePrev} />}
      {stage === 5 && <DocumentationUploadForm onNext={handleNext} onPrev={handlePrev} />}
      {stage === 6 && <ColdStorageForm onNext={handleNext} onPrev={handlePrev} />}
      {stage === 7 && <ShippingForm onNext={handleNext} onPrev={handlePrev} />}
      {stage === 8 && <ReceiverEntryForm onNext={handleNext} onPrev={handlePrev} />}
      {stage === 9 && <QRCodeSummary data={formData} />}
    </div>
  );
}
