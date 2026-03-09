import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Mail, MapPin, Calendar, Layers, TrendingUp, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { getStartupById, getStartupsByCategory, startups } from "@/data/startups";
import { startupImages } from "@/lib/images";
import StartupCard from "@/components/StartupCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef } from "react";

// Mock blog posts per startup
const getBlogPosts = (startupName: string) => [
  {
    id: 1,
    title: `How ${startupName} is Disrupting the Industry`,
    excerpt: "A deep dive into the innovative approach that's turning heads in the market and attracting top-tier investors.",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: `Behind the Scenes: Building ${startupName}`,
    excerpt: "The founding team shares their journey from idea to product, and the challenges they overcame along the way.",
    date: "Nov 28, 2024",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "What's Next: Our 2025 Roadmap",
    excerpt: "Exciting new features and partnerships are on the horizon. Here's what we're planning for the year ahead.",
    date: "Oct 10, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
];

// Mock trending products
const getTrendingProducts = () => [
  { id: 1, name: "Pro Dashboard", price: "$49/mo", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop" },
  { id: 2, name: "Analytics Suite", price: "$29/mo", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop" },
  { id: 3, name: "API Access", price: "$99/mo", image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=200&fit=crop" },
  { id: 4, name: "Team Plan", price: "$149/mo", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop" },
  { id: 5, name: "Enterprise", price: "Custom", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop" },
];

const StartupProfile = () => {
  const { id } = useParams();
  const startup = getStartupById(id || "");
  const scrollRef = useScrollReveal();
  const trendingScrollRef = useRef<HTMLDivElement>(null);

  const scrollTrending = (dir: "left" | "right") => {
    if (trendingScrollRef.current) {
      trendingScrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  if (!startup) {
    return (
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Startup not found</h1>
          <Link to="/explore" className="font-body text-sm text-primary hover:underline">← Back to Explore</Link>
        </div>
      </main>
    );
  }

  const image = startupImages[startup.image];
  const related = getStartupsByCategory(startup.category).filter((s) => s.id !== startup.id).slice(0, 3);
  const moreLikeThis = startups.filter((s) => s.id !== startup.id).slice(0, 6);
  const blogPosts = getBlogPosts(startup.name);
  const trendingProducts = getTrendingProducts();
  const isBrandOfWeek = startup.featured;

  return (
    <main ref={scrollRef} className="pt-16">
      {/* Cover */}
      <div className="relative h-64 md:h-96 overflow-hidden animate-fade-in-up">
        <img src={image} alt={startup.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <div className="absolute bottom-6 left-6 md:left-12">
          <div className="w-20 h-20 rounded-xl bg-card border-2 border-border flex items-center justify-center shadow-lg">
            <span className="font-display text-2xl font-bold text-foreground">{startup.name.charAt(0)}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Brand of the Week Badge */}
        {isBrandOfWeek && (
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-semibold text-foreground animate-pulse-glow"
              style={{ background: "linear-gradient(135deg, hsl(5 100% 68%), hsl(349 88% 64%))" }}>
              <Trophy size={16} />
              Brand of the Week 🏆
            </div>
          </div>
        )}

        <Link to="/explore" className="inline-flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to Explore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            <div className="scroll-reveal">
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">{startup.name}</h1>
              <p className="font-body text-lg text-muted-foreground mb-4">{startup.tagline}</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/20 text-primary font-body text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {startup.category}
                </span>
                <span className="bg-muted text-muted-foreground font-body text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Calendar size={12} /> Founded {startup.foundedYear}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 scroll-reveal">
              <a
                href={startup.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-semibold px-6 py-3 rounded-md shadow-lp-button hover:scale-105 transition-all duration-200"
              >
                <ExternalLink size={16} /> Visit Website
              </a>
              <a
                href={`mailto:${startup.email}`}
                className="inline-flex items-center gap-2 border border-border text-foreground font-body text-sm font-semibold px-6 py-3 rounded-md hover:bg-muted transition-all"
              >
                <Mail size={16} /> Contact Founder
              </a>
            </div>

            {/* About */}
            <div className="scroll-reveal">
              <h2 className="font-display text-2xl text-foreground mb-4">About {startup.name}</h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl">
                {startup.description}
              </p>
            </div>

            {/* Founder Story */}
            <div className="bg-card rounded-lg p-8 border border-border scroll-reveal">
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Founder Story</h3>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-lg text-primary">{startup.founders.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-foreground">{startup.founders}</div>
                  <div className="font-body text-xs text-muted-foreground">{startup.founderTitle}</div>
                </div>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                "{startup.founderStory}"
              </p>
            </div>

            {/* Blog Section */}
            <div className="scroll-reveal">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl text-foreground">From the Blog</h2>
                <button className="font-body text-sm font-medium text-primary hover:underline transition-all">View All Posts</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger-children">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-card rounded-lg border border-border overflow-hidden group cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(108,99,255,0.2)] hover:-translate-y-1"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <p className="font-body text-xs text-muted-foreground mb-2">{post.date}</p>
                      <h4 className="font-body text-sm font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h4>
                      <p className="font-body text-xs text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                      <span className="font-body text-xs font-semibold text-primary group-hover:translate-x-1 inline-block transition-transform">Read More →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Products */}
            <div className="scroll-reveal">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl text-foreground">Trending Products</h2>
                <div className="flex gap-2">
                  <button onClick={() => scrollTrending("left")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    <ChevronLeft size={16} />
                  </button>
                  <button onClick={() => scrollTrending("right")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              <div ref={trendingScrollRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
                {trendingProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-48 bg-secondary rounded-lg border border-border overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(108,99,255,0.25)]"
                  >
                    <div className="aspect-[3/2] overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    </div>
                    <div className="p-3">
                      <h4 className="font-body text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{product.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="font-body text-xs text-accent font-semibold">{product.price}</span>
                        <button className="font-body text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full hover:scale-105 active:scale-95 transition-all">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6 shadow-lp-card scroll-reveal">
              <h3 className="font-body text-sm font-semibold text-foreground mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Layers size={16} className="text-muted-foreground" />
                  <div>
                    <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">Category</div>
                    <div className="font-body text-sm font-medium text-foreground">{startup.category}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp size={16} className="text-muted-foreground" />
                  <div>
                    <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">Stage</div>
                    <div className="font-body text-sm font-medium text-foreground">{startup.stage}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-muted-foreground" />
                  <div>
                    <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">Location</div>
                    <div className="font-body text-sm font-medium text-foreground">{startup.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-muted-foreground" />
                  <div>
                    <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">Founded</div>
                    <div className="font-body text-sm font-medium text-foreground">{startup.foundedYear}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20 scroll-reveal">
            <h2 className="font-display text-2xl text-foreground mb-8">More in {startup.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
              {related.map((s) => (
                <StartupCard key={s.id} startup={s} />
              ))}
            </div>
          </div>
        )}

        {/* More Like This Brand */}
        <div className="mt-20 scroll-reveal">
          <h2 className="font-display text-2xl text-foreground mb-8">More Like This</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {moreLikeThis.map((s) => (
              <Link
                key={s.id}
                to={`/startup/${s.id}`}
                className="flex items-center gap-4 bg-card rounded-lg border border-border p-5 group transition-all duration-300 hover:border-[#FF6A5C] hover:shadow-[0_0_20px_rgba(255,106,92,0.2)]"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="font-display text-xl text-primary">{s.name.charAt(0)}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-body text-sm font-semibold text-foreground mb-0.5 group-hover:text-[#FF6A5C] transition-colors">{s.name}</h4>
                  <p className="font-body text-xs text-muted-foreground line-clamp-1">{s.tagline}</p>
                </div>
                <span className="ml-auto font-body text-xs font-semibold text-[#FF6A5C] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0">
                  Visit →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StartupProfile;
