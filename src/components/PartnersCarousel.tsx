import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Partner companies with placeholder logos (using Pexels images as placeholders)
  const partners = [
    {
      name: "Emirates Airlines",
      logo: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Emirates Airlines Logo"
    },
    {
      name: "Dubai Mall",
      logo: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Dubai Mall Logo"
    },
    {
      name: "Carrefour UAE",
      logo: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Carrefour UAE Logo"
    },
    {
      name: "ADNOC",
      logo: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "ADNOC Logo"
    },
    {
      name: "Etisalat",
      logo: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Etisalat Logo"
    },
    {
      name: "Dubai Health Authority",
      logo: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Dubai Health Authority Logo"
    },
    {
      name: "IKEA UAE",
      logo: "https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "IKEA UAE Logo"
    },
    {
      name: "Noon.com",
      logo: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Noon.com Logo"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, partners.length - getVisibleCount());
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoScrolling, partners.length]);

  // Get number of visible items based on screen size
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth >= 1024) return 4; // lg
    if (window.innerWidth >= 768) return 3;  // md
    if (window.innerWidth >= 640) return 2;  // sm
    return 1; // mobile
  };

  const nextSlide = () => {
    setIsAutoScrolling(false);
    const maxIndex = Math.max(0, partners.length - getVisibleCount());
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoScrolling(false);
    const maxIndex = Math.max(0, partners.length - getVisibleCount());
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proud to work with leading UAE companies to provide exclusive benefits and services to our cardholders
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-uae-green transition-colors duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Next partners"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-uae-green transition-colors duration-300" />
          </button>

          {/* Carousel Track */}
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={carouselRef}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / getVisibleCount())}%)`
              }}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{
                    width: `${100 / getVisibleCount()}%`
                  }}
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-32 flex items-center justify-center group cursor-pointer transform hover:scale-105">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                      style={{
                        maxWidth: '180px',
                        maxHeight: '80px'
                      }}
                      loading="lazy"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-3 font-medium">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, partners.length - getVisibleCount() + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoScrolling(false);
                  setTimeout(() => setIsAutoScrolling(true), 5000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-uae-green scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Partner Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-uae-green mb-2">150+</div>
            <div className="text-gray-600 font-medium">Partner Companies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-uae-green mb-2">500+</div>
            <div className="text-gray-600 font-medium">Locations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-uae-green mb-2">25%</div>
            <div className="text-gray-600 font-medium">Average Discount</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-uae-green mb-2">7</div>
            <div className="text-gray-600 font-medium">Emirates Covered</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-uae-green to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want to Become a Partner?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join our network of partners and help us create a more inclusive UAE while reaching new customers
            </p>
            <button className="bg-white text-uae-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;