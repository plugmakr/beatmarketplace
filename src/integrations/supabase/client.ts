import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nznkmusgokyzonqwdxne.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56bmttdXNnb2t5em9ucXdkeG5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NzYyMjUsImV4cCI6MjA1MzA1MjIyNX0.Jjog_X1O5QUjNj3mGrg7KJj8wc7brUIYG_FjUkE3Uag";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);