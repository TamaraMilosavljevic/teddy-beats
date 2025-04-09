import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isLoadingTracks: true,
  currentTrack: null,
  isPlaying: false,
  volume: 1,
  allTracks: [],
  setTrack: (track) => set({ currentTrack: track }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setVolume: (volume) => set({ volume }),
  setAllTracks: (newTracks) => set({ allTracks: newTracks }),
  setIsLoadingTracks: (isLoading) => set({ isLoadingTracks: isLoading }),
}));
