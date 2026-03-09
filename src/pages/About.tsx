import { Link } from "react-router-dom";
import { Rocket, Eye, Globe, Users, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const scrollRef = useScrollReveal();
  const team = [
    { name: "Alex Rivera", role: "Founder & CEO", initial: "A" },
    { name: "Priya Mehta", role: "Head of Curation", initial: "P" },
    { name: "Jordan Lee", role: "Lead Engineer", initial: "J" },
    { name: "Sofia Chen", role: "Community Lead", initial: "S" },
  ];

  return (
    <main ref={scrollRef} className="pt-24 pb-20">
      {/* Mission */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Giving every great idea the stage it deserves.
            </h1>
          </div>
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              LaunchPad was built on a simple belief: the best startups often go unnoticed not because they lack potential, but because they lack visibility. We're changing that.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Our platform connects early-stage founders with the audience they need — investors looking for the next big thing, early adopters hungry for innovation, and supporters who want to be part of something meaningful from day one.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-secondary py-20 scroll-reveal">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl text-foreground mb-16 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 stagger-children">
            {[
              { icon: <Rocket size={28} />, title: "Founders Submit", desc: "Create a profile showcasing your startup's story, team, and vision." },
              { icon: <Eye size={28} />, title: "We Showcase", desc: "Your startup gets a polished profile page and category placement." },
              { icon: <Globe size={28} />, title: "World Discovers", desc: "Thousands of visitors explore and connect with emerging ventures." },
            ].map((step, i) => (
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

      {/* Who It's For */}
      <section className="container mx-auto px-6 py-20 scroll-reveal">
        <h2 className="font-display text-3xl text-foreground mb-12 text-center">Who It's For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto stagger-children">
          <div className="bg-card rounded-lg border border-border p-8 shadow-lp-card card-hover-glow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Rocket size={24} />
            </div>
            <h3 className="font-display text-xl text-foreground mb-3">For Founders</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Get your startup in front of thousands of potential users, investors, and supporters. No cold emails, no gatekeepers — just a beautiful profile that speaks for itself.
            </p>
          </div>
          <div className="bg-card rounded-lg border border-border p-8 shadow-lp-card card-hover-glow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Users size={24} />
            </div>
            <h3 className="font-display text-xl text-foreground mb-3">For Explorers</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Discover innovative products and companies before they hit mainstream. Be an early adopter, angel investor, or simply support the builders shaping tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary py-20 scroll-reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-foreground mb-12">The Team</h2>
          <div className="flex flex-wrap justify-center gap-8 stagger-children">
            {team.map((t) => (
              <div key={t.name} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="font-display text-xl text-primary">{t.initial}</span>
                </div>
                <div className="font-body text-sm font-semibold text-foreground">{t.name}</div>
                <div className="font-body text-xs text-muted-foreground">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-mesh py-20 particles-bg scroll-reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Ready to launch?</h2>
          <p className="font-body text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Whether you're building or exploring, LaunchPad is your starting point.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/explore" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-sm font-semibold px-8 py-3.5 rounded-md shadow-lp-button hover:scale-105 transition-all duration-200">
              Explore Startups
            </Link>
            <Link to="/submit" className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-body text-sm font-semibold px-8 py-3.5 rounded-md hover:bg-muted transition-all duration-200">
              Submit Yours <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
