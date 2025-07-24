import React, { useState, useEffect } from 'react';
import { CreditCard, RotateCcw, Eye } from 'lucide-react';

const CardShowcase = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFrontView, setShowFrontView] = useState(true);

  const cards = [
    {
      name: "Disabilities Card",
      frontImage: "/Global Disability Carde.jpg",
      backImage: "/Global Disability Carde.jpg",
      title: "Secure Proof of Disability for Disabled People",
      subtitle: "NATIONAL DISABILITY CARD",
      description: "The National Disability Card allows you to quickly and easily visually identify people with disabilities.",
      validity: "Valid for three years",
      features: {
        front: [
          {
            title: "Personal Information",
            description: "Featuring the card holder's name.",
            position: "left"
          },
          {
            title: "Photo Identification", 
            description: "A full colour photo prevents misuse and provides easy visual identification of the card holder.",
            position: "left"
          },
          {
            title: "High Security Features",
            description: "The card is protected by a number of high quality security features including a secure watermark over the card surface, precise intricate guilloche patterns and bespoke background and symbols.",
            position: "left"
          }
        ],
        back: [
          {
            title: "Unique Card Number",
            description: "An individual UCN is assigned to every card.",
            position: "right"
          },
          {
            title: "National Flag",
            description: "All our cards are made and exclusively issued to UAE addresses.",
            position: "right"
          },
          {
            title: "International Symbol of Access",
            description: "The ISA is maintained as an international standard (ISO 7001) by the International Commission on Technology and Accessibility (ICTA), a committee of Rehabilitation International (RI).",
            position: "right"
          }
        ]
      }
    },
    {
      name: "Carers Card",
      frontImage: "/Global Carers Card DEMO_page-0003.jpg",
      backImage: "/Global Carers Card DEMO_page-0003.jpg",
      title: "Recognition and Support for Dedicated Caregivers",
      subtitle: "CARERS CARD",
      description: "The Carers Card provides recognition and support for those who care for individuals with disabilities.",
      validity: "Valid for three years",
      features: {
        front: [
          {
            title: "Caregiver Information",
            description: "Featuring the caregiver's name and credentials.",
            position: "left"
          },
          {
            title: "Photo Identification",
            description: "A full colour photo prevents misuse and provides easy visual identification of the caregiver.",
            position: "left"
          },
          {
            title: "Security Features",
            description: "Protected by high quality security features including watermarks and intricate patterns.",
            position: "left"
          }
        ],
        back: [
          {
            title: "Unique Card Number",
            description: "An individual UCN is assigned to every card.",
            position: "right"
          },
          {
            title: "UAE Flag",
            description: "All our cards are made and exclusively issued to UAE addresses.",
            position: "right"
          },
          {
            title: "Caregiver Symbol",
            description: "International symbol representing care and support services.",
            position: "right"
          }
        ]
      }
    },
    {
      name: "Customer Support Card",
      frontImage: "/Global Support Card.jpg",
      backImage: "/Global Support Card.jpg",
      title: "Enhanced Support for Daily Activities",
      subtitle: "CUSTOMER SUPPORT CARD",
      description: "The Customer Support Card provides enhanced assistance and priority support for individuals requiring additional help.",
      validity: "Valid for three years",
      features: {
        front: [
          {
            title: "Personal Information",
            description: "Featuring the card holder's name and details.",
            position: "left"
          },
          {
            title: "Photo Identification",
            description: "A full colour photo prevents misuse and provides easy visual identification.",
            position: "left"
          },
          {
            title: "Security Features",
            description: "Protected by high quality security features and authentication elements.",
            position: "left"
          }
        ],
        back: [
          {
            title: "Unique Card Number",
            description: "An individual UCN is assigned to every card.",
            position: "right"
          },
          {
            title: "UAE Flag",
            description: "All our cards are made and exclusively issued to UAE addresses.",
            position: "right"
          },
          {
            title: "Support Symbol",
            description: "International symbol representing customer support and assistance services.",
            position: "right"
          }
        ]
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentCard = cards[activeCard];
  const currentFeatures = showFrontView ? currentCard.features.front : currentCard.features.back;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">
              • {currentCard.subtitle}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {currentCard.title}
          </h2>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-lg p-1 flex">
            <button
              onClick={() => setShowFrontView(true)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                showFrontView 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Front View
            </button>
            <button
              onClick={() => setShowFrontView(false)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                !showFrontView 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Back View
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Features */}
          <div className="lg:col-span-4 space-y-8">
            {currentFeatures.filter(f => f.position === 'left').map((feature, index) => (
              <div key={index} className="text-right">
                <div className="flex items-start justify-end mb-4">
                  <div className="text-right mr-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                </div>
                <div className="w-full h-px bg-gradient-to-l from-blue-600 to-transparent"></div>
              </div>
            ))}
          </div>

          {/* Center Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <div className="w-96 h-60 rounded-2xl shadow-2xl animate-card-3d overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={showFrontView ? currentCard.frontImage : currentCard.backImage} 
                  alt={`${currentCard.name} ${showFrontView ? 'front' : 'back'}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Card Controls */}
              <div className="flex justify-center mt-6 space-x-4">
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

          {/* Right Features */}
          <div className="lg:col-span-4 space-y-8">
            {currentFeatures.filter(f => f.position === 'right').map((feature, index) => (
              <div key={index} className="text-left">
                <div className="flex items-start mb-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-blue-600 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Description and CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-2">
            {currentCard.description} <strong>{currentCard.validity}</strong>
          </p>
          
          <div className="mt-8">
            <button className="bg-uae-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              Become a card holder
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Card Selector */}
        <div className="mt-16 flex justify-center space-x-4">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCard === index 
                  ? 'bg-uae-green text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {card.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardShowcase;