import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TrendingProducts = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('bestseller');

  const products = [
    {
      id: 1,
      name: 'Calathea Zebrina Gloria Flower Plant',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/08.jpg?v=1747985424&width=360',
      hoverImage: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/02_50e647cc-d1b5-4d59-9eeb-d05a480b5cb2.jpg?v=1747985425&width=360',
      price: 85.00,
      originalPrice: 97.00,
      discount: 12,
      rating: 4.5,
      reviews: 12,
      category: 'bestseller',
      link: '/contact',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Advi Decorative Zamioculcas Zamiifolia Plant',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/03_2fdd21b2-672c-4cfa-8b87-81c4d184b27b.jpg?v=1747985418&width=360',
      hoverImage: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/02_2e5b81c6-4863-4739-a7c9-632582be8bad.jpg?v=1747985418&width=360',
      price: 32.00,
      originalPrice: 32.00,
      discount: 0,
      rating: 4.2,
      reviews: 8,
      category: 'bestseller',
      link: '/contact',
      badge: 'Popular'
    },
    {
      id: 3,
      name: 'ExoticRarePlants Small Jute Modern Plant',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/10.jpg?v=1747985374&width=360',
      hoverImage: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/02_09b2a4c3-3d63-48e0-b329-115442bf6658.jpg?v=1747985374&width=360',
      price: 32.00,
      originalPrice: 32.00,
      discount: 0,
      rating: 4.8,
      reviews: 15,
      category: 'new',
      link: '/contact',
      badge: 'New'
    },
    {
      id: 4,
      name: 'Posh Garden Rosemary Indoor Plant',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/13.jpg?v=1747985396&width=360',
      hoverImage: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/02_4823952f-effe-4648-9ed8-4071763094f3.jpg?v=1747985396&width=360',
      price: 25.00,
      originalPrice: 25.00,
      discount: 0,
      rating: 4.0,
      reviews: 6,
      category: 'featured',
      link: '/contact',
      badge: 'Featured'
    },
    {
      id: 5,
      name: 'Noreva Hoya Cloaud Farm ZZ Artificial Plant',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/23.jpg?v=1747985441&width=360',
      hoverImage: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/02_e4576d62-bb53-418b-9890-62ca293d1290.jpg?v=1747985441&width=360',
      price: 32.00,
      originalPrice: 32.00,
      discount: 0,
      rating: 4.3,
      reviews: 9,
      category: 'featured',
      link: '/contact',
      badge: 'Eco-Friendly'
    },
    {
      id: 6,
      name: 'Large Ceramic Caladium Potted Plant',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/09.jpg?v=1747985409&width=360',
      hoverImage: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/02_4e760f23-2321-46ef-857d-aad8f6bc29ea.jpg?v=1747985409&width=360',
      price: 45.00,
      originalPrice: 50.00,
      discount: 10,
      rating: 4.7,
      reviews: 20,
      category: 'bestseller',
      link: '/contact',
      badge: 'Limited'
    },
    {
      id: 7,
      name: 'Little Krimson Aspidistra Indoor Plant',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/11.jpg?v=1747985434&width=360',
      hoverImage: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/02_e9d3d360-fa8f-4ab5-93b4-1a442ba6b2c5.jpg?v=1747985434&width=360',
      price: 40.00,
      originalPrice: 45.00,
      discount: 0,
      rating: 4.6,
      reviews: 14,
      category: 'new',
      link: '/contact',
      badge: 'Trending'
    },
    {
      id: 8,
      name: 'Alobtt Plants Mini Potted Artificial Plant',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/05.jpg?v=1747985392&width=360',
      hoverImage: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/02_d4ef40f7-33bb-4042-abcb-cc823e0a2e3f.jpg?v=1747985392&width=360',
      price: 35.00,
      originalPrice: 40.00,
      discount: 12,
      rating: 4.1,
      reviews: 7,
      category: 'new',
      link: '/contact',
      badge: 'Sale'
    }
  ];

  // Filter products based on active filter
  const filteredProducts = products.filter(product => {
    if (activeFilter === 'bestseller') return product.category === 'bestseller';
    if (activeFilter === 'new') return product.category === 'new';
    if (activeFilter === 'featured') return product.category === 'featured';
    return true;
  });

  // Render star rating
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#81BA00] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#81BA00] rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Trending Products</h2>
            <div className="w-20 h-1 bg-[#81BA00]"></div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            <button 
              onClick={() => setActiveFilter('bestseller')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeFilter === 'bestseller' 
                  ? 'bg-[#81BA00] text-white' 
                  : 'bg-transparent border-2 border-[#81BA00] text-[#81BA00] hover:bg-[#81BA00] hover:text-white'
              }`}
            >
              BEST SELLER
            </button>
            <button 
              onClick={() => setActiveFilter('new')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeFilter === 'new' 
                  ? 'bg-[#81BA00] text-white' 
                  : 'bg-transparent border-2 border-[#81BA00] text-[#81BA00] hover:bg-[#81BA00] hover:text-white'
              }`}
            >
              NEW ARRIVALS
            </button>
            <button 
              onClick={() => setActiveFilter('featured')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeFilter === 'featured' 
                  ? 'bg-[#81BA00] text-white' 
                  : 'bg-transparent border-2 border-[#81BA00] text-[#81BA00] hover:bg-[#81BA00] hover:text-white'
              }`}
            >
              FEATURED
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                
                <img
                  src={hoveredImage === product.id ? product.hoverImage : product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  onMouseEnter={() => setHoveredImage(product.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-md">
                      -{product.discount}%
                    </span>
                  )}
                  <span className="bg-[#81BA00] text-white text-sm px-3 py-1 rounded-md">
                    {product.badge}
                  </span>
                </div>
                
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#81BA00] transition-colors duration-300">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {renderRating(product.rating)}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center mb-4">
                  {product.discount > 0 && (
                    <p className="text-gray-500 line-through mr-2">${product.originalPrice.toFixed(2)}</p>
                  )}
                  <p className="text-lg font-semibold text-[#81BA00]">${product.price.toFixed(2)}</p>
                </div>
                
                <div className="flex gap-2">
                  <Link
                    to={product.link}
                    className="flex-1 text-center px-4 py-2 bg-[#81BA00] text-white font-medium rounded-md hover:bg-transparent hover:text-[#81BA00] border border-[#81BA00] transition-all duration-300"
                  >
                    SHOP NOW
                  </Link>
                  <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-300">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;