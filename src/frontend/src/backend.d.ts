import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Announcement {
    id: AnnouncementId;
    title: string;
    body: string;
}
export type AnnouncementId = bigint;
export interface backendInterface {
    addAnnouncement(title: string, body: string): Promise<Announcement>;
    deleteAnnouncement(id: AnnouncementId): Promise<boolean>;
    getAnnouncements(): Promise<Array<Announcement>>;
}
