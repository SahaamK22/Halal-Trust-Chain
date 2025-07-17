'use client'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>YesHalal</title>
      </Head>

      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <nav className="flex gap-6 text-lg font-medium text-gray-800">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about-us" className="hover:text-blue-600">About Us</a>
          <a href="/how-it-works" className="hover:text-blue-600">How It Works</a>
          <a href="/contact-us" className="hover:text-blue-600">Contact</a>
        </nav>

        <a
          href="/dashboard"
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-gray-800"
        >
          Demo Version
        </a>
      </header>

      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-20 text-center bg-gray-50">
        <h1 className="text-5xl font-bold mb-4">Welcome to YesHalal</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your trusted Halal Meat Traceability Platform powered by Blockchain.
        </p>
        <a
          href="/dashboard"
          className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 text-lg"
        >
          Go to Admin Dashboard
        </a>
      </main>

      <footer className="text-center py-6 text-gray-500 bg-white border-t">
        © 2025 YesHalal
      </footer>
    </>
  )
}
