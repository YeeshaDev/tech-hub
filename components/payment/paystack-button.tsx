"use client";

import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { generatePaystackConfig } from "@/lib/paystack/config";
import { supabase } from "@/lib/supabase/client";

interface PaystackButtonProps {
  email: string;
  amount: number;
  eventId: string;
  userId: string;
  quantity: number;
  onSuccess?: () => void;
  onError?: () => void;
}

export function PaystackButton({
  email,
  amount,
  eventId,
  userId,
  quantity,
  onSuccess,
  onError,
}: PaystackButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const config = generatePaystackConfig({
    email,
    amount,
    metadata: {
      eventId,
      userId,
      quantity,
    },
  });

  const initializePayment = usePaystackPayment(config);

  const handleSuccess = async () => {
    setIsLoading(true);
    try {
      // Create ticket record
      const { error: ticketError } = await supabase.from("tickets").insert({
        event_id: eventId,
        user_id: userId,
        quantity,
        status: "confirmed",
        total_price: amount,
      });

      if (ticketError) throw ticketError;

      // Update event available tickets
      const { error: eventError } = await supabase
        .from("events")
        .update({
          available_tickets: supabase.raw("available_tickets - ?", [quantity]),
        })
        .eq("id", eventId);

      if (eventError) throw eventError;

      toast({
        title: "Payment successful!",
        description: "Your ticket has been confirmed.",
      });

      onSuccess?.();
    } catch (error) {
      console.error("Error processing payment:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem processing your payment.",
      });
      onError?.();
    } finally {
      setIsLoading(false);
    }
  };

  const handleError = () => {
    toast({
      variant: "destructive",
      title: "Payment failed",
      description: "Please try again or contact support if the problem persists.",
    });
    onError?.();
  };

  return (
    <Button
      className="w-full"
      disabled={isLoading}
      onClick={() => {
        initializePayment(handleSuccess as any, handleError);
      }}
    >
      {isLoading ? "Processing..." : "Pay Now"}
    </Button>
  );
}