import React from 'react';

export default function Giving() {
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
          
          {/* CARD 1: PERFECT UNALLOCATED ZELLE QR CODE */}
          <div style={{ backgroundColor: '#1e293b', padding: '40px 30px', borderRadius: '16px', border: '1px solid #334155', width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <div>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>📱</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 10px 0', color: '#fff' }}>Ofrendar por Zelle</h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5', margin: '0 0 25px 0' }}>
                Escanee el código QR oficial directamente desde la aplicación de su banco móvil para enviar su contribución al instante.
              </p>
              
              {/* Clean, Full Square QR Code Container */}
              <div style={{ background: '#ffffff', padding: '20px', borderRadius: '14px', display: 'inline-block', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}>
                <div style={{ width: '220px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '6px' }}>
                  <img 
                    src="/zelle-qr.png" 
                    alt="Zelle QR Code" 
                    style={{ 
                      width: '100%',       /* Forces the full image to fit the container width */
                      height: '100%',      /* Forces the full image to fit the container height */
                      objectFit: 'contain', /* Scales the image perfectly so nothing gets cropped out */
                      display: 'block' 
                    }} 
                  />
                </div>
                {/* Brand Identifier */}
                <div style={{ color: '#7414CA', fontWeight: 'bold', fontSize: '13px', marginTop: '12px', letterSpacing: '0.05em' }}>
                  🟣 Código Escaneable Zelle®
                </div>
              </div>

              {/* Verified Details Block */}
              <div style={{ backgroundColor: '#0f172a', padding: '15px', borderRadius: '8px', border: '1px dotted #475569', textAlign: 'left', marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ color: '#64748b', fontSize: '11px', display: 'block', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '0.05em' }}>Correo Electrónico Oficial</span>
                  <span style={{ color: '#38bdf8', fontSize: '15px', fontWeight: 'bold', wordBreak: 'break-all' }}>jehovakabodministries@gmail.com</span>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontSize: '11px', display: 'block', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '0.05em' }}>A Nombre de (Titular Registrado)</span>
                  <span style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>MINISTERIO APOSTOLICO Y PROFETICO</span>
                </div>
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '12px', margin: 0, fontStyle: 'italic' }}>
              📌 Abra la app de su banco, elija "Scan QR" y apunte la cámara a este recuadro.
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
                  marginBottom: '15px'
                }}
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
