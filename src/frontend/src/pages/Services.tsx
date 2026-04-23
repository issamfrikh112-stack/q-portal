import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CATEGORIES } from "@/constants/categories";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Clock } from "lucide-react";

const COMING_SOON_SERVICES = [
  {
    icon: "🏛️",
    name: "Civil Registry",
    description: "Birth, marriage & death certificates online",
  },
  {
    icon: "🚗",
    name: "Vehicle Registration",
    description: "Register or renew vehicle licenses",
  },
  {
    icon: "🌐",
    name: "Digital ID",
    description: "Apply for a national digital identity card",
  },
  {
    icon: "🏗️",
    name: "Building Permits",
    description: "Submit & track construction applications",
  },
  {
    icon: "💊",
    name: "Health Benefits",
    description: "Access public healthcare entitlements",
  },
  {
    icon: "📊",
    name: "Business Licensing",
    description: "Register and manage business permits",
  },
];

export default function Services() {
  return (
    <div
      className="px-4 pt-5 max-w-2xl mx-auto space-y-6 pb-6"
      data-ocid="services.page"
    >
      {/* Header */}
      <div>
        <h1 className="font-display font-bold text-xl text-foreground">
          Services
        </h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Government services portal — your gateway to official departments
        </p>
      </div>

      {/* Active categories */}
      <section data-ocid="services.active.section">
        <h2 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
          Available Now
        </h2>
        <div className="space-y-2" data-ocid="services.active.list">
          {CATEGORIES.map((cat, idx) => (
            <Link
              key={cat.name}
              to="/category/$name"
              params={{ name: encodeURIComponent(cat.name) }}
              data-ocid={`services.active.item.${idx + 1}`}
            >
              <Card className="rounded-xl border-border shadow-sm hover:shadow-md transition-smooth cursor-pointer">
                <CardContent className="p-4 flex items-center gap-4">
                  <span className="text-2xl w-9 text-center shrink-0">
                    {cat.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-sm text-foreground">
                      {cat.name}
                    </p>
                    {cat.description && (
                      <p className="text-xs text-muted-foreground mt-0.5 truncate">
                        {cat.description}
                      </p>
                    )}
                  </div>
                  <Badge variant="secondary" className="text-xs shrink-0">
                    Active
                  </Badge>
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section data-ocid="services.coming_soon.section">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Coming Soon
          </h2>
          <Badge
            variant="outline"
            className="text-xs border-primary/40 text-primary gap-1 flex items-center"
          >
            <Clock className="w-3 h-3" />
            Launching Soon
          </Badge>
        </div>

        <Card
          className="rounded-xl border-border shadow-sm mb-3"
          data-ocid="services.coming_soon.card"
        >
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              We're expanding the Q+ portal with new digital services.{" "}
              <span className="text-foreground font-medium">Stay tuned</span> —
              these features are currently under development and will be
              available soon.
            </p>
          </CardContent>
        </Card>

        <div
          className="grid grid-cols-2 gap-3"
          data-ocid="services.coming_soon.list"
        >
          {COMING_SOON_SERVICES.map((svc, idx) => (
            <Card
              key={svc.name}
              className="rounded-xl border-border shadow-sm opacity-70 cursor-not-allowed"
              data-ocid={`services.coming_soon.item.${idx + 1}`}
            >
              <CardContent className="p-4 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-1">
                  <span className="text-2xl leading-none">{svc.icon}</span>
                  <Badge
                    variant="outline"
                    className="text-[10px] border-muted-foreground/30 text-muted-foreground shrink-0"
                  >
                    Soon
                  </Badge>
                </div>
                <p className="font-display font-semibold text-sm text-foreground leading-tight">
                  {svc.name}
                </p>
                <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
                  {svc.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
