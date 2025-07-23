'use client'

import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function QRCodeSummary() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const { data: summary, isLoading, isError } = useQuery({
    queryKey: ['summary', id],
    queryFn: async () => {
      const res = await axios.get(`/api/summary?id=${id}`)
      return res.data
    },
    enabled: !!id,
  })

  if (!id) {
    return <p className="text-red-500">No QR ID provided in URL.</p>
  }

  if (isLoading) return <p>Loading summary...</p>
  if (isError) return <p>Error loading summary. Please try again.</p>

  const consumerFields = [
    { label: 'Animal ID', value: summary?.animalId },
    { label: 'Breed', value: summary?.breed },
    { label: 'Halal Certified By', value: summary?.halalCertificationId },
    { label: 'Meat Cut', value: summary?.meatCutType },
    { label: 'Packaging Date', value: summary?.packagingDate },
    { label: 'Expiry Date', value: summary?.expiryDate },
    { label: 'Weight (kg)', value: summary?.weight },
    { label: 'Transport Conditions', value: summary?.transportConditions },
    { label: 'Storage Facility', value: summary?.coldStorageName },
  ]

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-2xl mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">Halal Meat Product Summary</h1>
      <ul className="space-y-2">
        {consumerFields.map(({ label, value }) => (
          <li key={label} className="text-gray-700">
            <strong>{label}:</strong> {value || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  )
}
