import { services } from "../data";

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-heading">
        <p className="section-kicker">Services</p>
        <h2>What We Do</h2>
        <p>Practical, accountable delivery across the infrastructure, property and enterprise value chain.</p>
      </div>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, text }) => (
          <article className="service-card" key={title}>
            <div className="card-icon-box"><Icon size={23} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
