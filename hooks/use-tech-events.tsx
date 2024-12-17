import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

// Types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  total_tickets: number;
  available_tickets: number;
  price: number;
  image_url: string;
  organizer_id: string;
  waitlist_count: number;
  created_at?: string | null;
}

export function useEvents(fetchUserEvents: boolean = false) {
  const supabase = createClient();

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      try {
        let query = supabase.from("events").select("*");

        // If fetchUserEvents is true, filter events for the authenticated user
        if (fetchUserEvents) {
          const {
            data: { user },
            error: authError,
          } = await supabase.auth.getUser();

          if (authError) throw new Error("Failed to authenticate user.");
          if (!user) throw new Error("No user is currently logged in.");

          query = query.eq("organizer_id", user.id);
        }

        const { data, error: fetchError } = await query;

        if (fetchError) throw fetchError;

        setEvents(data || []);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching events.");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [fetchUserEvents]);

  return { events, loading, error };
}
