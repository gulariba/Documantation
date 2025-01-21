import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <div>
      {/* First Section with Tailwind Background */}
      <section className="relative h-[50vh] bg-cover bg-center bg-[url('/Spic1.png')]">
        <div className="absolute inset-0 bg-white opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          {/* Small Image in Center */}
          <div className="mb-4">
            <Image
              src="/Spic2.png"
              alt="Blog Icon"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          <p className="text-lg md:text-xl mt-4">
            <Link href="/">Home</Link> &gt; Blog
          </p>
        </div>
      </section>

      {/* 2nd Section: Blog Content with Two Columns (65:35 Ratio) */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* First Column (65% width) */}
            <div className="md:col-span-3 space-y-6">
              {/* First Post */}
              <div>
                <Image
                  src="/b7.jpeg"
                  alt="Going On"
                  width={600}
                  height={400}
                  className="w-full object-cover rounded-lg"
                />
                <h1 className="text-2xl md:text-3xl font-bold mt-4">Going all-in with millennial design</h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros pellentesque.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Second Post */}
              <div className="mt-12">
                <Image
                  src="/b9.jpeg"
                  alt="Going On Again"
                  width={600}
                  height={400}
                  className="w-full object-cover rounded-lg"
                />
                <h1 className="text-2xl md:text-3xl font-bold mt-4">Exploring New ways of decorating</h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros pellentesque.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Third Post */}
              <div className="mt-12">
                <Image
                  src="/b8.jpeg"
                  alt="Third Post"
                  width={600}
                  height={400}
                  className="w-full object-cover rounded-lg"
                />
                <h1 className="text-2xl md:text-3xl font-bold mt-4">Hand made pieces that took time to make</h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros pellentesque.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>
            </div>

            {/* Second Column (35% width) for Recent Posts */}
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>

              {/* Recent Post Items */}
              {['b6', 'b4', 'b3', 'b2', 'b1'].map((img, idx) => (
                <div key={idx} className="flex items-center space-x-4 mb-6">
                  <Image
                    src={`/${img}.png`}
                    alt={`Recent Post ${idx + 1}`}
                    width={100}
                    height={100}
                    className="object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-black font-bold">Post Title {idx + 1}</h2>
                    <p className="text-gray-600 text-sm">03 Aug 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: CONCEPT Posts */}
      <section className="bg-[#FAF4F4] text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ title: 'Free Delivery', description: 'For all orders over $50, consectetur adipiscing elit.' },
              { title: '90 Days Return', description: 'If the product has an issue, consectetur adipiscing elit.' },
              { title: 'Secure Payments', description: '100% secure payments, consectetur adipiscing elit.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h2 className="text-black font-bold text-2xl md:text-3xl">{item.title}</h2>
                <p className="text-lg text-gray-700 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;