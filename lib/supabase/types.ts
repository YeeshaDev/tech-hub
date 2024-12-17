export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          date: string
          location: string
          organizer_id: string
          category: string
          total_tickets: number
          available_tickets: number
          price: number
          image_url: string
          waitlist_count: number
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          date: string
          location: string
          organizer_id: string
          category: string
          total_tickets: number
          available_tickets: number
          price: number
          image_url: string
          waitlist_count?: number
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string
          date?: string
          location?: string
          organizer_id?: string
          category?: string
          total_tickets?: number
          available_tickets?: number
          price?: number
          image_url?: string
          waitlist_count?: number
        }
      }
      communities: {
        Row: {
          id: string
          created_at: string
          name: string
          description: string
          category: string
          owner_id: string
          member_count: number
          image_url: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          description: string
          category: string
          owner_id: string
          member_count?: number
          image_url: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          description?: string
          category?: string
          owner_id?: string
          member_count?: number
          image_url?: string
        }
      }
      profiles: {
        Row: {
          id: string
          created_at: string
          username: string
          full_name: string
          avatar_url: string
          bio: string
          email: string
        }
        Insert: {
          id: string
          created_at?: string
          username: string
          full_name: string
          avatar_url?: string
          bio?: string
          email: string
        }
        Update: {
          id?: string
          created_at?: string
          username?: string
          full_name?: string
          avatar_url?: string
          bio?: string
          email?: string
        }
      }
      tickets: {
        Row: {
          id: string
          created_at: string
          event_id: string
          user_id: string
          status: 'pending' | 'confirmed' | 'cancelled'
          quantity: number
          total_price: number
        }
        Insert: {
          id?: string
          created_at?: string
          event_id: string
          user_id: string
          status?: 'pending' | 'confirmed' | 'cancelled'
          quantity: number
          total_price: number
        }
        Update: {
          id?: string
          created_at?: string
          event_id?: string
          user_id?: string
          status?: 'pending' | 'confirmed' | 'cancelled'
          quantity?: number
          total_price?: number
        }
      }
    }
  }
}