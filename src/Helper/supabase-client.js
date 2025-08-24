import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE-URL;
const supabaseKey = import.meta.env.SUPABASE-KEY;

const supabase = createClient(supabaseUrl,supabaseKey);
export default supabase;