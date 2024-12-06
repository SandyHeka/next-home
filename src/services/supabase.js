import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qbsqawplvxvwrypeqyhi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFic3Fhd3Bsdnh2d3J5cGVxeWhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NzgzMzksImV4cCI6MjA0ODA1NDMzOX0.qET3xIeleMd5KJ2_2nsRKUmJgoklRrLVkFJp5klicz4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
