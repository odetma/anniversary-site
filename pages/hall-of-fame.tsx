import Head from 'next/head';

const awards = [
  {
    category: "Food & Dining",
    items: [
      {
        title: "Ketchup on Pizza Champion",
        description: "For consistently putting ketchup on pizza despite all protests",
        year: "2017-Present",
        icon: "🍅"
      },
      {
        title: "Midnight Burger Hero",
        description: "For going out late at night to satisfy sudden burger cravings",
        year: "Multiple Times",
        icon: "🍔"
      },
      {
        title: "Pizza Moment Creator",
        description: "For creating the most peaceful moments with just a pizza and a sofa",
        year: "2018-Present",
        icon: "🍕"
      }
    ]
  },
  {
    category: "Gaming & Entertainment",
    items: [
      {
        title: "Barca Master",
        description: "For being the best Barca fan",
        year: "2019-Present",
        icon: "⚽"
      },
      {
        title: "Buffy Expert",
        description: "For extensive knowledge of all things Buffy",
        year: "2020-Present",
        icon: "📺"
      },
      {
        title: "Once you go black, you never go back",
        description: "For showing me the way black people do it",
        year: "Ongoing",
        icon: "😎"
      }
    ]
  },
  {
    category: "Relationship Skills",
    items: [
      {
        title: "Most Patient Human Alive",
        description: "For putting up with all the craziness",
        year: "2016-Present",
        icon: "😇"
      },
      {
        title: "Worry Warrior",
        description: "For always checking if everything is okay",
        year: "2017-Present",
        icon: "❤️"
      },
      {
        title: "The Bugs killer",
        description: "for killing all the bugs in our house",
        year: "2016-Present",
        icon: "🙅‍♂️"
      }
    ]
  },
  {
    category: "Special Achievements",
    items: [
      {
        title: "Best Snorer",
        description: "For creating the most soothing sleep soundtrack",
        year: "2018-Present",
        icon: "😴"
      },
      {
        title: "Sofa King",
        description: "For mastering the art of doing nothing",
        year: "2017-Present",
        icon: "🛋️"
      },
      {
        title: "Finished? Champion",
        description: "For perfecting the art of the 'Finished?' question",
        year: "2016-Present",
        icon: "🏆"
      }
    ]
  }
];

export default function HallOfFame() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Head>
        <title>Hall of Fame - 8 Years of Us</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Hall of Fame (and Shame)</h1>
          <p className="text-xl text-gray-600">Celebrating all your amazing (and sometimes questionable) achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((category) => (
            <div key={category.category} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-6">{category.category}</h2>
              <div className="space-y-6">
                {category.items.map((award) => (
                  <div key={award.title} className="border-l-4 border-red-500 pl-4">
                    <div className="flex items-start">
                      <span className="text-4xl mr-4">{award.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{award.title}</h3>
                        <p className="text-gray-600">{award.description}</p>
                        <p className="text-sm text-gray-500 mt-1">{award.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-red-100 p-6 rounded-lg inline-block">
            <p className="text-xl text-red-600 font-semibold">
              And the most important award goes to...
            </p>
            <p className="text-2xl mt-2">
              For being the most amazing boyfriend for 8 years and counting! 🏆❤️
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 