import { BottomNav } from "@/components/BottomNav";
import { TopBar } from "@/components/TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <main className="flex-1 pb-20">{children}</main>
      <BottomNav />
      <footer className="text-center text-xs text-muted-foreground py-4 pb-24 px-4">
        <p>
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
