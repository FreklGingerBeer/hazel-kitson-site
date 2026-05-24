function Contact() {
  const meta = [
    ["Based", "Newcastle, AU"],
    ["Working with", "AU · NZ · UK"],
    ["LinkedIn", <a key="li" href="https://linkedin.com/in/hazelkitson" target="_blank" rel="noopener" className="value">in/hazelkitson</a>],
    ["Response", "Within 48 hours"],
  ];
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <Eyebrow>Get in touch</Eyebrow>
        <h2>Drop a <em>line.</em></h2>
        <p className="contact-lede">A paragraph is plenty. Replies within 48 hours, usually the same day. No pitch deck required.</p>
        <a href="mailto:hello@hazelkitson.com" className="contact-email">hello@hazelkitson.com</a>
        <div className="contact-meta">
          {meta.map(([label, value]) => (
            <div className="contact-meta-row" key={label}>
              <span className="label">{label}</span>
              {typeof value === "string" ? <span className="value">{value}</span> : value}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
