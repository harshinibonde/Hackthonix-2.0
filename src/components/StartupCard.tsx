import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { startupImages } from "@/lib/images";
import type { Startup } from "@/data/startups";

interface StartupCardProps {
  startup: Startup;
}

const StartupCard = ({ startup }: StartupCardProps) => {
  const image = startupImages[startup.image];

  return (
    <Link
      to={`/startup/${startup.id}`}
      className="group block bg-card rounded-lg border border-border shadow-lp-card overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_12px_40px_rgba(108,99,255,0.2)] hover:-translate-y-1.5"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={startup.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
        <div className="absolute -bottom-4 left-5 w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-md group-hover:border-primary group-hover:scale-110 transition-all">
          <span className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">
            {startup.name.charAt(0)}
          </span>
        </div>
      </div>

      <div className="pt-6 pb-5 px-5">
        <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{startup.name}</h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
          {startup.tagline}
        </p>
        <div className="flex items-center justify-between">
          <span className="inline-block bg-primary/20 text-primary font-body text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            {startup.category}
          </span>
          <span className="font-body text-sm font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
            View <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default StartupCard;
