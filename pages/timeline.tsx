import { useState } from 'react';
import Head from 'next/head';

const timelineData = [
  {
    year: 1,
    title: "The Beginning",
    description: "When we first met and you stole my heart with your 'Bad boy' charm",
    highlight: "The moment I almost cry when you touched me for the first time",
    level: "Level 1: Basic Cuddling Achieved",
    quote: "Is this what they call love? Or just really D**?",
  },
  {
    year: 2,
    title: "The Ketchup Revelation",
    description: "The year we discovered your unique pizza topping preferences",
    highlight: "You emberrased me when you asked Ketchup on pizza",
    level: "Level 2: Can Share Food Without Fighting",
    quote: "Ketchup on pizza? Really, Budu?",
  },
  {
    year: 3,
    title: "The Sofa Chronicles",
    description: "Perfecting the art of doing nothing together",
    highlight: "We watched Dark together and our life changed",
    level: "Level 3: Dark became our standard for high quality tv shows",
    quote: "Is this the next Dark?",
  },
  {
    year: 4,
    title: "The Civilization Challenge",
    description: "When we learned to laugh at pronunciation mishaps",
    highlight: "I realized you cannot pronounce 'civilization' correctly",
    level: "Level 4: Can Read Each Other's Minds",
    quote: "It's not 'civilization', it's... never mind",
  },
  {
    year: 5,
    title: "The Worry Warrior",
    description: "When your caring nature really shone through",
    highlight: "First 'are you okay?' check-in",
    level: "Level 5: Can Survive Each Other's Moods",
    quote: "Just checking if you're okay, Budu",
  },
  {
    year: 6,
    title: "We moved in together",
    description: "Perfecting our peaceful moments together",
    highlight: "We realized we need two blankets to survive the night",
    level: "Level 6: Can Share a Blanket Without Fighting",
    quote: "This is what happiness feels like",
  },
  {
    year: 7,
    title: "The extra friendly guy",
    description: "When the waiters always joke around with you at restaurants",
    highlight: "You are the most extra friendly person I know",
    level: "Level 7: King of small talk",
    quote: "You are the only person I can talk all day and not get bored",
  },
  {
    year: 8,
    title: "The Present",
    description: "Still going strong, still in love",
    highlight: "Every moment with you",
    level: "Level 8: Ultimate Relationship Achievement Unlocked",
    quote: "8 years and still can't get enough of you",
  },
];

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Head>
        <title>Our Timeline - 8 Years of Us</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Our Journey Through Time</h1>
          <p className="text-xl text-gray-600">8 years of love, laughter, and pizza moments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Year Selector */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-8">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Years</h2>
              <div className="space-y-2">
                {timelineData.map((year) => (
                  <button
                    key={year.year}
                    onClick={() => setSelectedYear(year.year)}
                    className={`w-full text-left p-2 rounded ${
                      selectedYear === year.year
                        ? 'bg-red-500 text-white'
                        : 'hover:bg-red-100'
                    }`}
                  >
                    Year {year.year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="md:col-span-3">
            {timelineData.map((year) => (
              <div
                key={year.year}
                className={`bg-white p-6 rounded-lg shadow-lg mb-6 transition-all duration-300 ${
                  selectedYear === year.year ? 'scale-105' : 'opacity-50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-red-600">{year.title}</h2>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                    {year.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{year.description}</p>
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <p className="text-red-600 font-semibold">Highlight:</p>
                  <p>{year.highlight}</p>
                </div>
                <div className="italic text-gray-600">
                  "{year.quote}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 