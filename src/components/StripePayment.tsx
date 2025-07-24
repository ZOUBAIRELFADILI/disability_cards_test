import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CreditCard, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import stripePromise from '../utils/stripe';

interface PaymentProps {
  amount: number;
  cardType: string;
  applicationData: any;
}

const StripePayment: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { amount = 300, cardType = 'Disabilities Card', applicationData } = location.state || {};

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (formattedValue.length <= 19) {
        setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
      }
      return;
    }
    
    // Format expiry date
    if (name === 'expiryDate') {
      const formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
      if (formattedValue.length <= 5) {
        setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
      }
      return;
    }
    
    // Limit CVV to 3 digits
    if (name === 'cvv') {
      const formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length <= 3) {
        setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
      }
      return;
    }
    
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll simulate a successful payment
      // In a real application, you would integrate with Stripe's API
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      // Simulate successful payment
      setPaymentSuccess(true);
      
      // Redirect to success page after 3 seconds
      setTimeout(() => {
        navigate('/', { 
          state: { 
            paymentSuccess: true, 
            cardType: cardType,
            amount: amount 
          } 
        });
      }, 3000);

    } catch (err) {
      setError('Payment failed. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">
            Your payment of {amount} AED for {cardType} has been processed successfully.
          </p>
          <p className="text-sm text-gray-500">
            Redirecting to home page...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Application
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Payment</h1>
          <p className="text-gray-600">Secure payment for your {cardType}</p>
        </div>

        {/* Payment Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
          <div className="flex justify-between items-center py-3 border-b">
            <span className="text-gray-600">{cardType} Application Fee</span>
            <span className="font-semibold">{amount} AED</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b">
            <span className="text-gray-600">Processing Fee</span>
            <span className="font-semibold">0 AED</span>
          </div>
          <div className="flex justify-between items-center py-3 font-bold text-lg">
            <span>Total</span>
            <span className="text-uae-green">{amount} AED</span>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Lock className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-sm text-gray-600">Secure SSL Encrypted Payment</span>
          </div>

          <form onSubmit={handlePayment} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cardholder Name *
              </label>
              <input
                type="text"
                name="cardholderName"
                required
                value={cardDetails.cardholderName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number *
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  required
                  value={cardDetails.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green"
                  placeholder="4242 4242 4242 4242"
                />
                <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Test card: 4242 4242 4242 4242
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date *
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  required
                  value={cardDetails.expiryDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV *
                </label>
                <input
                  type="text"
                  name="cvv"
                  required
                  value={cardDetails.cvv}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green"
                  placeholder="123"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-uae-green hover:bg-green-700 transform hover:scale-105'
              }`}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing Payment...
                </div>
              ) : (
                `Pay ${amount} AED`
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Your payment is secured by 256-bit SSL encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripePayment;