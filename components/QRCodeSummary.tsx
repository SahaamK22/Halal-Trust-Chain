'use client';
import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QRCodeSummary() {
  if (typeof window === 'undefined') return null;
  const [animalId, setAnimalId] = useState('');
  const [data, setData] = useState<any>(null);

  const handleLoadData = () => {
    const raw = localStorage.getItem(`yeshalal-${animalId}`);
    if (!raw) {
      alert('No data found for that Animal ID');
      return;
    }
    setData(JSON.parse(raw));
  };

  const getConsumerView = (fullData: any) => ({
    animalId: fullData?.farm?.animalId ?? '',
    breed: fullData?.farm?.breed ?? '',
    slaughterDate: fullData?.slaughterhouse?.slaughterDate ?? '',
    packagingDate: fullData?.gradingPackaging?.packagingDate ?? '',
    expiryDate: fullData?.gradingPackaging?.expiryDate ?? '',
    origin: fullData?.farm?.farmLocation ?? '',
    halalCert: fullData?.slaughterhouse?.halalCertificationId ?? '',
  });

  return (
    <div className="space-y-6 border p-6 rounded-xl shadow-lg mt-10 max-w-2xl mx-auto bg-white">
      <h2 className="text-2xl font-semibold text-center">QR Code & Trace Summary</h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter Animal ID"
          value={animalId}
          onChange={(e) => setAnimalId(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          onClick={handleLoadData}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Load Data
        </button>
      </div>

      {data && (
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Buyer View (All Data)</h3>
            <pre className="bg-gray-100 p-4 rounded max-h-96 overflow-auto text-sm">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Consumer View (Trust Summary)</h3>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              {JSON.stringify(getConsumerView(data), null, 2)}
            </pre>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-lg font-bold mb-2">QR Code (Consumer Summary)</h3>
            <div className="inline-block bg-white p-4 rounded shadow">
              <QRCode
                value={`https://yes-halal.vercel.app/consumer-view?animalId=${encodeURIComponent(animalId)}`}
                size={200}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">Scan to verify on YesHalal portal</p>
          </div>
        </div>
      )}
    </div>
  );
}
