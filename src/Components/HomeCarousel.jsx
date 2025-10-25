import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PlantCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const products = [
    {
      id: 1,
      name: 'Haworthia Attenuata',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/collections/category-img-1.jpg?v=1746420219',
      link: '/shop/haworthia-attenuata',
      description: 'Beautiful succulent with striking zebra-like patterns',
    },
    {
      id: 2,
      name: 'Indoor Houseplants',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/collections/category-img-2.jpg?v=1746420250',
      link: '/shop/indoor-houseplants',
      description: 'Perfect plants to purify your indoor air',
    },
    {
      id: 3,
      name: 'Philodendron Plant',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/collections/category-img-3.jpg?v=1746420250',
      link: '/shop/philodendron-plant',
      description: 'Lush green foliage that thrives indoors',
    },
    {
      id: 4,
      name: 'Snake Plant',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/collections/category-img-1.jpg?v=1746420219',
      link: '/shop/snake-plant',
      description: 'Low-maintenance plant with striking upright leaves',
    },
    {
      id: 5,
      name: 'Monstera Deliciosa',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/collections/category-img-2.jpg?v=1746420250',
      link: '/shop/monstera-deliciosa',
      description: 'Iconic tropical plant with split leaves',
    },
  ];

  // Auto-scroll functionality - only for carousel view
  useEffect(() => {
    if (!isHovered && carouselRef.current && window.innerWidth < 768) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered, products.length]);

  // Manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Plants Make Life Better Section */}
      <section className="md:py-16 py-2 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#81BA00] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#81BA00] rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Plants Make Life Better</h2>
            <div className="w-20 h-1 bg-[#81BA00] mx-auto mb-2 md:mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Carousel for Small Screens */}
          <div className="block md:hidden">
            <div className="relative">
              {/* Carousel Container */}
              <div
                className="overflow-hidden rounded-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  ref={carouselRef}
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {products.map((product) => (
                    <div key={product.id} className="w-full shrink-0">
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="md:p-6 p-2">
                          <h3 className="text-xl font-semibold text-gray-800 mb-1 md:mb-3 group-hover:text-[#81BA00] transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="text-gray-500 mb-2 md:mb-6 text-sm">
                            {product.description}
                          </p>
                          <Link
                            to={product.link}
                            className="inline-flex items-center md:px-6 px-2 py-2 md:py-3 bg-[#81BA00] text-white rounded-md hover:bg-transparent hover:text-[#81BA00] border border-[#81BA00] transition-all duration-300"
                          >
                            SHOP NOW
                            <svg
                              className="w-4 h-4 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 hidden md:block -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300 z-10"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 hidden md:block -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300 z-10"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full hidden md:block transition-all duration-300 ${
                      currentIndex === index ? 'bg-[#81BA00] w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Grid Layout for Large Screens */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#81BA00] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 mb-6 text-sm">
                      {product.description}
                    </p>
                    <Link
                      to={product.link}
                      className="inline-flex items-center px-6 py-3 bg-[#81BA00] text-white rounded-md hover:bg-transparent hover:text-[#81BA00] border border-[#81BA00] transition-all duration-300"
                    >
                      SHOP NOW
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlantCarousel;