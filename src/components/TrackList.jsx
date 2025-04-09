import React from "react";
import {
  Box,
  Stack,
  Typography,
  Avatar,
  Container,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import { IconPlayerPlayFilled, IconClock } from "@tabler/icons-react";
import { usePlayerStore } from "../store/playerStore";

export const TrackList = () => {
  const { setTrack, setIsPlaying } = usePlayerStore();

  const tracks = [
    {
      id: "1",
      name: "Bohemian Rhapsody",
      artist_name: "Queen",
      duration: 354,
      image:
        "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400&q=80",
    },
    {
      id: "2",
      name: "Stairway to Heaven",
      artist_name: "Led Zeppelin",
      duration: 482,
      image:
        "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&q=80",
    },
    {
      id: "3",
      name: "Hotel California",
      artist_name: "Eagles",
      duration: 391,
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
    },
  ];

  const handlePlay = (track) => {
    setTrack(track);
    setIsPlaying(true);
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        p: 4,
        minHeight: "100vh",
        minWidth: "100vh",
        bgcolor: "background.paper",
        background: "linear-gradient(to bottom, #111827, #000000)",
        color: "white",
        height: "100%",
        width: "100%",
      }}
    >
      <Container width="100%">
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Popular Tracks
        </Typography>

        {/* Table header */}
        <Box
          sx={{
            borderBottom: "1px solid #1f2937",
            pb: 1,
            mb: 2,
            px: 2,
            color: "grey.500",
          }}
        >
          <Grid container spacing={2} sx={{ fontSize: "0.875rem" }}>
            <Grid item xs={0.5}>
              <Typography>#</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>TITLE</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>ARTIST</Typography>
            </Grid>
            <Grid item xs={4} display="flex" justifyContent="flex-end">
              <IconClock size={16} />
            </Grid>
          </Grid>
        </Box>

        <Stack spacing={1.5}>
          {tracks.map((track, index) => (
            <Paper
              key={track.id}
              elevation={0}
              sx={{
                bgcolor: "transparent",
                px: 2,
                py: 1.5,
                borderRadius: 2,
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              <Grid container alignItems="center" spacing={2}>
                {/* Index or play button */}
                <Grid item xs={0.5}>
                  <Box
                    sx={{
                      color: "grey.500",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        display: "inline-block",
                        ".MuiPaper-root:hover &": {
                          display: "none",
                        },
                      }}
                    >
                      {index + 1}
                    </Typography>
                    <IconButton
                      onClick={() => handlePlay(track)}
                      sx={{
                        color: "white",
                        display: "none",
                        padding: 0,
                        "&:hover": { color: "primary.main" },
                        ".MuiPaper-root:hover &": {
                          display: "inline-flex",
                        },
                      }}
                    >
                      <IconPlayerPlayFilled size={20} />
                    </IconButton>
                  </Box>
                </Grid>

                {/* Title + image */}
                <Grid item xs={4}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                      src={track.image}
                      alt={track.name}
                      variant="rounded"
                      sx={{ width: 48, height: 48 }}
                    />
                    <Typography fontWeight={500} color="grey.500">
                      {track.name}
                    </Typography>
                  </Stack>
                </Grid>

                {/* Artist */}
                <Grid item xs={3}>
                  <Typography color="grey.500">{track.artist_name}</Typography>
                </Grid>

                {/* Duration */}
                <Grid item xs={4}>
                  <Typography align="right" color="grey.500">
                    {formatDuration(track.duration)}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
