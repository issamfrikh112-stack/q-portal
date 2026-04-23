import List "mo:core/List";
import AnnouncementsLib "../lib/announcements";
import Types "../types/announcements";

mixin (
  announcements : List.List<Types.Announcement>,
  nextAnnouncementId : { var value : Nat },
) {
  public query func getAnnouncements() : async [Types.Announcement] {
    AnnouncementsLib.getAll(announcements);
  };

  public shared func addAnnouncement(title : Text, body : Text) : async Types.Announcement {
    let announcement = AnnouncementsLib.add(announcements, nextAnnouncementId.value, title, body);
    nextAnnouncementId.value += 1;
    announcement;
  };

  public shared func deleteAnnouncement(id : Types.AnnouncementId) : async Bool {
    AnnouncementsLib.delete(announcements, id);
  };
};
