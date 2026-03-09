import { useState } from "react";
import { Check, Upload, Link as LinkIcon } from "lucide-react";
import { categories } from "@/data/startups";
import { toast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const sections = ["Basic Info", "Description", "Category", "Founder", "Media", "Contact"];

const SubmitStartup = () => {
  const scrollRef = useScrollReveal();
  const [form, setForm] = useState({
    name: "", tagline: "", website: "", foundedYear: "",
    description: "", category: "",
    founderName: "", founderTitle: "", founderBio: "",
    email: "", twitter: "", linkedin: "",
  });

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const completedSections = [
    !!(form.name && form.tagline && form.website && form.foundedYear),
    !!form.description, !!form.category,
    !!(form.founderName && form.founderTitle),
    false, !!form.email,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Startup Submitted!", description: "We'll review your submission and get back to you soon." });
  };

  const inputClass = "w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

  return (
    <main ref={scrollRef} className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">List Your Startup</h1>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Join the world's premier stage for emerging tech. Fill out the details to get featured.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-12">
            <fieldset className="scroll-reveal">
              <legend className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Basic Info</legend>
              <div className="space-y-4">
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Startup Name</label>
                  <input type="text" placeholder="e.g. Acme AI" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">One-Line Tagline</label>
                  <input type="text" placeholder="The high-level pitch in 60 characters or less" maxLength={100} value={form.tagline} onChange={(e) => update("tagline", e.target.value)} className={inputClass} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Website URL</label>
                    <div className="relative">
                      <LinkIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input type="url" placeholder="https://startup.com" value={form.website} onChange={(e) => update("website", e.target.value)} className={`${inputClass} pl-10`} />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Founded Year</label>
                    <input type="number" placeholder="2024" value={form.foundedYear} onChange={(e) => update("foundedYear", e.target.value)} className={inputClass} />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="scroll-reveal">
              <legend className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Description</legend>
              <textarea rows={6} placeholder="Tell us more about what you're building..."
                value={form.description} onChange={(e) => update("description", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" />
            </fieldset>

            <fieldset className="scroll-reveal">
              <legend className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Category</legend>
              <select value={form.category} onChange={(e) => update("category", e.target.value)} className={inputClass}>
                <option value="">Select a category</option>
                {categories.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
              </select>
            </fieldset>

            <fieldset className="scroll-reveal">
              <legend className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Founder</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Your Name</label>
                  <input type="text" placeholder="Full name" value={form.founderName} onChange={(e) => update("founderName", e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Title / Role</label>
                  <input type="text" placeholder="CEO & Co-founder" value={form.founderTitle} onChange={(e) => update("founderTitle", e.target.value)} className={inputClass} />
                </div>
              </div>
              <textarea rows={3} placeholder="Short bio..."
                value={form.founderBio} onChange={(e) => update("founderBio", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" />
            </fieldset>

            <fieldset className="scroll-reveal">
              <legend className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Logo & Banner</legend>
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload size={32} className="mx-auto text-muted-foreground mb-3" />
                <p className="font-body text-sm text-primary font-medium">Click to upload</p>
                <p className="font-body text-xs text-muted-foreground mt-1">PNG or JPG (MAX. 800×400px)</p>
              </div>
            </fieldset>

            <fieldset className="scroll-reveal">
              <legend className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Contact</legend>
              <div className="space-y-4">
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Public Email</label>
                  <input type="email" placeholder="hello@startup.com" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Twitter / X handle" value={form.twitter} onChange={(e) => update("twitter", e.target.value)} className={inputClass} />
                  <input type="text" placeholder="LinkedIn profile URL" value={form.linkedin} onChange={(e) => update("linkedin", e.target.value)} className={inputClass} />
                </div>
              </div>
            </fieldset>

            <button type="submit"
              className="w-full bg-primary text-primary-foreground font-body text-sm font-semibold py-4 rounded-md shadow-lp-button hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2">
              🚀 Launch on LaunchPad
            </button>
          </form>

          <div className="hidden lg:block">
            <div className="sticky top-24 bg-card rounded-lg border border-border p-6 shadow-lp-card">
              <h3 className="font-body text-sm font-semibold text-foreground mb-6">Progress</h3>
              <div className="space-y-4">
                {sections.map((s, i) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                      completedSections[i]
                        ? "bg-primary text-primary-foreground"
                        : "border border-border text-muted-foreground"
                    }`}>
                      {completedSections[i] ? <Check size={12} /> : i + 1}
                    </div>
                    <span className={`font-body text-sm ${completedSections[i] ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SubmitStartup;
