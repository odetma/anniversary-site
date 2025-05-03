import Head from 'next/head';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    {
      src: '/images/gallery/WhatsApp Image 2025-05-03 at 20.30.38_7964d55f.jpg',
      alt: 'Our first moment',
      description: 'The beginning of our beautiful journey ❤️'
    },
    {
      src: '/images/gallery/WhatsApp Image 2025-05-03 at 20.31.38_58d1f603.jpg',
      alt: 'Special moment',
      description: 'Creating memories together 🎭'
    },
    {
      src: '/images/gallery/WhatsApp Image 2025-05-03 at 20.32.24_8909ac8b.jpg',
      alt: 'Another special moment',
      description: 'Every moment with you is precious 💫'
    },
    {
      src: '/images/gallery/WhatsApp Image 2025-05-03 at 20.32.51_94934164.jpg',
      alt: 'Beautiful memory',
      description: 'Our love story continues to grow 🌹'
    },
    {
      src: '/images/gallery/WhatsApp Image 2025-05-03 at 20.33.43_9da3b21e.jpg',
      alt: 'Latest memory',
      description: '8 years of love and counting... 💑'
    },
    {
      src: '/images/gallery/WhatsApp Image 2025-05-03 at 20.38.42_6ce265c7.jpg',
      alt: 'New memory',
      description: 'Making new memories every day ✨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Head>
        <title>Our Gallery - 8 Years of Us</title>
        <meta name="description" content="A collection of our favorite moments together" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600">
            A collection of our favorite moments together 📸
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="relative h-80 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg p-2"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            More memories to come... ❤️
          </p>
        </div>
      </main>
    </div>
  );
} 