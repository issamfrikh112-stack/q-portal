export function TopBar() {
  return (
    <div className="sticky top-0 z-40 bg-card border-b border-border shadow-sm px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <span className="text-2xl font-display font-bold text-foreground tracking-tight leading-none">
          Q
        </span>
        <span className="text-2xl font-display font-bold text-primary tracking-tight leading-none">
          +
        </span>
      </div>
      <span className="text-sm text-muted-foreground font-body">
        Efficient Government. Quality Services.
      </span>
    </div>
  );
}
