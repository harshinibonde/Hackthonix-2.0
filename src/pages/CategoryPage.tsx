import { useParams, Link } from "react-router-dom";
import StartupCard from "@/components/StartupCard";
import { getStartupsByCategory, categories } from "@/data/startups";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categoryGradients: Record<string, string> = {
  AI: "from-lp-purple to-primary",
  Climate: "from-lp-teal to-lp-cyan",
  HealthTech: "from-lp-blue to-lp-cyan",
  EdTech: "from-lp-warm to-lp-coral",
  Fintech: "from-lp-purple to-lp-pink",
  Consumer: "from-lp-coral to-lp-pink",
  "B2B SaaS": "from-lp-panel-secondary to-muted",
  Design: "from-lp-pink to-lp-coral",
  DevTools: "from-lp-cyan to-lp-teal",
  Logistics: "from-lp-warm to-lp-coral",
  Social: "from-lp-blue to-lp-purple",
  Security: "from-lp-coral to-destructive",
};

const CategoryPage = () => {
  const { name } = useParams();
  const scrollRef = useScrollReveal();
  const cat = categories.find((c) => c.name === name);
  const results = getStartupsByCategory(name || "");
  const gradient = categoryGradients[name || ""] || "from-primary to-primary";

  return (
    <main ref={scrollRef} className="pt-16">
      <section className={`bg-gradient-to-br ${gradient} py-20 md:py-28 animate-fade-in-up`}>
        <div className="container mx-auto px-6 text-center">
          {cat && <span className="text-5xl mb-4 block">{cat.icon}</span>}
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">{name}</h1>
          <p className="font-body text-foreground/70 text-lg">{results.length} startup{results.length !== 1 ? "s" : ""} in this category</p>
        </div>
      </section>

      <section className="py-16 scroll-reveal">
        <div className="container mx-auto px-6">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {results.map((s) => (
                <StartupCard key={s.id} startup={s} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-body text-lg text-muted-foreground mb-4">No startups in this category yet.</p>
              <Link to="/submit" className="font-body text-sm text-primary hover:underline">Be the first to submit →</Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
