import React from 'react';

const PartnersCarousel = () => {
  // Partner companies with placeholder logos
  const partners = [
    {
      name: "Emirates Airlines",
      logo: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Emirates Airlines"
    },
    {
      name: "Dubai Mall",
      logo: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Dubai Mall"
    },
    {
      name: "Carrefour UAE",
      logo: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Carrefour UAE"
    },
    {
      name: "ADNOC",
      logo: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "ADNOC"
    },
    {
      name: "Etisalat",
      logo: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Etisalat"
    },
    {
      name: "Dubai Health Authority",
      logo: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Dubai Health Authority"
    },
    {
      name: "IKEA UAE",
      logo: "https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "IKEA UAE"
    },
    {
      name: "Noon.com",
      logo: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Noon.com"
    },
    {
      name: "Spinneys",
      logo: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Spinneys"
    },
    {
      name: "Jumeirah Hotels",
      logo: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      alt: "Jumeirah Hotels"
    }
  ];

  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-gradient-to-r from-uae-green to-green-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Backed up by leading brands:
          </h2>
        </div>

        {/* Scrolling Partners Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-uae-green to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-green-700 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Track */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-partners">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 mx-2 group"
                  style={{ width: '160px' }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-blue-100 font-medium">Partner Companies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-green-100 font-medium">Locations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">25%</div>
            <div className="text-green-100 font-medium">Average Discount</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">7</div>
            <div className="text-green-100 font-medium">Emirates Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;