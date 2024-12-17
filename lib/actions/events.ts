"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { getUser } from "./user-details";

export async function createEvent(formData: FormData) {
  const supabase = createClient();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const date = formData.get("date") as string;
  const location = formData.get("location") as string;
  const category = formData.get("category") as string;
  const totalTickets = parseInt(formData.get("total_tickets") as string, 10);
  const price = parseFloat(formData.get("price") as string);
  const imageUrl = formData.get("image_url") as string;

  // Input validation
  if (!title || !description || !date || !location || !category || !totalTickets || price === undefined || !imageUrl) {
    throw new Error("All fields are required.");
  }

  try {
     const user = await getUser()
    
    if (!user) throw new Error("Not authenticated");

    const { error } = await (await supabase).from("events").insert({
      title,
      description,
      date,
      location,
      category,
      total_tickets: totalTickets,
      price,
      image_url: imageUrl,
      organizer_id: user.id,
      available_tickets: totalTickets,
      waitlist_count: 0,
    });

    if (error) throw error;

    // Revalidate the events page or path
    revalidatePath("/dashboard/events");
    return { success: true };
  } catch (error:any) {
    throw new Error(error.message || "Event creation failed");
  }
}
export async function getEventsForUser() {
    const supabase = createClient();
  
    try {
      const user = await getUser();
      if (!user) throw new Error("Not authenticated");
  
      // Fetch events where the organizer_id matches the current user's ID
      const { data: events, error } = await (await supabase)
        .from("events")
        .select("*")
        .eq("organizer_id", user.id);
  
      if (error) throw error;
  
      return events;
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch events.");
    }
  }
  
