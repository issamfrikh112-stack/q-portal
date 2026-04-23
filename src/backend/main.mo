import List "mo:core/List";
import Types "types/announcements";
import AnnouncementsLib "lib/announcements";
import AnnouncementsMixin "mixins/announcements-api";

actor {
  let announcements = List.empty<Types.Announcement>();
  let nextAnnouncementId = { var value : Nat = 0 };

  // Seed default announcements on first deploy (empty state)
  if (announcements.isEmpty()) {
    nextAnnouncementId.value := AnnouncementsLib.seedDefaults(announcements, nextAnnouncementId.value);
  };

  include AnnouncementsMixin(announcements, nextAnnouncementId);
};
