import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { CATEGORIES } from "@/constants/categories";
import { useAnnouncements } from "@/hooks/useAnnouncements";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const { data: announcements, isLoading } = useAnnouncements();

  const filteredCategories = CATEGORIES.filter((c) =>
    search === "" ? true : c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="px-4 pt-4 pb-24 space-y-4 max-w-2xl mx-auto"
      data-ocid="home.page"
    >
      {/* Search Bar */}
      <div className="relative" data-ocid="home.search_input">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
        <Input
          className="rounded-full pl-11 pr-5 h-12 bg-card border-border shadow-sm text-sm"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-3 gap-3" data-ocid="home.categories.list">
        {filteredCategories.length === 0 ? (
          <div
            className="col-span-3 text-center py-8 text-muted-foreground text-sm"
            data-ocid="home.categories.empty_state"
          >
            No categories match your search.
          </div>
        ) : (
          filteredCategories.map((cat, idx) => (
            <Link
              key={cat.name}
              to="/category/$name"
              params={{ name: encodeURIComponent(cat.name) }}
              data-ocid={`home.categories.item.${idx + 1}`}
            >
              <Card className="rounded-xl border-border shadow-sm hover:shadow-md transition-smooth cursor-pointer h-full">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl">{cat.icon}</div>
                  <div className="text-sm mt-2 font-medium text-foreground">
                    {cat.name}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        )}
      </div>

      {/* Welcome Card */}
      <Card
        className="rounded-xl border-border shadow-sm"
        data-ocid="home.welcome.card"
      >
        <CardContent className="p-4">
          <h2 className="font-semibold text-foreground">Welcome to Q+</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Your gateway to public services and information.
          </p>
        </CardContent>
      </Card>

      {/* Sample Updates Card */}
      <Card
        className="rounded-xl border-border shadow-sm"
        data-ocid="home.updates.card"
      >
        <CardContent className="p-4">
          <h3 className="font-medium text-foreground mb-2">Sample Updates</h3>

          {isLoading ? (
            <div className="space-y-2" data-ocid="home.updates.loading_state">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-5/6 rounded" />
              <Skeleton className="h-4 w-4/6 rounded" />
            </div>
          ) : !announcements || announcements.length === 0 ? (
            <p
              className="text-sm text-muted-foreground"
              data-ocid="home.updates.empty_state"
            >
              No updates at this time.
            </p>
          ) : (
            <ul
              className="list-disc ml-5 space-y-1"
              data-ocid="home.updates.list"
            >
              {announcements.map((ann, idx) => (
                <li
                  key={String(ann.id)}
                  className="text-sm text-muted-foreground"
                  data-ocid={`home.updates.item.${idx + 1}`}
                >
                  <span className="font-medium text-foreground">
                    {ann.title}
                  </span>
                  {ann.body && (
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {ann.body}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
