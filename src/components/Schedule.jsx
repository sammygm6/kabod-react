import { meetings } from '../siteData.js';

export default function Schedule() {
  return (
    <section className="section center" id="horarios">
      <div className="wrap">
        <div className="kicker">Te esperamos</div>
        <h2>Horarios de reuniones</h2>
        <p className="lead">Ven y comparte con nosotros en nuestros servicios y discipulados.</p>
        <div className="cards">
          {meetings.map(({ icon, day, time, detail }) => (
            <div className="card" key={day}>
              <div className="icon" aria-hidden="true">{icon}</div>
              <h3>{day}</h3><div className="time">{time}</div><p>{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
