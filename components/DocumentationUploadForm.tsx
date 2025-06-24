'use client';

import { useState } from 'react';
import { saveEntry } from '../components/utils/saveEntry';

// ✅ Define the correct type for each document
type DocumentEntry = {
  batchCode: string;
  uploadDate: string;
  documentName: string;
  file: File | null;
  notes: string;
};

export default function DocumentationUploadForm() {
  const [animalId, setAnimalId] = useState('');
  const [documents, setDocuments] = useState<DocumentEntry[]>([
    {
      batchCode: '',
      uploadDate: '',
      documentName: '',
      file: null,
      notes: '',
    },
  ]);

  // ✅ Type-safe change handler
  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newDocs = [...documents];

    if (e.target.name === 'file' && e.target instanceof HTMLInputElement && e.target.files) {
      newDocs[index].file = e.target.files[0];
    } else {
      const { name, value } = e.target;
      newDocs[index] = { ...newDocs[index], [name]: value };
    }

    setDocuments(newDocs);
  };

  const addDocument = () => {
    setDocuments([
      ...documents,
      {
        batchCode: '',
        uploadDate: '',
        documentName: '',
        file: null,
        notes: '',
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveEntry(animalId, 'DocumentationUpload', documents);
    alert('Documentation Uploaded Successfully!');
    setAnimalId('');
    setDocuments([
      {
        batchCode: '',
        uploadDate: '',
        documentName: '',
        file: null,
        notes: '',
      },
    ]);
  };

  return (
    <div className="space-y-4 border p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-semibold mb-4">Documentation & Certification Upload</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Animal ID</label>
          <input
            type="text"
            value={animalId}
            onChange={(e) => setAnimalId(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {documents.map((doc, index) => (
          <div key={index} className="border p-4 rounded bg-gray-50 space-y-4">
            <div>
              <label className="block mb-1 font-medium">Batch Code (Optional)</label>
              <input
                type="text"
                name="batchCode"
                value={doc.batchCode}
                onChange={(e) => handleChange(index, e)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Upload Date</label>
              <input
                type="date"
                name="uploadDate"
                value={doc.uploadDate}
                onChange={(e) => handleChange(index, e)}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Document Name</label>
              <input
                type="text"
                name="documentName"
                value={doc.documentName}
                onChange={(e) => handleChange(index, e)}
                className="w-full border px-3 py-2 rounded"
                placeholder="e.g. Halal Certificate"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Upload File</label>
              <div className="flex items-center space-x-4">
                <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700">
                  Choose File
                  <input
                    type="file"
                    name="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleChange(index, e)}
                    className="hidden"
                  />
                </label>
                <span className="text-sm text-gray-700">
                  {doc.file ? doc.file.name : 'No file selected'}
                </span>
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Notes (Optional)</label>
              <textarea
                name="notes"
                value={doc.notes}
                onChange={(e) => handleChange(index, e)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={addDocument}
            className="text-blue-600 hover:underline"
          >
            + Add Another Document
          </button>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Upload Documentation
          </button>
        </div>
      </form>
    </div>
  );
}
