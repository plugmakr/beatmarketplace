export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      beats: {
        Row: {
          audio_url: string | null
          bpm: number
          created_at: string
          id: string
          image_url: string | null
          key: string
          price: number
          producer: string
          seller_id: string | null
          title: string
          updated_at: string
        }
        Insert: {
          audio_url?: string | null
          bpm: number
          created_at?: string
          id?: string
          image_url?: string | null
          key: string
          price: number
          producer: string
          seller_id?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          audio_url?: string | null
          bpm?: number
          created_at?: string
          id?: string
          image_url?: string | null
          key?: string
          price?: number
          producer?: string
          seller_id?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "beats_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          created_at: string
          email: string
          id: string
          last_purchase: string | null
          name: string
          purchase_count: number | null
          seller_id: string | null
          total_spent: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          last_purchase?: string | null
          name: string
          purchase_count?: number | null
          seller_id?: string | null
          total_spent?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          last_purchase?: string | null
          name?: string
          purchase_count?: number | null
          seller_id?: string | null
          total_spent?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "customers_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      email_campaigns: {
        Row: {
          click_rate: number | null
          created_at: string
          id: string
          name: string
          open_rate: number | null
          seller_id: string | null
          status: string
          subscriber_count: number | null
          updated_at: string
        }
        Insert: {
          click_rate?: number | null
          created_at?: string
          id?: string
          name: string
          open_rate?: number | null
          seller_id?: string | null
          status: string
          subscriber_count?: number | null
          updated_at?: string
        }
        Update: {
          click_rate?: number | null
          created_at?: string
          id?: string
          name?: string
          open_rate?: number | null
          seller_id?: string | null
          status?: string
          subscriber_count?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_campaigns_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      marketing_campaigns: {
        Row: {
          conversions: number | null
          created_at: string
          engagement_rate: number | null
          id: string
          name: string
          reach: number | null
          seller_id: string | null
          status: string
          updated_at: string
        }
        Insert: {
          conversions?: number | null
          created_at?: string
          engagement_rate?: number | null
          id?: string
          name: string
          reach?: number | null
          seller_id?: string | null
          status: string
          updated_at?: string
        }
        Update: {
          conversions?: number | null
          created_at?: string
          engagement_rate?: number | null
          id?: string
          name?: string
          reach?: number | null
          seller_id?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketing_campaigns_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          role: string | null
          updated_at: string
          username: string | null
        }
        Insert: {
          created_at?: string
          id: string
          role?: string | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          role?: string | null
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      sales: {
        Row: {
          amount: number
          beat_id: string | null
          created_at: string
          customer_id: string | null
          id: string
          kit_id: string | null
          seller_id: string | null
        }
        Insert: {
          amount: number
          beat_id?: string | null
          created_at?: string
          customer_id?: string | null
          id?: string
          kit_id?: string | null
          seller_id?: string | null
        }
        Update: {
          amount?: number
          beat_id?: string | null
          created_at?: string
          customer_id?: string | null
          id?: string
          kit_id?: string | null
          seller_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_beat_id_fkey"
            columns: ["beat_id"]
            isOneToOne: false
            referencedRelation: "beats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_kit_id_fkey"
            columns: ["kit_id"]
            isOneToOne: false
            referencedRelation: "sound_kits"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sound_kits: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          price: number
          producer: string
          sample_count: number | null
          seller_id: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          price: number
          producer: string
          sample_count?: number | null
          seller_id?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          price?: number
          producer?: string
          sample_count?: number | null
          seller_id?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sound_kits_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          created_at: string
          customer_id: string | null
          id: string
          priority: string
          seller_id: string | null
          status: string
          subject: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          id?: string
          priority: string
          seller_id?: string | null
          status: string
          subject: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          id?: string
          priority?: string
          seller_id?: string | null
          status?: string
          subject?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_tickets_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "support_tickets_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      videos: {
        Row: {
          created_at: string
          id: string
          likes: number | null
          seller_id: string | null
          title: string
          updated_at: string
          views: number | null
          youtube_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          likes?: number | null
          seller_id?: string | null
          title: string
          updated_at?: string
          views?: number | null
          youtube_id: string
        }
        Update: {
          created_at?: string
          id?: string
          likes?: number | null
          seller_id?: string | null
          title?: string
          updated_at?: string
          views?: number | null
          youtube_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "videos_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      website_settings: {
        Row: {
          created_at: string
          custom_css: string | null
          domain: string | null
          font_family: string | null
          id: string
          layout_style: string | null
          primary_color: string | null
          seller_id: string | null
          seo_description: string | null
          seo_title: string | null
          template: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          custom_css?: string | null
          domain?: string | null
          font_family?: string | null
          id?: string
          layout_style?: string | null
          primary_color?: string | null
          seller_id?: string | null
          seo_description?: string | null
          seo_title?: string | null
          template?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          custom_css?: string | null
          domain?: string | null
          font_family?: string | null
          id?: string
          layout_style?: string | null
          primary_color?: string | null
          seller_id?: string | null
          seo_description?: string | null
          seo_title?: string | null
          template?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "website_settings_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
