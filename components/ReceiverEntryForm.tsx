// components/ReceiverEntryForm.tsx
"use client";

import { useState } from "react";

interface ReceiverEntryFormProps {
  onNext: (data: any) => void;
  onPrev: () => void;
}

export default function ReceiverEntryForm({ onNext, onPrev }: ReceiverEntryFormProps) {
  const [receiverName, setReceiverName] = useState("");
  const [receiverLocation, setReceiverLocation] = useState("");
  const [receiverContact, setReceiverContact] = useState("");
  const [originCountry, setOriginCountry] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");

  const handleSubmit = () => {
    onNext({
      receiverName,
      receiverLocation,
      receiverContact,
      originCountry,
      destinationCountry,
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Receiver & Destination Entry</h3>

      <div>
        <label className="block font-medium">Receiver/Importer Name</label>
        <input
          type="text"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="e.g., Al Barakah Distributors LLC"
        />
      </div>

      <div>
        <label className="block font-medium">Receiver Location (City, Address)</label>
        <input
          type="text"
          value={receiverLocation}
          onChange={(e) => setReceiverLocation(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="e.g., Dubai, UAE"
        />
      </div>

      <div>
        <label className="block font-medium">Receiver Contact (optional)</label>
        <input
          type="text"
          value={receiverContact}
          onChange={(e) => setReceiverContact(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="e.g., +971-..."
        />
      </div>

      <div>
        <label className="block font-medium">Origin Country</label>
        <input
          type="text"
          value={originCountry}
          onChange={(e) => setOriginCountry(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="e.g., Canada"
        />
      </div>

      <div>
        <label className="block font-medium">Destination Country</label>
        <input
          type="text"
          value={destinationCountry}
          onChange={(e) => setDestinationCountry(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="e.g., UAE"
        />
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={onPrev} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          Back
        </button>
        <button onClick={handleSubmit} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Submit & Show QR
        </button>
      </div>
    </div>
  );
}
