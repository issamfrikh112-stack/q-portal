export interface Category {
  name: string;
  icon: string;
  description?: string;
}

export interface Announcement {
  id: bigint;
  title: string;
  body: string;
}
