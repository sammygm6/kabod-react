import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // Authenticate user credentials against Supabase Auth engine
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg('Credenciales inválidas. Por favor intenta de nuevo.');
    } else if (data?.user) {
      // Pass the active session upward to unlock the admin interface
      onLoginSuccess(data.user);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '30px', background: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', color: '#333', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#111' }}>Iglesia KABOD</h2>
      <p style={{ textAlign: 'center', color: '#666', fontSize: '14px', marginBottom: '25px' }}>Panel de Control Administrativo</p>

      {errorMsg && (
        <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '4px', backgroundColor: '#f8d7da', color: '#721c24', fontSize: '14px', textAlign: 'center' }}>
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Correo Electrónico:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="admin@iglesiakabod.com" />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="••••••••" />
        </div>

        <button type="submit" disabled={loading} style={{ padding: '12px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', marginTop: '10px' }}>
          {loading ? 'Verificando...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  );
}
