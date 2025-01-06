import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yqmdtooyfzwcxracbgsc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxbWR0b295Znp3Y3hyYWNiZ3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyMDA1NjEsImV4cCI6MjA1MTc3NjU2MX0.piGRJjsN3-p9qC7IZ-FFlFDW31MphLNgHX9RIgBTVzg";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);