function Way({ num, title, body, meta, featured, flag }) {
  return (
    <article className={"way" + (featured ? " featured" : "")}>
      {flag ? <span className="way-flag">{flag}</span> : null}
      <span className="way-num">— {num}</span>
      <h3>{title}</h3>
      <p>{body}</p>
      <dl className="way-meta">
        {meta.map(([dt, dd]) => (
          <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
        ))}
      </dl>
    </article>
  );
}

function Ways() {
  const ways = [
    {
      num: "01 Project",
      title: "Defined work, defined outcome.",
      body: "Recipe development, packaging, production scheduling, launch. Quoted in stages so each phase costs are clear before it starts.",
      meta: [["Best for", "First products & reformulations"], ["Pricing", "Fixed-fee, in stages"], ["Timeline", "6 – 16 weeks"]],
    },
    {
      num: "02 Retainer",
      title: "One day a week, ongoing.",
      body: "Supplier relationships, market shifts, formulations to review, buyer prep. A second pair of eyes across the work that doesn't fit a project brief.",
      meta: [["Best for", "Brands already in market"], ["Pricing", "Day-rate, monthly invoice"], ["Timeline", "30-day rolling"]],
      featured: true, flag: "Most signed",
    },
    {
      num: "03 Sounding board",
      title: "Hourly, ad hoc.",
      body: "For founders who don't need a consultant on the books, but do need someone to call when a supplier ghosts or a buyer asks the awkward question.",
      meta: [["Best for", "Founders flying solo"], ["Pricing", "Hourly"], ["Timeline", "No retainer, no commitment"]],
    },
  ];
  return (
    <section id="ways" className="ways">
      <div className="container">
        <SectionHead
          eyebrow="Ways in"
          heading='Three ways to <em>work together.</em>'
          body="Pricing's a conversation. Most projects start with an email."
        />
        <div className="ways-grid">
          {ways.map(w => <Way key={w.num} {...w} />)}
        </div>
        <p className="ways-footnote">— First conversation's free. Replies within 48 hours.</p>
      </div>
    </section>
  );
}
window.Way = Way;
window.Ways = Ways;
