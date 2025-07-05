import Navbar from '@/components/Navbar';


export default function HowItWorks() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">How It Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">1. Traceable Sourcing</h2>
            <p className="text-gray-600">Each animal has a unique ID and traceable history on blockchain.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">2. Smart Contract Verified</h2>
            <p className="text-gray-600">Stages of meat journey are recorded and immutable.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">3. Transparent to All</h2>
            <p className="text-gray-600">Users can verify data publicly anytime.</p>
          </div>
        </div>
      </div>
    </>
  );
}