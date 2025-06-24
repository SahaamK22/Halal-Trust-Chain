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
    <div className="space-y-8">
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
