'use client';


import GradingPackagingForm from '../components/GradingPackagingForm';
import QRCodeSummary from '../components/QRCodeSummary';
import ColdStorageForm from '../components/ColdStorageForm';
import DocumentationUploadForm from '../components/DocumentationUploadForm';
import ShippingForm from '../components/ShippingForm';
import SlaughterhouseForm from '../components/SlaughterhouseForm';
import LandTransportForm from '../components/LandTransportForm';
import FarmEntryForm from '../components/FarmEntryForm';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Card, CardContent } from '../components/ui/card';
import BatchUploadForm from '../components/BatchUploadForm';
import UploadHistory from '../components/UploadHistory';

export default function Dashboard() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">YesHalal Admin Dashboard</h1>

      <Tabs defaultValue="batch" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="batch">Batch Upload</TabsTrigger>
          <TabsTrigger value="single">Single Entry</TabsTrigger>
          <TabsTrigger value="history">Upload History</TabsTrigger>
        </TabsList>

        {/* 🔄 Batch Upload Tab */}
        <TabsContent value="batch">
          <Card>
            <CardContent className="p-4">
              <BatchUploadForm />
            </CardContent>
          </Card>
        </TabsContent>

        {/* 🔄 Single Entry Tab */}
        <TabsContent value="single">
          <Card>
            <CardContent className="p-4 space-y-6">
              <FarmEntryForm />
              <LandTransportForm />
              <SlaughterhouseForm />
              <GradingPackagingForm />
              <ColdStorageForm />
              <DocumentationUploadForm />
              <ShippingForm />

              {/* 🔳 QR Code & Summary Section */}
              <hr className="my-6 border-t border-gray-300" />
              <QRCodeSummary />
            </CardContent>
          </Card>
        </TabsContent>

        {/* 🔄 Upload History Tab */}
        <TabsContent value="history">
          <Card>
            <CardContent className="p-4">
              <UploadHistory />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
