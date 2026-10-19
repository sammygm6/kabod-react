
import { supabase } from './supabase';

export async function testSupabaseConnection() {
  const { data, error } = await supabase
    .from('events')
    .select('id, title, status')
    .limit(5);

  if (error) {
    console.error('Supabase connection test failed:', error.message);
    return;
  }

  console.log('Supabase connection successful!');
  console.log('Events returned:', data);
}
