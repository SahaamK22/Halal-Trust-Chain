// components/LandTransportForm.tsx
import React, { useState } from "react";

type LandTransportFormProps = {
  onNext: (data: Record<string, any>) => void;
  onPrev: () => void;
};

const LandTransportForm: React.FC<LandTransportFormProps> = ({ onNext, onPrev }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* your inputs */}
      <div className="flex justify-between">
        <button type="button" onClick={onPrev} className="btn-secondary">Back</button>
        <button type="submit" className="btn-primary">Next</button>
      </div>
    </form>
  );
};

export default LandTransportForm;
