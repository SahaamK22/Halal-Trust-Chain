'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface GradingPackagingFormProps {
  animalId: string;
  onSave: (data: Record<string, any>) => void;
  onBack: () => void;
}

export default function GradingPackagingForm({
  animalId,
  onSave,
  onBack,
}: GradingPackagingFormProps) {
  const [gradingType, setGradingType] = useState('');
  const [meatCutType, setMeatCutType] = useState('');
  const [packagingType, setPackagingType] = useState('');
  const [weight, setWeight] = useState('');
  const [packagingDate, setPackagingDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [batchCode, setBatchCode] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(`gradingPackaging-${animalId}`);
    if (saved) {
      const data = JSON.parse(saved);
      setGradingType(data.gradingType || '');
      setMeatCutType(data.meatCutType || '');
      setPackagingType(data.packagingType || '');
      setWeight(data.weight || '');
      setPackagingDate(data.packagingDate || '');
      setExpiryDate(data.expiryDate || '');
      setBatchCode(data.batchCode || '');
    }
  }, [animalId]);

  const handleSave = () => {
    const data = {
      animalId,
      gradingType,
      meatCutType,
      packagingType,
      weight,
      packagingDate,
      expiryDate,
      batchCode,
    };
    localStorage.setItem(`gradingPackaging-${animalId}`, JSON.stringify(data));
    onSave(data);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Grading & Packaging Entry</h2>

      <div>
        <Label>Grading Type</Label>
        <Input
          value={gradingType}
          onChange={(e) => setGradingType(e.target.value)}
          placeholder="e.g. Grade A"
        />
      </div>

      <div>
        <Label>Meat Cut Type</Label>
        <Input
          value={meatCutType}
          onChange={(e) => setMeatCutType(e.target.value)}
          placeholder="e.g. Ribeye"
        />
      </div>

      <div>
        <Label>Packaging Type</Label>
        <Input
          value={packagingType}
          onChange={(e) => setPackagingType(e.target.value)}
          placeholder="e.g. Vacuum Packed"
        />
      </div>

      <div>
        <Label>Weight (kg)</Label>
        <Input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="number"
          placeholder="e.g. 12.5"
        />
      </div>

      <div>
        <Label>Packaging Date</Label>
        <Input
          value={packagingDate}
          onChange={(e) => setPackagingDate(e.target.value)}
          type="date"
        />
      </div>

      <div>
        <Label>Expiry Date</Label>
        <Input
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          type="date"
        />
      </div>

      <div>
        <Label>Batch Code</Label>
        <Input
          value={batchCode}
          onChange={(e) => setBatchCode(e.target.value)}
          placeholder="e.g. BATCH-2025-001"
        />
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={handleSave}>Save Grading & Packaging Entry</Button>
      </div>
    </div>
  );
}
