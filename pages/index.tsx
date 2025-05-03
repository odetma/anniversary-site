import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Head>
        <title>8 Years of Us - The Unauthorized (and Hilarious) Biography</title>
        <meta name="description" content="Celebrating 8 years of love, laughter, and pizza moments" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {!showContent ? (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-6">
              Surviving 8 Years with Me – A True Love Story
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Starring: The Simple Person Who Loves Ketchup on Pizza 🍕
            </p>
            <button
              onClick={() => setShowContent(true)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-all transform hover:scale-105"
            >
              Enter if you dare 💀❤️
            </button>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Welcome to Our Story, Budu!</h2>
              <p className="text-xl text-gray-600">
                A journey of 8 years filled with amazing moments and endless love ❤️
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Our Special Moments</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">🍕</span>
                    Pizza moments on the sofa
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">🎮</span>
                    A lot of Sony tournaments and victories
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">❤️</span>
                    Late-night burger runs
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">🤣</span>
                    LOL moments
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">🌟</span>
                    Ethiopian prince who stole my heart
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">🎭</span>
                    The bad boy I managed to win over.
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">🍅</span>
                    Ketchup on pizza enthusiast
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">📺</span>
                    Buffy the Vampire Slayer fan
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-gray-600 mb-4">
                Ready to explore our story?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/timeline">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105">
                    Timeline 📅
                  </button>
                </Link>
                <Link href="/gallery">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105">
                    Gallery 📸
                  </button>
                </Link>
                <Link href="/quiz">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105">
                    Quiz ❓
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 