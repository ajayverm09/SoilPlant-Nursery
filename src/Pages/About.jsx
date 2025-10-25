import React, { useState, useEffect } from "react";
import {
  Heart,
  Leaf,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Sparkles,
  Truck,
  Shield,
  Globe,
  Quote,
  Star,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  ArrowRight,
  Droplets,
  Sun,
  Package,
  Plus,
  Minus,
  Camera,
  Play,
  Send,
  TreePine,
  Flower2,
  Sprout,
  Trees,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";

const AboutUs = () => {
  const customGreen = "#81BA00";
  const customGreenLight = "#e8f5d1";
  const customGreenDark = "#5a8000";
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [email, setEmail] = useState("");
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [plantOfTheMonth, setPlantOfTheMonth] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "our-story",
        "our-values",
        "our-services",
        "plant-of-the-month",
        "our-team",
        "testimonials",
        "contact",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Auto-rotate plant of the month
    const interval = setInterval(() => {
      setPlantOfTheMonth((prev) => (prev + 1) % 3);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail("");
  };

  const services = [
    {
      title: "Plant Selection",
      icon: <TreePine size={24} />,
      description:
        "Receive expert guidance in selecting the perfect plants that suit your space, lifestyle, and environmental conditions. Whether you're looking for low-maintenance options, decorative additions, or specific plant varieties, we help you make informed decisions that ensure long-term success.",
    },
    {
      title: "Workshops",
      icon: <Users size={24} />,
      description:
        "Join our hands-on workshops designed for all skill levels. From beginners looking to learn the basics of plant care to advanced enthusiasts diving into specialized topics like plant propagation or indoor gardening, our workshops offer practical knowledge and personalized tips.",
    },
    {
      title: "Plant Care",
      icon: <Droplets size={24} />,
      description:
        "Our professional plant care services ensure that your plants receive the attention they need to thrive. We provide tailored maintenance plans, including watering, pruning, pest management, and soil care, to help your plants stay vibrant and healthy all year round.",
    },
    {
      title: "Delivery",
      icon: <Truck size={24} />,
      description:
        "Enjoy the convenience of having your plants delivered safely and reliably right to your doorstep. Whether you're ordering a single plant or a large collection, we handle everything with care, ensuring your plants arrive in perfect condition and ready to be enjoyed.",
    },
  ];

  const plantOfTheMonthData = [
    {
      name: "Monstera Deliciosa",
      image: "https://picsum.photos/seed/monstera/400/400.jpg",
      description: "A popular houseplant known for its unique split leaves.",
      care: "Bright, indirect light. Water when top inch of soil is dry.",
    },
    {
      name: "Snake Plant",
      image: "https://picsum.photos/seed/snakeplant/400/400.jpg",
      description: "Hardy and low-maintenance, perfect for beginners.",
      care: "Tolerates low light. Water sparingly, about every 2-3 weeks.",
    },
    {
      name: "Pothos",
      image: "https://picsum.photos/seed/pothos/400/400.jpg",
      description: "Versatile and easy to grow, great for hanging baskets.",
      care: "Thrives in various light conditions. Water when soil feels dry.",
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Founder & Head Horticulturist",
      image: "https://picsum.photos/seed/team1/400/400.jpg",
      bio: "With over 15 years of experience in horticulture, Sarah's passion for plants is the foundation of SoilPlant.",
    },
    {
      name: "Michael Chen",
      position: "Plant Care Specialist",
      image: "https://picsum.photos/seed/team2/400/400.jpg",
      bio: "Michael's expertise in plant health ensures our plants are always in perfect condition.",
    },
    {
      name: "Emily Rodriguez",
      position: "Workshop Coordinator",
      image: "https://picsum.photos/seed/team3/400/400.jpg",
      bio: "Emily designs educational workshops that make plant care accessible to everyone.",
    },
    {
      name: "James Wilson",
      position: "Landscape Designer",
      image: "https://picsum.photos/seed/team4/400/400.jpg",
      bio: "James brings artistic vision to create stunning plant arrangements and landscape designs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div id="hero" className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://picsum.photos/seed/plantnurseryhero/1920/1080.jpg')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>

        {/* Overlay with gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(129, 186, 0, 0.9), rgba(90, 128, 0, 0.8))`,
          }}
        ></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 overflow-hidden">
          <div className="absolute top-10 right-10 animate-pulse">
            <Leaf size={200} />
          </div>
          <div
            className="absolute bottom-10 right-40 animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <Leaf size={150} />
          </div>
          <div
            className="absolute top-1/2 right-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            <Flower2 size={120} />
          </div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6 py-24 md:py-40">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About SoilPlant
            </h1>
            <p className="text-2xl md:text-3xl max-w-3xl mx-auto mb-8 font-light">
              Nurturing nature, one plant at a time
            </p>
            <div className="flex flex-wrap text-[#81B021] justify-center gap-4 text-lg mb-8">
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-all">
                <CheckCircle size={20} />
                <span>Quality Plants</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-all">
                <Shield size={20} />
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-all">
                <Truck size={20} />
                <span>Fast Delivery</span>
              </div>
            </div>
            <div className="mt-8">
              <button
                onClick={() => scrollToSection("our-story")}
                className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Discover Our Story <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="white"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Our Story Section */}
      <section id="our-story" className="py-12 md:py-32 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-10"
            style={{ backgroundColor: customGreen }}
          ></div>
          <div
            className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-10"
            style={{ backgroundColor: customGreen }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div
              className={`lg:w-1/2 transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="mb-8">
                <span
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                  style={{
                    backgroundColor: customGreenLight,
                    color: customGreen,
                  }}
                >
                  Our Journey
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, SoilPlant began as a small family greenhouse
                with a simple mission: to share our love for plants with our
                community. What started as a hobby quickly grew into a passion
                project as more neighbors and friends sought our advice on
                gardening and plant care.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, SoilPlant has blossomed into a full-service plant nursery
                offering a diverse selection of houseplants, outdoor plants,
                gardening supplies, and expert advice. Despite our growth, we
                remain committed to our founding principles of quality,
                sustainability, and customer education.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that plants have the power to transform spaces,
                improve well-being, and connect us to nature. That's why we're
                dedicated to helping every customer find the perfect plants for
                their home, garden, or office.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle style={{ color: customGreen }} size={20} />
                  <span className="text-gray-700">Premium Quality Plants</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle style={{ color: customGreen }} size={20} />
                  <span className="text-gray-700">Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle style={{ color: customGreen }} size={20} />
                  <span className="text-gray-700">Sustainable Practices</span>
                </div>
              </div>
            </div>
            <div
              className={`lg:w-1/2 transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/plantnursery/700/500.jpg"
                  alt="Our nursery"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: customGreenLight }}
                    >
                      <Leaf style={{ color: customGreen }} size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">
                        13+
                      </div>
                      <div className="text-sm text-gray-600">
                        Years of Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="our-values" className="py-12 md:py-32 bg-gray-50 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/3 right-0 w-64 h-64 rounded-full opacity-5"
            style={{ backgroundColor: customGreen }}
          ></div>
          <div
            className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full opacity-5"
            style={{ backgroundColor: customGreen }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: customGreenLight, color: customGreen }}
            >
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at SoilPlant
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -mr-16 -mt-16"
                style={{ backgroundColor: customGreen }}
              ></div>
              <div className="flex justify-center mb-6 relative z-10">
                <div
                  className="p-5 rounded-full group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: customGreenLight,
                    color: customGreen,
                  }}
                >
                  <Heart size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Quality & Care
              </h3>
              <p className="text-gray-600 text-lg">
                Every plant receives meticulous care from our expert team to
                ensure it's healthy and thriving when it reaches your home.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -mr-16 -mt-16"
                style={{ backgroundColor: customGreen }}
              ></div>
              <div className="flex justify-center mb-6 relative z-10">
                <div
                  className="p-5 rounded-full group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: customGreenLight,
                    color: customGreen,
                  }}
                >
                  <Leaf size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600 text-lg">
                We're committed to environmentally friendly practices, from
                organic growing methods to sustainable packaging.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -mr-16 -mt-16"
                style={{ backgroundColor: customGreen }}
              ></div>
              <div className="flex justify-center mb-6 relative z-10">
                <div
                  className="p-5 rounded-full group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: customGreenLight,
                    color: customGreen,
                  }}
                >
                  <Users size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Community
              </h3>
              <p className="text-gray-600 text-lg">
                We believe in building a community of plant lovers through
                workshops and creating spaces for knowledge sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="our-services" className="py-12 md:py-32 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10"
            style={{ backgroundColor: customGreen }}
          ></div>
          <div
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-10"
            style={{ backgroundColor: customGreen }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: customGreenLight, color: customGreen }}
            >
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive plant solutions for every need
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveServiceTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeServiceTab === index
                    ? "text-white shadow-lg transform scale-105"
                    : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                }`}
                style={{
                  backgroundColor:
                    activeServiceTab === index ? customGreen : undefined,
                }}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 -mr-32 -mt-32"
                style={{ backgroundColor: customGreen }}
              ></div>
              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="flex-shrink-0">
                  <div
                    className="p-6 rounded-full"
                    style={{
                      backgroundColor: customGreenLight,
                      color: customGreen,
                    }}
                  >
                    {services[activeServiceTab].icon}
                  </div>
                </div>
                <div>
                  <h3 className="md:text-3xl text-xl font-bold text-gray-800 mb-4">
                    {services[activeServiceTab].title}
                  </h3>
                  <p className="md:text-lg text-md text-gray-600 mb-6">
                    {services[activeServiceTab].description}
                  </p>
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-all transform hover:scale-105 shadow-md"
                    style={{ backgroundColor: customGreen }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = customGreenDark)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = customGreen)
                    }
                  >
                    Learn More <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plant of the Month Section */}
      <section
        id="plant-of-the-month"
        className="py-12 md:py-32 bg-gray-50 relative"
      >
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/3 left-0 w-64 h-64 rounded-full opacity-5"
            style={{ backgroundColor: customGreen }}
          ></div>
          <div
            className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full opacity-5"
            style={{ backgroundColor: customGreen }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: customGreenLight, color: customGreen }}
            >
              Featured Plant
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Plant of the Month
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our favorite plant this month and get special care tips
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={plantOfTheMonthData[plantOfTheMonth].image}
                    alt={plantOfTheMonthData[plantOfTheMonth].name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md"
                    style={{ color: customGreen }}
                  >
                    Featured
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {plantOfTheMonthData[plantOfTheMonth].name}
                  </h3>
                  <p className="md:text-lg text-md text-gray-600 mb-6">
                    {plantOfTheMonthData[plantOfTheMonth].description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Care Tips
                    </h4>
                    <p className="text-gray-600">
                      {plantOfTheMonthData[plantOfTheMonth].care}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      className="md:px-6 md:py-3 rounded-lg font-medium text-white transition-all transform hover:scale-105 shadow-md"
                      style={{ backgroundColor: customGreen }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = customGreenDark)
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = customGreen)
                      }
                    >
                      Shop Now
                    </button>
                    <button
                      className="md:px-6 md:py-3 rounded-lg font-medium transition-all transform hover:scale-105"
                      style={{
                        border: `2px solid ${customGreen}`,
                        color: customGreen,
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = customGreenLight)
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "transparent")
                      }
                    >
                      View Care Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Plant Carousel Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {plantOfTheMonthData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPlantOfTheMonth(index)}
                  className={`h-3 rounded-full transition-all ${
                    plantOfTheMonth === index ? "w-8" : "w-3"
                  }`}
                  style={{
                    backgroundColor:
                      plantOfTheMonth === index ? customGreen : "#d1d5db",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="py-12 md:py-32 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-10"
            style={{ backgroundColor: customGreen }}
          ></div>
          <div
            className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-10"
            style={{ backgroundColor: customGreen }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: customGreenLight, color: customGreen }}
            >
              Meet The Experts
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate plant experts behind SoilPlant
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative mb-6 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="md:text-2xl text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="md:text-lg text-md mb-4" style={{ color: customGreen }}>
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-md md:text-lg mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="p-2 bg-gray-100 rounded-full hover:bg-green-100 transition-all transform hover:scale-110"
                      style={{ "--hover-bg": customGreenLight }}
                    >
                      <Instagram
                        size={18}
                        className="text-gray-600 hover:text-green-600"
                        style={{ "--hover-color": customGreen }}
                      />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-gray-100 rounded-full hover:bg-green-100 transition-all transform hover:scale-110"
                      style={{ "--hover-bg": customGreenLight }}
                    >
                      <Facebook
                        size={18}
                        className="text-gray-600 hover:text-green-600"
                        style={{ "--hover-color": customGreen }}
                      />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-gray-100 rounded-full hover:bg-green-100 transition-all transform hover:scale-110"
                      style={{ "--hover-bg": customGreenLight }}
                    >
                      <Twitter
                        size={18}
                        className="text-gray-600 hover:text-green-600"
                        style={{ "--hover-color": customGreen }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-32 bg-gray-50 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/3 right-0 w-64 h-64 rounded-full opacity-5"
            style={{ backgroundColor: customGreen }}
          ></div>
          <div
            className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full opacity-5"
            style={{ backgroundColor: customGreen }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: customGreenLight, color: customGreen }}
            >
              Customer Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from our happy plant parents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -mr-16 -mt-16"
                style={{ backgroundColor: customGreen }}
              ></div>
              <div className="flex mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <Quote
                style={{ color: customGreen }}
                className="mb-4 relative z-10"
                size={24}
              />
              <p className="text-gray-600 text-lg mb-6 relative z-10">
                "SoilPlant has transformed my home into a green oasis. Their
                plants are always healthy and their team's advice has helped me
                become a confident plant parent."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src="https://picsum.photos/seed/customer1/60/60.jpg"
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Jessica Miller
                  </h4>
                  <p className="text-sm text-gray-600">Happy Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -mr-16 -mt-16"
                style={{ backgroundColor: customGreen }}
              ></div>
              <div className="flex mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <Quote
                style={{ color: customGreen }}
                className="mb-4 relative z-10"
                size={24}
              />
              <p className="text-gray-600 text-lg mb-6 relative z-10">
                "The workshops at SoilPlant are fantastic! I've learned so much
                about plant care and made friends with fellow plant enthusiasts.
                Highly recommend!"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src="https://picsum.photos/seed/customer2/60/60.jpg"
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">David Chen</h4>
                  <p className="text-sm text-gray-600">Workshop Attendee</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -mr-16 -mt-16"
                style={{ backgroundColor: customGreen }}
              ></div>
              <div className="flex mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <Quote
                style={{ color: customGreen }}
                className="mb-4 relative z-10"
                size={24}
              />
              <p className="text-gray-600 text-lg mb-6 relative z-10">
                "I've been shopping at SoilPlant for years and the quality never
                disappoints. Their sustainable practices align with my values,
                and their plant selection is unmatched."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src="https://picsum.photos/seed/customer3/60/60.jpg"
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Sarah Thompson
                  </h4>
                  <p className="text-sm text-gray-600">Loyal Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Responsive */}
      <section
        className="py-12 md:py-32 text-white relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${customGreen}, ${customGreenDark})`,
        }}
      >
        {/* Decorative elements - responsive positioning and sizing */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 overflow-hidden">
          {/* Large decorative leaf - hidden on small screens */}
          <div className="hidden md:block absolute top-10 left-10">
            <Leaf size={100} />
          </div>

          {/* Smaller leaf for mobile - positioned differently */}
          <div className="md:hidden absolute top-5 left-5">
            <Leaf size={60} />
          </div>

          {/* Large decorative leaf - hidden on small screens */}
          <div className="hidden md:block absolute bottom-10 right-10">
            <Leaf size={150} />
          </div>

          {/* Smaller leaf for mobile - positioned differently */}
          <div className="md:hidden absolute bottom-5 right-5">
            <Leaf size={80} />
          </div>

          {/* Flower - repositioned for mobile */}
          <div className="hidden md:block absolute top-1/2 left-1/3 transform -translate-y-1/2">
            <Flower2 size={120} />
          </div>

          {/* Smaller flower for mobile - positioned differently */}
          <div className="md:hidden absolute top-1/3 right-1/4 transform translate-y-1/2">
            <Flower2 size={70} />
          </div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            {/* Title - responsive font sizes */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Impact
            </h2>

            {/* Subtitle - responsive font sizes and spacing */}
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Numbers that reflect our commitment to plants and people
            </p>
          </div>

          {/* Stats grid - responsive layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 text-[#6B9800] gap-4 md:gap-8 text-center">
            <div className="p-4 md:p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                500+
              </div>
              <div className="text-sm sm:text-base md:text-lg">
                Plant Varieties
              </div>
            </div>
            <div className="p-4 md:p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                10,000+
              </div>
              <div className="text-sm sm:text-base md:text-lg">
                Happy Customers
              </div>
            </div>
            <div className="p-4 md:p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                13
              </div>
              <div className="text-sm sm:text-base md:text-lg">
                Years in Business
              </div>
            </div>
            <div className="p-4 md:p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                50+
              </div>
              <div className="text-sm sm:text-base md:text-lg">
                Workshops Yearly
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="white"
            className="w-full h-auto"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-12 md:py-32 bg-gray-50 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10"
            style={{ backgroundColor: customGreen }}
          ></div>
          <div
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-10"
            style={{ backgroundColor: customGreen }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Visit Our Nursery
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Come explore our diverse collection of plants and get expert
              advice from our team. We can't wait to help you find your perfect
              plant companion!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-left relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -mr-16 -mt-16"
                  style={{ backgroundColor: customGreen }}
                ></div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 relative z-10">
                  Visit Our Store
                </h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3">
                    <MapPin
                      style={{ color: customGreen }}
                      className="mt-1"
                      size={20}
                    />
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <p className="text-gray-600">
                        123 Garden Lane, Green Valley, CA 90210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock
                      style={{ color: customGreen }}
                      className="mt-1"
                      size={20}
                    />
                    <div>
                      <p className="font-medium text-gray-800">Hours</p>
                      <p className="text-gray-600">
                        Mon-Fri: 9am-6pm, Sat-Sun: 8am-7pm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone
                      style={{ color: customGreen }}
                      className="mt-1"
                      size={20}
                    />
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-left relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -mr-16 -mt-16"
                  style={{ backgroundColor: customGreen }}
                ></div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 relative z-10">
                  Get In Touch
                </h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3">
                    <Mail
                      style={{ color: customGreen }}
                      className="mt-1"
                      size={20}
                    />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">info@soilplant.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe
                      style={{ color: customGreen }}
                      className="mt-1"
                      size={20}
                    />
                    <div>
                      <p className="font-medium text-gray-800">Website</p>
                      <p className="text-gray-600">www.soilplant.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users
                      style={{ color: customGreen }}
                      className="mt-1"
                      size={20}
                    />
                    <div>
                      <p className="font-medium text-gray-800">Follow Us</p>
                      <div className="flex gap-3 mt-2">
                        <a
                          href="#"
                          className="p-2 bg-gray-100 rounded-full hover:bg-green-100 transition-all transform hover:scale-110"
                          style={{ "--hover-bg": customGreenLight }}
                        >
                          <Instagram
                            size={18}
                            className="text-gray-600 hover:text-green-600"
                            style={{ "--hover-color": customGreen }}
                          />
                        </a>
                        <a
                          href="#"
                          className="p-2 bg-gray-100 rounded-full hover:bg-green-100 transition-all transform hover:scale-110"
                          style={{ "--hover-bg": customGreenLight }}
                        >
                          <Facebook
                            size={18}
                            className="text-gray-600 hover:text-green-600"
                            style={{ "--hover-color": customGreen }}
                          />
                        </a>
                        <a
                          href="#"
                          className="p-2 bg-gray-100 rounded-full hover:bg-green-100 transition-all transform hover:scale-110"
                          style={{ "--hover-bg": customGreenLight }}
                        >
                          <Twitter
                            size={18}
                            className="text-gray-600 hover:text-green-600"
                            style={{ "--hover-color": customGreen }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 text-white rounded-lg font-medium text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                style={{ backgroundColor: customGreen }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = customGreenDark)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = customGreen)
                }
              >
                Visit Us <ChevronRight size={20} />
              </button>
              <button
                className="px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                style={{
                  border: `2px solid ${customGreen}`,
                  color: customGreen,
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = customGreenLight)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                Shop Online <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-white rounded-full shadow-lg z-40 transition-all hover:scale-110"
          style={{ color: customGreen }}
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default AboutUs;