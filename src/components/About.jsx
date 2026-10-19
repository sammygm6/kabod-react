import { church } from '../siteData.js';

export default function About() {
  return (
    <section id="nosotros" className="section about">
      <div className="wrap aboutgrid">
        <div className="aboutart"><img src="/assets/kabod-logo.png" alt="KABOD" /></div>
        <div>
          <div className="kicker">Nuestra comunidad</div>
          <h2>{church.name}</h2>
          <p><strong>{church.ministry}</strong></p>
          <p>Somos una comunidad cristiana en Miami. Nos alegrará recibirte y compartir contigo nuestros servicios y discipulados.</p>
          <p><strong>{church.pastor}</strong></p>
          <a className="btn" href="#contacto">Contáctanos</a>
        </div>
      </div>
    </section>
  );
}
