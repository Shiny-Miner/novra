const SUPABASE_URL = "https://tulnsdrtgrkcxtkyydjj.supabase.co";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1bG5zZHJ0Z3JrY3h0a3l5ZGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4OTM4NDksImV4cCI6MjA5ODQ2OTg0OX0.dmXrS3xKRrPMvUsMQve2gGA1E7qvALz4mqbIa2KiKQg";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

window.supabaseClient = supabase;