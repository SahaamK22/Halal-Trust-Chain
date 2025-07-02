'use client';

import FarmEntryForm from './FarmEntryForm';
import LandTransportForm from './LandTransportForm';
import SlaughterhouseForm from './SlaughterhouseForm';
import GradingPackagingForm from './GradingPackagingForm';
import DocumentationUploadForm from './DocumentationUploadForm';
import ColdStorageForm from './ColdStorageForm';
import ShippingForm from './ShippingForm';

export default function SingleEntryForm() {
  return (
    <div className="space-y-8 border p-6 rounded-xl shadow bg-white">
      <h2 className="text-2xl font-semibold text-center">Single Entry Form (Complete Journey)</h2>

      <FarmEntryForm />
      <LandTransportForm />
      <SlaughterhouseForm />
      <GradingPackagingForm />
      <DocumentationUploadForm />
      <ColdStorageForm />
      <ShippingForm />
    </div>
  );
}
