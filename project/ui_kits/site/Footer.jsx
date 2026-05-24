function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <span className="footer-brand">Hazel Kitson</span>
          <span className="footer-tag">No problem, darling.</span>
        <p className="footer-bio">A food &amp; beverage NPD consultancy. Newcastle, Australia.<br/>ABN 44 804 672 647.</p>
        <p style={{fontFamily: 'var(--hand)', fontWeight: 600, fontSize: '1.15rem', color: 'var(--olive)', transform: 'rotate(-1.5deg)', display: 'inline-block', marginTop: '14px'}}>— H.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#approach">Approach</a></li>
            <li><a href="#ways">Ways in</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get in touch</h4>
          <ul>
            <li><a href="mailto:hello@hazelkitson.com">hello@hazelkitson.com</a></li>
            <li><a href="https://linkedin.com/in/hazelkitson" target="_blank" rel="noopener">LinkedIn</a></li>
            <li>Newcastle, Australia</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Hazel Kitson Consulting.</span>
        <span>Newcastle, AU.</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
