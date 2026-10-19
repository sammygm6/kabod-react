import { church } from '../siteData.js';

export default function Footer() {
  return (
    <footer>
      <strong>KABOD</strong> · {church.ministry}
      <br />
      {church.address}
      <br />
      {/* 🔐 Secure admin portal gateway link */}
      <a 
        href="/?admin=true" 
        style={{ 
          color: '#64748b', 
          textDecoration: 'none', 
          fontSize: '12px', 
          display: 'inline-block', 
          marginTop: '8px' 
        }}
      >
        🔒 Acceso Administrativo
      </a>
    </footer>
  );
}
