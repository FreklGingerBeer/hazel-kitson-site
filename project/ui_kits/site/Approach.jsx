function Pillar({ num, tag, heading, body }) {
  return (
    <article className="pillar">
      <span className="pillar-bignum">{num}</span>
      <span className="pillar-tag">{tag}</span>
      <h3>{heading}</h3>
      <p>{body}</p>
    </article>
  );
}

function Approach() {
  const items = [
    { num: "01", tag: "Category", heading: "What's actually moving on shelf.", body: "What's selling, what's being quietly delisted, where the gaps sit. Across non-alc, wine, spirits, RTD, beer and functional." },
    { num: "02", tag: "Makers",   heading: "Who can produce it.",            body: "Food technologists, contract manufacturers, packaging and ingredient suppliers — matched to the scale you're actually at." },
    { num: "03", tag: "Rules",    heading: "FSANZ, claims, certifications.", body: "Nutrition panels, allergen statements, halal/kosher/organic certifications, export market requirements. The work that quietly holds a launch together." },
    { num: "04", tag: "Numbers",  heading: "Honest unit economics.",         body: "COGS, MOQs, packaging trade-offs, landed costs. Balanced against the formulation you actually want to ship." },
  ];
  return (
    <section id="approach" className="what bone">
      <div className="container">
        <SectionHead
          eyebrow="Approach"
          heading='Four things to <em>get right.</em>'
          body="Most beverage projects come unstuck on the same handful of things. The consultancy looks after these so founders can stay where they're useful — on the brand, the buyers, the room."
        />
        <div className="pillars">
          {items.map(p => <Pillar key={p.num} {...p} />)}
        </div>
      </div>
    </section>
  );
}
window.Pillar = Pillar;
window.Approach = Approach;
