'use client';
import { useState } from 'react';
import { saveEntry } from '../components/utils/saveEntry';

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
    { batchCode: '', uploadDate: '', documentName: '', file: null, notes: '' }
  ]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedDocs = [...documents];
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === 'file' && files && files.length > 0) {
      updatedDocs[index].file = files[0];
    } else {
      updatedDocs[index] = { ...updatedDocs[index], [name]: value };
    }

    setDocuments(updatedDocs);
  };

  const addDocument = () => {
    setDocuments([...documents, { batchCode: '', uploadDate: '', documentName: '', file: null, notes: '' }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveEntry(animalId, 'DocumentationUpload', documents);
    alert('Documentation Uploaded Successfully!');
    setAnimalId('');
    setDocuments([{ batchCode: '', uploadDate: '', documentName: '', file: null, notes: '' }]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 border p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-semibold mb-4">Documentation & Certification Upload</h2>

      <input type="text" placeholder="Animal ID" value={animalId} onChange={(e) => setAnimalId(e.target.value)} className="input" required />

      {documents.map((doc, index) => (
        <div key={index} className="border p-4 rounded bg-gray-50 space-y-4">
          <input type="text" name="batchCode" placeholder="Batch Code (Optional)" value={doc.batchCode} onChange={(e) => handleChange(index, e)} className="input" />
          <input type="date" name="uploadDate" value={doc.uploadDate} onChange={(e) => handleChange(index, e)} className="input" required />
          <input type="text" name="documentName" placeholder="Document Name (e.g., Halal Certificate)" value={doc.documentName} onChange={(e) => handleChange(index, e)} className="input" required />

          <div className="flex items-center space-x-4">
            <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700">
              Choose File
              <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleChange(index, e)} className="hidden" />
            </label>
            <span className="text-sm text-gray-700">{doc.file?.name || 'No file selected'}</span>
          </div>

          <textarea name="notes" placeholder="Notes (Optional)" value={doc.notes} onChange={(e) => handleChange(index, e)} className="input" />
        </div>
      ))}

      <div className="flex justify-between items-center">
        <button type="button" onClick={addDocument} className="text-blue-600 hover:underline">+ Add Another Document</button>
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Upload Documentation</button>
      </div>
    </form>
  );
}
