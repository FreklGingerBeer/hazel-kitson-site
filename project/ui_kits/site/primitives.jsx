// Shared primitives — Eyebrow + SectionHead
const { useEffect, useState } = React;

function Eyebrow({ children, rule = true, style }) {
  return (
    <span className={"eyebrow" + (rule ? " with-rule" : "")} style={style}>
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, heading, body, center = false }) {
  return (
    <div className={"section-head" + (center ? " center" : "")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="section-heading" dangerouslySetInnerHTML={{ __html: heading }} />
      {body ? <p>{body}</p> : null}
    </div>
  );
}

window.Eyebrow = Eyebrow;
window.SectionHead = SectionHead;
window.React_useEffect = useEffect;
window.React_useState = useState;
