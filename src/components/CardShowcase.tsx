import React, { useState, useEffect } from 'react';
import { CreditCard, RotateCcw, Eye } from 'lucide-react';

const CardShowcase = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const cards = [
    {
      name: "Disabilities Card",
      frontImage: "/Global Disability Carde.jpg",
      backImage: "/Global Disability Carde.jpg",
      benefits: ["Priority Access", "Discounts", "Support Services", "Medical Benefits"]
    },
    {
      name: "Carers Card",
      frontImage: "/Global Carers Card DEMO_page-0003.jpg",
      backImage: "/Global Carers Card DEMO_page-0003.jpg",
      benefits: ["Carer Support", "Respite Services", "Training Access", "Community Network"]
    },
    {
      name: "Customer Support Card",
      frontImage: "/Global Support Card.jpg",
      backImage: "/Global Support Card.jpg",
      benefits: ["Priority Support", "Enhanced Service", "Dedicated Help", "Quick Resolution"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const flipTimer = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 3000);
    return () => clearInterval(flipTimer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            National Disability Cards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our beautifully designed cards with advanced security features 
            and comprehensive benefits for cardholders across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Card Display */}
          <div className="flex justify-center">
            <div className="relative">
              <div className={`card-3d w-96 h-60 relative transition-transform duration-700 ${
                isFlipped ? 'rotate-y-180' : ''
              }`} style={{ transformStyle: 'preserve-3d' }}>
                {/* Front of Card */}
                <div className="card-face absolute inset-0 w-full h-full rounded-2xl shadow-2xl animate-card-3d overflow-hidden">
                  <img 
                    src={cards[activeCard].frontImage} 
                    alt={`${cards[activeCard].name} front`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Back of Card */}
                <div className="card-face card-back absolute inset-0 w-full h-full rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src={cards[activeCard].backImage} 
                    alt={`${cards[activeCard].name} back`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="h-full flex flex-col justify-between">
                    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>
                    <div className="relative z-10 p-6 text-white">
                    <div>
                      <h4 className="text-lg font-bold mb-4">Benefits Include:</h4>
                      <ul className="space-y-2">
                        {cards[activeCard].benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white/20 rounded-lg p-3 mb-3">
                        <p className="text-xs">Authorized by</p>
                        <p className="font-bold">UAE Ministry</p>
                      </div>
                      <p className="text-xs opacity-60">Valid until: 12/2027</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card Controls */}
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="flex items-center px-4 py-2 bg-uae-green text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Flip Card
                </button>
                <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  <Eye className="w-4 h-4 mr-2" />
                  3D View
                </button>
              </div>
            </div>
          </div>

          {/* Card Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Advanced Card Features
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our cards feature state-of-the-art security and design elements 
                that ensure authenticity and provide easy recognition by partners.
              </p>
            </div>

            {/* Card Selector */}
            <div className="space-y-4">
              {cards.map((card, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeCard === index 
                      ? 'bg-uae-green text-white shadow-lg transform scale-105' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-8 rounded-lg overflow-hidden ${
                      activeCard === index ? 'border-2 border-white/20' : 'border border-gray-300'
                    }`}>
                      <img 
                        src={card.frontImage} 
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{card.name}</h4>
                      <p className={`text-sm ${
                        activeCard === index ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        Click to preview this card design
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Security Features */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-uae-green" />
                Security Features
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-uae-green rounded-full mr-3"></div>
                  Holographic security elements
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-uae-green rounded-full mr-3"></div>
                  RFID chip technology
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-uae-green rounded-full mr-3"></div>
                  Unique serial numbers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-uae-green rounded-full mr-3"></div>
                  Tamper-evident design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardShowcase;