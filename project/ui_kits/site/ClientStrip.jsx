function ClientStrip() {
  const clients = ["Frekl Drinks", "Posca Hydrate", "Sofi Trading", "Smooch", "Kippis", "Fourth Wave Wine"];
  return (
    <section className="clients" aria-label="Worked with">
      <div className="clients-inner">
        <span className="clients-label">Worked with</span>
        <div className="clients-list">
          {clients.map((c, i) => (
            <React.Fragment key={c}>
              <span className="client-name">{c}</span>
              {i < clients.length - 1 ? <span className="client-dot">·</span> : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ClientStrip = ClientStrip;
