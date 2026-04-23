import List "mo:core/List";
import Types "../types/announcements";

module {
  public type Announcement = Types.Announcement;
  public type AnnouncementId = Types.AnnouncementId;

  public func getAll(announcements : List.List<Announcement>) : [Announcement] {
    announcements.toArray();
  };

  public func add(
    announcements : List.List<Announcement>,
    nextId : Nat,
    title : Text,
    body : Text,
  ) : Announcement {
    let announcement : Announcement = { id = nextId; title; body };
    announcements.add(announcement);
    announcement;
  };

  public func delete(announcements : List.List<Announcement>, id : AnnouncementId) : Bool {
    let sizeBefore = announcements.size();
    let filtered = announcements.filter(func(a) { a.id != id });
    announcements.clear();
    announcements.append(filtered);
    announcements.size() < sizeBefore;
  };

  public func seedDefaults(announcements : List.List<Announcement>, startId : Nat) : Nat {
    let seeds : [(Text, Text)] = [
      ("New Feature Available Soon", "We are rolling out a new feature soon. Stay tuned for updates."),
      ("Platform Under Development", "Our platform is actively being developed. Expect improvements and new capabilities."),
      ("Demo Environment Notice", "This is a demo environment only. No real data or external services are connected."),
    ];
    var id = startId;
    for ((title, body) in seeds.values()) {
      announcements.add({ id; title; body });
      id += 1;
    };
    id;
  };
};
