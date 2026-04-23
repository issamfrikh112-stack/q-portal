import { Link, useRouterState } from "@tanstack/react-router";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Profile", to: "/profile" },
];

export function BottomNav() {
  const { location } = useRouterState();
  const pathname = location.pathname;

  // Determine which nav item is active; fall back to Home for unmatched routes
  const knownPrefixes = navItems.filter((i) => i.to !== "/").map((i) => i.to);
  const isKnownRoute = knownPrefixes.some((prefix) =>
    pathname.startsWith(prefix),
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border flex justify-around items-stretch safe-area-pb">
      {navItems.map((item) => {
        const isActive =
          item.to === "/"
            ? pathname === "/" || !isKnownRoute
            : pathname.startsWith(item.to);
        return (
          <Link
            key={item.to}
            to={item.to}
            data-ocid={`nav.${item.label.toLowerCase()}.link`}
            className={[
              "flex-1 flex flex-col items-center justify-center py-3 text-sm font-body font-medium transition-colors duration-200 relative",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            ].join(" ")}
          >
            {isActive && (
              <span className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-primary rounded-b-full" />
            )}
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
