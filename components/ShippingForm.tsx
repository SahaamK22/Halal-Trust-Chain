'use client';
import { useState } from 'react';
import { saveEntry } from '../components/utils/saveEntry';
export default function ShippingForm() {
  const [formData, setFormData] = useState({
    animalId: '',
    shippingCompany: '',
    shipmentId: '',
    originPort: '',
    destinationPort: '',
    departureDate: '',
    arrivalDate: '',
    deliveryMode: '',
    temperatureRequirements: '',
    deliveryStatus: '',
    trackingNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage using the helper
          saveEntry(formData.animalId, 'Shipping', formData);
        
          alert('Farm Entry Saved Successfully!');
        
          // Clear the form after saving
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Shipping & Delivery Entry</h2>

      <input type="text" name="animalId" placeholder="Animal ID" value={formData.animalId} onChange={handleChange} className="input" required />

      <input type="text" name="shippingCompany" placeholder="Shipping Company Name" value={formData.shippingCompany} onChange={handleChange} className="input" required />

      <input type="text" name="shipmentId" placeholder="Container / Shipment ID" value={formData.shipmentId} onChange={handleChange} className="input" required />

      <input type="text" name="originPort" placeholder="Origin Port / Location" value={formData.originPort} onChange={handleChange} className="input" required />

      <input type="text" name="destinationPort" placeholder="Destination Port / Country" value={formData.destinationPort} onChange={handleChange} className="input" required />

      <label className="block text-sm font-medium">Departure Date</label>
      <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} className="input" required />

      <label className="block text-sm font-medium">Estimated Arrival Date</label>
      <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} className="input" required />

      <select name="deliveryMode" value={formData.deliveryMode} onChange={handleChange} className="input" required>
        <option value="">Delivery Mode</option>
        <option value="Air">Air</option>
        <option value="Sea">Sea</option>
        <option value="Land">Land</option>
      </select>

      <input type="text" name="temperatureRequirements" placeholder="Temperature Requirements" value={formData.temperatureRequirements} onChange={handleChange} className="input" required />

      <input type="text" name="deliveryStatus" placeholder="Delivery Status (e.g., In Transit)" value={formData.deliveryStatus} onChange={handleChange} className="input" required />

      <input type="text" name="trackingNumber" placeholder="Tracking Number (Optional)" value={formData.trackingNumber} onChange={handleChange} className="input" />

      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
        Save Entry
      </button>
    </form>
  );
}
