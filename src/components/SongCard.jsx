import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ContinuousSlider from "./ui/VolumeControls";

export default function SongCard({
  albumArt,
  artistName,
  songName,
  playAudio,
}) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flex: "1",
        width: "100%",
        padding: "0",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0",
      }}
    >
      {albumArt ? (
        <CardMedia
          sx={{ maxHeight: "10rem", maxWidth: "10rem" }}
          component="img"
          src={albumArt}
          alt="Album art"
        />
      ) : null}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {songName}{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            {artistName}{" "}
          </Typography>
        </CardContent>

        <ContinuousSlider />
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={playAudio}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
