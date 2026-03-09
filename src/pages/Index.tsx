import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Eye, Globe } from "lucide-react";
import StartupCard from "@/components/StartupCard";
import { startups, categories, getFeaturedStartups } from "@/data/startups";
import { heroBg } from "@/lib/images";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const statsData = [
  { number: "500+", label: "Startups Listed" },
  { number: "40+", label: "Categories" },
  { number: "12,000", label: "Monthly Explorers" },
  { number: "80", label: "Countries Represented" },
];

const steps = [
  { icon: <Rocket size={28} />, title: "Founders Submit", desc: "Share your startup's story, product, and vision with the world." },
  { icon: <Eye size={28} />, title: "We Showcase", desc: "Your startup gets a beautiful profile page and category placement." },
  { icon: <Globe size={28} />, title: "World Discovers", desc: "Investors, supporters, and early adopters find you organically." },
];

const StatItem = ({ number, label }: { number: string; label: string }) => {
  const { ref, display } = useCountUp(number);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl md:text-4xl text-foreground mb-1">{display}</div>
      <div className="font-body text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
};

const Index = () => {
  const featured = getFeaturedStartups();
  const latest = startups.slice(-3);
  const scrollRef = useScrollReveal();

  return (
    <main ref={scrollRef}>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-mesh particles-bg">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 40%, hsla(244,100%,69%,0.15) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 70%, hsla(187,71%,59%,0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 tracking-tight leading-tight">
            Where the Next Big<br />Thing <em className="italic text-lp-coral">Starts</em>.
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover and support the most exciting early-stage startups across every industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-sm font-semibold px-8 py-3.5 rounded-md shadow-lp-button hover:scale-105 hover:shadow-[0_8px_20px_rgba(108,99,255,0.4)] transition-all duration-200"
            >
              Explore Startups
            </Link>
            <Link
              to="/submit"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-body text-sm font-semibold px-8 py-3.5 rounded-md hover:bg-muted hover:border-primary transition-all duration-200"
            >
              Submit Yours
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((s, i) => (
              <StatItem key={i} number={s.number} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 md:py-28 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">Startups Worth Watching</h2>
              <p className="font-body text-muted-foreground">Hand-picked ventures making waves right now.</p>
            </div>
            <Link to="/explore" className="hidden md:flex items-center gap-1 font-body text-sm font-medium text-primary hover:underline">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {featured.map((s) => (
              <StartupCard key={s.id} startup={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-secondary scroll-reveal">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12 text-center">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 stagger-children">
            {categories.map((c) => (
              <Link
                key={c.name}
                to={`/category/${c.name}`}
                className="group flex items-center gap-3 bg-card rounded-lg border border-border p-5 hover:border-primary hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{c.icon}</span>
                <div>
                  <div className="font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{c.name}</div>
                  <div className="font-body text-xs text-muted-foreground">{c.count} startups</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 scroll-reveal">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-16 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 stagger-children">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  {step.icon}
                </div>
                <div className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Step {i + 1}</div>
                <h3 className="font-display text-xl text-foreground mb-3">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="py-20 bg-secondary scroll-reveal">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">Just Added</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {latest.map((s) => (
              <StartupCard key={s.id} startup={s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-mesh py-20 md:py-28 particles-bg scroll-reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Building something new?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Get in front of thousands of investors, supporters, and early adopters.
          </p>
          <Link
            to="/submit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-semibold px-8 py-3.5 rounded-md shadow-lp-button hover:scale-105 hover:shadow-[0_8px_20px_rgba(108,99,255,0.4)] transition-all duration-200"
          >
            Submit Your Startup <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
