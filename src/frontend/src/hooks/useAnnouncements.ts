import { createActor } from "@/backend";
import type { Announcement } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function useBackend() {
  return useActor(createActor);
}

export function useAnnouncements() {
  const { actor, isFetching } = useBackend();
  return useQuery<Announcement[]>({
    queryKey: ["announcements"],
    queryFn: async () => {
      if (!actor) return [];
      const results = await actor.getAnnouncements();
      return results as Announcement[];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddAnnouncement() {
  const { actor } = useBackend();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ title, body }: { title: string; body: string }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.addAnnouncement(title, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
    },
  });
}

export function useDeleteAnnouncement() {
  const { actor } = useBackend();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.deleteAnnouncement(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
    },
  });
}
