'use client';

import React, { useState } from 'react';
import FarmEntryForm from './FarmEntryForm';
import LandTransportForm from './LandTransportForm';
import SlaughterhouseForm from './SlaughterhouseForm';
import GradingPackagingForm from './GradingPackagingForm';
import ColdStorageForm from './ColdStorageForm';
import ShippingForm from './ShippingForm';
import DocumentationUploadForm from './DocumentationUploadForm';
import QRCodeSummary from './QRCodeSummary';

const FORM_STEPS = [
  'Farm Entry',
  'Land Transport',
  'Slaughterhouse',
  'Grading & Packaging',
  'Cold Storage',
  'Shipping',
  'Documentation',
  'Summary',
];

const SingleEntryForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleNext = (data?: Record<string, any>) => {
    if (data) {
      const updatedData = { ...formData, ...data };
      setFormData(updatedData);
      localStorage.setItem('singleEntryData', JSON.stringify(updatedData));
    }
    setStep((prev) => Math.min(prev + 1, FORM_STEPS.length - 1));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSaveStage = (stageKey: string, data: Record<string, any>) => {
    const updated = { ...formData, [stageKey]: data };
    setFormData(updated);
    localStorage.setItem('singleEntryData', JSON.stringify(updated));
  };

  const commonProps = {
    onNext: handleNext,
    onPrev: handlePrev,
  };

  const animalId = formData?.farm?.animalId || '';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Single Animal Entry</h1>
      <div className="mb-4">
        <p className="text-gray-700">Step {step + 1} of {FORM_STEPS.length}: <strong>{FORM_STEPS[step]}</strong></p>
      </div>

      {step === 0 && <FarmEntryForm {...commonProps} />}
      {step === 1 && (
        <LandTransportForm
          {...commonProps}
          animalId={animalId}
          onSave={(data) => handleSaveStage('transport', data)}
        />
      )}
      {step === 2 && (
        <SlaughterhouseForm
          {...commonProps}
          animalId={animalId}
          onSave={(data) => handleSaveStage('slaughterhouse', data)}
        />
      )}
      {step === 3 && (
        <GradingPackagingForm
          {...commonProps}
          animalId={animalId}
          onSave={(data) => handleSaveStage('grading', data)}
        />
      )}
      {step === 4 && (
        <ColdStorageForm
          {...commonProps}
          animalId={animalId}
          onSave={(data) => handleSaveStage('coldstorage', data)}
        />
      )}
      {step === 5 && (
        <ShippingForm
          {...commonProps}
          animalId={animalId}
          onSave={(data) => handleSaveStage('shipping', data)}
        />
      )}
      {step === 6 && (
        <DocumentationUploadForm
          {...commonProps}
          animalId={animalId}
          onSave={(data) => handleSaveStage('documents', data)}
        />
      )}
      {step === 7 && <QRCodeSummary data={formData} />}
    </div>
  );
};

export default SingleEntryForm;
