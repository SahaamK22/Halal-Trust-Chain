import Navbar from '../../components/navbar';
import { useState } from 'react';

export default function BatchEntry() {
  const [formData, setFormData] = useState({
    animalId: '',
    breed: '',
    gender: '',
    age: '',
    feedType: '',
    vaccinations: '',
    farmerName: '',
    farmName: '',
    origin: '',
    transportDetails: '',
    slaughterhouse: '',
    slaughtermanId: '',
    inspectionOfficer: '',
    slaughterDateTime: '',
    meatGrading: '',
    halalAuditor: '',
    storageTemp: '',
    coldInTime: '',
    coldOutTime: '',
    meatType: '',
    packingDetails: '',
    certification: '',
    dispatchDetails: '',
    shippingLine: '',
    deliveryTransport: '',
    buyerDetails: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Future: upload to backend or blockchain
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Batch Entry Form</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key}>
              <label className="block mb-1 font-medium capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type={key.includes('Date') || key.includes('Time') ? 'datetime-local' : 'text'}
                name={key}
                value={value}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Submit Batch
          </button>
        </form>
      </div>
    </>
  );
}