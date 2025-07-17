// components/FarmEntryForm.tsx
import React, { useState } from "react";

type FarmEntryFormProps = {
  onNext: (data: Record<string, any>) => void;
};

const FarmEntryForm: React.FC<FarmEntryFormProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* your inputs */}
      <button type="submit" className="btn-primary">Next</button>
    </form>
  );
};

export default FarmEntryForm;
