import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = () => {
  const cards = [
    {
      id: 1,
      title: "Different House Plants",
      subtitle: "Flat 30% Discount",
      image: "https://soilplant-codezeel.myshopify.com/cdn/shop/files/cms-banner-1.jpg?v=1668776330",
      link: "/shop/house-plants",
      badge: "Limited Offer"
    },
    {
      id: 2,
      title: "Green Leaves Plants",
      subtitle: "Flat 30% Discount",
      image: "https://soilplant-codezeel.myshopify.com/cdn/shop/files/cms-banner-2.jpg?v=1668776330",
      link: "/shop/green-plants",
      badge: "Best Seller"
    }
  ];

  return (
    <section className="py-6 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Special Offers</h2>
          <div className="w-20 h-1 bg-[#81BA00] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Don't miss out on our exclusive deals for premium plants
          </p>
        </div>

        {/* Image Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {cards.map((card) => (
            <Link
              key={card.id}
              to={card.link}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 w-full lg:w-1/2"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-[#81BA00] text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {card.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-52 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-conic-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-15 left-80 right-0 md:p-8 z-10">
                <p className="text-black text-lg font-semibold mb-2 transform transition-transform duration-300 group-hover:translate-x-2">
                  {card.subtitle}
                </p>
                <h3 className="text-black text-2xl md:text-3xl font-bold mb-4 transform transition-transform duration-300 group-hover:translate-x-2">
                  {card.title}
                </h3>
                
                {/* Button */}
                <div className="flex items-center">
                  <button className="px-6 py-3 bg-[#81BA00] text-white font-semibold rounded-full transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-[#81BA00] hover:text-[#81BA00] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#81BA00] focus:ring-offset-2">
                    SHOP NOW
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-[#81BA00] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCard;