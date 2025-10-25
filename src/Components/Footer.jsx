import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // State for managing dropdown toggles
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle dropdown function
  const toggleDropdown = (section) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
      href: "#",
    },
    {
      name: "Instagram",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z",
      href: "#",
    },
    {
      name: "YouTube",
      icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
      href: "#",
    },
    {
      name: "X (Twitter)",
      icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
      href: "#",
    },
  ];

  // Payment methods
  const paymentMethods = [
    {
      name: "Visa",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
    },
    {
      name: "Mastercard",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    },
    {
      name: "American Express",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
    },
    {
      name: "PayPal",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    },
  ];

  return (
    <footer className="relative text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://soilplant-codezeel.myshopify.com/cdn/shop/files/footer-parallax.jpg?v=1668839490')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-85"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About - Always visible */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://soilplant-codezeel.myshopify.com/cdn/shop/files/logo.png"
                alt="SoilPlant Logo"
                className="md:h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted source for quality plants and gardening supplies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-[#81BA00] transition-colors duration-300"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Store Location - Dropdown on mobile */}
          <div className="md:col-span-1">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleDropdown("location")}
            >
              <h3 className="text-lg font-semibold text-[#81BA00]">
                Store Location
              </h3>
              <span className="md:hidden">
                <svg
                  className={`w-5 h-5 transition-transform ${
                    activeDropdown === "location" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
            <ul
              className={`space-y-2 text-sm text-gray-300 mt-2 md:mt-4 ${
                activeDropdown === "location" ? "block" : "hidden md:block"
              }`}
            >
              <li>SoilPlant - Plant Store</li>
              <li>507-Union Trade Centre</li>
              <li>France</li>
              <li>
                <a
                  href="mailto:demo@example.com"
                  className="text-[#81BA00] transition-colors"
                >
                  demo@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+81520150001"
                  className="text-[#81BA00] transition-colors"
                >
                  (+81) 520-150-001
                </a>
              </li>
            </ul>
          </div>

          {/* Services - Dropdown on mobile */}
          <div className="md:col-span-1">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleDropdown("services")}
            >
              <h3 className="text-lg font-semibold text-[#81BA00]">Services</h3>
              <span className="md:hidden">
                <svg
                  className={`w-5 h-5 transition-transform ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
            <ul
              className={`space-y-2 text-sm mt-2 md:mt-4 ${
                activeDropdown === "services" ? "block" : "hidden md:block"
              }`}
            >
              <li>
                <Link
                  to="/delivery"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Shipping & Refund
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help - Dropdown on mobile */}
          <div className="md:col-span-1">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleDropdown("help")}
            >
              <h3 className="text-lg font-semibold text-[#81BA00]">Help</h3>
              <span className="md:hidden">
                <svg
                  className={`w-5 h-5 transition-transform ${
                    activeDropdown === "help" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
            <ul
              className={`space-y-2 text-sm mt-2 md:mt-4 ${
                activeDropdown === "help" ? "block" : "hidden md:block"
              }`}
            >
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/size-chart"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Size Chart
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links - Dropdown on mobile */}
          <div className="md:col-span-1">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleDropdown("quicklinks")}
            >
              <h3 className="text-lg font-semibold text-[#81BA00]">
                Quick Links
              </h3>
              <span className="md:hidden">
                <svg
                  className={`w-5 h-5 transition-transform ${
                    activeDropdown === "quicklinks" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
            <ul
              className={`space-y-2 text-sm mt-2 md:mt-4 ${
                activeDropdown === "quicklinks" ? "block" : "hidden md:block"
              }`}
            >
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-policy"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/buyer-policy"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Policy for Buyers
                </Link>
              </li>
              <li>
                <Link
                  to="/seller-policy"
                  className="text-gray-300 hover:text-[#81BA00] transition-colors"
                >
                  Policy for Sellers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-[#81BA00]">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Get the latest updates on new products and upcoming sales
              </p>
            </div>
            <form className="flex w-full md:w-auto items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-700 bg-opacity-70 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#81BA00] grow md:grow-0 w-32 md:w-64"
              />
              {/* Subscribe button on medium screens and up, icon on small screens */}
              <button
                type="submit"
                className="hidden md:flex bg-[#81BA00] hover:bg-white text-white hover:text-[#81BA00] border border-[#81BA00] px-4 py-2 rounded-r-md transition-colors duration-300"
              >
                Subscribe
              </button>
              <button
                type="submit"
                className="flex md:hidden bg-[#81BA00] hover:bg-white text-white hover:text-[#81BA00] border border-[#81BA00] p-2 rounded-r-md transition-colors duration-300 ml-1"
                aria-label="Subscribe"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              <p>
                &copy; {currentYear}, SoilPlant - Plant Store. All rights
                reserved.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-300">We Accept:</span>
                <div className="flex space-x-3">
                  {paymentMethods.map((method) => (
                    <img
                      key={method.name}
                      src={method.src}
                      alt={method.name}
                      className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-300">
              <p>Powered by Shopify</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
