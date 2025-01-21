import Hero from '@/app/Components/Hero';
import ShopProduct from '@/app/Components/ShopProduct';
import NewArrivals from '@/app/Components/NewArrivals';
import client from "@/sanity/lib/client";
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: string;
  image_url: string;
  rating: number;
}

const getProducts = async (): Promise<Product[]> => {
  const products = await client.fetch(
    `*[_type=="product"][0..21]{
      _id,
      name,
      description,
      price,
      "image_url": image.asset->url,
      rating
    }`
  );
  return products;
};

const Home = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <Hero />
      <ShopProduct />

      {/* Top Picks Section */}
      <div className="w-full min-h-[800px]">
        <div className="flex flex-col items-center text-center">
          <p className="font-[500] text-[36px] leading-[54px] mt-20">
            Top Picks For You
          </p>
          <p className="font-[500] text-[16px] leading-[24px] text-[#9F9F9F] mt-5 max-w-2xl">
            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 sm:px-6 w-full">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-28">
          <Link href='../Shop'>
            <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] transition-transform hover:scale-105 hover:text-gray-700">
              View More
            </p>
          </Link>
        </div>
      </div>

      <NewArrivals />

      {/* Our Blog Section */}
      <div className="w-full min-h-[844px] bg-[#FFFFFF] px-11">
        <div className="flex flex-col items-center text-center">
          <p className="font-[500] text-[36px] leading-[54px]">Our Blogs</p>
          <p className="text-[#9F9F9F] font-[500] text-[16px] leading-[24px] mt-4">
            Find a bright idea to suit your taste with our great selection
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 w-full">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                </div>
                <div className="text-gray-600 mt-2 flex justify-center">
                  <Link href="/Blogpage">
                    <p className="underline hover:text-gray-700">
                      {product.price}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-28">
          <Link href='/Blogpage'>
            <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[20px] transition-transform hover:scale-105 hover:text-gray-700">
              View All Post
            </p>
          </Link>
        </div>
      </div>

      {/* Contact to Instagram Section */}
      <div className="relative w-full h-auto">
        <div className="w-full h-[450px]">
          <Image
            src={"/pic12.png"}
            alt="Instagram Banner"
            width={1440}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <p className="font-bold text-[40px] md:text-[60px] leading-[50px] md:leading-[90px]">
              Our Instagram
            </p>
            <p className="font-[400] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px]">
              Follow our store on Instagram
            </p>
          </div>
          <div>
            <Link href='https://www.instagram.com/'>
              <button className="w-[200px] h-[50px] md:w-[255px] md:h-[64px] rounded-full bg-white transition-transform hover:scale-105 text-black font-[500] text-[16px] md:text-[20px] drop-shadow-lg">
                Follow Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
