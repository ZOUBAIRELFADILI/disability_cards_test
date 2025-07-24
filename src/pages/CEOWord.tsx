import React from 'react';
import { User, Quote } from 'lucide-react';

const CEOWord = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A Word from Our CEO
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Leading the mission to create an inclusive society for all
            </p>
          </div>
        </div>
      </div>

      {/* CEO Message Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* CEO Photo */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                  <User className="w-32 h-32 text-green-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-red-500 text-white p-4 rounded-full">
                  <Quote className="w-8 h-8" />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900">Ahmed Al-Mansouri</h3>
                <p className="text-green-600 font-semibold">Chief Executive Officer</p>
                <p className="text-gray-600 mt-2">Global Carers & Disability Cards</p>
              </div>
            </div>

            {/* CEO Message */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <Quote className="w-8 h-8 text-green-500 mb-4" />
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "At Global Carers & Disability Cards, we believe that every individual deserves equal access to opportunities, 
                  services, and experiences. Our mission extends far beyond providing identification cards – we are building 
                  bridges to create a truly inclusive society where everyone can thrive."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "Since our establishment, we have been unwavering in our commitment to breaking down barriers and creating 
                  pathways for people with disabilities, their dedicated carers, and those who need additional support. Each 
                  card we issue represents hope, dignity, and the promise of a more accessible tomorrow."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "Our comprehensive approach encompasses not just identification, but access to essential services, exclusive 
                  benefits, and a supportive community network. We work tirelessly with our partners across the UAE to ensure 
                  that our cardholders receive the recognition and assistance they deserve."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Together with our growing network of partners and the unwavering support of the UAE government, we continue 
                  to expand access to discounts, services, and support systems that make daily life more manageable and enjoyable 
                  for our cardholders. This is not just our business – it's our calling to serve humanity."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To create a UAE where every person, regardless of their abilities or circumstances, can participate fully 
                in society with dignity, independence, and equal opportunities for growth, success, and meaningful contribution 
                to their communities.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive disability card services that connect individuals with essential resources, 
                exclusive benefits, and robust support systems while advocating for accessibility, inclusion, and equal 
                opportunities across all sectors of UAE society.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Commitment */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Leadership Commitment</h3>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                "As CEO, I am personally committed to ensuring that GCDC remains at the forefront of disability advocacy 
                and support services in the UAE. We continuously invest in technology, training, and partnerships to enhance 
                the experience and benefits available to our cardholders."
              </p>
              <p className="text-lg leading-relaxed">
                "Our team works around the clock to identify new opportunities for partnerships, develop innovative support 
                services, and advocate for policy changes that benefit our community. We believe in transparency, accountability, 
                and measurable impact in everything we do."
              </p>
              <p className="text-lg leading-relaxed">
                "I invite you to join us in this important mission. Whether you are seeking support for yourself or a loved one, 
                or you represent an organization that shares our values, together we can build a more inclusive and accessible UAE."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Us in Building an Inclusive Future
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Together, we can create a society where everyone has the opportunity to thrive and contribute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn About Our Services
            </button>
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
              Apply for a Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOWord;