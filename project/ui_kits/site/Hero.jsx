function Hero() {
  return (
    <section id="top" className="hero" aria-label="Hazel Kitson — Beverage NPD Consultancy">
      <div className="hero-bg" role="img" aria-label="A grapefruit on a coral background"></div>
      <div className="hero-top">
        <Eyebrow>A Food &amp; Beverage NPD Consultancy</Eyebrow>
        <span className="hero-meta">
          <span>Newcastle, AU</span>
          <span>Est. 2026</span>
        </span>
      </div>
      <div className="hero-mid">
        <h1 className="hero-wordmark">No problem,<br/>darling.</h1>
        <p className="hero-lede">Concept, recipe, packaging, production — the bits between an idea and a real shelf.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Get in touch
            <span className="arrow">→</span>
          </a>
          <a href="mailto:hello@hazelkitson.com" className="email-link">hello@hazelkitson.com</a>
        </div>
      </div>
      <div className="hero-bottom">
        <p className="hero-aside">Drinks, mostly. The bits that don't fit the brief, also welcome.</p>
        <span className="hero-scroll">
          <span>Scroll</span>
          <span className="line"></span>
        </span>
      </div>
    </section>
  );
}
window.Hero = Hero;
