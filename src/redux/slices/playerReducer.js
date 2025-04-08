import { createSlice } from "@reduxjs/toolkit";

const initialPlayerState = {
  isPlaying: false,
  currentTrack: null,
  queue: [],
  volume: 0.7,
};
const playerSlice = createSlice({
  name: "player",
  initialState: initialPlayerState,
  reducers: {
    play(state) {
      state.isPlaying = true;
    },
    pause(state) {
      state.isPlaying = false;
    },
    setTrack(state, action) {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },
    setQueue(state, action) {
      state.queue = action.payload;
    },
    setVolume(state, action) {
      state.volume = action.payload;
    },
  },
});
export const { play, pause, setQueue, setTrack, setVolume } =
  playerSlice.actions;
export default playerSlice.reducer;
