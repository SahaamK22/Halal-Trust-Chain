import React from 'react';

export default function BatchUploadForm() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Batch Upload Form</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Upload CSV/Excel File</label>
          <input type="file" className="mt-1 block w-full border border-gray-300 p-2 rounded" />
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Upload Batch
          </button>
        </div>
      </form>
    </div>
  );
}
