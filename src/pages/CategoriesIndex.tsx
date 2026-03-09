import { Link } from "react-router-dom";
import { categories } from "@/data/startups";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CategoriesIndex = () => {
  const scrollRef = useScrollReveal();

  return (
    <main ref={scrollRef} className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Browse Categories</h1>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Find startups organized by industry and focus area.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto stagger-children scroll-reveal">
          {categories.map((c) => (
            <Link
              key={c.name}
              to={`/category/${c.name}`}
              className="group flex items-center gap-4 bg-card rounded-lg border border-border p-6 card-hover-glow"
            >
              <span className="text-3xl">{c.icon}</span>
              <div>
                <div className="font-body text-sm font-semibold text-foreground">{c.name}</div>
                <div className="font-body text-xs text-muted-foreground">{c.count} startups</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategoriesIndex;
