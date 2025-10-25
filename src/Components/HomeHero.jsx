import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://soilplant-codezeel.myshopify.com/cdn/shop/files/main-banner-1.jpg?v=1668763214&width=900')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">Summer Garden Cactus Plants</h1>
          <p className="text-lg mb-6">Flat 50% Discount</p>
          <a
            href="#"
            className="inline-block bg-[#81BA00] text-white font-semibold text-xl py-2 px-6 border border-[#81BA00] rounded-md hover:bg-transparent hover:text-[#81BA00] transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
