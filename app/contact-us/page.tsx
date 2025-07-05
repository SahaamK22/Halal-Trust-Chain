'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

        {submitted ? (
          <div className="text-center text-green-600 text-lg">Thanks! We&rsquo;ll reach out soon.</div>

        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-white p-6 shadow-md rounded-xl space-y-4"
          >
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <input type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input type="email" required className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea rows={4} required className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>

            <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
}
