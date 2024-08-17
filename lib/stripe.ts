import Stripe from 'stripe';

// Charger les variables d'environnement
if (!process.env.STRIPE_KEY_SECRET) {
  throw new Error("La clé API Stripe n'est pas définie dans les variables d'environnement");
}

// console.log("Clé API Stripe:", process.env.STRIPE_KEY_SECRET); // Vérifiez que la clé API est bien chargée

export const stripe = new Stripe(process.env.STRIPE_KEY_SECRET as string, {
  apiVersion: '2024-06-20',
  typescript: true,
});

export const getStripeSession = async ({priceId, domainUrl, customerId}: {priceId: string, domainUrl: string, customerId: string}) => {
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    billing_address_collection: 'auto',
    line_items: [{price: priceId, quantity: 1}],
    payment_method_types: ['card'],
    customer_update: {
      address: 'auto',
      name: 'auto',
    },
    success_url: `${domainUrl}/dashboard/payment/success`,
    cancel_url: `${domainUrl}/dashboard/payment/cancel`,
  });
  return session.url as string;
};