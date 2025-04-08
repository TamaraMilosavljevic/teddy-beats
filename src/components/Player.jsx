import React, { useRef, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  Slider,
  Container,
  Avatar,
} from "@mui/material";
import {
  IconPlayerPlayFilled,
  IconPlayerPauseFilled,
  IconVolume,
  IconRepeat,
  IconPlayerSkipBack,
  IconPlayerSkipForward,
  IconArrowsShuffle,
} from "@tabler/icons-react";
import { usePlayerStore } from "../store/playerStore";

export const Player = () => {
  const audioRef = useRef(null);
  const { currentTrack, isPlaying, volume, setIsPlaying, setVolume } =
    usePlayerStore();

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      audioRef.current.volume = volume;
    }
  }, [isPlaying, currentTrack, volume]);

  if (!currentTrack) return null;

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "background.paper",
        background: "linear-gradient(to bottom, #111827, #000000)",
        color: "white",
        p: 2,
        borderTop: "1px solid #1f2937",
        zIndex: 1200,
      }}
    >
      <audio ref={audioRef} src={currentTrack.audio} />

      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Track Info */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            flex={1}
            minWidth={0}
          >
            <Avatar
              src={currentTrack.image}
              alt={currentTrack.name}
              variant="rounded"
              sx={{
                width: 56,
                height: 56,
                boxShadow: 3,
              }}
            />
            <Box sx={{ minWidth: 0 }}>
              <Typography noWrap fontWeight={500} fontSize="0.875rem">
                {currentTrack.name}
              </Typography>
              <Typography noWrap fontSize="0.75rem" color="grey.500">
                {currentTrack.artist_name}
              </Typography>
            </Box>
          </Stack>

          {/* Controls */}
          <Stack spacing={1} alignItems="center" flex={1}>
            <Stack direction="row" spacing={3} alignItems="center">
              <IconArrowsShuffle
                size={20}
                style={{ color: "#9ca3af", cursor: "pointer" }}
              />
              <IconPlayerSkipBack
                size={20}
                style={{ color: "#9ca3af", cursor: "pointer" }}
              />
              {isPlaying ? (
                <IconPlayerPauseFilled
                  size={40}
                  style={{
                    color: "white",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                  }}
                  onClick={() => setIsPlaying(false)}
                />
              ) : (
                <IconPlayerPlayFilled
                  size={40}
                  style={{
                    color: "white",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                  }}
                  onClick={() => setIsPlaying(true)}
                />
              )}
              <IconPlayerSkipForward
                size={20}
                style={{ color: "#9ca3af", cursor: "pointer" }}
              />
              <IconRepeat
                size={20}
                style={{ color: "#9ca3af", cursor: "pointer" }}
              />
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              width="100%"
              maxWidth={400}
            >
              <Typography fontSize="0.75rem" color="grey.500">
                0:00
              </Typography>
              <Slider
                size="small"
                value={0}
                aria-label="Progress"
                sx={{
                  color: "success.main",
                  flexGrow: 1,
                }}
              />
              <Typography fontSize="0.75rem" color="grey.500">
                3:45
              </Typography>
            </Stack>
          </Stack>

          {/* Volume */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            flex={1}
            justifyContent="flex-end"
          >
            <IconVolume size={20} style={{ color: "#9ca3af" }} />
            <Slider
              size="small"
              value={volume * 100}
              onChange={(_, value) => setVolume(Number(value) / 100)}
              aria-label="Volume"
              sx={{ width: 96 }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
