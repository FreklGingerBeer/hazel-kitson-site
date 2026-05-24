function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"navbar" + (scrolled ? " scrolled" : "")} id="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="nav-brand">Hazel Kitson</a>
        <div className="nav-links">
          <a href="#approach" className="nav-link">Approach</a>
          <a href="#ways" className="nav-link">Ways in</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-cta">Get in touch</a>
        </div>
        <button className="nav-toggle" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
window.Navbar = Navbar;
