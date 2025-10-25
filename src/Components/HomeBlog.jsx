import React from 'react';
import { Link } from 'react-router-dom';

const HomeBlog = () => {
  const blogPosts = [
    {
      id: 1,
      date: 'MAY 5, 2025',
      title: 'Plant A Tree Today, It Will Help Us Breathe Tomorrow.',
      description: 'Taking care of nature is a responsibility of every individual, and planting trees is one of the most impactful actions you can do.',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/articles/blog-6.jpg?v=1746445548&width=1000',
      author: 'Green Team',
      link: '/blog/1'
    },
    {
      id: 2,
      date: 'MAY 5, 2025',
      title: 'Plant More Trees, Make The Environment Pollution Free.',
      description: 'We need more green spaces to combat pollution, and planting trees is the first step towards making our planet cleaner and healthier.',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/articles/blog-5.jpg?v=1746445480&width=1000',
      author: 'Eco Warriors',
      link: '/blog/2'
    },
    {
      id: 3,
      date: 'MAY 5, 2025',
      title: 'By Killing Trees, We Are Killing Ourselves Too.',
      description: 'Deforestation is one of the major environmental issues. It\'s crucial to protect and restore forests for the survival of life on Earth.',
      image: 'https://soilplant-codezeel.myshopify.com/cdn/shop/articles/blog-4.jpg?v=1746445394&width=1000',
      author: 'Nature Lovers',
      link: '/blog/3'
    }
  ];

  return (
    <section className="md:py-16 m-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#81BA00] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#81BA00] rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Latest News</h2>
          <div className="w-20 h-1 bg-[#81BA00] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest articles about plants, gardening tips, and environmental conservation
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Blog Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={post.image}
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#81BA00] text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm text-gray-500">{post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#81BA00] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                <Link
                  to={post.link}
                  className="inline-flex items-center text-[#81BA00] font-medium hover:text-[#81BA00]/80 transition-colors duration-300"
                >
                  Read More
                  <svg 
                    className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" 
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/blogs" 
            className="inline-flex items-center px-6 py-3 bg-[#81BA00] text-white font-medium rounded-md hover:bg-transparent hover:text-[#81BA00] border border-[#81BA00] transition-all duration-300"
          >
            View All Articles
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

export default HomeBlog;