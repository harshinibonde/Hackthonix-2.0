import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? "frosted-glass border-b border-border"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 animate-fade-in-down ${navBg}`}>
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        <Link to="/" className="font-display text-xl font-bold text-foreground flex items-center gap-1">
          LaunchPad <span className="text-primary">↗</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { to: "/explore", label: "Explore" },
            { to: "/categories", label: "Categories" },
            { to: "/about", label: "About" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link-animated font-body text-sm font-medium text-foreground opacity-80 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/submit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-md shadow-lp-button hover:scale-105 hover:shadow-[0_8px_20px_rgba(108,99,255,0.4)] transition-all duration-200"
          >
            Submit Your Startup
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden frosted-glass border-b border-border px-6 py-4 space-y-4 animate-fade-in-up">
          <Link to="/explore" className="block font-body text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Explore</Link>
          <Link to="/categories" className="block font-body text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Categories</Link>
          <Link to="/about" className="block font-body text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/submit" className="block bg-primary text-primary-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-md text-center" onClick={() => setMobileOpen(false)}>Submit Your Startup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
