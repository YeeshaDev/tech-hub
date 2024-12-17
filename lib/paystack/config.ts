export const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!;

export interface PaystackConfig {
  email: string;
  amount: number; // Amount in kobo (multiply by 100)
  metadata: {
    eventId: string;
    userId: string;
    quantity: number;
  };
  reference?: string;
}

export function generatePaystackConfig({
  email,
  amount,
  metadata,
}: PaystackConfig) {
  return {
    email,
    amount: amount * 100, // Convert to kobo
    publicKey: PAYSTACK_PUBLIC_KEY,
    metadata,
    reference: `evt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
  };
}