'use client';
import { useState } from 'react';
import { saveEntry } from '../components/utils/saveEntry';

export default function ShippingForm() {
  if (typeof window === 'undefined') return null;
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
    saveEntry(formData.animalId, 'Shipping', formData);
    alert('Shipping Entry Saved Successfully!');
    setFormData({
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
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Shipping & Delivery Entry</h2>

      {[
        ['animalId', 'Animal ID'],
        ['shippingCompany', 'Shipping Company Name'],
        ['shipmentId', 'Container / Shipment ID'],
        ['originPort', 'Origin Port / Location'],
        ['destinationPort', 'Destination Port / Country'],
        ['temperatureRequirements', 'Temperature Requirements'],
        ['deliveryStatus', 'Delivery Status (e.g., In Transit)'],
        ['trackingNumber', 'Tracking Number (Optional)'],
      ].map(([name, placeholder]) => (
        <input
          key={name}
          type="text"
          name={name}
          placeholder={placeholder}
          value={formData[name as keyof typeof formData]}
          onChange={handleChange}
          className="input"
          required={name !== 'trackingNumber'}
        />
      ))}

      <label className="block text-sm font-medium">Departure Date</label>
      <input
        type="date"
        name="departureDate"
        value={formData.departureDate}
        onChange={handleChange}
        className="input"
        required
      />

      <label className="block text-sm font-medium">Arrival Date</label>
      <input
        type="date"
        name="arrivalDate"
        value={formData.arrivalDate}
        onChange={handleChange}
        className="input"
        required
      />

      <select
        name="deliveryMode"
        value={formData.deliveryMode}
        onChange={handleChange}
        className="input"
        required
      >
        <option value="">Delivery Mode</option>
        <option value="Air">Air</option>
        <option value="Sea">Sea</option>
        <option value="Land">Land</option>
      </select>

      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
        Save Entry
      </button>
    </form>
  );
}
