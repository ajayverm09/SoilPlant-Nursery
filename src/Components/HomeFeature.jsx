import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCardGrid = () => {
  const services = [
    {
      id: 1,
      title: 'Humidity Control',
      description: 'Our advanced humidity control systems ensure optimal moisture levels for your plants.',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/services-1_66x.png?v=1668767323',
      link: '/humidity-control'
    },
    {
      id: 2,
      title: 'Pest Anticipation',
      description: 'Our proactive pest management system identifies potential threats before they become problems.',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/services-2_66x.png?v=1668767323',
      link: '/pest-anticipation'
    },
    {
      id: 3,
      title: 'Pruning Weeds',
      description: 'Expert pruning and weed removal services to maintain the health and appearance of your plants.',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/files/services-3_66x.png?v=1668767323',
      link: '/pruning-weeds'
    }
  ];

  return (
    <section className="md:py-16 py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-[#81BA00] mx-auto"></div>
        </div>
        
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div className="service flex flex-col items-center text-center bg-[#F7F7F7] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group p-5 md:p-6 lg:p-8 relative"
            >
              {/* Service Image */}
              <div className="relative bg-white rounded-full shadow-xl overflow-hidden h-32 w-32 flex items-center justify-center mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-60 w-20 -translate-y-20 group-hover:translate-y-20 transition-transform duration-300 relative z-10"
                />
                <div className="absolute inset-0 bg-[#81BA00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-[#81BA00] transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center px-6 py-3 bg-[#81BA00] text-white font-medium rounded-md hover:bg-transparent hover:text-[#81BA00] border border-[#81BA00] transition-all duration-300"
          >
            View All Services
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
    </section>
  );
};

export default ServiceCardGrid;