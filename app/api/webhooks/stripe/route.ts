import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/config';
import { supabase } from '@/lib/supabase/client';
import { emailTemplates } from '@/lib/email/templates';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('stripe-signature')!;

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const { eventId, userId, quantity } = session.metadata!;

      // Create ticket record
      const { error: ticketError } = await supabase.from('tickets').insert({
        event_id: eventId,
        user_id: userId,
        quantity: parseInt(quantity),
        status: 'confirmed',
        total_price: session.amount_total! / 100,
      });

      if (ticketError) throw ticketError;

      // Update event available tickets
      const { error: eventError } = await supabase
        .from('events')
        .update({
          available_tickets: supabase.raw('available_tickets - ?', [quantity]),
        })
        .eq('id', eventId);

      if (eventError) throw eventError;

      // Send confirmation email
      // Implementation depends on your email service
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    );
  }
}