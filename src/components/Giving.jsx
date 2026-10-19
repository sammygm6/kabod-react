import React from 'react';
import { church } from '../siteData.js';

export default function Giving() {
  // 🔗 Configuration: Replace this with your church's actual PayPal link
  const paypalMeLink = "https://paypal.me"; 

  return (
    <section id="giving" style={{ padding: '80px 20px', backgroundColor: '#0f172a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Header Block */}
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: '#38bdf8', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>
          Generosidad
        </p>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '15px', color: '#fff' }}>
          Dando con Propósito
        </h2>
        <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 50px auto', fontSize: '16px', lineHeight: '1.6' }}>
          Cada una de sus siembras, diezmos y ofrendas nos ayuda a seguir expandiendo el Reino de Dios y a bendecir a nuestra comunidad de fe. ¡Gracias por apoyar la visión!
        </p>

        {/* Two-Column Card Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', alignItems: 'stretch' }}>
          
          {/* CARD 1: ZELLE */}
          <div style={{ backgroundColor: '#1e293b', padding: '40px 30px', borderRadius: '16px', border: '1px solid #334155', width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <div>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>📱</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 10px 0', color: '#fff' }}>Ofrendar por Zelle</h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5', margin: '0 0 25px 0' }}>
                Puede sembrar directamente desde la aplicación de su banco favorito sin comisiones adicionales utilizando nuestra cuenta oficial.
              </p>
              
              {/* Zelle Info Box */}
              <div style={{ backgroundColor: '#0f172a', padding: '15px', borderRadius: '8px', border: '1px dotted #475569', textAlign: 'left', marginBottom: '20px' }}>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ color: '#64748b', fontSize: '12px', display: 'block', textTransform: 'uppercase', fontWeight: 'bold' }}>Correo Electrónico / Identificador</span>
                  <span style={{ color: '#38bdf8', fontSize: '16px', fontWeight: 'bold', wordBreak: 'break-all' }}>{church.email || "ofrendas@ministeriokabod.org"}</span>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontSize: '12px', display: 'block', textTransform: 'uppercase', fontWeight: 'bold' }}>A Nombre de (Titular)</span>
                  <span style={{ color: '#fff', fontSize: '15px', fontWeight: 'medium' }}>Ministerio Kabod Inc.</span>
                </div>
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '12px', margin: 0, fontStyle: 'italic' }}>
              📌 Busque la opción "Send Money with Zelle" en su banca móvil.
            </p>
          </div>

          {/* CARD 2: PAYPAL / CARD */}
          <div style={{ backgroundColor: '#1e293b', padding: '40px 30px', borderRadius: '16px', border: '1px solid #334155', width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <div>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>💳</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 10px 0', color: '#fff' }}>PayPal o Tarjeta</h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5', margin: '0 0 25px 0' }}>
                Si prefiere usar una tarjeta de crédito, débito o su cuenta de PayPal, use nuestro enlace seguro de recaudación digital.
              </p>
            </div>
            
            <div>
              {/* PayPal Button */}
              <a 
                href={paypalMeLink}
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  display: 'block', 
                  backgroundColor: '#0070ba', 
                  color: '#ffffff', 
                  textDecoration: 'none', 
                  padding: '14px 20px', 
                  borderRadius: '8px', 
                  fontWeight: 'bold', 
                  fontSize: '16px', 
                  textAlign: 'center',
                  transition: 'background-color 0.2s',
                  marginBottom: '15px'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#005ea6'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#0070ba'}
              >
                🌐 Donar vía PayPal
              </a>
              <p style={{ color: '#64748b', fontSize: '12px', margin: 0, textAlign: 'center' }}>
                Acepta las principales tarjetas bancarias internacionales.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
