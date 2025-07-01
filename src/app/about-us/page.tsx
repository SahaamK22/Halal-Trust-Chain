import Navbar from '../components/navbar';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg text-gray-700 text-center">
          YesHalal is building the world’s first blockchain-based halal meat traceability platform. Our mission is to provide ethical, transparent, and verifiable halal meat products — from farm to fork.
        </p>
      </div>
    </>
  );
}