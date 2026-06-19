// AIS School Portal — Supabase configuration
// Points to the new "Adue portal" Supabase project.

const SUPABASE_URL = "https://cvwwmjgmfdnaqtgxbkam.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2d3dtamdtZmRuYXF0Z3hia2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3OTYzNTYsImV4cCI6MjA5NzM3MjM1Nn0.ib_FGF8tvgS45C9ODVoUWgD9xJJizg2RNT-XWIvLFuw";

// Shared client used by every page.
// Requires this script tag BEFORE this file on every page:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
