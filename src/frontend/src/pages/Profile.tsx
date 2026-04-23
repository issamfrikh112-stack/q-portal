import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  useAddAnnouncement,
  useAnnouncements,
  useDeleteAnnouncement,
} from "@/hooks/useAnnouncements";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { LogIn, LogOut, Megaphone, Plus, Trash2, User } from "lucide-react";
import { useState } from "react";

export default function Profile() {
  const { identity, login, clear, loginStatus } = useInternetIdentity();
  const isLoggedIn = !!identity;
  const principal = identity?.getPrincipal().toText();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { data: announcements, isLoading: announcementsLoading } =
    useAnnouncements();
  const addAnnouncement = useAddAnnouncement();
  const deleteAnnouncement = useDeleteAnnouncement();

  async function handleAdd() {
    if (!title.trim() || !body.trim()) return;
    await addAnnouncement.mutateAsync({
      title: title.trim(),
      body: body.trim(),
    });
    setTitle("");
    setBody("");
  }

  // --- Not signed in ---
  if (!isLoggedIn) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[70vh] px-6"
        data-ocid="profile.page"
      >
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-5 border border-border">
          <User className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="font-display font-bold text-xl text-foreground mb-1">
          Sign in to continue
        </h2>
        <p className="text-sm text-muted-foreground mb-6 text-center max-w-xs">
          Use Internet Identity to access your profile and manage announcements.
        </p>
        <Button
          onClick={() => login()}
          disabled={loginStatus === "logging-in"}
          className="rounded-full px-8 gap-2"
          data-ocid="profile.login_button"
        >
          <LogIn className="w-4 h-4" />
          {loginStatus === "logging-in"
            ? "Signing in…"
            : "Sign in with Internet Identity"}
        </Button>
      </div>
    );
  }

  // --- Signed in ---
  return (
    <div className="px-4 pt-5 max-w-2xl mx-auto pb-24" data-ocid="profile.page">
      {/* User card */}
      <Card
        className="rounded-xl border-border shadow-sm mb-5"
        data-ocid="profile.identity.card"
      >
        <CardContent className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
            <User className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-foreground text-sm">
              Signed in
            </p>
            <p
              className="text-xs text-muted-foreground font-mono truncate mt-0.5"
              data-ocid="profile.principal_text"
            >
              {principal}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => clear()}
            className="rounded-full gap-1.5 shrink-0"
            data-ocid="profile.signout_button"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </Button>
        </CardContent>
      </Card>

      {/* Admin panel header */}
      <div className="flex items-center gap-2 mb-3 px-1">
        <Megaphone className="w-4 h-4 text-primary" />
        <h2 className="font-display font-bold text-base text-foreground">
          Admin Panel
        </h2>
        <Badge variant="secondary" className="text-xs ml-auto">
          Announcements
        </Badge>
      </div>

      {/* Add announcement form */}
      <Card
        className="rounded-xl border-border shadow-sm mb-4"
        data-ocid="profile.add_announcement.card"
      >
        <CardHeader className="pb-2 pt-4 px-4">
          <p className="font-display font-semibold text-sm text-foreground">
            New Announcement
          </p>
        </CardHeader>
        <CardContent className="px-4 pb-4 space-y-3">
          <div className="space-y-1">
            <label
              htmlFor="announcement-title"
              className="text-xs font-medium text-foreground"
            >
              Title
            </label>
            <Input
              id="announcement-title"
              placeholder="Enter announcement title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-lg"
              data-ocid="profile.announcement_title.input"
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="announcement-body"
              className="text-xs font-medium text-foreground"
            >
              Description
            </label>
            <Textarea
              id="announcement-body"
              placeholder="Enter announcement description"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="rounded-lg resize-none"
              rows={3}
              data-ocid="profile.announcement_body.textarea"
            />
          </div>
          <Button
            onClick={handleAdd}
            disabled={
              !title.trim() || !body.trim() || addAnnouncement.isPending
            }
            className="w-full rounded-lg gap-2"
            data-ocid="profile.add_announcement.submit_button"
          >
            <Plus className="w-4 h-4" />
            {addAnnouncement.isPending ? "Adding…" : "Add Announcement"}
          </Button>
          {addAnnouncement.isError && (
            <p
              className="text-xs text-destructive"
              data-ocid="profile.add_announcement.error_state"
            >
              Failed to add announcement. Please try again.
            </p>
          )}
          {addAnnouncement.isSuccess && (
            <p
              className="text-xs text-primary"
              data-ocid="profile.add_announcement.success_state"
            >
              Announcement added successfully.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Announcements list */}
      <div data-ocid="profile.announcements.list">
        {announcementsLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="rounded-xl border-border shadow-sm">
                <CardContent className="p-4 space-y-2">
                  <Skeleton className="h-4 w-2/5 rounded" />
                  <Skeleton className="h-3 w-4/5 rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : announcements && announcements.length > 0 ? (
          <div className="space-y-3">
            {announcements.map((ann, idx) => (
              <Card
                key={String(ann.id)}
                className="rounded-xl border-border shadow-sm"
                data-ocid={`profile.announcement.item.${idx + 1}`}
              >
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-sm text-foreground truncate">
                      {ann.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2 break-words">
                      {ann.body}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-lg"
                    onClick={() => deleteAnnouncement.mutate(ann.id)}
                    disabled={deleteAnnouncement.isPending}
                    aria-label={`Delete announcement: ${ann.title}`}
                    data-ocid={`profile.announcement.delete_button.${idx + 1}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card
            className="rounded-xl border-border shadow-sm"
            data-ocid="profile.announcements.empty_state"
          >
            <CardContent className="p-8 flex flex-col items-center text-center">
              <Megaphone className="w-8 h-8 text-muted-foreground mb-3" />
              <p className="font-display font-semibold text-sm text-foreground">
                No announcements yet
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Use the form above to add your first announcement.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-6">
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          caffeine.ai
        </a>
      </p>
    </div>
  );
}
