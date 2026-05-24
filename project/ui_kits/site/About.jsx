function About() {
  const stats = [
    ["10+", "Years in drinks"],
    ["300+", "SKUs touched"],
    ["200+", "Venues stocking Frekl"],
    ["AU · NZ · UK", "Markets"],
  ];
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <aside className="about-side">
          <span className="about-mark">A small<br/>practice.</span>
          <span className="about-side-line">— Newcastle, working across AU, NZ &amp; UK.</span>
        </aside>
        <div className="about-body">
          <Eyebrow>About</Eyebrow>
          <h2>The studio behind the <em>work.</em></h2>
          <p>Founded in 2026 by Hazel Kitson, after a decade in beverage operations and product development. Before that, theatre sound. The route in matters less than the body of work it produced.</p>
          <p>Three hundred-plus SKUs across wine and non-alc with Fourth Wave Wine. A co-founded drinks brand, Frekl, now stocked in two hundred-plus venues nationally. National distribution for a Newcastle hydration label.</p>
          <p>The consultancy takes on a small number of engagements each year. Usually beverage. Occasionally the bits that don't fit the brief — formats that share the playbook.</p>
          <div className="about-stats">
            {stats.map(([n, l]) => (
              <div className="about-stat" key={l}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
