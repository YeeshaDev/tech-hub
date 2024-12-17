import { headers } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabase } from "@/lib/supabase/client";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const hash = crypto
      .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY!)
      .update(body)
      .digest("hex");
    const signature = headers().get("x-paystack-signature");

    if (hash !== signature) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    const event = JSON.parse(body);

    if (event.event === "charge.success") {
      const { metadata } = event.data;
      const { eventId, userId, quantity } = metadata;

      // Verify that the ticket hasn't already been processed
      const { data: existingTicket } = await supabase
        .from("tickets")
        .select()
        .eq("event_id", eventId)
        .eq("user_id", userId)
        .eq("reference", event.data.reference)
        .single();

      if (existingTicket) {
        return NextResponse.json({ message: "Ticket already processed" });
      }

      // Create ticket record
      const { error: ticketError } = await supabase.from("tickets").insert({
        event_id: eventId,
        user_id: userId,
        quantity: parseInt(quantity),
        status: "confirmed",
        total_price: event.data.amount / 100,
        reference: event.data.reference,
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
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 400 }
    );
  }
}