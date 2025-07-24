import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51R208k2em5dbbL8YLOXNLLwKGDxjk20RLvZ1Nk4VIiZ5PuiItY4VSNWUXgjl5oPyEoiqV4yvhSBt6aFJVDAsFLPd00UIHu6eba');

export default stripePromise;

export const createPaymentSession = async (amount: number, cardType: string) => {
  try {
    // In a real application, this would be a call to your backend
    // For demo purposes, we'll simulate the payment flow
    const response = await fetch('/api/create-payment-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100, // Convert to cents
        currency: 'aed',
        cardType: cardType,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create payment session');
    }

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error creating payment session:', error);
    throw error;
  }
};