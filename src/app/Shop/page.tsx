"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
 
  const product = [
    { title: "sylthrine" },
    { price: "Rp 2.500.000" },
  ];



  const product1 = [
    { title1: "Lolito" },
    { price1: "7.500.000" },
  ];


  const product2 = [
    { title: "Respira"},
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "Rp 500.000" },
  ];
  const product3 = [
    { title: "Leviosa", price: "$80" },
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "Rp 2.500.00" },
  ];
  const product4 = [
    { title: "Lalito"},
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "Rp 2.500.000" },
  ];
  const product5 = [
    { title: "Respira"},
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "7.500.000" },
  ];
  const product6 = [
    { title: "Sytherina"},
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "Rp 500.000" },
  ];
  const product7 = [
    { title: "Leviosa"},
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "Rp 2.500.00" },
  ];
  const product8 = [
    { title: "Lalito"},
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "Rp 2.500.000" },
  ];
  
  const product9 = [
    { title: "Respira"},
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "7.500.000" },
  ];
  const product10 = [
    { title: "Sytherina"},
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "Rp 500.000" },
  ];
  const product11 = [
    { title: "Levisio"},
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "Rp 2.500.00" },
  ];
  const product12 = [
    { title: "Lalito"},
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "Rp 2.500.000" },
  ];
  const product13 = [
    { title: "Respira"},
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "7.500.000" },
  ];

  const product14 = [
    { title: "Sytherina"},
    { title: "Library Studies", price: "$120" },
    { title: "Web Design", price: "Rp 500.000" },
  ];
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
      
        <div className="flex items-center space-x-4">
          <Image
            src="/images/Meubel House_Logos-05.png"
            alt="logo-img"
            width={50}
            height={32}
            style={{ objectFit: "contain" }}
          />
          <h1 className="font-title text-lg font-bold">Furniro</h1>
        </div>

        
        <nav className="flex items-center justify-between w-full">
          <ul className="flex items-center space-x-6 mx-auto">
            <li>
            <Link href="/" target="_blank">Home</Link>
            </li>
            <li>
            <Link href="/Shop" target="_blank">Shop</Link>
            </li>
            <li>
            <Link href="/Blog" target="_blank">Blog</Link>
            </li>
            <li>
            <Link href="/Contact" target="_blank">Contact</Link>
            </li>
          </ul>

          
          <div className="ml-auto">
    <Image
      src="/images/vector1.png"
      alt="icon"
      width={32}
      height={32}
      style={{ objectFit: "contain" }}
    />
  </div>
  <div className="flex items-center gap-[45px] ml-auto">
          <Link href="/profile">
            <Icon
              icon="mdi:account-outline"
              className="w-7 h-7 text-black"
              aria-label="Account"
            />
          </Link>
          <Link href="/search">
            <Icon
              icon="mdi:magnify"
              className="w-7 h-7 text-black"
              aria-label="Search"
            />
          </Link>
          <Link href="/wishlist">
            <Icon
              icon="mdi:heart-outline"
              className="w-7 h-7 text-black"
              aria-label="Wishlist"
            />
          </Link>
          <Link href="/cart">
            <Icon
              icon="mdi:cart-outline"
              className="w-7 h-7 text-black"
              aria-label="Cart"
            />
          </Link>
        </div>

        </nav>

        {/* Mobile Menu */}
        <div className="block sm:hidden">
          <button className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      
      <div className="relative">
        <Image
          src="/images/shopheader.png"
          alt="header"
          width={1440}
          height={316}
          style={{ objectFit: "cover" }}
        />

<div className="absolute inset-0 flex flex-col items-center justify-center text-black">
    <h2 className="text-4xl font-bold">Shop</h2>
    <p className="mt-2 text-lg">
      <span className="text-black-300">Home</span> &gt; <span className="text-black">Shop</span>
    </p>
  </div>
      </div>

      <section className="container mx-auto py-16 px-4">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      { src: "/images/logo1.png", title: "Sylthrine", price: "Rp 2.500.000" },
      { src: "/images/logo6.png",title: "Lalito", price: "Rp 2.500.000"},
      { src: "/images/logo3.png", title: "Respira", price: "Rp 7.000.000" },
      { src: "/images/logo4.png", title: "Leviosa", price: "5.000.000" },
      { src: "/images/logo5.png", title: "Sytherina", price: "Rp 2.500.000" },
      { src: "/images/logo6.png", title: "Lalito", price: "Rp 2.500.000" },
      { src: "/images/logo7.png", title: "Levisio", price: "Rp 2.500.000" },
      { src: "/images/logo8.png", title: "Respira", price: "Rp 7.000.000" },
      { src: "/images/logo9.png", title: "Sytherina", price: "Rp 500.000" },
      { src: "/images/logo10.png", title: "Lalito", price: "Rp 2.500.000" },
      { src: "/images/logo11.png", title: "Levisio", price: "Rp 2.500.000" },
      { src: "/images/logo12.png", title: "Respira", price: "Rp 7.000.000" },
      { src: "/images/logo13.png", title: "Sytherina", price: "Rp 500.000" },
      { src: "/images/logo14.png", title: "Lalito", price: "2.500.000" },
      { src: "/images/logo15.png", title: "Levisio", price: "2.500.000" },
      { src: "/images/logo16.png", title: "Respira", price: "2.500.000" },
    ].map((product, index) => (
      <div key={index} className="flex flex-col items-center">
        <Image
          src={product.src}
          alt={product.title}
          width={285}
          height={420}
          style={{ objectFit: "contain" }}
          className="mb-4"
        />
        <p className="font-bold text-gray-800">{product.title}</p>
        <p className="text-gray-600">{product.price}</p>
      </div>
    ))}
  </div>
</section>


      {/*yaha se */}
      <div className="bg-gray-50 py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
     
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
          Newsletter
        </h3>
      </div>

      <div>
        <form
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
          action="/subscribe"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</div>


    /* Footer */

    <footer className="bg-gray-100 py-12">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
  
      <h2 className="font-title"><b>Funiro</b></h2>

      <div>
        <h3 className="font-bold text-lg mb-4">Courses</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Business</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Development</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Technology</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Design</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Programming</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Career</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Resume</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Learning</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Interview Preparation</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Jobs</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4">About Us</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Help/Support</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms and Conditions</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Partners</a></li>
        </ul>
      </div>

      
      <div>
        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="text-center text-gray-600 mt-12">
    <p>&copy; 2023 furino. All rights reserved. <span className="text-blue-600 hover:text-blue-700">Privacy Policy</span> | <span className="text-blue-600 hover:text-blue-700">Terms of Service</span> | <span className="text-blue-600 hover:text-blue-700">Cookie Settings</span></p>
  </div>
</footer>
</header>
  );
}
