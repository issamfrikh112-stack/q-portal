module {
  public type AnnouncementId = Nat;

  public type Announcement = {
    id : AnnouncementId;
    title : Text;
    body : Text;
  };
};
