import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AdminDashboard({ onLogout }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('calendar');
  const [dateLabel, setDateLabel] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [status, setStatus] = useState('published');
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSaveEvent = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    const newEvent = {
      title: title,
      description: description,
      icon: icon,
      date_label: dateLabel,
      event_date: eventDate ? new Date(eventDate).toISOString() : null,
      status: status
    };

    const { error } = await supabase
      .from('events')
      .insert([newEvent]);

    setLoading(false);

    if (error) {
      setMessage({ type: 'error', text: `Error guardando evento: ${error.message}` });
    } else {
      setMessage({ type: 'success', text: '¡Evento guardado exitosamente en la web!' });
      setTitle('');
      setDescription('');
      setDateLabel('');
      setEventDate('');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', background: '#f9f9f9', borderRadius: '8px', color: '#333', fontFamily: 'sans-serif' }}>
      
      {/* 🧭 Updated Navigation Layout Header Block */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', color: '#111' }}>Panel de Administración — Iglesia KABOD</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* ⛪ Public Site Return Link */}
          <a 
            href="/" 
            style={{ 
              padding: '8px 14px', 
              background: '#64748b', 
              color: '#fff', 
              textDecoration: 'none', 
              borderRadius: '4px', 
              fontSize: '14px', 
              fontWeight: 'bold',
              display: 'inline-block' 
            }}
          >
            🏠 Ver Sitio Web
          </a>
          {/* 🚪 Session Logout Button */}
          <button 
            onClick={onLogout} 
            style={{ 
              padding: '8px 14px', 
              background: '#dc3545', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold' 
            }}
          >
            Salir
          </button>
        </div>
      </div>

      {message.text && (
        <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '4px', backgroundColor: message.type === 'success' ? '#d4edda' : '#f8d7da', color: message.type === 'success' ? '#155724' : '#721c24' }}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSaveEvent} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Título del Evento:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Ej: Servicio de Adoración y Palabra" />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Descripción:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc', height: '80px' }} placeholder="Detalles de la actividad..." />
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Texto de Horario/Día (date_label):</label>
            <input type="text" value={dateLabel} onChange={(e) => setDateLabel(e.target.value)} required style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Ej: Domingos — 10:00 AM" />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Fecha en Calendario (event_date):</label>
            <input type="datetime-local" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Icono Visual:</label>
            <select value={icon} onChange={(e) => setIcon(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
              <option value="calendar">Calendario</option>
              <option value="clock">Reloj / Horario</option>
              <option value="heart">Corazón / Ayuda</option>
              <option value="book">Biblia / Estudio</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Estado:</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
              <option value="published">Publicado (Visible en la Web)</option>
              <option value="draft">Borrador (Oculto)</option>
            </select>
          </div>
        </div>

        <button type="submit" disabled={loading} style={{ padding: '12px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
          {loading ? 'Guardando...' : '💾 Guardar y Publicar Evento'}
        </button>
      </form>
    </div>
  );
}