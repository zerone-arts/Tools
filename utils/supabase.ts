import { createClient } from "@supabase/supabase-js";
import { Database } from "../types_db";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// 클라이언트용 Supabase
export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    detectSessionInUrl: true,
  },
});

// 서버용 Supabase
