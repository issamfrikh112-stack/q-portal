import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CATEGORIES } from "@/constants/categories";
import { useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, SearchX } from "lucide-react";

export default function CategoryDetail() {
  const { name } = useParams({ from: "/category/$name" });
  const navigate = useNavigate();

  const decodedName = decodeURIComponent(name);
  const category = CATEGORIES.find(
    (c) => c.name.toLowerCase() === decodedName.toLowerCase(),
  );

  const handleBack = () => {
    navigate({ to: "/" });
  };

  if (!category) {
    return (
      <div
        className="min-h-[80vh] bg-background flex flex-col items-center justify-center p-6"
        data-ocid="category_detail.not_found.page"
      >
        <Card className="w-full max-w-sm rounded-2xl shadow-md">
          <CardContent className="p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <SearchX
                className="w-8 h-8 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Category Not Found
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                &ldquo;{decodedName}&rdquo; is not a recognised category.
              </p>
            </div>
            <Button
              data-ocid="category_detail.back_button"
              variant="outline"
              className="w-full mt-2 transition-smooth"
              onClick={handleBack}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div
      className="min-h-[80vh] bg-background flex flex-col items-center justify-center p-6"
      data-ocid="category_detail.page"
    >
      {/* Back button */}
      <div className="w-full max-w-sm mb-4">
        <Button
          data-ocid="category_detail.back_button"
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground transition-smooth -ml-2"
          onClick={handleBack}
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back
        </Button>
      </div>

      {/* Main card */}
      <Card
        data-ocid="category_detail.card"
        className="w-full max-w-sm rounded-2xl shadow-md"
      >
        <CardContent className="p-8 flex flex-col items-center text-center gap-5">
          {/* Large emoji icon */}
          <div
            data-ocid="category_detail.icon"
            className="text-5xl leading-none select-none"
            aria-hidden="true"
          >
            {category.icon}
          </div>

          {/* Category name heading */}
          <h1
            data-ocid="category_detail.heading"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            {category.name}
          </h1>

          {/* Coming Soon badge */}
          <Badge
            data-ocid="category_detail.badge"
            variant="secondary"
            className="px-3 py-1 text-xs font-medium uppercase tracking-wider"
          >
            Coming Soon
          </Badge>

          {/* Description */}
          <p
            data-ocid="category_detail.description"
            className="text-sm text-muted-foreground leading-relaxed"
          >
            We are building out the{" "}
            <strong className="text-foreground">{category.name}</strong>{" "}
            section. Check back soon!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
