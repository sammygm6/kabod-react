export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="heroin">
        <div>
          <div className="eyebrow">Bienvenidos a nuestra iglesia</div>
          <h1>Bienvenidos a Ministerio Kabod</h1>
          <p>Te invitamos a acompañarnos en Iglesia Cristiana KABOD, en el corazón de Miami.</p>
          <div className="buttons">
            <a className="btn" href="#horarios">Ver horarios</a>
            <a className="btn ghost" href="#ubicacion">Cómo llegar</a>
          </div>
        </div>
        <img className="logo" src="/assets/kabod-logo.png" alt="Logotipo de KABOD" />
      </div>
    </section>
  );
}
