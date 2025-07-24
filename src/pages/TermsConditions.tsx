import React from 'react';
import { FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <AlertCircle className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Important Notice</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By applying for and using any of our disability cards (Disabilities Card, Carers Card, or Customer Support Card), 
              you agree to be bound by these terms and conditions. Please read them carefully as they contain important 
              information about your rights and obligations.
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                1. Introduction
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to Global Carers & Disability Cards (GCDC). These Terms and Conditions ("Terms") govern your use of our services, 
                  including the application for and use of our disability cards. By accessing our services, you agree to comply with and be 
                  bound by these Terms.
                </p>
                <p>
                  GCDC is committed to providing comprehensive support services for individuals with disabilities, their carers, and those 
                  requiring additional customer support throughout the UAE.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-green-500 mr-3" />
                2. Eligibility and Application
              </h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>2.1</strong> Applicants must be residents of the United Arab Emirates with valid Emirates ID.</p>
                <p><strong>2.2</strong> For Disabilities Card: Applicants must provide valid medical documentation confirming their disability status from a licensed healthcare provider.</p>
                <p><strong>2.3</strong> For Carers Card: Applicants must provide proof of their caregiving role and relationship to the person being cared for.</p>
                <p><strong>2.4</strong> For Customer Support Card: Applicants must demonstrate need for additional support services through appropriate documentation.</p>
                <p><strong>2.5</strong> All information provided in applications must be accurate, complete, and truthful. False or misleading information may result in application rejection or card cancellation.</p>
                <p><strong>2.6</strong> GCDC reserves the right to verify all information provided and may request additional documentation as needed.</p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-green-500 mr-3" />
                3. Card Usage and Benefits
              </h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>3.1</strong> Cards are non-transferable and must only be used by the named cardholder with valid identification.</p>
                <p><strong>3.2</strong> Cards must be presented along with Emirates ID when accessing benefits or services at partner locations.</p>
                <p><strong>3.3</strong> Benefits and discounts are subject to partner terms and conditions and may change without prior notice.</p>
                <p><strong>3.4</strong> GCDC reserves the right to modify, suspend, or terminate benefits at any time with reasonable notice.</p>
                <p><strong>3.5</strong> Cards remain the property of GCDC and must be returned upon request or when no longer eligible.</p>
                <p><strong>3.6</strong> Misuse of cards may result in immediate suspension or permanent cancellation of services.</p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Privacy and Data Protection</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>4.1</strong> We collect and process personal data in accordance with UAE data protection laws and our Privacy Policy.</p>
                <p><strong>4.2</strong> Personal information will only be used for card administration, service provision, and improving our services.</p>
                <p><strong>4.3</strong> We may share necessary information with partner organizations to facilitate benefits and services.</p>
                <p><strong>4.4</strong> Cardholders have the right to access, correct, or request deletion of their personal data subject to legal requirements.</p>
                <p><strong>4.5</strong> Medical information is treated with the highest level of confidentiality and security.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">5. Card Validity and Renewal</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>5.1</strong> Cards are valid for a period of 3 years from the date of issue unless otherwise specified.</p>
                <p><strong>5.2</strong> Renewal applications must be submitted at least 30 days before expiration to ensure continuity of services.</p>
                <p><strong>5.3</strong> Renewal may require updated documentation, medical assessments, or verification of continued eligibility.</p>
                <p><strong>5.4</strong> Expired cards cannot be used to access benefits or services until renewed.</p>
                <p><strong>5.5</strong> GCDC will provide renewal reminders but cardholders are responsible for timely renewal.</p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">6. Responsibilities and Conduct</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>6.1</strong> Cardholders must notify GCDC immediately of any changes in circumstances affecting eligibility.</p>
                <p><strong>6.2</strong> Lost, stolen, or damaged cards must be reported immediately to prevent misuse.</p>
                <p><strong>6.3</strong> Cards must not be used fraudulently or for purposes other than intended.</p>
                <p><strong>6.4</strong> Cardholders must treat partner staff and other service users with respect and courtesy.</p>
                <p><strong>6.5</strong> Any violation of these terms may result in suspension or permanent cancellation of services.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>7.1</strong> GCDC is not liable for any loss or damage arising from partner service failures or unavailability.</p>
                <p><strong>7.2</strong> Our liability is limited to the direct costs of card replacement or administration fees paid.</p>
                <p><strong>7.3</strong> We do not guarantee the availability, quality, or continuity of partner services.</p>
                <p><strong>7.4</strong> Force majeure events may affect service delivery without liability to GCDC.</p>
                <p><strong>7.5</strong> GCDC shall not be liable for any indirect, consequential, or punitive damages.</p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">8. Governing Law and Disputes</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>8.1</strong> These terms are governed by the laws of the United Arab Emirates.</p>
                <p><strong>8.2</strong> Any disputes will be resolved through UAE courts or approved arbitration procedures.</p>
                <p><strong>8.3</strong> We encourage resolution through our customer service channels before pursuing legal action.</p>
                <p><strong>8.4</strong> If any provision of these terms is found invalid, the remaining provisions shall continue in effect.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about these terms and conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> support@gcdc.help</p>
                <p><strong>Phone:</strong> +971 4 XXX XXXX</p>
                <p><strong>Address:</strong> Dubai, United Arab Emirates</p>
                <p><strong>Website:</strong> www.gcdc.ae</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center text-gray-500 text-sm">
              <p>Last updated: January 2025</p>
              <p>Version 3.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;