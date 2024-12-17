import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
});

export const getStripeSession = async ({
  eventId,
  eventTitle,
  price,
  quantity,
  userId,
}: {
  eventId: string;
  eventTitle: string;
  price: number;
  quantity: number;
  userId: string;
}) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: eventTitle,
          },
          unit_amount: price * 100, // Convert to cents
        },
        quantity,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/tickets?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/tickets?canceled=true`,
    metadata: {
      eventId,
      userId,
      quantity,
    },
  });

  return session;
};