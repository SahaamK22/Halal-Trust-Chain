'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type ConsumerSummary = {
  animalId: string;
  breed: string;
  slaughterDate: string;
  packagingDate: string;
  expiryDate: string;
  origin: string;
  halalCert: string;
};

function ConsumerContent() {
  const searchParams = useSearchParams();
  const animalId = searchParams.get('animalId');
  const [summary, setSummary] = useState<ConsumerSummary | null>(null);

  useEffect(() => {
    if (!animalId) return;

    const raw = localStorage.getItem(`yeshalal-${animalId}`);
    if (!raw) return;

    const data = JSON.parse(raw);

    const view: ConsumerSummary = {
      animalId: data?.farm?.animalId ?? '',
      breed: data?.farm?.breed ?? '',
      slaughterDate: data?.slaughterhouse?.slaughterDate ?? '',
      packagingDate: data?.gradingPackaging?.packagingDate ?? '',
      expiryDate: data?.gradingPackaging?.expiryDate ?? '',
      origin: data?.farm?.farmLocation ?? '',
      halalCert: data?.slaughterhouse?.halalCertificationId ?? '',
    };

    setSummary(view);
  }, [animalId]);

  return (
    <div className="max-w-xl mx-auto border p-6 mt-10 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">YesHalal Consumer Summary</h1>

      {!animalId ? (
        <p className="text-center text-red-600">No Animal ID Provided</p>
      ) : summary ? (
        <div className="space-y-2 text-sm">
          {Object.entries(summary).map(([key, val]) => (
            <p key={key} className="capitalize">
              <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>
              {String(val)}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No data found for Animal ID: <strong>{animalId}</strong></p>
      )}
    </div>
  );
}

export default function ConsumerViewPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading consumer view...</p>}>
      <ConsumerContent />
    </Suspense>
  );
}
