import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        // Fetch only events that are marked as 'published'
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('status', 'published')
          .order('event_date', { ascending: true });

        if (error) throw error;
        setEvents(data || []);
      } catch (err) {
        console.error('Error loading events:', err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return <div style={{ color: '#0369a1', textAlign: 'center', padding: '40px' }}>Cargando actividades...</div>;
  }

  return (
    <section id="events" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <p style={{ textTransform: 'uppercase', tracking: '0.1em', color: '#0369a1', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>Mantente Conectado</p>
      <h2 style={{ fontSize: '36px', color: '#0c4a6e', marginBottom: '15px' }}>Próximos Eventos</h2>
      <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto 40px auto' }}>Descubre las próximas actividades y ocasiones especiales de nuestra familia KABOD.</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
        {events.length === 0 ? (
          // Fallback box if no published events exist in the database
          <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', maxWidth: '350px' }}>
            <span style={{ fontSize: '24px' }}>✨</span>
            <h3 style={{ margin: '15px 0 10px 0', color: '#0f172a' }}>No hay eventos próximos</h3>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Vuelve a consultar pronto para ver nuevas actividades.</p>
          </div>
        ) : (
          // Loop and render every real event from your Supabase table dynamically
          events.map((event) => (
            <div key={event.id} style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', width: '100%', maxWidth: '350px', textAlign: 'left' }}>
              <div style={{ fontSize: '24px', marginBottom: '15px' }}>
                {event.icon === 'clock' ? '🕒' : event.icon === 'book' ? '📖' : event.icon === 'heart' ? '❤️' : '📅'}
              </div>
              <h3 style={{ margin: '0 0 10px 0', color: '#0f172a', fontSize: '20px' }}>{event.title}</h3>
              <p style={{ color: '#0369a1', fontWeight: 'bold', fontSize: '15px', margin: '0 0 12px 0' }}>{event.date_label}</p>
              <p style={{ color: '#64748b', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{event.description}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
