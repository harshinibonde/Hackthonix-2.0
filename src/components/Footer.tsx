import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="font-display text-xl font-bold mb-4 block">
              LaunchPad <span className="text-primary">↗</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              The premier platform for discovering high-potential startups. Built for founders, investors, and early adopters.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Platform</h4>
            <div className="space-y-3">
              <Link to="/explore" className="block font-body text-sm text-lp-text-secondary hover:text-foreground transition-colors">Browse All</Link>
              <Link to="/explore" className="block font-body text-sm text-lp-text-secondary hover:text-foreground transition-colors">Top Rated</Link>
              <Link to="/categories" className="block font-body text-sm text-lp-text-secondary hover:text-foreground transition-colors">Categories</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Company</h4>
            <div className="space-y-3">
              <Link to="/about" className="block font-body text-sm text-lp-text-secondary hover:text-foreground transition-colors">About Us</Link>
              <Link to="/submit" className="block font-body text-sm text-lp-text-secondary hover:text-foreground transition-colors">Submit Startup</Link>
              <a href="#" className="block font-body text-sm text-lp-text-secondary hover:text-foreground transition-colors">Privacy Policy</a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="#" className="block font-body text-sm text-lp-text-secondary hover:text-foreground transition-colors">Twitter / X</a>
              <a href="#" className="block font-body text-sm text-lp-text-secondary hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="block font-body text-sm text-lp-text-secondary hover:text-foreground transition-colors">Email Us</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-muted-foreground">© 2025 LaunchPad. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
