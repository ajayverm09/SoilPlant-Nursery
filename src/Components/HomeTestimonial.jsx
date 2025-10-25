import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Mrs. Reema Ghurde",
      role: "Manager",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://soilplant-codezeel.myshopify.com/cdn/shop/files/User-1.jpg?v=1668774184&width=100",
      rating: 5,
    },
    {
      id: 2,
      name: "Mr. John Doe",
      role: "Developer",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image:
        "https://soilplant-codezeel.myshopify.com/cdn/shop/files/User-2.jpg?v=1668774197&width=100",
      rating: 4,
    },
    {
      id: 3,
      name: "Ms. Jane Smith",
      role: "Designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
      image:
        "https://soilplant-codezeel.myshopify.com/cdn/shop/files/User-3.jpg?v=1668774211&width=100",
      rating: 5,
    },
    {
      id: 4,
      name: "Dr. Robert Johnson",
      role: "Botanist",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
      image:
        "https://soilplant-codezeel.myshopify.com/cdn/shop/files/User-1.jpg?v=1668774184&width=100",
      rating: 5,
    },
    {
      id: 5,
      name: "Ms. Emily Wilson",
      role: "Interior Designer",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image:
        "https://soilplant-codezeel.myshopify.com/cdn/shop/files/User-2.jpg?v=1668774197&width=100",
      rating: 4,
    },
  ];

  // Render star rating
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isAutoPlay,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    afterChange: (index) => setActiveIndex(index),
    appendDots: (dots) => (
      <div className="flex justify-center mt-8 space-x-2">{dots}</div>
    ),
    customPaging: (i) => (
      <button
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === activeIndex ? "bg-white w-8" : "bg-white/50"
        }`}
        aria-label={`Go to testimonial ${i + 1}`}
      />
    ),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          dots: false,
          swipe: true,
        },
      },
    ],
  };

  // Navigation functions
  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay - Fixed */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://soilplant-codezeel.myshopify.com/cdn/shop/files/testimonial-parallax.jpg?v=1668774771')`,
        }}
      />
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-[#81BA00] mx-auto"></div>
        </div>

        {/* Testimonial Carousel with Navigation Buttons */}
        <div className="relative max-w-4xl mx-auto">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute -left-6 top-1/2 hidden -translate-y-1/2 z-10 md:flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#81BA00] transition-all duration-300 transform hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute -right-6 top-1/2 hidden -translate-y-1/2 z-10 md:flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#81BA00] transition-all duration-300 transform hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="px-4">
                <div
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl md:p-8 p-2 text-center transition-all duration-500 ${
                    index === activeIndex ? "scale-105 shadow-2xl" : "scale-100"
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-16 h-16 hidden md:flex bg-[#81BA00]/20 rounded-full items-center justify-center transition-all duration-500 ${
                        index === activeIndex ? "scale-110" : "scale-100"
                      }`}
                    >
                      <svg
                        className="w-8 h-8 hidden md:block text-[#81BA00]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-white text-md md:text-xl mb-8 italic">
                    {testimonial.description}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {renderRating(testimonial.rating)}
                  </div>

                  {/* Customer Info */}
                  <div className="flex flex-col items-center">
                    <img
                      className={`w-20 h-20 rounded-full object-cover border-4 border-white/20 mb-4 transition-all duration-500 ${
                        index === activeIndex ? "scale-110" : "scale-100"
                      }`}
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <h3 className="text-xl font-bold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#81BA00] font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Thumbnail Navigation */}
        <div className="hidden md:flex justify-center mt-8 space-x-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                index === activeIndex
                  ? "border-[#81BA00] scale-110"
                  : "border-white/30 hover:border-white/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;