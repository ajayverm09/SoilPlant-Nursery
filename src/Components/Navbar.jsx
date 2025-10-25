import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation menu items
  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'BLOGS', path: '/blogs' },
    { name: 'CONTACT', path: '/contact' }
  ];

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // If scroll position is greater than 50px, set isScrolled to true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 text-white px-4 md:px-8 py-4 shadow-lg z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#222]' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <NavLink to="/">
            <img
              src="https://soilplant-codezeel.myshopify.com/cdn/shop/files/logo.png?v=1668763142&width=257"
              alt="SoilPlant Logo"
              className="h-8 w-auto"
            />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? 'text-[#81BA00] border-b-2 border-[#81BA00] pb-1'
                      : 'hover:text-[#81BA00]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Get in Touch Button - Desktop */}
        <div className="hidden md:block">
          <NavLink to="/contact">
            <button
              className="bg-[#81BA00] text-white px-5 py-2 border border-[#81BA00] rounded-md font-semibold hover:bg-transparent hover:text-[#81BA00] transition-all duration-300"
              aria-label="Get in Touch"
            >
              Get in Touch
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Button - Updated Hamburger */}
        <button
          className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
            isMenuOpen ? 'bg-[#81BA00] bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Menu</span>
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out transform ${
                isMenuOpen ? 'rotate-45 top-2' : 'top-0'
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'top-2'
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out transform ${
                isMenuOpen ? '-rotate-45 top-2' : 'top-4'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 font-semibold py-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block transition-colors duration-300 px-2 py-1 ${
                    isActive ? 'text-[#81BA00]' : 'hover:text-[#81BA00]'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              <button
                className="w-full bg-[#81BA00] text-white px-5 py-2 border border-[#81BA00] rounded-md font-semibold hover:bg-transparent hover:text-[#81BA00] transition-all duration-300"
                aria-label="Get in Touch"
              >
                Get in Touch
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;