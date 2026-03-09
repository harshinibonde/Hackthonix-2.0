import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import StartupCard from "@/components/StartupCard";
import { startups, categories } from "@/data/startups";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [showCount, setShowCount] = useState(6);
  const scrollRef = useScrollReveal();

  const filtered = useMemo(() => {
    let result = startups;
    if (activeCategory !== "All") {
      result = result.filter((s) => s.category === activeCategory);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) => s.name.toLowerCase().includes(q) || s.tagline.toLowerCase().includes(q)
      );
    }
    if (sort === "az") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "newest") result = [...result].sort((a, b) => b.foundedYear - a.foundedYear);
    return result;
  }, [search, activeCategory, sort]);

  return (
    <main ref={scrollRef} className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Explore Startups</h1>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Discover the most exciting early-stage ventures across every industry.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search startups, categories, or founders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-full border border-border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8 scroll-reveal">
          <div className="flex flex-wrap gap-2 flex-1">
            {["All", ...categories.map((c) => c.name)].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lp-button"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="font-body text-sm border border-border rounded-md px-3 py-2 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="newest">Newest</option>
            <option value="az">A — Z</option>
          </select>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children scroll-reveal">
              {filtered.slice(0, showCount).map((s) => (
                <StartupCard key={s.id} startup={s} />
              ))}
            </div>
            {showCount < filtered.length && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowCount((c) => c + 6)}
                  className="inline-flex items-center gap-2 border border-border text-foreground font-body text-sm font-semibold px-8 py-3 rounded-md hover:bg-muted hover:border-primary hover:scale-105 transition-all"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="font-body text-lg text-muted-foreground mb-2">No startups found</p>
            <p className="font-body text-sm text-muted-foreground">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Explore;
