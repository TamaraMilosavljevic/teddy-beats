// import { configureStore } from "@reduxjs/toolkit";
// import playerReducer from "./slices/playerReducer";

// export const store = configureStore({
//   reducer: {
//     player: playerReducer,
//   },
//   devTools: import.meta.env.MODE !== "production",
// });

import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  currentTrack: null,
  isPlaying: false,
  volume: 1,
  setTrack: (track) => set({ currentTrack: track }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setVolume: (volume) => set({ volume }),
}));
