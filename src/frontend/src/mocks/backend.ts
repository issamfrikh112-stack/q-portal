import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  addAnnouncement: async (title: string, body: string) => ({
    id: BigInt(3),
    title,
    body,
  }),
  deleteAnnouncement: async () => true,
  getAnnouncements: async () => [
    { id: BigInt(0), title: "New feature available soon", body: "New feature available soon" },
    { id: BigInt(1), title: "Platform under development", body: "Platform under development" },
    { id: BigInt(2), title: "This is a demo environment only", body: "This is a demo environment only" },
  ],
};
