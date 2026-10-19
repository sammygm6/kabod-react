import { church } from '../siteData.js';

export default function Location() {
  return (
    <section id="ubicacion" className="section location">
      <div className="wrap center">
        <div className="kicker" style={{ color: '#f4cd79' }}>Visítanos</div>
        <h2>Estamos en Miami</h2>
        <p className="lead">{church.address}</p>
        <a className="btn" href={church.googleMapsUrl} target="_blank" rel="noopener noreferrer">Abrir en Google Maps ↗</a>
        <div id="contacto" className="contactgrid">
          <div className="contactbox">
            <h3>Teléfono</h3>
            <p><a href={`tel:+${church.phoneDigits}`}>{church.phoneDisplay}</a></p>
            <a href={`https://wa.me/${church.phoneDigits}`} target="_blank" rel="noopener noreferrer">Enviar mensaje por WhatsApp ↗</a>
          </div>
          <div className="contactbox">
            <h3>Correo electrónico</h3>
            <p><a href={`mailto:${church.email}`}>{church.email}</a></p>
            <p>Escríbenos para obtener más información.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
